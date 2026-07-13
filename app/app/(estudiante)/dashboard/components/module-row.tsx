"use client";

import { useState } from "react";
import type { LessonView, ModuleView } from "@/lib/progress/view-model";
import { CheckIcon, ChevronIcon, LockIcon } from "./icons";

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
  if (module.totalLessons === 0) {
    return "Sin lecciones todavía";
  }
  return `${module.completedLessons} de ${module.totalLessons} lecciones`;
}

function ModuleAction({ module }: { module: ModuleView }) {
  if (module.status === "completed") {
    return <span className="text-xs font-semibold text-accent-dark">Completado</span>;
  }
  if (module.status === "locked") {
    return <span className="text-xs text-ink-3">Bloqueado</span>;
  }
  if (!module.nextLessonId) {
    // Módulo activo pero sin lecciones publicadas todavía — no hay a
    // dónde enlazar, así que no se muestra un botón roto.
    return <span className="text-xs text-ink-3">Sin lecciones</span>;
  }
  return (
    <a
      href={`/lecciones/${module.id}/${module.nextLessonId}`}
      className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#04231a] transition-colors hover:bg-accent-hover"
    >
      {module.completedLessons === 0 ? "Empezar" : "Continuar"}
    </a>
  );
}

function LessonRow({ moduleId, lesson }: { moduleId: string; lesson: LessonView }) {
  if (lesson.status === "locked") {
    return (
      <div className="flex cursor-not-allowed items-center gap-2.5 rounded-lg px-2.5 py-2 opacity-60">
        <LockIcon className="h-3.5 w-3.5 shrink-0 text-ink-3" />
        <span className="text-[13px] text-ink-3">{lesson.title}</span>
      </div>
    );
  }

  const isCompleted = lesson.status === "completed";
  return (
    <a
      href={`/lecciones/${moduleId}/${lesson.id}`}
      className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-surface-2 ${
        isCompleted ? "" : "bg-accent-soft"
      }`}
    >
      {isCompleted ? (
        <CheckIcon className="h-3.5 w-3.5 shrink-0 text-accent-dark" />
      ) : (
        <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
      )}
      <span className={`text-[13px] ${isCompleted ? "text-ink-2" : "font-semibold text-accent-dark"}`}>
        {lesson.title}
      </span>
    </a>
  );
}

export function ModuleRow({ module }: { module: ModuleView }) {
  const [expanded, setExpanded] = useState(false);
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
        <div className="flex items-center gap-3">
          <ModuleAction module={module} />
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-label={expanded ? "Ocultar lecciones" : "Ver lecciones"}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink-2"
          >
            <ChevronIcon className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
      {isActive ? (
        <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-surface-2">
          <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${percent}%` }} />
        </div>
      ) : null}

      {expanded ? (
        <div className="mt-3 flex flex-col gap-0.5 border-t border-border pt-3">
          {module.lessons.length > 0 ? (
            module.lessons.map((lesson) => <LessonRow key={lesson.id} moduleId={module.id} lesson={lesson} />)
          ) : (
            <p className="px-2.5 py-2 text-[13px] text-ink-3 italic">Sin lecciones todavía.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
