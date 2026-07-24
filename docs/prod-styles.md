# Production style tokens — enterprise.accredian.com

Extracted directly from the live site's DOM (`getComputedStyle` + Tailwind class
inspection) and its bundled stylesheet (`assets/index-DatIGWsw.css`) at 1920x1080.
Every change in this clone should trace back to a line here.

## Fonts
- Single custom font: `font-family: circular` (Tailwind class `font-circular`),
  self-hosted, ONE weight only:
  `@font-face{font-family:circular;src:url(/assets/CircularXXWeb-Book-CfI_oc0O.woff2)}`
  (no separate bold file — bold headings are browser-synthesized).
- Body: 16px/24px, weight 400.
- h1 (Hero): 60px/60px desktop (`text-2xl sm:text-4xl lg:text-6xl xxl:text-7xl
  font-bold`), capitalize, weight 700.
- h2 (section headings): `text-2xl md:text-4xl font-bold text-gray-900
  leading-tight` → 36px/40px desktop, weight 700, color `#111827` (gray-900).
- Section subtitle: `text-sm sm:text-lg text-gray-700 mt-3`.
- No letter-spacing anywhere (`letter-spacing: normal`).

## Colors
- Brand blue ("universal", used for buttons/bars/links): `rgb(26,115,232)` = `#1a73e8`.
- Icon blue (Domain Expertise icons only): Tailwind `blue-600` = `#2563eb` (different
  token from "universal" — intentional in prod, both exist).
- Headings: `text-gray-900` (#111827). Body copy: `text-gray-700` / `text-gray-600`.
- How We Deliver cards: `bg-blue-50` + `border-blue-300`.
- Testimonial cards: `bg-white` + `border-gray-300`, no shadow.
- Footer: `bg-white` desktop (dark `#1d1d1d` only on mobile, not relevant at desktop).

## Layout shell
- Outer page wrapper: `max-w-[85rem] w-full` (1360px), centered, `sm:px-16 px-0`.
- Domain Expertise inner wrapper: `max-w-6xl mx-auto px-4` (1152px) — nested
  narrower container for that grid only.
- Nav (`<nav>`, position `fixed top-0 w-full z-50`, NOT sticky): height 80px,
  class `bg-white shadow-md py-6 px-6 md:px-14`.
- Logo: real `<img>` (not text), `src=".../logo.webp"`, class `w-[124px] h-[32px]`.

## Buttons
- "Enquire Now": `bg-universal text-white rounded-lg shadow-md p-[7px] text-md
  font-normal` (16px, weight 400 — NOT bold), width `w-[80%] sm:w-[170px]`.
  Border-radius = `rounded-lg` (8px), not a pill.
- CTA "Contact Us": solid white bg, `text-blue-500`, `rounded-lg`, `text-xl
  font-semibold`, icon = FontAwesome chevron-right SVG (path below), not an
  arrow character.
  ```
  <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6
  0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7
  4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>
  ```

## Hero
- Feature list: `<ul class="grid grid-cols-2 mx-auto sm:flex sm:mx-0
  sm:justify-start sm:flex-wrap gap-4">`, each `<li class="flex items-center
  gap-2 mb-2">` — single horizontal row at `sm:`, icon = lucide `CircleCheck`
  (`w-6 h-6 text-green-600`), inline before the label (not stacked).
- Card: `rounded-lg md:rounded-3xl bg-blue-50 ... shadow-card overflow-visible`
  — `overflow-visible` is what lets the photo bleed past the card's bottom edge.
- Image wrapper: `flex w-full sm:w-1/2 sm:justify-end sm:items-end` (bottom/right
  aligned) — image itself `sm:w-full sm:h-full` (fills its half at desktop).
- Real hero photo asset: `corporate-big-hero-v4.webp`.

## Our Domain Expertise
- Cards: `p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center
  items-center bg-white border border-gray-200 rounded-xl shadow-lg` — very
  little padding (8px), 3-per-row at `sm:` via **flex-wrap, not CSS grid**.
- Wrapper: `flex flex-wrap justify-center gap-4 w-full` — the 7th (odd) card is
  centered automatically because the wrapper uses `justify-center` with wrapping
  flex items, not because of any special last-child rule.
- Icons (lucide-react, `text-blue-600`, `w-6 h-6 sm:w-14 sm:h-14`):
  - Product & Innovation Hub → `Lightbulb`
  - Gen-AI Mastery → `Brain`
  - Leadership Elevation → `Users`
  - Tech & Data Insights → `ChartNoAxesColumnIncreasing`
  - Operations Excellence → `Settings`
  - Digital Enterprise → `Globe`
  - Fintech Innovation Lab → `Banknote`
- Title: `text-[10px] sm:text-lg font-semibold text-center text-gray-900`.

## Who Should Join / Strategic Skill Enhancement
- Contained card, NOT full-bleed: `mt-12 sm:mt-28 xl:px-6 px-4 lg:mx-10
  bg-universal sm:rounded-lg flex flex-col md:flex-row` — rounded + margined
  inside the page container (edge-to-edge only below `sm:`).
- Eyebrow "Who Should Join?": `<h4 class="text-lg sm:text-xl font-medium">` —
  title case as written, no uppercase transform, no letter-spacing.
- Audience items: no card wrapper at all (`class=""` on the container) — just
  icon + heading (`text-[16px] sm:text-[22px] font-semibold`) + description
  directly on the blue background, text colored via inherited `text-white`.

## The Accredian Edge
- NOT a hand-built DOM timeline — it's a single full-width image:
  desktop `accredian-edge-usp-v3.svg`, mobile `accredian-edge-usp-mobile.svg`,
  class `w-[100%] h-auto rounded-lg`. Heading wrapper: `mt-12 px-4 md:px-8
  xl:px-12` (plain top margin, nothing exotic — the "clipped behind sticky
  header" bug in our clone is an anchor-scroll issue: the fixed nav has no
  matching `scroll-margin-top` on the target section, so `#clients`/`#accredian-edge`
  jumps land the heading directly under the fixed header).

## How We Deliver Results That Matter
- Heading: `<h2 class="text-2xl mx-1 md:text-4xl font-bold text-gray-900
  leading-tight">How We <span class="text-universal">Deliver Results</span>
  That Matter?</h2>` — only "Deliver Results" is blue; rest is `text-gray-900`.
- Cards: `relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4
  sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full`, wrapper
  `flex flex-wrap justify-center gap-8 px-4`.
- Each card has two decorative bars as direct children:
  `absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2
  h-12 sm:h-36 bg-universal rounded-lg` (mirrored on the right with `right-`).
- Step number badge: `absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6
  border-blue-300 border-2 bg-white rounded-full`.
- Icon circle: `w-12 h-12 sm:w-16 sm:h-16 bg-universal text-white rounded-full
  shadow-md`. Step 1 icon = lucide `ChartNoAxesCombined` (bar-chart/analytics),
  not a search icon.
- Description text is `hidden sm:block` (hidden on mobile).

## Testimonials
- Section background: plain white (no wrapping color class found — confirmed
  visually white, not `bg-blue-50`).
- Cards: `bg-white border border-gray-300 rounded-xl p-6 ... min-h-[250px]` —
  **no shadow class at all**.
- Logos: `h-14 w-14 object-contain` (56px).
- Uses Swiper.js in prod (confirmed via `.swiper-slide`/`.swiper-pagination-bullet`
  + a `swiper-icons` `@font-face` in the CSS) — 3 slides, 2 visible per view,
  **2 pagination dots** (`ceil(3/2)`), not one dot per slide.
  → We are NOT adding the Swiper dependency for this (no genuine need for a
  3-item carousel); fixing our existing native scroll-snap Carousel's dot count
  to be per-page instead of per-slide reproduces the same behavior.
- Quote marks are straight `"..."`, not curly `&ldquo;/&rdquo;`.

## CTA banner
- Container: `cta-grad border border-universal w-full max-w-[85rem] py-8
  md:py-16 md:px-12 px-6 bg-universal rounded-xl flex items-center
  md:justify-between md:flex-row flex-col gap-6` — shorter (`py-8`/`py-16`,
  not a forced min-height) and vertically centered via `items-center`.
- `.cta-grad` background (the decorative arcs) is a **CSS background-image**,
  not DOM elements:
  ```
  .cta-grad{background-image:url(.../cta-circle.svg);background-repeat:no-repeat;
  background-position:80% 5%;background-size:700px 700px;position:relative}
  ```
  SVG copied to `src/components/images/cta-circle.svg` (concentric blue circles,
  174x174 viewBox).
- Headset icon container: `w-full h-full bg-white rounded-xl p-2` (white rounded
  square), icon `text-universal`.
- Heading: `text-xl md:text-3xl font-semibold text-white font-circular`.
- Button: see Buttons section above.

## Footer
- Social icons: MUI icon components, plain glyphs, `sm:text-gray-700` (desktop)
  `hover:text-universal` — **no background circle**.
- Email: `mailto:` link, `class="text-universal"` (blue hyperlink), not plain text.
- Office address: `class="text-white sm:text-gray-700 mt-2 max-w-lg"` — `max-w-lg`
  (32rem/512px) is what forces the two-line wrap.
- Footer bg: white at desktop (`sm:bg-white`).

## Assets copied from prod for exact fidelity
- `CircularXXWeb-Book-CfI_oc0O.woff2` → `src/assets/fonts/circular-book.woff2`
- `cta-circle.svg` → `src/components/images/cta-circle.svg`
