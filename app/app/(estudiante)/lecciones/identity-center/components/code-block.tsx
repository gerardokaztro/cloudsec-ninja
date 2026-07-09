import { codeToHtml } from "shiki";

export async function CodeBlock({ code, lang, filename }: { code: string; lang: string; filename?: string }) {
  const html = await codeToHtml(code, { lang, theme: "github-dark" });

  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-border">
      {filename ? (
        <div className="border-b border-white/10 bg-ink px-4 py-2 font-mono text-[11px] text-white/60">
          {filename}
        </div>
      ) : null}
      <div
        className="overflow-x-auto [&_pre]:p-5 [&_pre]:font-mono [&_pre]:text-[12.5px] [&_pre]:leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
