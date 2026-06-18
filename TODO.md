# Portfolio — Fixes & Improvements

Items identified during the codebase audit (2026-06). Grouped by priority. Check off as completed.

## 🔴 High priority (functional bugs)

- [ ] **Contact form does not send email.** `src/app/api/contact/route.ts` is a stub — it `console.log`s the request and returns `"Hello World"` with a `200`, so the form shows a fake success message. Wire it up using the already-installed `nodemailer` (or EmailJS / Formspree). Parse the JSON body and actually send/store the message.
- [x] **Tailwind theme tokens don't resolve.** ✅ Fixed — migrated `primary`/`secondary`/`main` into a `@theme` block in `src/app/globals.css`. Verified against built CSS: `.bg-secondary`/`.bg-secondary/95` (mobile nav) and `.text-main`/`.bg-main` (Contact) now generate real utilities. `main` was never defined even in the old config; it was set to the brand blue `rgb(17 95 221)` to match `primary`. (`btn`, `main-2`, `main-3` were unused — not migrated.)

## 🟠 Medium priority (responsive / UX)

- [x] **Mobile bottom nav overlaps content.** ✅ Fixed — added `pb-24 md:pb-0` to `<main>` in `src/app/(portfolio)/layout.tsx` so content clears the fixed bottom tab bar on mobile.
- [x] **Hero role text can clip on small screens.** ✅ Fixed — removed `truncate` from the rotating `<h2>` in `src/components/home/HeroSection.tsx` so role titles wrap instead of clipping.
- [x] **Broken scale utility.** ✅ Fixed — `md:scale-130` → `md:scale-125` (valid default) in `src/components/home/HeroSection.tsx`. Also replaced the other dead one-offs in that file: `leading-1/2` → `leading-[1.15]`, `min-w-2` → `min-w-[10rem]`.

## 🟡 Low priority (content / polish)

- [x] **Stale copyright year.** ✅ Fixed — now dynamic: `Copyright © {new Date().getFullYear()}` in `src/components/layouts/Footer.tsx` (Footer is a server component, so this is safe).
- [x] **Inconsistent Twitter handle.** ✅ Fixed — standardized the Contact page on `MuhabatNiazi` (matching Footer + FindMe). ⚠️ Verify `MuhabatNiazi` is the correct live handle; if it's actually `niaziiii`, flip all three.
- [x] **Verify background image path.** ✅ Fixed — `bg.jpg` lives in `public/`, so the fragile relative `url(../bg.jpg)` was changed to absolute `url(/bg.jpg)` in `src/app/layout.tsx`.

## ℹ️ Notes (no action needed)

- Project data (titles, descriptions, links, images) is stored in **MongoDB** and managed via the `/admin` dashboard — not hardcoded.
- Experience/work history is a central data file: `src/assets/data/experience.ts`. Skills and tools live in `src/assets/data/skillsData.tsx` and `toolData.tsx`.
