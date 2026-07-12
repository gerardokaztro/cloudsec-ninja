import { NextResponse } from "next/server";
import { createModule } from "@/lib/curriculum/api";

export async function POST(request: Request) {
  let body: { module_id?: unknown; title?: unknown; order?: unknown; level?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (typeof body.module_id !== "string" || typeof body.title !== "string") {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const result = await createModule({
    module_id: body.module_id,
    title: body.title,
    order: typeof body.order === "number" ? body.order : undefined,
    level: typeof body.level === "number" ? body.level : undefined,
  });

  if (!result.ok) {
    const status = result.reason === "unauthenticated" ? 401 : result.reason === "forbidden" ? 403 : 502;
    return NextResponse.json({ error: result.reason, message: result.message }, { status });
  }

  return NextResponse.json({ ok: true });
}
