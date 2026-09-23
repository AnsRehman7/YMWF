# Young Merit Welfare Foundation — website

React 19 + Vite 8 + Tailwind v4 + React Router 7.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Where the content lives

**Everything the site displays comes from [`src/data/site.js`](src/data/site.js).** Copy,
programme descriptions, events, chapters, partners, giving options, and the caption and
category for every photograph are all in that one file. Editing it changes the site — no
component code needs touching.

Original photographs live in `photos-source/` (not served). `npm run images` converts them
to two WebP sizes in `public/img/` — 1600px for heroes and the lightbox, 720px for grid
thumbnails — and `npm run build` runs it first. To add a photo: drop the original into
`photos-source/`, run `npm run images`, and add a line to `site.js`.

## Structure

```
src/
  data/site.js        all content
  components/         Navbar, Footer, PageHeader, Reveal, Counter, Logo, Icons
  pages/              Home, About, Programmes, ProgramDetail, Events, EventDetail,
                      Chapters, Gallery, GetInvolved, Donate, Contact, NotFound
```

## Design

Brand colours are derived from the YMWF crest and defined as Tailwind theme tokens in
[`src/index.css`](src/index.css): `navy` (deep royal blue), `sky-brand` (cyan), `coral`
(the red of the outer ring), `amber-brand`, and a `slatey` neutral ramp carrying a faint
blue bias. There is no pure black anywhere — the darkest ink is `navy-950`.

Type is Outfit for display and Inter for body, with Noto Nastaliq Urdu for Urdu passages.

Motion: scroll-reveal (`Reveal`), count-up statistics (`Counter`), hover lifts on cards
and buttons, a marquee on the chapters strip. All of it is disabled under
`prefers-reduced-motion`.

## Before this goes live

These are placeholders, marked in the UI where a visitor would see them:

- **Logo** — `src/components/Logo.jsx` draws an SVG approximation of the crest. Replace it
  with the real logo file (SVG or transparent PNG); keep the props the same.
- **Impact numbers** — `impact.stats` in `site.js` currently counts chapters and programmes,
  which are verifiable. Add real reach figures (students supported, blood units, families
  reached) once confirmed.
- **Registration details** — footer and Donate page have slots for the registration number,
  NTN and tax-exemption status.
- **Bank account** — `bankDetails.bank` is empty. The two mobile wallet numbers come from
  YMWF campaign artwork and must be confirmed as the official donation accounts.
- **Forms** — the Get Involved and Contact forms hand off to WhatsApp rather than posting
  anywhere. Wire them to a form service or inbox.
- **Board and cabinet** — only two people are listed. Add the rest with headshots.
- **Email address** — needs the domain first.

One image was deliberately left out of the site: `IMG-20260829-WA0011.jpg` is a stock photo
carrying a Dreamstime watermark. It should not be published.
