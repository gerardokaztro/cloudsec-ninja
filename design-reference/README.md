# Design reference

`mockup.html` es un mockup interactivo autocontenido (HTML/CSS/JS
vanilla, sin build) de una fase de diseño de UX anterior del proyecto.
**No es código de producción** — no se importa ni se referencia desde
`app/` ni desde `docs/`.

Incluye varias vistas (dashboard, leaderboard, lección, certificados,
badges, asistente de estudio, búsqueda global) con datos de demo falsos y
JS que simula distintos roles/estados. Al usarlo como referencia para
construir una vista real:

- Ignora el JS de simulación (roles de demo, datos falsos, cambios de
  estado por botones) — solo importa la estructura HTML, la paleta de
  colores/tipografía (`:root` CSS variables) y el layout de cada vista.
- No copies el CSS tal cual: las variables CSS de este archivo son de un
  contexto distinto al del stack real (`app/`, Next.js + Tailwind). Cada
  historia que construye una vista real debe re-expresar esos mismos
  tokens de diseño en el sistema de estilos que corresponda (ver
  `app/app/globals.css` para el caso de Tailwind, tokens `@theme`
  extraídos de este mockup en la historia S2-02).

Sirve como referencia visual para futuras historias de UI del dashboard
del estudiante (leaderboard, lección, certificados, badges, etc. — cada
una todavía sin construir).
