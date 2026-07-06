# CloudSec Ninja — Product layer (`app/`)

Esta carpeta contiene la **nueva capa de producto** de CloudSec Ninja, construida
con [Next.js](https://nextjs.org/) (App Router + TypeScript).

Se agrega **en paralelo** al sitio de documentación existente (Docusaurus, en la
raíz del repo). Durante esta fase, **Docusaurus sigue funcionando exactamente
igual** y se despliega por su cuenta (Vercel). Esta app es independiente: tiene su
propio `package.json`, su propio `tsconfig.json` y su propio build.

En las próximas historias esta capa se irá construyendo de forma incremental.

## Estado actual (S1-01)

Setup inicial para validar el pipeline de deploy a **AWS Amplify Hosting**. Por
ahora solo existe una página inicial (`app/(public)/page.tsx`) que renderiza un
título de "en construcción".

## Estructura

```
app/
├── app/                     # App Router de Next.js
│   ├── layout.tsx           # Root layout
│   └── (public)/
│       └── page.tsx         # Página inicial (ruta "/")
├── next.config.ts
├── package.json
└── tsconfig.json
```

> Nota: el directorio del router de Next.js se llama `app/` por convención, por
> eso queda anidado como `app/app/`. La carpeta externa `app/` es la raíz del
> proyecto Next.js; la interna es el App Router.

## Desarrollo local

```bash
cd app
npm install
npm run dev      # http://localhost:3000
```

## Build de producción

```bash
cd app
npm run build
npm run start
```

## Deploy

El deploy a AWS Amplify Hosting se configura con el archivo `amplify.yml` en la
raíz del repo, que apunta a esta carpeta (`appRoot: app`) para no interferir con
el build de Docusaurus.
