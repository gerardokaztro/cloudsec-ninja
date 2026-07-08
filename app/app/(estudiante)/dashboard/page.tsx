import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { fetchProgress } from "@/lib/progress/api";
import { buildDashboardView } from "@/lib/progress/view-model";
import { ApiErrorNotice } from "./components/api-error-notice";
import { DashboardHero } from "./components/dashboard-hero";
import { EmptyState } from "./components/empty-state";
import { GoalCard } from "./components/goal-card";
import { ModuleList } from "./components/module-list";
import { StatRow } from "./components/stat-row";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  const result = await fetchProgress();
  if (!result.ok && result.reason === "unauthenticated") {
    // No hay (o Cognito rechazó) el refresh_token guardado en /callback:
    // no podemos llamar a la API de progreso con esta sesión. Manda a
    // /login para reautenticar contra Cognito y obtener uno nuevo.
    redirect("/login");
  }

  const view = result.ok ? buildDashboardView(result.items) : null;

  return (
    <main className="min-h-screen bg-bg">
      <DashboardHero email={session.email} isFirstVisit={Boolean(view?.isEmpty)} />
      <div className="mx-auto -mt-7 max-w-[960px] px-8 pb-16">
        {!view ? (
          <ApiErrorNotice />
        ) : view.isEmpty ? (
          <EmptyState />
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
