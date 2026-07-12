"use client";

import { useRef } from "react";
import { MarkdownContent } from "@/components/markdown-content";
import { UploadIcon } from "./icons";

export function MarkdownEditor({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) {
      return;
    }

    if (value.trim() && !window.confirm("Ya hay contenido en el editor. ¿Reemplazarlo con el archivo subido?")) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };
    reader.readAsText(file);
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-xs font-semibold text-ink-2">Contenido (markdown)</label>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent-dark"
        >
          <UploadIcon className="h-3.5 w-3.5" />
          Subir archivo .md
        </button>
        <input ref={fileInputRef} type="file" accept=".md,.markdown,text/markdown" className="hidden" onChange={handleFileChange} />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={14}
          placeholder="# Título de la lección&#10;&#10;Contenido en markdown..."
          className="w-full resize-y rounded-lg border border-border bg-surface p-3 font-mono text-[12.5px] leading-relaxed text-ink outline-none focus:border-accent"
        />
        <div className="overflow-y-auto rounded-lg border border-border bg-surface-2 p-3">
          <MarkdownContent markdown={value} />
        </div>
      </div>
    </div>
  );
}
