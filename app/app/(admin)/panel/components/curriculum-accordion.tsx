"use client";

import { useState } from "react";
import type { AdminCurriculumLesson, AdminCurriculumModule } from "@/lib/curriculum/api";
import { CreateLessonForm } from "./create-lesson-form";
import { ChevronIcon, PlusIcon } from "./icons";

function ModuleCard({
  module,
  onLessonCreated,
}: {
  module: AdminCurriculumModule;
  onLessonCreated: (moduleId: string, lesson: AdminCurriculumLesson) => void;
}) {
  const [open, setOpen] = useState(false);
  const [addingLesson, setAddingLesson] = useState(false);

  return (
    <div className={`rounded-xl border bg-surface transition-colors ${open ? "border-accent" : "border-border"}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <p className="text-sm font-semibold text-ink">
            {module.order ?? "·"}. {module.title}
          </p>
          <p className="mt-0.5 text-[12px] text-ink-3">
            {module.lessons.length} lecciones{module.level ? ` · nivel ${module.level}` : ""} ·{" "}
            <span className="font-mono">{module.module_id}</span>
          </p>
        </div>
        <ChevronIcon className={`h-4.5 w-4.5 shrink-0 text-ink-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="border-t border-border px-5 pb-5 pt-3">
          {module.lessons.length > 0 ? (
            <ul className="mb-3 space-y-1.5">
              {module.lessons.map((lesson) => (
                <li key={lesson.lesson_id} className="flex items-center gap-2 py-1 text-[13.5px] text-ink-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {lesson.title}
                  <span className="font-mono text-[11px] text-ink-3">({lesson.lesson_id})</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-3 text-[13px] text-ink-3 italic">Este módulo todavía no tiene lecciones.</p>
          )}

          {addingLesson ? (
            <CreateLessonForm
              moduleId={module.module_id}
              onCreated={(lesson) => {
                onLessonCreated(module.module_id, lesson);
                setAddingLesson(false);
              }}
              onCancel={() => setAddingLesson(false)}
            />
          ) : (
            <button
              type="button"
              onClick={() => setAddingLesson(true)}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent-dark"
            >
              <PlusIcon className="h-3.5 w-3.5" />
              Agregar lección
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

export function CurriculumAccordion({
  modules,
  onLessonCreated,
}: {
  modules: AdminCurriculumModule[];
  onLessonCreated: (moduleId: string, lesson: AdminCurriculumLesson) => void;
}) {
  if (modules.length === 0) {
    return <p className="rounded-xl border border-border bg-surface p-6 text-center text-sm text-ink-3">Todavía no hay módulos — crea el primero arriba.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {modules.map((module) => (
        <ModuleCard key={module.module_id} module={module} onLessonCreated={onLessonCreated} />
      ))}
    </div>
  );
}
