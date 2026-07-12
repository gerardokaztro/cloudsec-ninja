import { getFreshCognitoAccessToken } from "@/lib/auth/cognito-tokens";
import { authEnv } from "@/lib/auth/env";

export interface AdminCurriculumLesson {
  lesson_id: string;
  title: string;
  order?: number;
  tags?: string[];
}

export interface AdminCurriculumModule {
  module_id: string;
  title: string;
  order?: number;
  level?: number;
  lessons: AdminCurriculumLesson[];
}

export type FetchCurriculumResult =
  | { ok: true; modules: AdminCurriculumModule[] }
  | { ok: false; reason: "api_error" };

/**
 * Llama a GET /curriculum (cloudsec-ninja-infra) — endpoint público, no
 * necesita el mecanismo de refresh_token/access_token de Cognito.
 */
export async function fetchCurriculum(): Promise<FetchCurriculumResult> {
  let response: Response;
  try {
    response = await fetch(`${authEnv.progressApiUrl}/curriculum`, { cache: "no-store" });
  } catch (error) {
    console.error("Error de red al llamar a GET /curriculum:", error);
    return { ok: false, reason: "api_error" };
  }

  if (!response.ok) {
    console.error(`GET /curriculum devolvió ${response.status}`);
    return { ok: false, reason: "api_error" };
  }

  const data = (await response.json()) as { modules: AdminCurriculumModule[] };
  return { ok: true, modules: data.modules };
}

export interface CreateModuleInput {
  module_id: string;
  title: string;
  order?: number;
  level?: number;
}

export interface CreateLessonInput {
  module_id: string;
  lesson_id: string;
  title: string;
  order?: number;
  content_markdown?: string;
  tags?: string[];
}

export type AdminWriteResult =
  | { ok: true }
  | { ok: false; reason: "unauthenticated" | "forbidden" | "api_error"; message?: string };

/**
 * POST genérico contra los endpoints /admin/curriculum/* (requieren rol
 * admin — el authorizer JWT + la Lambda verifican cognito:groups, este
 * cliente solo manda el access_token fresco, no duplica esa verificación).
 */
async function postAdminCurriculum(path: string, body: unknown): Promise<AdminWriteResult> {
  const accessToken = await getFreshCognitoAccessToken();
  if (!accessToken) {
    return { ok: false, reason: "unauthenticated" };
  }

  let response: Response;
  try {
    response = await fetch(`${authEnv.progressApiUrl}${path}`, {
      method: "POST",
      headers: { Authorization: accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
  } catch (error) {
    console.error(`Error de red al llamar a POST ${path}:`, error);
    return { ok: false, reason: "api_error" };
  }

  if (response.status === 401) {
    return { ok: false, reason: "unauthenticated" };
  }
  if (response.status === 403) {
    return { ok: false, reason: "forbidden" };
  }
  if (!response.ok) {
    const message = await response.text().catch(() => undefined);
    console.error(`POST ${path} devolvió ${response.status}: ${message}`);
    return { ok: false, reason: "api_error", message };
  }

  return { ok: true };
}

export function createModule(input: CreateModuleInput): Promise<AdminWriteResult> {
  return postAdminCurriculum("/admin/curriculum/modules", input);
}

export function createLesson(input: CreateLessonInput): Promise<AdminWriteResult> {
  return postAdminCurriculum("/admin/curriculum/lessons", input);
}
