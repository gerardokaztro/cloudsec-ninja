import Link from "next/link";
import { redirect } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { getSession } from "@/lib/auth/session";
import { fetchCurriculum, fetchLesson } from "@/lib/curriculum/api";
import { fetchProgress } from "@/lib/progress/api";
import { CheckIcon } from "./components/icons";
import { CompleteLessonButton } from "./components/complete-lesson-button";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>;
}) {
  const { moduleId, lessonId } = await params;

  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  // GET /curriculum y GET /curriculum/{moduleId}/{lessonId} son públicos
  // (no necesitan el refresh_token) y no dependen uno del otro. GET
  // /progress sí lo necesita — si falla (token vencido, red, etc.) no
  // bloqueamos el contenido público: se asume "no completada todavía" y
  // se muestra el botón activo, cuyo propio manejo de error ya cubre un
  // fallo real al hacer clic.
  const [lessonResult, curriculumResult, progressResult] = await Promise.all([
    fetchLesson(moduleId, lessonId),
    fetchCurriculum(),
    fetchProgress(),
  ]);

  if (!lessonResult.ok) {
    return (
      <main className="min-h-screen bg-bg">
        <div className="mx-auto max-w-[600px] px-8 py-16 text-center">
          <h1 className="font-display text-xl font-semibold text-ink">
            {lessonResult.reason === "not_found" ? "Lección no encontrada" : "No se pudo cargar la lección"}
          </h1>
          <p className="mt-2 text-sm text-ink-2">
            {lessonResult.reason === "not_found"
              ? "El módulo o la lección que buscas no existen, o ya no están publicados."
              : "Hubo un problema de red o del servidor. Intenta de nuevo en unos segundos."}
          </p>
          <Link href="/dashboard" className="mt-6 inline-block text-sm font-semibold text-accent-dark hover:underline">
            ← Volver al dashboard
          </Link>
        </div>
      </main>
    );
  }

  const lesson = lessonResult.lesson;
  const module = curriculumResult.ok ? curriculumResult.modules.find((m) => m.module_id === moduleId) : undefined;
  const alreadyCompleted =
    progressResult.ok &&
    progressResult.items.some(
      (item) => item.module_id === moduleId && item.lesson_id === lessonId && item.status === "completed",
    );

  return (
    <main className="min-h-screen bg-bg">
      <div className="mx-auto max-w-[820px] px-8 py-10">
        <Link href="/dashboard" className="text-xs font-medium text-ink-3 hover:text-ink-2">
          ← Volver al dashboard
        </Link>

        <p className="mt-5 text-xs text-ink-3">
          {module?.title ?? moduleId} / {lesson.title}
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-ink">{lesson.title}</h1>

        {lesson.tags.length > 0 || module?.level ? (
          <div className="mt-3 mb-6 flex flex-wrap gap-1.5">
            {module?.level ? (
              <span className="rounded-md bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent-dark">
                nivel {module.level}
              </span>
            ) : null}
            {lesson.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-surface-2 px-2.5 py-1 text-[11px] text-ink-2">
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <div className="mb-6" />
        )}

        <MarkdownContent markdown={lesson.content_markdown} />

        <div className="mt-8">
          {alreadyCompleted ? (
            <div className="flex w-fit items-center gap-2 rounded-lg bg-accent-soft px-5 py-3 text-sm font-semibold text-accent-dark">
              <CheckIcon className="h-4 w-4" />
              Ya completaste esta lección
            </div>
          ) : (
            <CompleteLessonButton moduleId={moduleId} lessonId={lessonId} />
          )}
        </div>
      </div>
    </main>
  );
}
