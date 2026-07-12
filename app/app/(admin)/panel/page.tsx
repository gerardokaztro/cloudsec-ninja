import { redirect } from "next/navigation";
import { hasAdminGroup } from "@/lib/auth/admin";
import { getFreshCognitoAccessToken } from "@/lib/auth/cognito-tokens";
import { getSession } from "@/lib/auth/session";
import { fetchCurriculum } from "@/lib/curriculum/api";
import { AdminPanel } from "./components/admin-panel";

export default async function AdminPanelPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  // Chequeo de UX: la seguridad real la garantiza el authorizer JWT + el
  // check de cognito:groups que hace curriculum-admin-write-prod en cada
  // POST /admin/*. Esto solo evita mostrar la opción a quien no es admin.
  const accessToken = await getFreshCognitoAccessToken();
  if (!accessToken) {
    redirect("/login");
  }
  if (!hasAdminGroup(accessToken)) {
    redirect("/dashboard");
  }

  const result = await fetchCurriculum();

  return (
    <main className="min-h-screen bg-bg">
      <div className="mx-auto max-w-[860px] px-8 py-10">
        <p className="text-xs text-ink-3">Panel de administración</p>
        <h1 className="mt-1 mb-6 font-display text-2xl font-semibold text-ink">Currículum</h1>

        {result.ok ? (
          <AdminPanel initialModules={result.modules} />
        ) : (
          <p className="rounded-xl border border-border bg-surface p-6 text-center text-sm text-ink-3">
            No se pudo cargar el currículum. Intenta recargar la página.
          </p>
        )}
      </div>
    </main>
  );
}
