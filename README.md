# 👥 Users Management

A modern user-management dashboard built with **Next.js 16**, **React 19**, and **TypeScript** — designed around a clean, modular architecture with first-class internationalization and theming.

---

## ✨ Features

- 🧩 **Atomic Design system** — atoms / molecules / organisms / templates
- ⚡ **React Query (TanStack Query)** — cached, automatic, type-safe data fetching
- 🗂️ **Feature-sliced modules** — each feature owns its components, hooks, services, types
- 🎬 **Lottie animations** — lightweight, scalable motion via `lottie-react`
- 🍬 **SweetAlert2** — beautiful confirmations and feedback dialogs
- 🌍 **RTL + Internationalization** — English & Arabic via `next-intl`, full right-to-left support
- 🌓 **Dark mode** — system-aware theming via `next-themes`
- 🛡️ **Route guards** — protected vs public layouts with token-based auth
- 🎨 **Tailwind CSS v4** — utility-first styling with theme tokens

---

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind v4 |
| Language | TypeScript |
| Data | TanStack Query + Axios |
| i18n | next-intl (en / ar) |
| Theming | next-themes |
| Animations | lottie-react |
| Dialogs | sweetalert2 |
| Icons | lucide-react |
| Auth | Token-based (js-cookie) |

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### Other scripts

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
```

---

## 🧱 Project Structure

```
src/
├── app/             # 🛣️  Routes (App Router) — (protected) & (public) groups
├── modules/         # 📦  Feature slices (auth, users)
├── components/      # 🧩  Atomic Design (atoms → templates)
├── shared/          # ♻️  Cross-module reusables
├── providers/       # 🧠  Context providers (theme, query client)
├── services/        # 🌐  API client + endpoints
├── hooks/           # 🪝  Generic client-side hooks
├── i18n/            # 🌍  next-intl config
├── messages/        # 📝  Translation JSON (en, ar)
├── assets/          # 🖼️  Icons, images, lotties
├── guards/          # 🔐  Auth / route guards
├── lib/             # 🔧  Framework-agnostic helpers
├── animations/      # 🎞️  Motion variants
├── config/          # ⚙️  Constants, env
├── styles/          # 🎨  Global CSS, tokens
└── types/           # 🏷️  Global TypeScript types
```

> 📖 Deep-dive in [STRUCTURE.md](./STRUCTURE.md)

---

## 🧩 Atomic Design

UI is layered from the smallest reusable piece to full page shells:

| Layer | Purpose | Example |
|---|---|---|
| **Atoms** | Indivisible primitives | `Button`, `Icon`, `Logo`, `TextLink` |
| **Molecules** | Compositions of atoms | `ActionCard`, `FormField` |
| **Organisms** | Complex sections | `Navbar`, `RecentUsers` |
| **Templates** | Page-level shells | `PublicLayout`, `ProtectedLayout` |

Anything generic lives in `src/components/`. Anything feature-specific lives inside its module (`src/modules/<feature>/components/`).

---

## 📦 Feature Modules

Each module is self-contained:

```
modules/auth/
├── api/           # signInApi, logoutApi
├── components/    # SignInForm, LogoutButton
├── hooks/         # useSignIn, useLogout
└── types/
```

✅ Add features without touching the rest of the app.
✅ Promote shared code to `components/` or `shared/` only when it's truly reused.

---

## ⚡ Data Fetching with React Query

Server components fetch directly (SSR). Interactive UI uses TanStack Query for caching, retries, mutations, and devtools:

```tsx
"use client";
const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
```

🔍 Devtools enabled in development for inspecting cache state.

---

## 🌍 Internationalization & RTL

Supports **English** and **Arabic** out of the box via `next-intl`. The HTML `dir` attribute flips automatically for RTL locales — Tailwind's logical properties handle the rest.

📝 Translations live in [`src/messages/en.json`](./src/messages/en.json) and [`src/messages/ar.json`](./src/messages/ar.json) — organized by namespace (`Nav`, `Common`, `Users`, `Auth`, …).

Translate a string:

```tsx
const t = useTranslations("Nav");
return <span>{t("dashboard")}</span>;
```

---

## 🌓 Dark Mode

Powered by `next-themes` — respects the user's system preference, persists across reloads, and exposes a `<ThemeToggle />` atom for manual switching. No flash of incorrect theme on first paint. ✨

---

## 🎬 Lottie + 🍬 SweetAlert

- **Lottie** drives the polished empty-states and loading flourishes — JSON files live in `src/assets/lotties/`.
- **SweetAlert2** handles confirmations (delete user, etc.) and feedback toasts — themed to match light/dark mode.

---

## 🎞️ Motion (framer-motion)

Animations are exposed as **reusable wrapper components** in [`src/animations/`](./src/animations/), not raw variant objects. Each wrapper owns its variants internally and exposes a clean `children` API — drop it around anything to animate it.

```
src/animations/
├── FadeIn.tsx     # opacity 0 → 1
└── SlideUp.tsx    # slides 24px up while fading in
```

Each file is marked `"use client"` (framer-motion is client-only) and wraps `motion.div` with a preset variant:

```tsx
"use client";
import { motion, type Variants } from "framer-motion";

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
```

**Consume them anywhere** — just wrap what you want to animate:

```tsx
import FadeIn from "@/animations/FadeIn";
import SlideUp from "@/animations/SlideUp";

<FadeIn>
  <h1>Manage your users with confidence.</h1>
</FadeIn>

<SlideUp>
  <p>Clean, fast, and built for teams that move quickly.</p>
</SlideUp>
```

### Why wrappers instead of raw variants?

- 🧼 **Cleaner call sites** — `<FadeIn>` reads better than three motion props every time
- 🔒 **Single source of truth** — change the timing/easing in one file, every consumer updates
- 🧠 **No boilerplate** — no remembering `initial="hidden" animate="visible"` everywhere
- 🛡️ **`"use client"` contained** — the directive lives in the wrapper, callers don't think about it

➕ **Add a new motion** — drop a new component in `src/animations/`, give it a `Variants` object, wrap `motion.div`. That's it.

---

## 🔐 Auth Flow

Token stored client-side via `js-cookie`; server-side checks via `ServerTokenService`. Layouts (`PublicLayout`, `ProtectedLayout`) read the token and render the right navigation + guard the routes accordingly.

---

## 🧹 Clean Structure Principles

- 🎯 **Server-first** — components are Server Components unless they need interactivity
- 🍃 **Push `"use client"` to leaves** — keep the client bundle small
- 🚪 **Each module exposes a public surface** — no deep imports across module boundaries
- 🧪 **Stable translation keys** — labels live in messages, not in source code
- 🏷️ **Typed everything** — no `any`, strict TS config

---

Built with ❤️ for clean code and clean UX.
