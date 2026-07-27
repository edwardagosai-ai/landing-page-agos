# Agos Solutions — Landing Page Design Progress

## Project Overview

**Stack:** Vite + React (JS), CSS Modules, no UI framework
**Repo:** `https://github.com/edwardagosai-ai/landing-page-agos.git` — branch `main`
**Dev server:** `cd agos-landing && npm run dev` → `http://localhost:5173`
**Structure:** `src/components/<Section>/<Section>.jsx` + `<Section>.module.css`

---

## Design System (`src/index.css`)

### Color Tokens
```css
--color-navy-950: #050d29     /* footer/dark-section base */
--color-navy-900: #071233     /* footer gradient end */
--color-blue-600: #143fc0     /* CTA hover */
--color-blue-500: #1f56ea     /* primary brand accent */
--color-blue-400: #4779ff     /* gradient text accent */
--color-blue-300: #9fbdff     /* wave line accents */
--color-blue-200: #c9daff     /* hero glow / wave accents */
--color-blue-tint-50: #eef3ff /* light section backgrounds */
--color-blue-tint-25: #f5f8ff /* hero gradient mid-stop */
--color-border-blue: #dde6fa
--color-border-blue-strong: #d6e2ff
--color-border-dashed: #9fb4e8 /* dashed card/grid borders */
--color-ink-900: #0b1226      /* headings / body text on light */
--color-graphite-600: #5b6472
--color-graphite-700: #4a5568
--color-graphite-500: #8891a3 /* muted labels */
--color-footer-link: #8ba0d6
--color-white: #ffffff
```

### Typography
`--font-display`: **Clash Display** (Fontshare) — headings, eyebrows, numerals.
`--font-body`: **General Sans** (Fontshare) — body copy, buttons, inputs.
Headings: `font-weight: 700-800; letter-spacing: -0.02em`.

### Spacing Scale
```
--space-xs: 0.5rem  --space-sm: 1rem   --space-md: 1.75rem
--space-lg: 3rem    --space-xl: 5rem   --space-2xl: 8rem
```

### Shape & Motion
```
--radius-sm: 4px  --radius-md: 8px  --radius-lg: 14px
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Global Utilities
- `.container` — max-width 1320px, centered, `padding: 0 var(--space-lg)`
- `.eyebrow` — pill badge: `--color-blue-tint-50` bg, dashed/solid blue border, uppercase Clash Display label
- `.reveal` / `.reveal.is-visible` — fade+slide-up scroll animation via IntersectionObserver (`useReveal` hook)

---

## Section Flow (light-dominant)

```
Hero (white → #f5f8ff → #eef3ff gradient, radial glow + drifting waves)
About (#eef3ff)
Services (#eef3ff → white)
Process (white → #eef3ff, wave edge at bottom)
FAQ (#eef3ff → white)
Contact / "Let's build your system" (white → #f0f5ff gradient)
Footer (dark navy gradient, #050d29 → #071233)
```

**Key principle:** Only the Footer is dark. Every other section is white/light-blue — a full reversal from the previous dark-navy/ivory direction. There is no Testimonials section in this design.

---

## Components

### Nav (`src/components/Nav/`)
- Fixed top, transparent → white/blur (`rgba(255,255,255,0.82)` + blur) on scroll
- Logo: mark image + "Agos" (ink) / "Solutions" (blue) two-tone wordmark, no badge circle
- Links always dark (`#2a3348`) — no light/dark state swap since hero is light
- CTA: filled blue button "Book a Free Consultation" (desktop only)
- Mobile: hamburger → dropdown panel with links + full-width CTA

### Hero (`src/components/Hero/`)
- id="top"; light gradient bg, radial blue glow (top-right), 3 drifting wave SVGs at bottom (masked fade)
- Eyebrow "One system. Zero busywork." + gradient-text headline second line
- CTA row: filled primary + underlined secondary "See how it works ↓"
- Right column: floating "browser" mock card (traffic-light dots + gradient placeholder screen) with two floating info chips, `agosFloat` keyframe

### About (`src/components/About/`)
- Background `--color-blue-tint-50`
- Two-column: heading/copy left, 3-row icon list (Unified / Automated / Supported) right — no diagram

### Services (`src/components/Services/`)
- Centered heading, 3×2 dashed-border grid (6 cards): CRM & Client Management, POS, Automation & Workflows, Admin & Staff Portals, Voice AI & Chatbots, Custom Apps & Integrations
- Card hover: `#eaf6ff` background fill; icon in dashed square badge

### Process (`src/components/Process/`)
- Centered heading, 4-column numbered timeline (01–04: Discover, Design, Build, Launch & Support)
- Animated dashed connector line (`agosLineTravel` keyframe) across the top on desktop; collapses to 2-col/1-col grid on smaller screens

### FAQ (`src/components/FAQ/`)
- Centered heading + single-column accordion (max-width 760px, no longer split into two columns)
- Dashed-border item separators, `+`/rotate indicator, one-open-at-a-time via measured `offsetHeight`

### FinalCTA / Contact (`src/components/FinalCTA/`)
- id="contact"; light gradient background (no longer dark)
- Centered intro copy above a dashed-border white card containing a **3-step form**:
  1. Multi-select system chips (CRM, POS, Automation, Internal Management Tool, Voice AI/Chatbot, Not sure yet)
  2. Name / Email / Company / Industry
  3. Optional message + submit
- Progress bar + "STEP X OF 3" label; submit posts to `src/api/submitContact.js` stub
- Success state replaces the card with a confirmation panel

### Footer (`src/components/Footer/`)
- Only dark section: `linear-gradient(180deg, #050d29 0%, #071233 100%)`
- 3-column grid: brand (logo badge + tagline), Site links, Contact links (`hello@agossolutions.com`, "Book a consultation")
- Bottom bar: copyright + "Systems built in-house."

---

## Removed From Previous Design
- **Testimonials section** — no longer part of the page; component deleted along with its parallax-buildings background asset
- **WaveBackground, AngleDivider, SectionDivider components** — unused after the rebuild, removed
- **Dark hero / ivory theme, Inter font, gradient "bridge" transitions between dark and light sections** — replaced by the light-dominant blue theme (only the footer is dark now, so no bridge technique is needed)
- **Hero stats row (40+ / 6 wks / 98%)** and diagram-style About visual — dropped in favor of the floating dashboard mock and icon-list respectively

## Pending / Next Work

- Real backend (Express + MongoDB, or equivalent) for contact form lead storage — `submitContact.js` is still a stub
- Real content: an actual product/dashboard screenshot for the Hero mock card (currently a gradient placeholder), final copywriting review
- Consider reintroducing a lightweight social-proof section if testimonials become available later
