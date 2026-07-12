"use client";

import { useState } from "react";
import type { AdminCurriculumLesson } from "@/lib/curriculum/api";
import { MarkdownEditor } from "./markdown-editor";
import { CheckIcon } from "./icons";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("[̀-ͯ]", "g"), "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function CreateLessonForm({
  moduleId,
  onCreated,
  onCancel,
}: {
  moduleId: string;
  onCreated: (lesson: AdminCurriculumLesson) => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState("");
  const [lessonId, setLessonId] = useState("");
  const [lessonIdTouched, setLessonIdTouched] = useState(false);
  const [order, setOrder] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim() || !lessonId.trim() || !content.trim()) {
      return;
    }

    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/admin/curriculum/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          module_id: moduleId,
          lesson_id: lessonId.trim(),
          title: title.trim(),
          order: order ? Number(order) : undefined,
          content_markdown: content,
          tags,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error === "forbidden" ? "Tu usuario no tiene rol admin." : "No se pudo crear la lección.");
        return;
      }

      onCreated({ lesson_id: lessonId.trim(), title: title.trim(), order: order ? Number(order) : undefined, tags });

      setStatus("success");
      setTitle("");
      setLessonId("");
      setLessonIdTouched(false);
      setOrder("");
      setTagsInput("");
      setContent("");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
      setErrorMessage("Error de red al crear la lección.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 rounded-xl border border-accent bg-surface p-5">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-display text-sm font-semibold text-ink">Crear lección en este módulo</h4>
        <button type="button" onClick={onCancel} className="text-xs font-medium text-ink-3 hover:text-ink-2">
          Cancelar
        </button>
      </div>

      <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-xs font-medium text-ink-2 sm:col-span-2">
          Título
          <input
            required
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              if (!lessonIdTouched) {
                setLessonId(slugify(event.target.value));
              }
            }}
            className="rounded-lg border border-border px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            placeholder="Ej. AWS Identity Center"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-ink-2">
          lesson_id (slug)
          <input
            required
            value={lessonId}
            onChange={(event) => {
              setLessonIdTouched(true);
              setLessonId(event.target.value);
            }}
            className="rounded-lg border border-border px-3 py-2 font-mono text-sm text-ink outline-none focus:border-accent"
            placeholder="aws-identity-center"
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
        <label className="flex flex-col gap-1 text-xs font-medium text-ink-2 sm:col-span-2">
          Tags (separados por coma)
          <input
            value={tagsInput}
            onChange={(event) => setTagsInput(event.target.value)}
            className="rounded-lg border border-border px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            placeholder="identity-center, sso"
          />
        </label>
      </div>

      <MarkdownEditor value={content} onChange={setContent} />

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#04231a] transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Creando..." : "Crear lección"}
        </button>
        {status === "success" ? (
          <span className="flex items-center gap-1.5 text-sm font-medium text-accent-dark">
            <CheckIcon className="h-4 w-4" />
            Lección creada
          </span>
        ) : null}
        {status === "error" ? <span className="text-sm text-red-600">{errorMessage}</span> : null}
      </div>
    </form>
  );
}
