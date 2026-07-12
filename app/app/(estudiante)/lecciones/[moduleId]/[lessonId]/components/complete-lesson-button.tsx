"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckIcon } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

export function CompleteLessonButton({ moduleId, lessonId }: { moduleId: string; lessonId: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  async function handleClick() {
    setStatus("loading");
    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ module_id: moduleId, lesson_id: lessonId }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setTimeout(() => router.push("/dashboard"), 900);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-accent-soft px-5 py-3 text-sm font-semibold text-accent-dark">
        <CheckIcon className="h-4 w-4" />
        Progreso guardado — volviendo a tu dashboard...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleClick}
        disabled={status === "loading"}
        className="w-fit rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#04231a] transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Guardando..." : "Completar lección"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-red-600">
          No se pudo guardar tu progreso. Intenta de nuevo — si el problema persiste, cierra sesión y vuelve a entrar.
        </p>
      ) : null}
    </div>
  );
}
