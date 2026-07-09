import { NextResponse } from "next/server";
import { markLessonComplete } from "@/lib/progress/api";

/**
 * Proxy delgado hacia POST /progress (cloudsec-ninja-infra): existe porque
 * el access_token de Cognito solo se puede obtener leyendo la cookie
 * httpOnly cs_cognito_rt, y eso solo es posible en un contexto de servidor
 * (no en el componente cliente que dispara el botón "Completar lección").
 */
export async function POST(request: Request) {
  let body: { module_id?: unknown; lesson_id?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (typeof body.module_id !== "string" || typeof body.lesson_id !== "string") {
    return NextResponse.json({ error: "missing_ids" }, { status: 400 });
  }

  const result = await markLessonComplete(body.module_id, body.lesson_id);
  if (!result.ok) {
    const status = result.reason === "unauthenticated" ? 401 : 502;
    return NextResponse.json({ error: result.reason }, { status });
  }

  return NextResponse.json({ ok: true });
}
