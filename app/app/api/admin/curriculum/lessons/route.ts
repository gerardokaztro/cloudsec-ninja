import { NextResponse } from "next/server";
import { createLesson } from "@/lib/curriculum/api";

export async function POST(request: Request) {
  let body: {
    module_id?: unknown;
    lesson_id?: unknown;
    title?: unknown;
    order?: unknown;
    content_markdown?: unknown;
    tags?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (typeof body.module_id !== "string" || typeof body.lesson_id !== "string" || typeof body.title !== "string") {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const tags = Array.isArray(body.tags) ? body.tags.filter((tag): tag is string => typeof tag === "string") : undefined;

  const result = await createLesson({
    module_id: body.module_id,
    lesson_id: body.lesson_id,
    title: body.title,
    order: typeof body.order === "number" ? body.order : undefined,
    content_markdown: typeof body.content_markdown === "string" ? body.content_markdown : undefined,
    tags,
  });

  if (!result.ok) {
    const status = result.reason === "unauthenticated" ? 401 : result.reason === "forbidden" ? 403 : 502;
    return NextResponse.json({ error: result.reason, message: result.message }, { status });
  }

  return NextResponse.json({ ok: true });
}
