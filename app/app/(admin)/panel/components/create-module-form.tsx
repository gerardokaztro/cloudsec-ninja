"use client";

import { useState } from "react";
import type { AdminCurriculumModule } from "@/lib/curriculum/api";
import { CheckIcon } from "./icons";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("[̀-ͯ]", "g"), "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function CreateModuleForm({ onCreated }: { onCreated: (module: AdminCurriculumModule) => void }) {
  const [title, setTitle] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [moduleIdTouched, setModuleIdTouched] = useState(false);
  const [order, setOrder] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim() || !moduleId.trim()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/admin/curriculum/modules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          module_id: moduleId.trim(),
          title: title.trim(),
          order: order ? Number(order) : undefined,
          level: level ? Number(level) : undefined,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error === "forbidden" ? "Tu usuario no tiene rol admin." : "No se pudo crear el módulo.");
        return;
      }

      onCreated({
        module_id: moduleId.trim(),
        title: title.trim(),
        order: order ? Number(order) : undefined,
        level: level ? Number(level) : undefined,
        lessons: [],
      });

      setStatus("success");
      setTitle("");
      setModuleId("");
      setModuleIdTouched(false);
      setOrder("");
      setLevel("");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
      setErrorMessage("Error de red al crear el módulo.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-surface p-5">
      <h3 className="mb-4 font-display text-base font-semibold text-ink">Crear módulo</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-xs font-medium text-ink-2 sm:col-span-2">
          Título
          <input
            required
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              if (!moduleIdTouched) {
                setModuleId(slugify(event.target.value));
              }
            }}
            className="rounded-lg border border-border px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            placeholder="Ej. Gestión de Identidad y Accesos"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-ink-2 sm:col-span-2">
          module_id (slug)
          <input
            required
            value={moduleId}
            onChange={(event) => {
              setModuleIdTouched(true);
              setModuleId(event.target.value);
            }}
            className="rounded-lg border border-border px-3 py-2 font-mono text-sm text-ink outline-none focus:border-accent"
            placeholder="ej-gestion-de-identidad"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-ink-2">
          Orden
          <input
            type="number"
            value={order}
            onChange={(event) => setOrder(event.target.value)}
            className="rounded-lg border border-border px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            placeholder="1"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-ink-2">
          Nivel
          <input
            type="number"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="rounded-lg border border-border px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            placeholder="100"
          />
        </label>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#04231a] transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Creando..." : "Crear módulo"}
        </button>
        {status === "success" ? (
          <span className="flex items-center gap-1.5 text-sm font-medium text-accent-dark">
            <CheckIcon className="h-4 w-4" />
            Módulo creado
          </span>
        ) : null}
        {status === "error" ? <span className="text-sm text-red-600">{errorMessage}</span> : null}
      </div>
    </form>
  );
}
