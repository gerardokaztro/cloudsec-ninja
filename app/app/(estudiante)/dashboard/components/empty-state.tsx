import type { ModuleView } from "@/lib/progress/view-model";
import { ShieldCheckIcon } from "./icons";

export function EmptyState({ firstActionableModule }: { firstActionableModule: ModuleView | null }) {
  return (
    <div className="flex flex-col items-center pt-16 pb-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft">
        <ShieldCheckIcon className="h-7 w-7 text-accent-dark" />
      </div>
      <h2 className="mt-6 font-display text-[22px] font-semibold text-ink">
        Todavía no empiezas ningún módulo
      </h2>
      {firstActionableModule && firstActionableModule.nextLessonId ? (
        <>
          <p className="mt-2 max-w-[380px] text-sm text-ink-2">
            Te recomendamos comenzar por {firstActionableModule.title} — es el primer módulo del temario.
          </p>
          <a
            href={`/lecciones/${firstActionableModule.id}/${firstActionableModule.nextLessonId}`}
            className="mt-6 rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-[#04231a] transition-colors hover:bg-accent-hover"
          >
            Empezar {firstActionableModule.title}
          </a>
        </>
      ) : (
        <p className="mt-2 max-w-[380px] text-sm text-ink-2">
          Todavía no hay lecciones publicadas en ningún módulo — vuelve pronto.
        </p>
      )}
    </div>
  );
}
