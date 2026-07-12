import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renderizador de markdown compartido — lo usan tanto la preview en vivo
 * del editor de /panel (S2-04b) como la página de lección real (S2-04c).
 * No es "use client": no tiene hooks propios, así que sirve igual desde
 * un Server Component (lección) o importado dentro de un client component
 * (editor).
 */
export function MarkdownContent({ markdown }: { markdown: string }) {
  return (
    <div className="text-[14px] leading-relaxed text-ink-2 [&_a]:text-accent-dark [&_code]:font-mono [&_code]:text-[12.5px] [&_h1]:font-display [&_h1]:text-lg [&_h1]:font-semibold [&_h1]:text-ink [&_h1]:mb-3 [&_h2]:font-display [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mb-2 [&_h2]:mt-5 [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mb-2 [&_h3]:mt-4 [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-ink [&_pre]:p-3 [&_pre]:text-white [&_pre]:mb-3 [&_table]:mb-3 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:bg-surface-2 [&_th]:px-2.5 [&_th]:py-1.5 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:px-2.5 [&_td]:py-1.5 [&_img]:max-w-full [&_img]:rounded-lg [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-3 [&_blockquote]:text-ink-3">
      {markdown.trim() ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      ) : (
        <p className="text-ink-3 italic">Sin contenido.</p>
      )}
    </div>
  );
}
