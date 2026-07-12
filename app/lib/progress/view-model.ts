import type { AdminCurriculumModule } from "@/lib/curriculum/api";
import type { ProgressItem } from "./api";

export type ModuleStatus = "completed" | "in_progress" | "locked" | "not_started";
export type LessonStatus = "completed" | "available" | "locked";

export interface LessonView {
  id: string;
  title: string;
  status: LessonStatus;
}

export interface ModuleView {
  id: string;
  title: string;
  totalLessons: number;
  completedLessons: number;
  status: ModuleStatus;
  /** Lección a la que debe apuntar "Empezar"/"Continuar" — null si el módulo no tiene lecciones. */
  nextLessonId: string | null;
  lessons: LessonView[];
}

export interface GoalView {
  moduleTitle: string;
  percent: number;
}

export interface DashboardView {
  isEmpty: boolean;
  overallPercent: number;
  inProgressModulesCount: number;
  completedModulesCount: number;
  totalModulesCount: number;
  modules: ModuleView[];
  goal: GoalView | null;
}

function sortByOrder<T extends { order?: number | null }>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

/**
 * Deriva el estado del dashboard a partir del progreso real (S2-01/S2-02)
 * cruzado con el currículum real (GET /curriculum, S2-04c) — antes venía
 * de una lista hardcodeada de 8 módulos, ahora puede ser cualquier
 * cantidad, incluyendo cero. Los módulos se desbloquean en orden: un
 * módulo está "locked" si el anterior (por su campo `order`) no está
 * completo. Un módulo sin lecciones no cuenta como bloqueante para el
 * siguiente (no hay nada que completar ahí), pero tampoco se ofrece
 * como "meta" del goal card ni participa del CTA de EmptyState.
 */
export function buildDashboardView(curriculumModules: AdminCurriculumModule[], items: ProgressItem[]): DashboardView {
  const sortedModules = sortByOrder(curriculumModules);
  const totalLessons = sortedModules.reduce((sum, m) => sum + m.lessons.length, 0);

  let previousModulePassed = true;
  const modules: ModuleView[] = sortedModules.map((module) => {
    const moduleItems = items.filter((item) => item.module_id === module.module_id);
    const completedLessonIds = new Set(
      moduleItems.filter((item) => item.status === "completed").map((item) => item.lesson_id),
    );
    const sortedLessons = sortByOrder(module.lessons);
    const totalModuleLessons = sortedLessons.length;
    const completedLessons = sortedLessons.filter((lesson) => completedLessonIds.has(lesson.lesson_id)).length;
    const fullyCompleted = totalModuleLessons > 0 && completedLessons === totalModuleLessons;
    // Un módulo vacío no bloquea el desbloqueo del siguiente, aunque no
    // se muestre como "completed" (ver status más abajo).
    const passesForUnlock = totalModuleLessons === 0 || fullyCompleted;

    let status: ModuleStatus;
    if (fullyCompleted) {
      status = "completed";
    } else if (!previousModulePassed) {
      status = "locked";
    } else if (completedLessons > 0 || moduleItems.length > 0) {
      status = "in_progress";
    } else {
      status = "not_started";
    }

    previousModulePassed = passesForUnlock;

    // Estado por lección: completada (por progreso real, sin importar su
    // posición), la primera no completada en orden queda "available", y
    // el resto de las no completadas después de esa quedan "locked". Si
    // el módulo entero está locked, ninguna lección es accionable todavía
    // aunque individualmente "sería" la disponible.
    let availableAssigned = false;
    const lessons: LessonView[] = sortedLessons.map((lesson) => {
      const completedLesson = completedLessonIds.has(lesson.lesson_id);
      let lessonStatus: LessonStatus;
      if (status === "locked") {
        lessonStatus = "locked";
      } else if (completedLesson) {
        lessonStatus = "completed";
      } else if (!availableAssigned) {
        availableAssigned = true;
        lessonStatus = "available";
      } else {
        lessonStatus = "locked";
      }
      return { id: lesson.lesson_id, title: lesson.title, status: lessonStatus };
    });

    const nextLessonId = lessons.find((lesson) => lesson.status === "available")?.id ?? null;

    return {
      id: module.module_id,
      title: module.title,
      totalLessons: totalModuleLessons,
      completedLessons,
      status,
      nextLessonId,
      lessons,
    };
  });

  const completedModulesCount = modules.filter((m) => m.status === "completed").length;
  const inProgressModulesCount = modules.filter((m) => m.status === "in_progress").length;

  // Salta módulos sin lecciones para la meta del goal card — no tendría
  // ningún CTA accionable.
  const currentModule = modules.find(
    (m) => (m.status === "in_progress" || m.status === "not_started") && m.totalLessons > 0,
  );
  const goal: GoalView | null =
    currentModule && currentModule.nextLessonId
      ? {
          moduleTitle: currentModule.title,
          percent: Math.round((currentModule.completedLessons / currentModule.totalLessons) * 100),
        }
      : null;

  const totalCompletedLessons = modules.reduce((sum, m) => sum + m.completedLessons, 0);

  return {
    isEmpty: items.length === 0,
    overallPercent: totalLessons === 0 ? 0 : Math.round((totalCompletedLessons / totalLessons) * 100),
    inProgressModulesCount,
    completedModulesCount,
    totalModulesCount: modules.length,
    modules,
    goal,
  };
}
