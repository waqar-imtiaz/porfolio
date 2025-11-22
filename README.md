# Waqar Imtiaz — Portfolio (Next.js)

Modern, animated, and accessible portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and a lightweight shadcn-style component setup.

## Getting Started
- Install: `npm install`
- Run dev server: `npm run dev` then open `http://localhost:3000`
- Lint: `npm run lint`
- Production build: `npm run build` then `npm start`

## Content Model
- Primary content lives in `data/content.ts`:
  - Hero/social info: `profile`
  - About blurb: `about.summary`
  - Skills: `skills.core`, `skills.daily`, `skills.also`
  - Experience timeline: `experiences` array
  - Projects (with categories for filtering): `projects` array
  - Highlights section: `highlights`
  - Contact note: `contactNote`
- Update resume file at `public/waqar-imtiaz-resume.pdf` (replace the placeholder).

## Customization Tips
- Navigation + layout: `app/page.tsx`, `components/navbar.tsx`
- Theming: `components/theme-toggle.tsx` (uses `next-themes`)
- UI primitives: `components/ui/button.tsx`, utility `lib/utils.ts`
- Tailwind theme tokens live in `tailwind.config.ts` and `app/globals.css`

## Contact Form
- UI: `components/contact.tsx`
- Email handler: `app/api/contact/route.ts` uses SMTP via `nodemailer`.
  - Configure env vars (see `.env.example`): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`, `CONTACT_FROM`.
  - Deploy on a Node-friendly host (Vercel, Coolify, etc.). Hostinger shared/PHP-only won’t run this API route.
  - Swap to another provider easily: call Formspree/Web3Forms or Resend inside the route.

## SEO & Meta
- Page metadata and structured data live in `app/layout.tsx` (Open Graph, Twitter card, Person schema).

## Future Enhancements
1) Add a /work or /case-studies route with deep dives, metrics, and screenshots.
2) Introduce a blog (MDX) for architecture notes and engineering leadership topics.
3) Internationalization (i18n) with language switcher for key markets.
4) Hook the contact form to an email service with spam protection and success analytics.
5) Include lighthouse/performance budgets and monitoring hooks for production deploys.
