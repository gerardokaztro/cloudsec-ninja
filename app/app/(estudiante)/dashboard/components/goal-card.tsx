import type { GoalView } from "@/lib/progress/view-model";

const RADIUS = 27;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function GoalRing({ percent }: { percent: number }) {
  const offset = CIRCUMFERENCE * (1 - percent / 100);

  return (
    <div className="relative h-16 w-16">
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
        <circle cx="32" cy="32" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" />
        <circle
          cx="32"
          cy="32"
          r={RADIUS}
          fill="none"
          stroke="#1E9E80"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-[13px] font-semibold text-white">
        {percent}%
      </span>
    </div>
  );
}

export function GoalCard({ goal }: { goal: GoalView }) {
  return (
    <div
      className="mb-8 flex items-center justify-between rounded-2xl px-7 py-[26px] text-white"
      style={{ background: "linear-gradient(135deg, #0D1613, #152520)" }}
    >
      <div>
        <p className="text-xs text-white/60">Siguiente meta</p>
        <p className="mt-1 font-display text-xl font-semibold">Termina {goal.moduleTitle}</p>
      </div>
      <GoalRing percent={goal.percent} />
    </div>
  );
}
