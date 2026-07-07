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
| `GET /dashboard` | Ruta de prueba protegida: muestra "Hola, {email}" si hay sesión válida, si no redirige a `/login`. |

## Estructura

```
app/
├── app/                             # App Router de Next.js
│   ├── layout.tsx                   # Root layout
│   ├── (public)/
│   │   └── page.tsx                 # Página inicial (ruta "/"), botón "Iniciar sesión"
│   ├── (estudiante)/
│   │   └── dashboard/
│   │       └── page.tsx             # Ruta protegida de prueba
│   ├── login/route.ts               # Redirige a la Hosted UI (PKCE)
│   ├── callback/route.ts            # Intercambia el code por tokens, crea sesión
│   └── logout/route.ts              # Cierra sesión local + Hosted UI
├── lib/auth/
│   ├── env.ts                       # Lectura/validación de variables de entorno
│   ├── oidc.ts                      # Config OIDC (discovery) y URL de logout de Cognito
│   ├── session.ts                   # Cookie de sesión (jose)
│   └── oauth-state.ts               # Cookie temporal de PKCE/state (jose)
├── .env.local.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Variables de entorno

Copia `.env.local.example` a `.env.local` y completa los valores (ver ese
archivo para el detalle de cada variable): `COGNITO_USER_POOL_ID`,
`COGNITO_CLIENT_ID`, `COGNITO_DOMAIN`, `APP_CALLBACK_URL`, `APP_LOGOUT_URL`,
`SESSION_SECRET`. `APP_CALLBACK_URL`/`APP_LOGOUT_URL` cambian entre local
(`localhost:3000`) y Amplify (el dominio real), y deben coincidir con lo
registrado en el App Client de Cognito.

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
