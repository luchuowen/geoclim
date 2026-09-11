# GeoClim East Africa — marketing site

Next.js 14 (App Router, TypeScript) build of GeoClim East Africa's marketing
site for agency NAVAC Global. See `CLAUDE.md` for the compressed build
reference (design tokens, ownership rules, conventions) and `docs/01`–`docs/11`
for the full spec.

## Running locally

```
npm install
npm run dev      # local dev server, http://localhost:3000
npm run build    # production build — must succeed with zero type errors
npm run lint
```

## File ownership

This site is built across several disjoint-file sessions/branches so they
can run independently without touching the same files. See
`docs/02_claude_code_implementation_plan.md` §2–3 for the full
session/branch model and dependency graph, and `CLAUDE.md`'s "File
ownership" table for the per-session owned-file list. **Never edit a file
outside your own session's owned list.**

## Design source of truth

`reference/geoclim_spatial_register.html` is the client-approved,
single-file HTML/CSS/JS mockup that every visual value in `styles/**` and
`components/**` is ported from verbatim. **Do not delete this file** — it
is the reference for every future session and for QA.
