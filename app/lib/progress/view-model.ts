import { CURRICULUM } from "./curriculum";
import type { ProgressItem } from "./api";

export type ModuleStatus = "completed" | "in_progress" | "locked" | "not_started";

export interface ModuleView {
  id: string;
  title: string;
  docsPath: string;
  totalLessons: number;
  completedLessons: number;
  status: ModuleStatus;
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

/**
 * Deriva el estado del dashboard a partir del progreso real (S2-01/S2-02)
 * cruzado con el temario hardcodeado (CURRICULUM). Los módulos se
 * desbloquean en orden: un módulo está "locked" si el anterior en
 * CURRICULUM no está 100% completado. El primer módulo nunca está locked.
 */
export function buildDashboardView(items: ProgressItem[]): DashboardView {
  const totalLessons = CURRICULUM.reduce((sum, m) => sum + m.lessons.length, 0);

  let previousModuleCompleted = true;
  const modules: ModuleView[] = CURRICULUM.map((module) => {
    const moduleItems = items.filter((item) => item.module_id === module.id);
    const completedLessons = moduleItems.filter((item) => item.status === "completed").length;
    const totalModuleLessons = module.lessons.length;
    const fullyCompleted = totalModuleLessons > 0 && completedLessons === totalModuleLessons;

    let status: ModuleStatus;
    if (fullyCompleted) {
      status = "completed";
    } else if (!previousModuleCompleted) {
      status = "locked";
    } else if (completedLessons > 0 || moduleItems.length > 0) {
      status = "in_progress";
    } else {
      status = "not_started";
    }

    previousModuleCompleted = fullyCompleted;

    return {
      id: module.id,
      title: module.title,
      docsPath: module.docsPath,
      totalLessons: totalModuleLessons,
      completedLessons,
      status,
    };
  });

  const completedModulesCount = modules.filter((m) => m.status === "completed").length;
  const inProgressModulesCount = modules.filter((m) => m.status === "in_progress").length;

  const currentModule = modules.find((m) => m.status === "in_progress" || m.status === "not_started");
  const goal: GoalView | null = currentModule
    ? {
        moduleTitle: currentModule.title,
        percent:
          currentModule.totalLessons === 0
            ? 0
            : Math.round((currentModule.completedLessons / currentModule.totalLessons) * 100),
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
