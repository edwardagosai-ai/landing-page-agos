# Agos Solutions — Color & Type Reference

Single source of truth: [`src/index.css`](src/index.css) (`:root` block). Every
component pulls colors from these CSS variables — never hardcode a hex value
in a component file; add/extend a token here instead.

## Core palette

| Token                  | Hex       | Role                                              | Used in |
|-------------------------|-----------|----------------------------------------------------|---------|
| `--color-navy-950`      | `#060d1a` | Darkest background (footer, hero gradient top)     | Hero, FinalCTA, Footer |
| `--color-navy-900`      | `#0a1628` | Primary dark section background                    | Hero, Services, Testimonials, Nav (scrolled), body text color on light sections |
| `--color-navy-800`      | `#101f38` | Secondary dark surface / card background           | Services cards, Testimonials cards, FinalCTA gradient |
| `--color-navy-700`      | `#182a4a` | Dark surface border                                 | Services card border, Testimonials card border |
| `--color-blue-500`      | `#1e5bff` | **Brand blue** — primary CTA / accent (from logo)   | Buttons, eyebrow labels, links, FAQ accents, wave front layer |
| `--color-blue-400`      | `#4779ff` | Hover state for brand blue                          | Button hover states |
| `--color-blue-300`      | `#84a3ff` | Lighter accent for text-on-dark emphasis            | Hero "as fast" italic, secondary CTA hover |
| `--color-ivory-100`     | `#f7f3ec` | Primary light background (replaces stark white)    | About, Process, FAQ sections, light text on dark |
| `--color-ivory-200`     | `#efe9dd` | Light section border / divider                      | Card borders, FAQ dividers |
| `--color-graphite-600`  | `#5b6472` | Secondary text on light backgrounds                 | Captions, role labels |
| `--color-graphite-700`  | `#3d4552` | Body copy on light backgrounds                      | About/Process/FAQ paragraph text |
| `--color-white`         | `#ffffff` | Pure white                                          | Nav logo badge, button text, form inputs |

## Typography

| Token             | Value                              | Role |
|--------------------|-------------------------------------|------|
| `--font-display`  | `'Fraunces', Georgia, serif`        | All headings (h1–h4) — editorial/premium feel |
| `--font-body`      | `'Inter', system-ui, sans-serif`    | Body copy, nav, buttons, form fields |

Loaded via Google Fonts in [`index.html`](index.html).

## Section background pattern

The page alternates dark/light bands for rhythm:

1. Hero — dark (`navy-950` → `navy-800` gradient)
2. About — light (`ivory-100`)
3. Services — dark (`navy-900`)
4. Process — light (`ivory-100`)
5. Testimonials — dark (`navy-900`)
6. FAQ — light (`ivory-100`)
7. Final CTA — dark (`navy-800` → `navy-950` gradient)
8. Footer — darkest (`navy-950`)

## Changing the palette

Edit the hex values in `src/index.css` only — every component references the
variables, so a token change propagates everywhere automatically. If you add
a new color, give it a semantic step name (e.g. `--color-blue-600`) consistent
with the existing scale rather than a one-off name tied to where it's used.
