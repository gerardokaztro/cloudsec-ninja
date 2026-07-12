import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { fetchCurriculum } from "@/lib/curriculum/api";
import { fetchProgress } from "@/lib/progress/api";
import { buildDashboardView } from "@/lib/progress/view-model";
import { ApiErrorNotice } from "./components/api-error-notice";
import { DashboardHero } from "./components/dashboard-hero";
import { EmptyCurriculumNotice } from "./components/empty-curriculum-notice";
import { EmptyState } from "./components/empty-state";
import { GoalCard } from "./components/goal-card";
import { ModuleList } from "./components/module-list";
import { StatRow } from "./components/stat-row";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  // GET /curriculum es público (no necesita el refresh_token), así que se
  // puede pedir en paralelo con GET /progress sin depender uno del otro.
  const [progressResult, curriculumResult] = await Promise.all([fetchProgress(), fetchCurriculum()]);

  if (!progressResult.ok && progressResult.reason === "unauthenticated") {
    // No hay (o Cognito rechazó) el refresh_token guardado en /callback:
    // no podemos llamar a la API de progreso con esta sesión. Manda a
    // /login para reautenticar contra Cognito y obtener uno nuevo.
    redirect("/login");
  }

  const view =
    progressResult.ok && curriculumResult.ok ? buildDashboardView(curriculumResult.modules, progressResult.items) : null;

  return (
    <main className="min-h-screen bg-bg">
      <DashboardHero email={session.email} isFirstVisit={Boolean(view?.isEmpty)} />
      <div className="mx-auto -mt-7 max-w-[960px] px-8 pb-16">
        {!view ? (
          <ApiErrorNotice />
        ) : view.totalModulesCount === 0 ? (
          <EmptyCurriculumNotice />
        ) : view.isEmpty ? (
          <EmptyState firstActionableModule={view.modules.find((module) => module.totalLessons > 0) ?? null} />
        ) : (
          <>
            <StatRow view={view} />
            {view.goal ? <GoalCard goal={view.goal} /> : null}
            <ModuleList modules={view.modules} />
          </>
        )}
      </div>
    </main>
  );
}
