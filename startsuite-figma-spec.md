# StartSuite — Figma Design Spec
_Use this document to build the Figma file from scratch. Every value maps 1:1 to the live site._

---

## 1. CANVAS SETUP

- **Frame size:** 1440 × auto (Desktop web)
- **Secondary frame:** 390 × auto (Mobile — for future use)
- **Pages in Figma:** `🏠 Home` · `📦 Foundations` · `🤝 Partners` · `🎨 Design System`
- **Grid:** 12-column, 1200px max-width, 40px gutters on each side, 24px column gap

---

## 2. COLOR TOKENS

Set these up as **Figma Variables** (Variable collection: `Colors`).

### Backgrounds
| Token | Hex | Use |
|---|---|---|
| `bg/primary` | `#09090C` | Main page background |
| `bg/secondary` | `#0F0F14` | Alternate section background |
| `surface/default` | `#14141B` | Cards, nav, panels |
| `surface/elevated` | `#1A1A24` | Hover states, nested surfaces |

### Brand — Purple
| Token | Hex / Value | Use |
|---|---|---|
| `purple/base` | `#7B5EA7` | Primary buttons, active states |
| `purple/light` | `#A07CC5` | Labels, icons, accents, hover state for primary button |
| `purple/accent` | `#C4A9E0` | Gradient endpoint, decorative |
| `purple/glow` | `rgba(123,94,167,0.25)` | Button box-shadow |
| `purple/dim` | `rgba(123,94,167,0.12)` | Label backgrounds, icon backgrounds |
| `purple/border` | `rgba(123,94,167,0.20)` | Label borders |
| `purple/border-strong` | `rgba(123,94,167,0.35)` | Card hover borders |
| `purple/border-featured` | `rgba(123,94,167,0.40)` | Featured card borders |

### Text
| Token | Hex / Value | Use |
|---|---|---|
| `text/primary` | `#F0EEF8` | Headlines, primary body |
| `text/muted` | `rgba(240,238,248,0.5)` | Secondary body, descriptions |
| `text/dim` | `rgba(240,238,248,0.3)` | Tertiary text, placeholders, footer |

### Borders
| Token | Value | Use |
|---|---|---|
| `border/default` | `rgba(255,255,255,0.07)` | All default card/section borders |
| `border/hover` | `rgba(255,255,255,0.18)` | Button outline hover, interactive borders |

### Status
| Token | Value | Use |
|---|---|---|
| `status/error-bg` | `rgba(239,68,68,0.10)` | Problem card icon background |
| `status/error-border` | `rgba(239,68,68,0.20)` | Problem card icon border |

---

## 3. TYPOGRAPHY

Install both fonts in Figma via Google Fonts plugin:
- **Syne** (weights: 400, 500, 600, 700, 800)
- **Epilogue** (weights: 300, 400, 500, 600)

Set these as **Text Styles**:

### Display / Headings — Syne
| Style name | Font | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `Display/Hero` | Syne | 800 | 88px (clamp 52–88) | 1.1 | -0.02em |
| `Display/H1` | Syne | 700 | 68px (clamp 42–68) | 1.1 | -0.02em |
| `Display/H2-Large` | Syne | 700 | 52px (clamp 32–52) | 1.1 | -0.02em |
| `Display/H2` | Syne | 700 | 48px (clamp 32–48) | 1.1 | -0.02em |
| `Display/H2-Medium` | Syne | 700 | 40px (clamp 28–40) | 1.1 | -0.02em |
| `Display/H3` | Syne | 700 | 20px | 1.1 | -0.02em |
| `Display/H4` | Syne | 600 | 17px | 1.3 | -0.02em |
| `Display/H4-Small` | Syne | 600 | 15px | 1.3 | -0.02em |
| `Display/H4-XSmall` | Syne | 600 | 14px | 1.3 | -0.02em |

### Stat Numbers — Syne
| Style name | Font | Weight | Size |
|---|---|---|---|
| `Stat/Large` | Syne | 800 | 32px |

### Body — Epilogue
| Style name | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| `Body/XLarge` | Epilogue | 400 | 18px | 1.7 |
| `Body/Large` | Epilogue | 400 | 17px | 1.75 |
| `Body/Default` | Epilogue | 400 | 16px | 1.75 |
| `Body/Medium` | Epilogue | 400 | 15px | 1.75 |
| `Body/Small` | Epilogue | 400 | 14px | 1.7 |
| `Body/XSmall` | Epilogue | 400 | 13px | 1.6 |

### Labels / UI — Syne + Epilogue
| Style name | Font | Weight | Size | Letter Spacing | Transform |
|---|---|---|---|---|---|
| `Label/Eyebrow` | Epilogue | 500 | 12px | 0.14em | Uppercase |
| `Label/Pill` | Epilogue | 600 | 11px | 0.12em | Uppercase |
| `Label/Step` | Syne | 700 | 11px | 0.10em | Uppercase |
| `Label/Footer-Heading` | Syne | 700 | 12px | 0.10em | Uppercase |
| `Nav/Link` | Epilogue | 500 | 14px | — | — |
| `Nav/Logo` | Syne | 800 | 18px | -0.01em | — |
| `Button/Default` | Syne | 600 | 14px | — | — |
| `Button/Large` | Syne | 600 | 15px | — | — |
| `Price/Amount` | Syne | 800 | 52px | — | — |
| `Price/Period` | Epilogue | 400 | 14px | — | — |
| `Tag/Default` | Epilogue | 400 | 12px | — | — |
| `Footer/Body` | Epilogue | 400 | 14px | — | — |
| `Footer/Legal` | Epilogue | 400 | 13px | — | — |

---

## 4. SPACING SCALE

Use as **Figma Variables** (Variable collection: `Spacing`).

| Token | Value | Common use |
|---|---|---|
| `space/4` | 4px | Tight gaps (pill dot margin) |
| `space/6` | 6px | Label dot gap |
| `space/8` | 8px | Button icon gap, logo gap |
| `space/10` | 10px | Trust point list gap, model includes gap |
| `space/12` | 12px | Card inner gap, nav CTA gap |
| `space/14` | 14px | CTA button gap |
| `space/16` | 16px | Problem card gap, tag gap |
| `space/20` | 20px | Why card gap, detail card header gap |
| `space/24` | 24px | Grid gap, label bottom margin |
| `space/28` | 28px | Hero eyebrow/H1 margin |
| `space/32` | 32px | Card padding, value card padding |
| `space/36` | 36px | Detail card padding, model card padding |
| `space/40` | 40px | Section side padding, nav side padding |
| `space/48` | 48px | Hero CTA bottom margin, partner teaser gap |
| `space/60` | 60px | Hero stat gap |
| `space/64` | 64px | Grid top margin, timeline top margin |
| `space/80` | 80px | Problem/deliverables grid gap |
| `space/100` | 100px | Problem/trust/deliverables section padding |
| `space/120` | 120px | Standard section padding (top/bottom) |
| `space/140` | 140px | Hero top padding |
| `space/160` | 160px | Foundations/Partners hero top padding |

---

## 5. BORDER RADIUS SCALE

| Token | Value | Use |
|---|---|---|
| `radius/pill` | 100px | Labels/pills, stat dividers |
| `radius/sm` | 6px | Tags |
| `radius/md` | 7px | Logo mark |
| `radius/base` | 8px | Buttons (default), problem icons, why-check |
| `radius/lg` | 10px | Buttons (large) |
| `radius/card-sm` | 11px | Detail card icons |
| `radius/card` | 12px | Problem cards |
| `radius/card-md` | 14px | Value cards, why cards, detail cards, deliverable list |
| `radius/card-lg` | 16px | Model cards |
| `radius/card-xl` | 20px | Partner teaser, price card, partner hero CTA section |
| `radius/circle` | 50% | Timeline dots |

---

## 6. EFFECTS / SHADOWS

Set these as **Effect Styles**:

| Style name | Type | Value |
|---|---|---|
| `Shadow/Button-Primary` | Drop Shadow | `0 0 24px rgba(123,94,167,0.25)` |
| `Shadow/Button-Primary-Hover` | Drop Shadow | `0 0 36px rgba(123,94,167,0.40)` |
| `Shadow/Card-Featured` | Drop Shadow | `0 0 40px rgba(123,94,167,0.25)` |
| `Shadow/Price-Card` | Drop Shadow | `0 0 60px rgba(123,94,167,0.25)` |
| `Blur/Nav` | Background Blur | 20px |

---

## 7. GRADIENTS

Set as **Fill Styles**:

| Style name | Value |
|---|---|
| `Gradient/Hero-Glow` | Radial, center-top: `rgba(123,94,167,0.18)` → `transparent` (70%) |
| `Gradient/Text-Hero` | Linear 170°: `#FFFFFF` (30%) → `#C4A9E0` (100%) |
| `Gradient/Logo-Mark` | Linear 135°: `#7B5EA7` → `#C4A9E0` |
| `Gradient/Card-Top-Line` | Linear 90°: `#7B5EA7` → `transparent` |
| `Gradient/Timeline-Line` | Linear to bottom: `#7B5EA7` → `transparent` |
| `Gradient/Partner-Teaser-BG` | Linear 135°: `#14141B` (0%) → `rgba(123,94,167,0.08)` (100%) |
| `Gradient/Model-Card-Featured` | Linear 160°: `#14141B` (0%) → `rgba(123,94,167,0.08)` (100%) |
| `Gradient/Nav-BG` | `rgba(9,9,12,0.85)` + blur |
| `Gradient/Timeline-BG-Left` | `#09090C` → `rgba(123,94,167,0.08)` — used in trust section right column |

---

## 8. COMPONENTS TO BUILD

Build each as a **Figma Component** with variants where noted.

---

### 8.1 Logo Mark
- 28×28px rectangle
- Fill: `Gradient/Logo-Mark`
- Radius: `radius/md` (7px)

### 8.2 Nav Logo
- Logo Mark + "StartSuite" text
- Text style: `Nav/Logo`
- Color: `text/primary`
- Gap: `space/8`

---

### 8.3 Button
Variants: `Type` [Primary / Outline / Ghost] × `Size` [Default / Large]

**Primary / Default**
- Padding: 10px 22px
- Radius: `radius/base` (8px)
- Fill: `purple/base`
- Text: white, `Button/Default`
- Effect: `Shadow/Button-Primary`

**Primary / Large**
- Padding: 14px 28px
- Radius: `radius/lg` (10px)
- Text: `Button/Large`

**Outline / Default**
- Padding: 10px 22px
- Radius: 8px
- Fill: none
- Border: 1px `border/hover`
- Text: `text/primary`, `Button/Default`

**Ghost / Default**
- Same as Outline but text color: `text/muted`
- Border: 1px `border/default`

---

### 8.4 Pill Label (Section Eyebrow)
- Layout: horizontal, align center, gap `space/6`
- Dot: 6×6px circle, fill `purple/light`
- Text: `Label/Pill`, color `purple/light`
- Fill: `purple/dim`
- Border: 1px `purple/border`
- Radius: `radius/pill`
- Padding: 5px 12px
- Bottom margin: 24px

---

### 8.5 Nav Bar
- Height: 68px
- Width: 100% (sticky)
- Fill: `rgba(9,9,12,0.85)` + background blur 20px
- Border bottom: 1px `border/default`
- Padding: 0 40px
- Layout: space-between, align center

**Contents:** Nav Logo · Nav Links (3 items) · Nav CTA (Ghost button + Primary button)

Nav link text style: `Nav/Link`, color `text/muted` (active: `text/primary`)
Nav link gap: `space/36`
CTA button gap: `space/12`

---

### 8.6 Stat Block
- Stat Number: `Stat/Large`, color `text/primary`
- Stat Label: `Body/XSmall`, color `text/dim`, top margin 4px
- Alignment: center

**Stat Divider:** 1px wide, full height of stat row, fill `border/default`

**Stat Row:** 3× Stat Blocks separated by Stat Dividers, gap `space/60`

---

### 8.7 Problem Card
- Fill: `surface/default`
- Border: 1px `border/default`
- Radius: `radius/card` (12px)
- Padding: 20px 24px
- Layout: horizontal, gap `space/16`, align start

**Icon Container:**
- 36×36px, radius 8px
- Fill: `status/error-bg`
- Border: 1px `status/error-border`
- Content: emoji/icon, 16px

**Text:**
- Title: `Display/H4-XSmall`, color `text/primary`, bottom margin 4px
- Body: `Body/XSmall`, color `text/muted`

---

### 8.8 Value Card
Variants: `State` [Default / Hover]

- Fill: `surface/default`
- Border: 1px `border/default` (hover: `purple/border-strong`)
- Radius: `radius/card-md` (14px)
- Padding: 32px
- Top accent line: 2px, fill `Gradient/Card-Top-Line` — hidden by default, visible on hover

**Contents:**
- Step label: `Label/Step`, color `purple/light`, bottom margin 16px
- Title: `Display/H3` (20px), color `text/primary`, bottom margin 12px
- Body: `Body/Small` (14px), color `text/muted`

**Grid:** 3 columns, gap 24px, top margin 64px

---

### 8.9 Deliverable Item (5-column strip)
- Fill: `surface/default` (hover: `surface/elevated`)
- Padding: 32px 24px
- Layout: vertical, gap 12px
- Border: 1px `border/default` between items (use gap: 1px on parent + bg on parent)
- Radius on parent container: `radius/card-md`

**Contents:**
- Icon: emoji, 22px
- Title: `Display/H4-Small` (15px), color `text/primary`
- Body: `Body/XSmall` (13px), color `text/muted`

---

### 8.10 Why Card
- Fill: `surface/default`
- Border: 1px `border/default` (hover: `purple/border`)
- Radius: `radius/card-md` (14px)
- Padding: 32px
- Layout: horizontal, gap `space/20`, align start

**Check Icon:**
- 32×32px, radius 8px
- Fill: `purple/dim`
- Border: 1px `rgba(123,94,167,0.25)`
- Text: "✓", color `purple/light`, 14px bold

**Text:**
- Title: `Display/H4-Small`, color `text/primary`, bottom margin 6px
- Body: `Body/XSmall` (13px), color `text/muted`

**Grid:** 2 columns, gap 16px

---

### 8.11 Price Card
- Fill: `surface/default`
- Border: 1px `purple/border-featured`
- Radius: `radius/card-xl` (20px)
- Padding: 40px
- Effect: `Shadow/Price-Card`
- Top accent bar: 3px, fill `Gradient/Text-Hero` (white → accent), full width, inside border

**Contents (top to bottom):**
- Badge pill: "Foundations" — `purple/dim` fill, `purple/border` border, `Label/Pill` text
- Amount: `Price/Amount` (52px Syne 800), color `text/primary`
- Period: `Price/Period` (14px), color `text/dim`
- Feature list (8 items): checkmark `✓` in `purple/light` + `Body/Small` in `text/muted`, gap 12px
- Primary button (full width)
- Fine print: `Body/XSmall` (12px), color `text/dim`, centered

---

### 8.12 Detail Card (Foundations page)
- Fill: `surface/default`
- Border: 1px `border/default` (hover: `purple/border`)
- Radius: `radius/card-md` (14px)
- Padding: 36px

**Header row:** Icon container + Title, gap 14px, bottom margin 20px

**Icon Container:**
- 44×44px, radius 11px
- Fill: `purple/dim`
- Border: 1px `rgba(123,94,167,0.20)`
- Content: emoji, 20px

**Body:** `Body/Small` (14px), `text/muted`, bottom margin 20px

**Tags row:** flex wrap, gap 8px
- Each tag: `Tag/Default` (12px), color `text/dim`, fill `surface/elevated`, border 1px `border/default`, radius 6px, padding 4px 10px

**Grid:** 2 columns, gap 24px

---

### 8.13 Timeline Item
**Timeline line:** 1px vertical, left edge, fill `Gradient/Timeline-Line`

**Dot:**
- 48×48px circle
- Fill: `surface/default`
- Border: 2px `rgba(123,94,167,0.40)`
- Text: month label (`Label/Step` variant), color `purple/light`

**Content** (right of dot, gap 32px, top padding 10px):
- Title: `Display/H4` (17px), color `text/primary`, bottom margin 8px
- Body: `Body/Small` (14px), color `text/muted`

---

### 8.14 Model Card
Variants: `Type` [Default / Featured]

**Default:**
- Fill: `surface/default`
- Border: 1px `border/default`
- Radius: `radius/card-lg` (16px)
- Padding: 36px 32px

**Featured:**
- Fill: `Gradient/Model-Card-Featured`
- Border: 1px `purple/border-featured`
- Effect: `Shadow/Card-Featured`

**Contents:**
- Title: `Display/H3` (20px), bottom margin 12px
- Body: `Body/Small` (14px), `text/muted`, bottom margin 24px
- List items: "→" in `purple/light` + `Body/XSmall`, gap 10px

---

### 8.15 Trust Point (Numbered)
- Layout: horizontal, gap `space/16`, align start

**Number:**
- `Label/Step` style, 13px Syne 800, color `purple/light`
- Width: 28px, flex-shrink: 0, top padding 2px

**Text:**
- Title: `Display/H4-Small` (15px), bottom margin 4px
- Body: `Body/XSmall` (13px), `text/muted`

**List gap:** 24px

---

### 8.16 Callout Bar
- Fill: `surface/default`
- Border: 1px `border/default`
- Radius: `radius/card-md` (14px)
- Padding: 36px 48px
- Layout: horizontal, gap 48px, align center

**Divider:** 1px wide × 60px tall, fill `border/default`

**Text blocks:** `Body/Large` (17px), `text/muted`; bold inline text uses `text/primary`

---

### 8.17 Partner Teaser Block
- Fill: `Gradient/Partner-Teaser-BG`
- Border: 1px `rgba(123,94,167,0.20)`
- Radius: `radius/card-xl` (20px)
- Padding: 64px
- Layout: horizontal, space-between, gap 48px, align center

**Left:** Pill Label + H2 (40px) + body (16px, max-width 520px)
**Right:** Outline button (large, no-wrap)

---

### 8.18 Footer
**Top section:** space-between layout, bottom margin 48px
- Left: Nav Logo + body text (14px, `text/muted`, max-width 280px)
- Right: 3 link columns, gap 64px

**Column header:** `Footer-Heading` style (12px Syne 700 uppercase 0.10em), `text/dim`, bottom margin 16px
**Links:** `Footer/Body` (14px), `text/muted`, gap 10px

**Bottom bar:** border-top 1px `border/default`, padding-top 32px, space-between
- Left: copyright `Footer/Legal` (13px), `text/dim`
- Right: "Powered by 46" — 13px, `text/dim` with "46" in `purple/light` 600

---

## 9. PAGE LAYOUTS

### 9.1 Homepage Sections (top to bottom)
1. Nav Bar (sticky)
2. Hero — full viewport height, centered, gradient glow background effect
3. Problem Section — `bg/secondary`, 2-col grid (copy left, 4 cards right)
4. Value Section — `bg/primary`, 3×2 card grid
5. Deliverables Section — `bg/secondary`, header + 5-col strip
6. Why Different Section — `bg/primary`, 2×2 card grid
7. Partner Teaser Block — full-width container with inner teaser card
8. Final CTA — centered, `bg/primary`
9. Footer

### 9.2 Foundations Page Sections
1. Nav Bar
2. Hero — 2-col (copy left, Price Card right), `bg/primary`
3. Divider
4. Deliverable Detail — 2×2 Detail Card grid
5. Divider
6. Timeline — "How it works" with 4 milestone items
7. Final CTA — centered
8. Footer

### 9.3 Partners Page Sections
1. Nav Bar
2. Hero — centered, `bg/primary`
3. Divider
4. Problem + Callout Bar — `bg/primary`
5. Trust Section — `bg/secondary`, 2-col (Trust Points left, 2 Model Cards right)
6. How It Works — `bg/primary`, 3-col Value Card grid
7. Final CTA band — `bg/secondary`, centered
8. Footer

---

## 10. FIGMA FILE STRUCTURE (Recommended)

```
📁 StartSuite
├── 📄 Design System
│   ├── 🎨 Colors
│   ├── ✍️  Typography
│   ├── 📐 Spacing & Radius
│   └── 🧩 Components
│       ├── Atoms (Button, Label, Tag, Stat, Divider)
│       ├── Nav (Nav Bar)
│       ├── Cards (Value, Problem, Why, Detail, Model, Price)
│       ├── Layout (Callout Bar, Partner Teaser, Timeline)
│       └── Footer
├── 📄 🏠 Home
├── 📄 📦 Foundations
└── 📄 🤝 Partners
```

---

## 11. NOTES FOR FIGMA BUILD

- Set the canvas background to `#09090C` so frames read correctly
- Use **Auto Layout** on all components — the site is flex/grid based throughout
- The hero gradient glow is a large ellipse (`rgba(123,94,167,0.18)`) placed above and behind the hero text, centered horizontally, blurred (~100px blur radius)
- Gradient text on headlines (Hero, H1s): use a rectangle fill with `Gradient/Text-Hero`, clip to text shape
- All card hover states can be set up as **interactive components** in Figma for prototype fidelity
- The 5-column deliverable strip: set parent to `bg/border/default` fill with 1px gap between children — creates the divider line effect cleanly
