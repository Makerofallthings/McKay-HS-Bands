# McKay High School Bands website

This is a buildless, multi-page static website. The website's `index.html`, HTML pages, and `assets/` folder are at the repository root.

## Preview locally

Serve the repository root with any static file server, then open the printed local URL.

## GitHub Pages

GitHub Pages serves the website directly from `main` without a build step. The workflow checks JavaScript syntax; GitHub's branch deployment publishes the site.

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select branch **main**, folder **/(root)**, then save.

Expected address: https://makerofallthings.github.io/McKay-HS-Bands/

No package installation or build step is needed. All internal assets and navigation use relative paths so they work under the repository's Pages subdirectory.

## Mobile layout and images

Phone layouts use a dedicated hero composition, grouped menu, full-width inline search, compact puzzle cards, and an agenda-first calendar with a month-view switch. Desktop layouts retain their existing composition. All content and links remain available.

`assets/responsive/` contains pre-generated 480px and 960px WebP photographs and smaller copies of the existing site emblem. HTML `srcset` lets browsers select an appropriate image; off-screen editorial photos load lazily. Original photographs are retained. No image conversion runs for visitors, and no backend service is required.

To regenerate responsive assets after replacing photography, run `node scripts/optimize-images.mjs` in a development environment with Sharp installed, or pass the absolute path of an existing Sharp module as the first argument. Publish the generated assets alongside the HTML; publishing still needs no build step.

The gallery advances about every two seconds while at least a quarter of it is visible. Its single play/pause control works on phones and desktops. Autoplay stops off-screen, in background tabs, during touch interaction, and while keyboard focus is inside a slide; reduced-motion visitors start paused.

Manrope and Playfair Display are self-hosted and preloaded from `assets/fonts/` to keep typography consistent between visits. Their SIL Open Font License notices are included alongside the font files.

## Content sources

- Existing McKay Bands website: ensemble descriptions, live calendar IDs, contact details, marching music file, jazz audition folders, and external resources.
- McKay High School official band page: current program structure, ensemble descriptions, and program photography — https://mckay.salkeiz.k12.or.us/academics/band
- Oregon Symphony 2025/26 Salem Music Educator of the Year nominee profile: Scott Avzaradel biography, portrait, and 180+ student figure — https://www.orsymphony.org/2025-2026-salem-music-educator-of-the-year
- OSAA Band/Orchestra records and masked results: 2024–2026 placement history, the 2025 5A state title, scores, and 2025–26 All-State honors — https://www.osaa.org/docs/bnd/records/BandOrchestraChampions.pdf
- Salem Reporter: February 2026 Disneyland Main Street performance and program-supplied trip photo — https://www.salemreporter.com/2026/02/25/mckay-marching-band-performs-at-disneyland/
- McKay Music Boosters, Salem-Keizer district giving portal, and BottleDrop: support links shown on the home page.

## Structure

- `index.html`: home page and ensemble directory
- `*-band.html`, `wind-ensemble.html`, `percussion.html`: six ensemble pages
- `calendar.html`: live embedded program calendars
- `director.html`: director profile
- `contact.html`: contact information, map, and related links
- `assets/site.css`: responsive layout and visual design
- `assets/site.js`: navigation, section search, mobile menu, looping photo carousel, live event status, and reveal interactions
- `assets/`: site icons and photography, including user-supplied program images

