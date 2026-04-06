# AGENTS.md - Blackstride Digital

## Project Overview
Blackstride Digital is a web design agency. This is the agency's own marketing website, built to convert inbound leads and showcase the service offering. It will also serve as a template and reference for client websites.

**Live URL:** https://blackstride-digital-web-new.vercel.app
**Target domain:** blackstridedigital.com (pending)
**Deployment:** Vercel auto-deploys on push to `main`

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript ~5.8
- **Styling:** Tailwind CSS v4 + PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **CRM (planned):** HubSpot
- **Email automation (planned):** Resend

---

## Project Structure

```
/
├── src/
│   ├── app/                # Next.js App Router pages + layouts
│   └── components/         # Reusable UI components
├── public/branding/        # Brand assets
├── next.config.ts
├── postcss.config.mjs      # Tailwind v4 config lives here
└── CLAUDE_AUDIT_REPORT.md  # Full site audit - read before any work
```

---

## Critical Context

**Read CLAUDE_AUDIT_REPORT.md before starting any task.**

Current site status: visually complete, not yet production-ready. Key gaps:
- Lead capture CTAs are dead (no real form or booking flow)
- Proof/portfolio content uses placeholder imagery - do not treat as final
- SEO metadata is generic
- Social + legal footer links are broken

---

## Coding Standards

- TypeScript strict - no `any`, no `ts-ignore` without comment
- Tailwind utility classes only - no inline styles
- Framer Motion for all animations
- All API keys via environment variables - never hardcoded
- Commit format: `feat:`, `fix:`, `refactor:`, `chore:`

---

## What Codex Should Do

- Make UI changes in `src/components/`
- Add new pages as files in `src/app/`
- Wire up lead capture to HubSpot and Resend when instructed
- Replace placeholder copy/images only when real content is provided
- Run `npm run build` and `npm run lint` before opening a PR

## What Codex Should NOT Do

- Commit `.env` files or real API keys
- Push directly to `main` - always open a PR
- Redesign the visual direction - it is approved, preserve it
- Invent testimonials, case studies, or performance metrics
- Install new dependencies without flagging in the PR description

---

## Definition of Done

1. `npm run build` passes with no errors
2. `npm run lint` passes
3. Feature works on local preview (`npm run dev`)
4. PR opened with clear title + description
5. No secrets committed

---

## Orchestration Model

This repo is orchestrated from Cowork (Claude desktop):
1. Alex describes a task in Cowork
2. Cowork drafts a structured prompt and opens a GitHub Issue tagged `@codex`
3. Codex executes in an isolated branch and opens a PR
4. Cowork reviews the PR and reports back to Alex
5. Alex approves, merges, Vercel auto-deploys

---

## Gotchas

- Site uses Next.js App Router - use `app/` directory conventions, not `pages/`
- Tailwind v4 config is in `postcss.config.mjs`, not `tailwind.config.js`
- Placeholder content is intentional - wait for real copy before replacing
- Vercel deploys on every push to `main` - be careful what gets merged
- CLAUDE_AUDIT_REPORT.md is the source of truth for all remaining work
