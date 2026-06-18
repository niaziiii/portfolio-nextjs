# Portfolio — Fixes & Improvements

Items identified during the codebase audit (2026-06). Grouped by priority. Check off as completed.

## 🔴 High priority (functional bugs)

- [ ] **Contact form does not send email.** `src/app/api/contact/route.ts` is a stub — it `console.log`s the request and returns `"Hello World"` with a `200`, so the form shows a fake success message. Wire it up using the already-installed `nodemailer` (or EmailJS / Formspree). Parse the JSON body and actually send/store the message.
- [ ] **Tailwind theme tokens don't resolve.** Project runs Tailwind v4 (`@import "tailwindcss"` in `globals.css`), but `tailwind.config.js` is v3-style and is never loaded (no `@config` directive). Custom colors `main`, `secondary`, `btn` are dead classes, so `bg-main`/`text-main` (Contact, Footer) and `bg-secondary` (mobile nav background) likely render with no color. Migrate the theme into `globals.css` via `@theme`, or add `@config "../../tailwind.config.js";`. Verify the mobile nav background after fixing.

## 🟠 Medium priority (responsive / UX)

- [ ] **Mobile bottom nav overlaps content.** The fixed bottom tab bar (`src/components/layouts/Header.tsx:85`) has no clearance — `<main>` in `src/app/(portfolio)/layout.tsx:12` needs bottom padding (e.g. `pb-24 md:pb-0`) so the footer/page content isn't hidden behind it on mobile.
- [ ] **Hero role text can clip on small screens.** Rotating `<h2>` uses `truncate` at `text-2xl` (`src/components/home/HeroSection.tsx:51`); "MERN Stack Developer" may get cut off at ~375px. Allow wrapping or reduce size on mobile.
- [ ] **Broken scale utility.** `md:scale-130` in `src/components/home/HeroSection.tsx:58` is not a defined utility (no-op). Use a valid scale value or define one.

## 🟡 Low priority (content / polish)

- [ ] **Stale copyright year.** `src/components/layouts/Footer.tsx:21` says "Copyright © 2022". Update to current year (consider making it dynamic).
- [ ] **Inconsistent Twitter handle.** `MuhabatNiazi` in `Footer.tsx:36` and `FindMe.tsx:27`, but `niaziiii` in `src/app/(portfolio)/contact/page.tsx:159`. Pick one.
- [ ] **Verify background image path.** Root layout uses inline `url(../bg.jpg)` (`src/app/layout.tsx:37`) — confirm it resolves in production.

## ℹ️ Notes (no action needed)

- Project data (titles, descriptions, links, images) is stored in **MongoDB** and managed via the `/admin` dashboard — not hardcoded.
- Experience/work history is a central data file: `src/assets/data/experience.ts`. Skills and tools live in `src/assets/data/skillsData.tsx` and `toolData.tsx`.
