# Accredian Enterprise — Landing Page Clone

A partial, structurally-faithful clone of the [Accredian Enterprise](https://enterprise.accredian.com/)
landing page, built as a take-home assignment submission. All copy, imagery, and client
wordmarks are original placeholder content written to match the site's structure and section
order — no scraped text, real logos, or trademarked assets were used. Client names (Reliance,
HCL, IBM, CRIF, ADP, BAYER) are rendered as styled text, not logo images.

## Tech stack

- React 18 (functional components + hooks only) + Vite
- Tailwind CSS
- lucide-react for icons (social icons are small hand-styled monogram badges, not brand SVGs)
- No React Router: this is one scrolling page with anchor-based nav, so a router added nothing
- A mock lead-capture API (`POST /api/leads`), implemented once in
  [`api/_shared/leadsHandler.js`](api/_shared/leadsHandler.js) and reused by:
  - a Vite dev-server middleware plugin (`vite.config.js`) for `npm run dev`
  - a Vercel serverless function (`api/leads.js`) for production

## Project structure

```
api/
  leads.js                  # Vercel serverless function
  _shared/leadsHandler.js   # validation + in-memory store, shared by dev & prod
  _shared/leadsHandler.test.js  # runnable self-check (node api/_shared/leadsHandler.test.js)
src/
  api/leads.js               # client-side fetch wrapper
  context/EnquireModalContext.jsx  # open/close state for the Enquire Now modal
  components/
    ui/                      # shared primitives: Button, Card, Container, SectionHeading,
                              # Modal, Accordion, Carousel
    sections/                # all 14 landing-page sections, one per file, in page order
    EnquireModal.jsx          # the lead-capture modal (uses ui/Modal + hooks/useLeadForm)
  hooks/
    useActiveSection.js       # scrollspy for navbar active-link highlighting
    useLeadForm.js            # form state, validation, submit lifecycle
  App.jsx                    # assembles all 14 sections + navbar/footer/modal
```

## Setup — run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173. The Enquire Now form posts to `/api/leads`, handled in-process by
a Vite middleware plugin — no separate API server or process to start.

Other scripts:

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint        # oxlint
node api/_shared/leadsHandler.test.js   # runs the handler's self-check assertions
```

## Approach taken

- **Section-per-component, in page order**: each of the 14 sections lives in its own file
  under `src/components/sections/`, matching the exact order specified (Navbar → Hero → Stats
  → Partnerships → Accredian Edge Timeline → Domain Expertise → Course Segmentation → Who
  Should Join → CAT Framework → How We Deliver → FAQs → Testimonials → CTA Banner → Footer),
  composed together in `App.jsx`.
- **One shared modal, opened from four places**: the Enquire Now modal is triggered from the
  navbar, hero, FAQ block, and footer. Its open/close state lives in a small React Context
  (`EnquireModalContext`) rather than being prop-drilled or duplicated — the only place in
  this app where Context was the right call, since the state is genuinely needed by unrelated
  components.
- **One API handler, two entry points**: validation + storage logic lives in a single
  framework-agnostic module (`api/_shared/leadsHandler.js`) so dev (Vite middleware) and
  production (Vercel function) can't drift out of sync.
- **In-memory lead storage**: intentional for this demo. It resets on every server
  restart/cold start. Vercel serverless functions have no writable filesystem anyway, so a
  real deployment would swap this for an actual database — see Future Improvements.
- **Scrollspy via `IntersectionObserver`**: native browser API, no scroll-position math or
  extra dependency.
- **Testimonials carousel is hand-rolled** (CSS scroll-snap + scroll position drives the dot
  pagination) rather than a carousel dependency — 2 cards visible on desktop, 1 on mobile,
  matching the spec without adding a library for it.
- **Images are styled placeholder blocks**, not hotlinked stock photos — gradient-tinted
  panels with a relevant icon, in the brand blue palette. No external image requests that
  could 404 or slow down the deployed site.

## AI Usage

<!--
  Fill this in with what you changed manually after the AI-generated scaffold/components —
  e.g. copy edits, styling tweaks, bugs you fixed, sections you rewrote by hand, or anything
  you'd want a reviewer to know was your own work vs. AI-assisted.
-->

## Future improvements

- Swap the in-memory lead store for a real database (e.g. Vercel Postgres, Supabase) so
  submissions persist across deployments/cold starts.
- Add automated component/E2E tests (React Testing Library, Playwright) beyond the current
  handler-level assertions.
- Add rate-limiting/spam protection (e.g. honeypot field or CAPTCHA) to the public lead form.
- Replace placeholder image blocks with real photography once licensed assets are available.
- Add a proper multi-select or searchable dropdown for "Select Domain" if the list grows.
- Optional dark mode, given the design tokens are already centralized in `tailwind.config.js`.

## Deploying to Vercel

1. Push this repo to GitHub (or import it directly from local via the Vercel CLI).
2. In Vercel, "Add New Project" → import the repo.
3. Build settings (Vercel usually auto-detects these from `vercel.json`, but for reference):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. No environment variables are required for this demo.
5. `vercel.json` in the repo root already:
   - rewrites all non-`/api` routes to `/index.html` (safe for direct loads/refreshes even
     though this is a single-page site with anchor navigation)
   - lets Vercel auto-detect `api/leads.js` as a serverless function (Vercel treats any file
     under `/api` as a function automatically — no extra config needed for that part)

Deploy via the Vercel dashboard, or via CLI:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```
