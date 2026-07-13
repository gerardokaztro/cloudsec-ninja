"use client";

import { useMemo, useState } from "react";
import type { AdminCurriculumLesson, AdminCurriculumModule } from "@/lib/curriculum/api";
import { ChevronIcon, SearchIcon } from "./icons";

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

function sortByOrder<T extends { order?: number | null }>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

function ModuleCard({ module, query }: { module: AdminCurriculumModule; query: string }) {
  const [manualOpen, setManualOpen] = useState<boolean | null>(null);

  const q = normalize(query);
  const lessons = useMemo(() => sortByOrder(module.lessons), [module.lessons]);
  const titleMatch = q !== "" && normalize(module.title).includes(q);
  const matchingLessonIds = useMemo(() => {
    if (q === "") return new Set<string>();
    return new Set(lessons.filter((lesson) => normalize(lesson.title).includes(q)).map((lesson) => lesson.lesson_id));
  }, [lessons, q]);

  // Cuando la búsqueda solo pega en lecciones (no en el título del módulo),
  // el módulo se abre automáticamente para que se vean los resultados —
  // mismo comportamiento validado en design-reference/mockup.html.
  const searchOpensThis = q !== "" && !titleMatch && matchingLessonIds.size > 0;
  const open = manualOpen ?? searchOpensThis;

  return (
    <div className={`rounded-xl border bg-surface transition-colors ${open ? "border-accent" : "border-border"}`}>
      <button
        type="button"
        onClick={() => setManualOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <p className="text-sm font-semibold text-ink">
            {module.order ?? "·"}. {module.title}
          </p>
          <p className="mt-0.5 text-[12.5px] text-ink-3">
            {lessons.length} lecciones{module.level ? ` · nivel ${module.level}` : ""}
          </p>
        </div>
        <ChevronIcon className={`h-4.5 w-4.5 shrink-0 text-ink-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="border-t border-border px-5 pb-4 pt-3">
          {lessons.length > 0 ? (
            <ul className="flex flex-col gap-0.5">
              {lessons.map((lesson: AdminCurriculumLesson) => {
                const isHit = matchingLessonIds.has(lesson.lesson_id);
                return (
                  <li
                    key={lesson.lesson_id}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] ${
                      isHit ? "font-semibold text-ember-dark" : "text-ink-2"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${isHit ? "bg-ember" : "bg-accent"}`} />
                    {lesson.title}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="px-2.5 py-2 text-[13px] italic text-ink-3">Este módulo todavía no tiene lecciones.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export function TemarioExplorer({ modules }: { modules: AdminCurriculumModule[] }) {
  const [query, setQuery] = useState("");
  const q = normalize(query);
  const sortedModules = useMemo(() => sortByOrder(modules), [modules]);

  const visibleModules = useMemo(() => {
    if (q === "") return sortedModules;
    return sortedModules.filter((module) => {
      const titleMatch = normalize(module.title).includes(q);
      const hasLessonMatch = module.lessons.some((lesson) => normalize(lesson.title).includes(q));
      return titleMatch || hasLessonMatch;
    });
  }, [sortedModules, q]);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3">
        <SearchIcon className="h-4 w-4 shrink-0 text-ink-3" />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busca por tema, ej. IAM, cifrado, compliance..."
          aria-label="Buscar en el temario"
          className="w-full border-none bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
        />
      </div>

      {visibleModules.length === 0 ? (
        <p className="py-6 text-center text-[13.5px] text-ink-3">No encontramos lecciones para esa búsqueda.</p>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          {visibleModules.map((module) => (
            <ModuleCard key={module.module_id} module={module} query={query} />
          ))}
        </div>
      )}
    </div>
  );
}
