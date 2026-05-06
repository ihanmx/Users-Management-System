# Project Structure Reference

Stack: **Next.js 16.2.4 (App Router) · React 19 · TypeScript · Tailwind v4**.

> ⚠️ Typo: rename `src/messsages/` → `src/messages/` (3 s's → 2).

---

## Top-level layout

```
my-app/
├── public/                  # Static assets served at "/" (favicons, robots.txt, og.png)
├── src/
│   ├── app/                 # Routing layer (App Router) — SSR by default
│   ├── animations/          # Framer Motion variants / keyframes (no JSX)
│   ├── assets/              # Imported assets (icons, images, lotties)
│   ├── components/          # Atomic-design shared UI (atoms → templates)
│   ├── config/              # Static config (env reading, constants, feature flags)
│   ├── core/                # Cross-cutting building blocks (seo, ui-states)
│   ├── guards/              # Auth/role/route guards (HOCs or middleware helpers)
│   ├── hooks/               # Generic custom hooks (CSR — "use client")
│   ├── i18n/                # next-intl/i18next setup, locales config
│   ├── lib/                 # Framework-agnostic helpers, SDK clients, fetchers
│   ├── messages/            # Translation JSON files (en.json, ar.json, …)
│   ├── modules/             # Feature-sliced code (auth, cart, dashboard…)
│   ├── providers/           # React context providers (theme, auth, query-client)
│   ├── services/            # API service classes / endpoint definitions
│   ├── shared/              # Cross-module reusables (components, hooks, types, utils)
│   ├── styles/              # Global CSS, Tailwind layer extensions, theme tokens
│   └── types/               # Global TypeScript types & ambient declarations
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Folder-by-folder

### `src/app/` — Routing & rendering boundary
The **only** folder Next.js treats specially. Every `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts` here defines a route segment.

**Place inside:** route folders only — `app/(marketing)/page.tsx`, `app/dashboard/layout.tsx`, `app/api/users/route.ts`. Keep components thin: import from `modules/` or `components/`.

**Default rendering:** **Server Component (SSR)**. Add `"use client"` at top of file to opt into CSR.

Special files:
- `layout.tsx` — wraps children, persists across navigations.
- `page.tsx` — the route's UI.
- `loading.tsx` — Suspense fallback.
- `error.tsx` — error boundary (must be Client Component).
- `route.ts` — API endpoint (Server only).
- `(group)/` — route group, doesn't affect URL.
- `[param]/` — dynamic segment.
- `_private/` — opted out of routing.

### `src/components/` — Atomic Design shared UI
Generic, reusable, **non-feature-specific** UI.

| Layer | What goes here | Example |
|---|---|---|
| `atoms/` | Smallest indivisible UI | `Button`, `Input`, `Icon`, `Badge` |
| `molecules/` | Combinations of atoms | `SearchBar`, `FormField`, `Card` |
| `organisms/` | Complex sections | `Header`, `Footer`, `ProductGrid` |
| `templates/` | Page-level layouts (no data) | `DashboardShell`, `AuthLayout` |

Default to **Server Components**. Add `"use client"` only when you need state, effects, or browser APIs.

### `src/modules/` — Feature slices
Self-contained features. Each module owns its components, hooks, services, types.

```
modules/
└── auth/
    ├── components/      # LoginForm, SignupCard
    ├── hooks/           # useLogin, useSession
    ├── services/        # authApi.ts
    ├── types/
    └── index.ts         # public API of the module
```

**Rule of thumb:** if a component is used in **one** feature, it lives in `modules/<feature>/`. If reused across features, promote it to `components/` or `shared/`.

### `src/shared/` — Cross-module reusables
Code that's **shared** between modules but doesn't belong in atomic `components/`.
- `shared/components/` — composite reusables tied to business domain (e.g., `UserAvatar`).
- `shared/hooks/` — domain-aware hooks (e.g., `useCurrentUser`).
- `shared/types/` — types crossing module boundaries.
- `shared/utils/` — helpers used in multiple modules.

### `src/lib/` — Framework-agnostic helpers
Pure utilities, no React. SDK clients, formatters, validators. Examples: `lib/dayjs.ts`, `lib/fetcher.ts`, `lib/zod-schemas.ts`, `lib/cn.ts` (clsx wrapper).

**Difference from `shared/utils`:** `lib/` is generic (could be copied to any project). `shared/utils/` is app-specific.

### `src/services/` — API layer
Endpoint definitions and HTTP calls.
```ts
// services/userService.ts
import { apiClient } from "@/lib/api-client";
export const userService = {
  getById: (id: string) => apiClient.get(`/users/${id}`),
  list:    () => apiClient.get(`/users`),
};
```
Called from Server Components (SSR) **or** from `hooks/` via React Query (CSR).

### `src/providers/` — Context providers
Wrap your app with these in `app/layout.tsx`. **Always Client Components** (`"use client"`) since context is client-only.
```
providers/
├── ThemeProvider.tsx
├── QueryProvider.tsx     # TanStack Query client
├── AuthProvider.tsx
└── index.tsx             # composes all providers
```

### `src/hooks/` — Generic hooks
Reusable hooks not tied to any feature: `useDebounce`, `useMediaQuery`, `useLocalStorage`. **Client-only** by definition (must be in a `"use client"` file).

### `src/guards/` — Route/auth guards
HOCs, middleware helpers, or wrapper components that gate access. E.g., `withAuth`, `RoleGuard`, `requireSession()` for use in Server Components.

### `src/core/` — Cross-cutting building blocks
- `core/seo/` — `generateMetadata` helpers, JSON-LD builders, OG image factories.
- `core/ui-states/` — generic empty/error/loading state components.

### `src/config/` — Static configuration
- `config/env.ts` — typed env-var reader (Zod-validated).
- `config/constants.ts` — magic numbers, enums, app constants.
- `config/routes.ts` — route path constants.
- `config/features.ts` — feature flags.

### `src/i18n/` + `src/messages/`
- `i18n/` — `next-intl` (or i18next) setup, `getRequestConfig`, locale list.
- `messages/` — `en.json`, `ar.json` etc. (the typo `messsages` will break imports — fix it).

### `src/animations/`
Framer Motion variants and shared transitions. Pure data, no JSX:
```ts
export const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 } };
```

### `src/assets/`
- `assets/icons/` — SVGs imported as components.
- `assets/images/` — local images for `next/image`.
- `assets/lotties/` — Lottie JSON files.

### `src/styles/`
- `globals.css` (also referenced from `app/`) — Tailwind directives, CSS variables.
- `themes.css` — light/dark token definitions.
- Per-feature overrides if Tailwind isn't enough.

### `src/types/`
Global types and ambient declarations: `global.d.ts`, `next-auth.d.ts`, shared API DTOs not owned by any module.

---

## SSR vs CSR — where each lives

Next.js App Router is **server-first**. Every component is a Server Component until you opt out with `"use client"`.

### Server Components (SSR / RSC) — default
Run only on the server, render to HTML + RSC payload, **never ship JS to the browser**.

**Use for:**
- Data fetching (DB, API, file system) — `await fetch()` directly in the component.
- Reading secrets / env vars (server-only).
- Anything that can be computed once and cached.
- The bulk of your `app/`, `components/atoms`, `components/templates`, `core/seo`.

**Cannot:** `useState`, `useEffect`, `onClick`, `localStorage`, `window`, React context, browser-only libraries.

### Client Components (CSR) — opt in with `"use client"`
Pre-rendered to HTML on first load, then **hydrated** in the browser. Subsequent navigations render purely on the client.

**Use for:**
- Interactivity: `onClick`, `onChange`, form state.
- React hooks: `useState`, `useEffect`, `useReducer`, custom hooks.
- Browser APIs: `window`, `localStorage`, `IntersectionObserver`.
- Third-party libraries that touch the DOM (charts, carousels, editors).
- Context **providers** and **consumers**.

**Mark with:** `"use client"` as the first line. Once a file is `"use client"`, **all its imports become part of the client bundle** — so put the directive at the smallest leaf possible.

### Where each folder typically lands

| Folder | Default | Notes |
|---|---|---|
| `app/` | **Server** | Add `"use client"` only on interactive leaves |
| `app/api/*/route.ts` | **Server only** | Edge/Node runtime, never client |
| `components/atoms` | Server (mostly) | Buttons with `onClick` → `"use client"` |
| `components/molecules` / `organisms` | Mixed | Per-component decision |
| `components/templates` | Server | Pure layout shells |
| `modules/*/components` | Mixed | Forms/interactive widgets → client |
| `providers/` | **Client** | Context requires `"use client"` |
| `hooks/` | **Client** | Hooks only run in client components |
| `services/` | Either | Pure functions; called from both sides |
| `lib/` | Either | Keep framework-agnostic |
| `guards/` | Mixed | Server-side `requireSession()` vs client `<RoleGate>` |
| `core/seo` | **Server** | `generateMetadata` is server-only |
| `core/ui-states` | Server (mostly) | Static empty/error UIs |
| `config/` | Either | `config/env.ts` typically server-only |
| `i18n/` | Server config | `messages/` consumed both sides |
| `animations/` | Either | Pure data; framer-motion components are client |

### Composition rules

1. **Server can render Client.** Server Component imports a `"use client"` component → fine.
2. **Client cannot render Server directly** — but it **can** receive a Server Component as `children` or props (the "donut" pattern):
   ```tsx
   // Server page
   <ClientModal>
     <ServerCart />   {/* server-rendered, slotted into client modal */}
   </ClientModal>
   ```
3. **Props from Server → Client must be serializable** (no functions, no Dates → strings, no class instances).
4. **Push `"use client"` to the leaves.** Wrapping a whole layout in `"use client"` ships unnecessary JS.

### Data fetching cheat sheet

```tsx
// SSR — Server Component (preferred default)
// app/posts/page.tsx
export default async function Page() {
  const posts = await fetch("https://api/...", { next: { revalidate: 60 } }).then(r => r.json());
  return <PostList posts={posts} />;
}

// CSR — Client Component with TanStack Query (interactive, paginated, mutations)
"use client";
import { useQuery } from "@tanstack/react-query";
export function Posts() {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: () => fetch("/api/posts").then(r => r.json()) });
  return <PostList posts={data ?? []} />;
}
```

### Protecting server-only code

Install once: `npm i server-only`. In any module that must never reach the client:
```ts
import "server-only";
export async function getSecretData() { /* uses process.env.API_KEY */ }
```
Importing it from a `"use client"` file becomes a build error.

---

## Import alias

`tsconfig.json` should expose `@/*` → `src/*` so you can write:
```ts
import { Button } from "@/components/atoms/Button";
import { userService } from "@/services/userService";
```
Verify the `paths` entry in [tsconfig.json](my-app/tsconfig.json) matches this convention.

---

## Quick decision flow

```
New piece of code →
  Is it a route?                        → src/app/<segment>/
  Is it tied to one feature?            → src/modules/<feature>/
  Is it generic UI?                     → src/components/<atom|molecule|...>/
  Is it shared across features?         → src/shared/
  Is it a pure helper / SDK?            → src/lib/
  Is it React context?                  → src/providers/  ("use client")
  Is it a hook?                         → src/hooks/      ("use client")
  Is it API call definition?            → src/services/
  Is it config/constants?               → src/config/
  Is it a translation string?           → src/messages/<locale>.json
```
