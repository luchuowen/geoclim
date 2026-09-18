<!-- paths: styles/**, components/**, reference/**, app/**/*.css, app/layout.tsx -->
# Design tokens

Source of truth for every visual value: `reference/geoclim_spatial_register.html`
(protected — read it, never edit or delete it). Port values exactly; do not
reinterpret or "improve" a color, spacing, or radius.

```css
--ground: #FFFFFF;      --wash: #EBEDFD;        --wash-rose: #F4DCE3;
--panel: #F5F5F5;       --panel-line: #EDEDED;  --ink: #02051F;
--muted: #6E6E6E;       --muted-dim: #9A9A9A;   --hairline: #E4E4E4;
--accent: #081B99;      --accent-soft: #3448C4; --ink-on-accent: #FFFFFF;
--display: 'Crimson Pro', Georgia, serif;
--body: 'Inter', -apple-system, sans-serif;
--mono: 'IBM Plex Mono', ui-monospace, monospace;
--max-w: 1280px;
--gutter: 96px;  /* 28px at ≤900px, 20px at ≤520px */
```

Type usage: Crimson Pro for hero H1s only, Inter everywhere else, IBM Plex
Mono for data/coordinates/status markers. No system-font fallback as a
primary face.

**Radii are per-component — verify each against the reference file, do not
assume one sitewide value:**

| Component | Radius |
|---|---|
| Pill / button (`.btn`) | 32px |
| Data panel | 10px |
| Sector card grid container | 10px |
| Dropdown menu | 12px |
| Nav burger button | 8px |
| Panel coordinate readout | 3px |
| Globe panel | 14px |

Breakpoints: `900px` (nav collapses to mobile sheet), `760px`, `640px`,
`560px`, `520px` (gutter shrinks further) — check the reference file's actual
media queries per component, they are not all the same set.

`prefers-reduced-motion: reduce` must be respected everywhere the mockup
defines a reduced-motion fallback (scroll-reveal, hero animations, globe
rotation, count-up) — port the fallback, not just the animation.

Fonts load as Google Fonts `<link>` tags in `app/layout.tsx`: Crimson Pro
(500/600/700), Inter (400/500/600/700), IBM Plex Mono (400/500/600).

SVG devices (`WireGlobe`, `DataPanel`, `lib/svg-devices.ts`) are pure
deterministic TS/React — no `dangerouslySetInnerHTML`, no `useEffect` DOM
mutation (gated by `svg-devices-stay-pure` in the manifest).
