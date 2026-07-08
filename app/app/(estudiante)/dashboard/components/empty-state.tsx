import { CURRICULUM, moduleDocsUrl } from "@/lib/progress/curriculum";
import { ShieldCheckIcon } from "./icons";

export function EmptyState() {
  // El módulo real más frecuente para empezar es "Bienvenida" (primero en
  // el temario); el CTA lleva directo a su landing page en el sitio de docs.
  const firstModule = CURRICULUM[0];

  return (
    <div className="flex flex-col items-center pt-16 pb-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft">
        <ShieldCheckIcon className="h-7 w-7 text-accent-dark" />
      </div>
      <h2 className="mt-6 font-display text-[22px] font-semibold text-ink">
        Todavía no empiezas ningún módulo
      </h2>
      <p className="mt-2 max-w-[380px] text-sm text-ink-2">
        Te recomendamos comenzar por {firstModule.title} — es el primer módulo del temario.
      </p>
      <a
        href={moduleDocsUrl(firstModule)}
        className="mt-6 rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-[#04231a] transition-colors hover:bg-accent-hover"
      >
        Empezar {firstModule.title}
      </a>
    </div>
  );
}
