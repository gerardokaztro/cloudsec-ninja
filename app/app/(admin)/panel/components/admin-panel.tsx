"use client";

import { useState } from "react";
import type { AdminCurriculumLesson, AdminCurriculumModule } from "@/lib/curriculum/api";
import { CreateModuleForm } from "./create-module-form";
import { CurriculumAccordion } from "./curriculum-accordion";

export function AdminPanel({ initialModules }: { initialModules: AdminCurriculumModule[] }) {
  const [modules, setModules] = useState(initialModules);

  function handleModuleCreated(module: AdminCurriculumModule) {
    setModules((current) => [...current, module]);
  }

  function handleLessonCreated(moduleId: string, lesson: AdminCurriculumLesson) {
    setModules((current) =>
      current.map((module) => (module.module_id === moduleId ? { ...module, lessons: [...module.lessons, lesson] } : module)),
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <CreateModuleForm onCreated={handleModuleCreated} />
      <CurriculumAccordion modules={modules} onLessonCreated={handleLessonCreated} />
    </div>
  );
}
