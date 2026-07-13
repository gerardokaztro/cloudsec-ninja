import { getSession } from "@/lib/auth/session";
import { fetchCurriculum } from "@/lib/curriculum/api";
import { ApiErrorNotice } from "./components/api-error-notice";
import { EmptyCurriculumNotice } from "./components/empty-curriculum-notice";
import { TemarioExplorer } from "./components/temario-explorer";

export default async function TemarioPage() {
  // /temario es pública: no hay redirect si no hay sesión. getSession()
  // solo se usa para decidir a dónde manda el CTA final.
  const [session, result] = await Promise.all([getSession(), fetchCurriculum()]);
  const ctaHref = session ? "/dashboard" : "/login";

  return (
    <main className="min-h-screen bg-bg">
      <div className="mx-auto max-w-[820px] px-8 py-14">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">Explora antes de empezar</p>
          <h1 className="mt-2 font-display text-[26px] font-semibold text-ink">Temario completo</h1>
          <p className="mt-2 text-sm text-ink-2">
            Público, sin necesidad de cuenta. Crea la tuya cuando quieras guardar tu progreso.
          </p>
        </div>

        {!result.ok ? (
          <ApiErrorNotice />
        ) : result.modules.length === 0 ? (
          <EmptyCurriculumNotice />
        ) : (
          <TemarioExplorer modules={result.modules} />
        )}

        <div className="mt-10 text-center">
          <a
            href={ctaHref}
            className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-[#04231a] transition-colors hover:bg-accent-hover"
          >
            Empezar mi ruta
          </a>
        </div>
      </div>
    </main>
  );
}
