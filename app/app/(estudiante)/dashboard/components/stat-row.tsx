import type { DashboardView } from "@/lib/progress/view-model";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[14px] border border-border bg-surface px-[22px] py-5 shadow-[0_4px_18px_rgba(13,22,19,0.05)]">
      <p className="font-display text-[26px] font-semibold text-ink">{value}</p>
      <p className="mt-1 text-xs text-ink-3">{label}</p>
    </div>
  );
}

export function StatRow({ view }: { view: DashboardView }) {
  return (
    <div className="mb-7 grid grid-cols-3 gap-3.5">
      <StatCard value={`${view.overallPercent}%`} label="Progreso general" />
      <StatCard value={String(view.inProgressModulesCount)} label="Módulos en curso" />
      <StatCard
        value={`${view.completedModulesCount}/${view.totalModulesCount}`}
        label="Módulos completados"
      />
    </div>
  );
}
