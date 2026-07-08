# CloudSec Ninja — Product layer (`app/`)

Esta carpeta contiene la **nueva capa de producto** de CloudSec Ninja, construida
con [Next.js](https://nextjs.org/) (App Router + TypeScript).

Se agrega **en paralelo** al sitio de documentación existente (Docusaurus, en la
raíz del repo). Durante esta fase, **Docusaurus sigue funcionando exactamente
igual** y se despliega por su cuenta (Vercel). Esta app es independiente: tiene su
propio `package.json`, su propio `tsconfig.json` y su propio build.

En las próximas historias esta capa se irá construyendo de forma incremental.

## Estado actual (S1-03)

Login/logout funcional contra el Cognito real vía Hosted UI, usando OAuth
Authorization Code + PKCE. Es solo para **probar que el login funciona**; el
dashboard real de estudiante es una historia futura.

- **Librerías**: [`openid-client`](https://github.com/panva/openid-client)
  (descubrimiento OIDC, construcción de la URL de authorize, intercambio de
  código por tokens) y [`jose`](https://github.com/panva/jose) (firmar/verificar
  la cookie de sesión).
- **Sesión**: cookie `cs_session`, httpOnly + Secure (en producción) +
  SameSite=Lax, con un JWT propio firmado (HS256, `SESSION_SECRET`) que solo
  contiene `sub` y `email` — nunca los tokens crudos de Cognito. Sin base de
  datos ni almacén de sesión externo.
- **PKCE/state**: durante el viaje de ida y vuelta a la Hosted UI, el
  `code_verifier` y el `state` se guardan en otra cookie httpOnly firmada de
  corta duración (`cs_oauth_state`, 5 min), que se consume (lee y borra) en
  `/callback`.
- **Logout**: borra la cookie de sesión local y además redirige al endpoint
  `/logout` propio de la Hosted UI de Cognito (no es parte del estándar OIDC;
  Cognito no implementa RP-Initiated Logout), para cerrar también esa sesión.

### Rutas de autenticación

| Ruta         | Qué hace |
| ------------ | -------- |
| `GET /login`     | Genera PKCE + state, guarda la cookie temporal y redirige a la Hosted UI de Cognito. |
| `GET /callback`  | Recibe el `code`, valida PKCE/state, intercambia el código por tokens y crea la cookie de sesión. |
| `GET /logout`    | Borra la cookie de sesión y redirige al `/logout` de la Hosted UI. |
| `GET /dashboard` | Dashboard real del estudiante (ver S2-02 abajo), si no hay sesión redirige a `/login`. |

## Estado actual (S2-02): dashboard real con progreso

`/dashboard` dejó de ser la página de prueba ("Hola, {email}") y ahora lee
el progreso real del estudiante desde el HTTP API de `cloudsec-ninja-infra`
(`GET /progress`, ver ese repo — Lambda `progress-get`, historia S2-02) y lo
cruza contra un temario hardcodeado (los 8 módulos reales de `docs/`,
`lib/progress/curriculum.ts`) para mostrar:

- **Estado vacío**: si el estudiante no tiene ningún item de progreso, un
  CTA para empezar por el primer módulo (Bienvenida).
- **Estado con progreso**: barra/porcentaje de progreso general, cantidad
  de módulos en curso/completados, una "siguiente meta" (el módulo actual),
  y la lista de los 8 módulos con su estado — completado, en curso
  (con barra de progreso propia) o bloqueado (los módulos se desbloquean en
  orden; un módulo bloqueado no muestra CTA).

Estilo: Tailwind CSS v4 (agregado en esta historia — no existía antes en
`app/`, ver `postcss.config.mjs` / `app/globals.css`), con los tokens de
color/tipografía (paleta teal + acento ámbar, Space Grotesk/Inter/JetBrains
Mono) tomados de un mockup de referencia validado en una fase anterior del
proyecto — no es una copia del HTML/CSS del mockup, son componentes React
reales usando esos mismos tokens como theme de Tailwind
(`@theme` en `app/globals.css`).

**Fuera de alcance de esta historia** (no implementado, no hay backend o
funcionalidad real detrás todavía): leaderboard (el mockup mostraba "tu
puesto"; se reemplazó por un stat de "módulos completados" que sí es real),
racha/streak, banner de "contenido nuevo esta semana", certificados y
generación de badges (el mockup tenía un botón "Generar badge" en módulos
completados y un banner de certificado; ninguno de los dos se construyó), y
la vista de lección individual (por eso los CTA de cada módulo enlazan al
landing page del módulo en el sitio de docs — `docsPath` en
`curriculum.ts` — en vez de a una lección específica dentro de la app).

### El JWT real de Cognito para llamar a la API de progreso

`cs_session` (la sesión propia de S1-03) nunca guardó los tokens crudos de
Cognito, solo `sub`/`email`. Para poder llamar a un endpoint protegido por
el authorizer JWT de API Gateway hacía falta persistir algo emitido por
Cognito. Cognito devuelve `refresh_token` en el grant `authorization_code`
siempre (no depende de pedir el scope `offline_access` como en OIDC
genérico), así que:

- `/callback` ahora también guarda ese `refresh_token` en una cookie
  httpOnly nueva y separada (`cs_cognito_rt`, `lib/auth/cognito-tokens.ts`,
  mismo patrón de JWT propio firmado que `session.ts`).
- Antes de llamar a `GET /progress`, `lib/progress/api.ts` pide un
  `access_token` fresco a `/oauth2/token` de Cognito
  (`grant_type=refresh_token`) en cada request — no se cachea el
  `access_token` entre requests; Cognito los emite con 60 minutos de
  validez por defecto y el volumen de esta app no justifica manejar esa
  expiración a mano.
- `/logout` borra también esta cookie.

## Estructura

```
app/
├── app/                             # App Router de Next.js
│   ├── layout.tsx                   # Root layout (fonts + globals.css)
│   ├── globals.css                  # Tailwind v4 + tokens de diseño (@theme)
│   ├── (public)/
│   │   └── page.tsx                 # Página inicial (ruta "/"), botón "Iniciar sesión"
│   ├── (estudiante)/
│   │   └── dashboard/
│   │       ├── page.tsx             # Dashboard real (S2-02)
│   │       └── components/          # Hero, stat row, goal card, module list/row, empty state
│   ├── login/route.ts               # Redirige a la Hosted UI (PKCE)
│   ├── callback/route.ts            # Intercambia el code por tokens, crea sesión + guarda refresh_token
│   └── logout/route.ts              # Cierra sesión local + Hosted UI
├── lib/
│   ├── auth/
│   │   ├── env.ts                   # Lectura/validación de variables de entorno
│   │   ├── oidc.ts                  # Config OIDC (discovery) y URL de logout de Cognito
│   │   ├── session.ts               # Cookie de sesión propia (jose)
│   │   ├── oauth-state.ts           # Cookie temporal de PKCE/state (jose)
│   │   └── cognito-tokens.ts        # Cookie del refresh_token real de Cognito + refresh de access_token
│   └── progress/
│       ├── curriculum.ts            # Temario hardcodeado (8 módulos reales de docs/)
│       ├── api.ts                   # Cliente de GET /progress (cloudsec-ninja-infra)
│       └── view-model.ts            # Cruza progreso real + temario → estado por módulo
├── .env.local.example
├── postcss.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Variables de entorno

Copia `.env.local.example` a `.env.local` y completa los valores (ver ese
archivo para el detalle de cada variable): `COGNITO_USER_POOL_ID`,
`COGNITO_CLIENT_ID`, `COGNITO_DOMAIN`, `APP_CALLBACK_URL`, `APP_LOGOUT_URL`,
`SESSION_SECRET`, `PROGRESS_API_URL`. `APP_CALLBACK_URL`/`APP_LOGOUT_URL`
cambian entre local (`localhost:3000`) y Amplify (el dominio real), y deben
coincidir con lo registrado en el App Client de Cognito. `PROGRESS_API_URL`
es el output `progress_api_endpoint` de `cloudsec-ninja-infra`.

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
