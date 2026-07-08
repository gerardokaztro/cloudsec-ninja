export function DashboardHero({ email, isFirstVisit }: { email: string; isFirstVisit: boolean }) {
  return (
    <header className="bg-ink px-8 pt-9 pb-8">
      <div className="mx-auto flex max-w-[960px] items-end justify-between">
        <div>
          <p className="text-xs text-white/60">
            {isFirstVisit ? "Bienvenido a CloudSec Ninja" : "Bienvenido de vuelta"}
          </p>
          <p className="mt-1 font-display text-[22px] font-semibold text-white">{email}</p>
        </div>
        <a
          href="/logout"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          Salir
        </a>
      </div>
    </header>
  );
}
