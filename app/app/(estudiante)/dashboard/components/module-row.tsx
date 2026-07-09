import { moduleDocsUrl } from "@/lib/progress/curriculum";
import type { ModuleView } from "@/lib/progress/view-model";
import { CheckIcon, LockIcon } from "./icons";

function StatusIcon({ status }: { status: ModuleView["status"] }) {
  if (status === "completed") {
    return (
      <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-accent-soft">
        <CheckIcon className="h-3.5 w-3.5 text-accent-dark" />
      </div>
    );
  }
  if (status === "locked") {
    return (
      <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-[1.5px] border-ink-3">
        <LockIcon className="h-3 w-3 text-ink-3" />
      </div>
    );
  }
  // in_progress / not_started: el módulo "activo" — círculo resaltado sin ícono.
  return <div className="h-[26px] w-[26px] rounded-full border-2 border-accent bg-accent-soft" />;
}

function metaText(module: ModuleView): string {
  if (module.status === "locked") {
    return "Se desbloquea al completar el anterior";
  }
  return `${module.completedLessons} de ${module.totalLessons} lecciones`;
}

// Único módulo con una lección real construida en la app (S2-03) — el
// resto sigue enlazando al sitio de docs hasta que tengan su propia página.
const MODULE_ID_WITH_LESSON_PAGE = "gestion-de-identidad-y-accesos";
const LESSON_PAGE_HREF = "/lecciones/identity-center";

function ModuleAction({ module }: { module: ModuleView }) {
  if (module.status === "completed") {
    return <span className="text-xs font-semibold text-accent-dark">Completado</span>;
  }
  if (module.status === "locked") {
    return <span className="text-xs text-ink-3">Bloqueado</span>;
  }
  const href = module.id === MODULE_ID_WITH_LESSON_PAGE ? LESSON_PAGE_HREF : moduleDocsUrl(module);
  return (
    <a
      href={href}
      className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#04231a] transition-colors hover:bg-accent-hover"
    >
      {module.completedLessons === 0 ? "Empezar" : "Continuar"}
    </a>
  );
}

export function ModuleRow({ module }: { module: ModuleView }) {
  const isActive = module.status === "in_progress" || module.status === "not_started";
  const percent = module.totalLessons === 0 ? 0 : Math.round((module.completedLessons / module.totalLessons) * 100);

  return (
    <div
      className={`rounded-xl border bg-surface px-5 py-4 transition-colors ${
        isActive ? "border-2 border-accent" : "border-border"
      } ${module.status === "locked" ? "opacity-50" : ""}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <StatusIcon status={module.status} />
          <div>
            <p className="text-sm font-semibold text-ink">{module.title}</p>
            <p className="mt-0.5 text-[11.5px] text-ink-3">{metaText(module)}</p>
          </div>
        </div>
        <ModuleAction module={module} />
      </div>
      {isActive ? (
        <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-surface-2">
          <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${percent}%` }} />
        </div>
      ) : null}
    </div>
  );
}
