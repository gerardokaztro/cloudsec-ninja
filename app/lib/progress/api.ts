import { getFreshCognitoAccessToken } from "@/lib/auth/cognito-tokens";
import { authEnv } from "@/lib/auth/env";

export interface ProgressItem {
  module_id: string;
  lesson_id: string;
  status: "not_started" | "in_progress" | "completed";
  completed_at: number | null;
  last_accessed_at: number | null;
}

export type ProgressResult =
  | { ok: true; items: ProgressItem[] }
  | { ok: false; reason: "unauthenticated" | "api_error" };

/**
 * Llama a GET /progress (cloudsec-ninja-infra) con un access_token fresco
 * de Cognito. "unauthenticated" cubre tanto la ausencia de refresh_token
 * como su rechazo por Cognito (revocado/expirado) o un 401 del authorizer
 * de API Gateway — en los tres casos el caller debe tratar la sesión como
 * inválida y mandar a /login. "api_error" es cualquier otra falla (red,
 * 5xx) que no implica que la sesión sea inválida.
 */
export async function fetchProgress(): Promise<ProgressResult> {
  const accessToken = await getFreshCognitoAccessToken();
  if (!accessToken) {
    return { ok: false, reason: "unauthenticated" };
  }

  let response: Response;
  try {
    response = await fetch(`${authEnv.progressApiUrl}/progress`, {
      headers: { Authorization: accessToken },
      cache: "no-store",
    });
  } catch (error) {
    console.error("Error de red al llamar a GET /progress:", error);
    return { ok: false, reason: "api_error" };
  }

  if (response.status === 401) {
    return { ok: false, reason: "unauthenticated" };
  }
  if (!response.ok) {
    console.error(`GET /progress devolvió ${response.status}`);
    return { ok: false, reason: "api_error" };
  }

  const data = (await response.json()) as { progress: ProgressItem[] };
  return { ok: true, items: data.progress };
}

export type MarkLessonCompleteResult = { ok: true } | { ok: false; reason: "unauthenticated" | "api_error" };

/**
 * Llama a POST /progress (cloudsec-ninja-infra) para marcar una lección
 * como completada. El endpoint solo acepta {module_id, lesson_id} — no es
 * un update genérico de status, siempre marca "completed" y calcula los
 * timestamps del lado del servidor.
 */
export async function markLessonComplete(moduleId: string, lessonId: string): Promise<MarkLessonCompleteResult> {
  const accessToken = await getFreshCognitoAccessToken();
  if (!accessToken) {
    return { ok: false, reason: "unauthenticated" };
  }

  let response: Response;
  try {
    response = await fetch(`${authEnv.progressApiUrl}/progress`, {
      method: "POST",
      headers: { Authorization: accessToken, "Content-Type": "application/json" },
      body: JSON.stringify({ module_id: moduleId, lesson_id: lessonId }),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Error de red al llamar a POST /progress:", error);
    return { ok: false, reason: "api_error" };
  }

  if (response.status === 401) {
    return { ok: false, reason: "unauthenticated" };
  }
  if (!response.ok) {
    console.error(`POST /progress devolvió ${response.status}`);
    return { ok: false, reason: "api_error" };
  }

  return { ok: true };
}
