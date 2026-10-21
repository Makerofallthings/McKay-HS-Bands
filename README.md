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

