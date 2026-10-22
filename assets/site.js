document.documentElement.classList.add('js');

const pages = [
  { title: 'Home', path: 'index.html', desc: 'McKay High School Bands overview and latest highlights' },
  { title: 'Ensembles', path: 'index.html#ensembles', desc: 'Explore all six performance ensembles' },
  { title: 'Marching Band', path: 'marching-band.html', desc: 'Royal Scot football games, parades, and field performance' },
  { title: 'Concert Band', path: 'concert-band.html', desc: 'A welcoming, non-auditioned concert ensemble' },
  { title: 'Symphonic Band', path: 'symphonic-band.html', desc: 'An auditioned ensemble for developing musicians' },
  { title: 'Wind Ensemble', path: 'wind-ensemble.html', desc: 'McKay’s premier auditioned concert ensemble' },
  { title: 'Jazz Band', path: 'jazz-band.html', desc: 'Jazz festivals, improvisation, and audition resources' },
  { title: 'Percussion', path: 'percussion.html', desc: 'Drum line and concert percussion studies' },
  { title: 'Calendar', path: 'calendar.html', desc: 'Live McKay Bands rehearsal and performance calendar' },
  { title: 'Director', path: 'director.html', desc: 'Meet Director of Bands Scott Avzaradel' },
  { title: 'Contact', path: 'contact.html', desc: 'Contact the program and find McKay High School' }
];

const iconSearch = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>`;

function basePath() { return ''; }

function currentFile() {
  const file = location.pathname.split('/').pop();
  return file || 'index.html';
}

function headerMarkup() {
  const current = currentFile();
  const ensemblePages = ['index.html#ensembles','marching-band.html','concert-band.html','symphonic-band.html','wind-ensemble.html','jazz-band.html','percussion.html'];
  const active = path => current === path ? ' aria-current="page"' : '';
  const ensembleActive = ensemblePages.includes(current) ? ' aria-current="page"' : '';
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" data-header>
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="McKay High School Bands home"><img src="assets/responsive/mckay-mark-192.webp" alt="" width="192" height="192"><span>McKay<small>High School Bands</small></span></a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          <a href="index.html"${active('index.html')}>Home</a>
          <div class="dropdown">
            <a href="index.html#ensembles"${ensembleActive}>Ensembles</a>
            <div class="dropdown-menu">
              <a href="marching-band.html">Marching Band <span>01</span></a>
              <a href="concert-band.html">Concert Band <span>02</span></a>
              <a href="symphonic-band.html">Symphonic Band <span>03</span></a>
              <a href="wind-ensemble.html">Wind Ensemble <span>04</span></a>
              <a href="jazz-band.html">Jazz Band <span>05</span></a>
              <a href="percussion.html">Percussion <span>06</span></a>
            </div>
          </div>
          <a href="calendar.html"${active('calendar.html')}>Calendar</a>
          <a href="director.html"${active('director.html')}>Director</a>
          <a href="contact.html"${active('contact.html')}>Contact</a>
          <a class="nav-support" href="index.html#support">Support</a>
        </nav>
        <div class="nav-search-slot">
          <button class="nav-button nav-search" type="button" data-search-open aria-label="Search site" aria-expanded="false">${iconSearch}</button>
          ${searchMarkup()}
        </div>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-navigation" data-menu-toggle><span></span></button>
        <nav class="mobile-nav" id="mobile-navigation" data-mobile-nav aria-label="Mobile navigation" aria-hidden="true" hidden>
          <div class="mobile-nav-primary">
            ${pages.filter(p => ['index.html','calendar.html','director.html','contact.html'].includes(p.path)).map(p => `<a href="${p.path}"${active(p.path)}>${p.title}<span aria-hidden="true">↗</span></a>`).join('')}
          </div>
          <details class="mobile-ensembles"${ensemblePages.includes(current) ? ' open' : ''}>
            <summary>Ensembles <span>Explore all six <b aria-hidden="true">+</b></span></summary>
            <div class="mobile-ensemble-links">${pages.filter(p => ensemblePages.includes(p.path) && !p.path.includes('#')).map(p => `<a href="${p.path}"${active(p.path)}>${p.title}<span aria-hidden="true">→</span></a>`).join('')}</div>
            <a class="mobile-all-ensembles" href="index.html#ensembles">Compare all ensembles →</a>
          </details>
          <a class="nav-support" href="index.html#support">Support the program <span aria-hidden="true">↗</span></a>
          <button class="nav-button" type="button" data-search-open>Search the site</button>
        </nav>
      </div>
    </header>`;
}

function footerMarkup() {
  return `
  <footer class="site-footer">
    <div class="shell footer-grid">
      <div class="footer-brand">
        <img src="assets/responsive/mckay-mark-192.webp" alt="McKay Band trumpet and crescent emblem" width="192" height="192" loading="lazy" decoding="async">
        <p>Music with purpose. A home for ambitious, expressive student musicians in Salem, Oregon.</p>
      </div>
      <div class="footer-col"><h3>Explore</h3><a href="index.html#ensembles">Ensembles</a><a href="calendar.html">Calendar</a><a href="director.html">Director</a><a href="contact.html">Contact</a></div>
      <div class="footer-col"><h3>Resources</h3><a href="index.html#support">Support the program</a><a href="https://mckay.salkeiz.k12.or.us/" target="_blank" rel="noreferrer">McKay High School</a><a href="https://www.osaa.org/activities/bnd" target="_blank" rel="noreferrer">OSAA Band</a><a href="https://salemyouthsymphony.org/" target="_blank" rel="noreferrer">Salem Youth Symphony</a></div>
      <div class="footer-col"><h3>Contact</h3><a href="mailto:avzaradel_scott@salkeiz.k12.or.us">avzaradel_scott@salkeiz.k12.or.us</a><a href="tel:+15033993080">503-399-3080</a><a href="https://maps.google.com/?q=McKay+High+School+2440+Lancaster+Drive+NE+Salem+OR+97305" target="_blank" rel="noreferrer">2440 Lancaster Dr NE<br>Salem, OR 97305</a></div>
    </div>
    <div class="shell footer-bottom"><span>© <span data-year></span> McKay High School Bands</span><span>Website designed by Trenton Cooper</span></div>
  </footer>`;
}

function searchMarkup() {
  return `<div class="nav-inline-search" data-search-modal role="search" aria-label="Site search" aria-hidden="true" hidden>
    <button class="search-close" type="button" data-search-close aria-label="Close search">×</button>
    <div class="search-box"><input class="search-input" data-search-input type="search" autocomplete="off" placeholder="Search the site" aria-label="Search site content"><div class="search-results" data-search-results aria-live="polite" aria-label="Matching sections" hidden></div></div>
  </div>`;
}

document.body.insertAdjacentHTML('afterbegin', headerMarkup());
document.body.insertAdjacentHTML('beforeend', footerMarkup());

if (currentFile() !== 'index.html') {
  const pageHeader = document.querySelector('.page-hero .shell, .page-hero .narrow');
  if (pageHeader) {
    pageHeader.insertAdjacentHTML('afterbegin', '<a class="back-home" href="index.html"><span aria-hidden="true">←</span> Back to home</a>');
  }
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const header = document.querySelector('[data-header]');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 18);
onScroll(); addEventListener('scroll', onScroll, { passive: true });

const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

function setMenuState(open) {
  mobileNav.hidden = !open;
  mobileNav.classList.toggle('open', open);
  mobileNav.setAttribute('aria-hidden', String(!open));
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
}

function closeMenu({ restoreFocus = false } = {}) {
  if (!mobileNav.classList.contains('open')) return;
  setMenuState(false);
  if (restoreFocus) menuToggle.focus();
}

menuToggle.addEventListener('click', () => {
  setMenuState(!mobileNav.classList.contains('open'));
});

mobileNav.addEventListener('click', event => {
  if (event.target.closest('a, [data-search-open]')) closeMenu();
});

document.addEventListener('click', event => {
  if (!mobileNav.classList.contains('open')) return;
  if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

// A phone keyboard or browser toolbar can change height; only close at desktop.
const desktopNavigation = matchMedia('(min-width:1081px)');
desktopNavigation.addEventListener('change', event => { if (event.matches) closeMenu(); });
addEventListener('pageshow', () => closeMenu());

document.addEventListener('keydown', event => {
  if (event.key !== 'Tab' || !mobileNav.classList.contains('open')) return;
  const controls = [menuToggle, ...focusableElements(mobileNav)];
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

const modal = document.querySelector('[data-search-modal]');
const input = document.querySelector('[data-search-input]');
const results = document.querySelector('[data-search-results]');
let searchReturnFocus = null;

const escapeSearch = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const normalizeSearch = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
function passageText(node) {
  const copy = node.cloneNode(true);
  copy.querySelectorAll('br').forEach(br => br.replaceWith(' '));
  copy.querySelectorAll('b,strong,span,small').forEach(child => child.after(' '));
  return copy.textContent.replace(/\s+/g, ' ').trim();
}
function indexContent(doc, page) {
  let heading = page.title;
  const entries = [];
  const sections = [...doc.querySelectorAll('main section')];
  [...doc.querySelectorAll('main h1,main h2,main h3,main p,main li,main figcaption,main a,main .stat,main .podium-block,main [data-event-item]')].filter(node => !node.matches('.back-home')).forEach((node, index) => {
    if (node.matches('.eyebrow,.photo-credit,.media-credit,.portrait-credit,.scroll-cue')) return;
    const text = passageText(node);
    if (!text) return;
    const isHeading = /^H[123]$/.test(node.tagName);
    if (isHeading) heading = text;
    if (!node.id) node.id = `site-search-${index}`;
    node.classList.add('search-destination');
    const localHeading = node.matches('a') ? node.querySelector('h3,strong') : null;
    const title = localHeading ? passageText(localHeading) : heading;
    entries.push({page:page.title,path:page.path,title,text,section:sections.indexOf(node.closest('section')),heading:isHeading,href:`${page.path}#${node.id}`,normalized:normalizeSearch(text + (node.tagName === 'H1' ? ` ${page.title}` : ''))});
  });
  return entries;
}
const currentPage = pages.find(page => page.path === currentFile()) || {title:document.title.split('|')[0].trim(),path:currentFile()};
const currentEntries = indexContent(document, currentPage);
let contentIndex;
let searchRevision = 0;
function loadContentIndex() {
  if (!contentIndex) contentIndex = (async () => {
    const otherPages = pages.filter(page => !page.path.includes('#') && page.path !== currentPage.path);
    const fetched = await Promise.allSettled(otherPages.map(async page => {
      const response = await fetch(page.path);
      if (!response.ok) throw new Error('Page unavailable');
      return indexContent(new DOMParser().parseFromString(await response.text(), 'text/html'), page);
    }));
    const failed = fetched.some(result => result.status === 'rejected');
    return {entries:[...currentEntries,...fetched.flatMap(result => result.status === 'fulfilled' ? result.value : [])],failed};
  })();
  return contentIndex;
}
function searchSnippet(text, tokens) {
  const lower = text.toLowerCase();
  const positions = tokens.map(token => lower.indexOf(token)).filter(position => position >= 0);
  const start = Math.max(0, (positions.length ? Math.min(...positions) : 0) - 35);
  return `${start ? '…' : ''}${text.slice(start, start + 130)}${text.length > start + 130 ? '…' : ''}`;
}
async function renderResults(query = '') {
  const revision = ++searchRevision;
  const q = normalizeSearch(query);
  results.hidden = !q;
  modal.classList.toggle('has-results', Boolean(q));
  if (!q) { results.replaceChildren(); return; }
  results.innerHTML = '<div class="search-empty">Searching the site…</div>';
  const {entries,failed} = await loadContentIndex();
  if (revision !== searchRevision) return;
  const tokens = q.split(' ');
  const matches = entries.filter(entry => tokens.every(token => entry.normalized.includes(token)))
    .map(entry => ({...entry,score:(entry.normalized === q ? 100 : 0) + (normalizeSearch(entry.title).includes(q) ? 40 : 0) + (entry.heading ? 20 : 0) + (entry.normalized.includes(q) ? 10 : 0)}))
    .sort((a,b) => b.score - a.score || a.text.length - b.text.length);
  const grouped = new Map();
  matches.forEach(entry => {const key = `${entry.path}|${entry.section}|${entry.title}`; if (!grouped.has(key)) grouped.set(key,entry);});
  const unique = [...grouped.values()];
  results.innerHTML = unique.length ? unique.slice(0,20).map(entry => `<a class="search-result" href="${escapeSearch(entry.href)}"><span><span class="search-page">${escapeSearch(entry.page)}</span><strong>${escapeSearch(entry.title)}</strong><small>${escapeSearch(searchSnippet(entry.text,tokens))}</small></span><span aria-hidden="true">↗</span></a>`).join('') : `<div class="search-empty">No matches for “${escapeSearch(query)}”. Try a name, instrument, or event.</div>`;
  if (unique.length > 20) results.insertAdjacentHTML('beforeend','<div class="search-empty">Showing the best 20 matches. Add another word to narrow your search.</div>');
  if (failed) results.insertAdjacentHTML('beforeend','<div class="search-empty">Some pages could not be searched. Reopen search to try again.</div>');
  if (failed) contentIndex = null;
}
function revealSearchDestination() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target?.classList.contains('search-destination')) return;
  document.querySelectorAll('.search-found').forEach(node => node.classList.remove('search-found'));
  target.classList.add('search-found');
  target.setAttribute('tabindex','-1');
  target.focus({preventScroll:true});
  target.scrollIntoView({block:'center',behavior:'auto'});
  setTimeout(() => target.classList.remove('search-found'),3500);
}
addEventListener('hashchange',revealSearchDestination);
addEventListener('load',() => { (document.fonts?.ready || Promise.resolve()).then(revealSearchDestination); });

function openSearch(trigger = document.activeElement) {
  const returnTarget = mobileNav.contains(trigger) ? menuToggle : trigger;
  closeMenu();
  if (!modal.classList.contains('open')) {
    searchReturnFocus = returnTarget instanceof HTMLElement ? returnTarget : document.activeElement;
  }
  modal.classList.add('open');
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  header.classList.add('searching');
  document.querySelectorAll('[data-search-open]').forEach(button => button.setAttribute('aria-expanded', 'true'));
  renderResults(input.value);
  input.focus();
}

function closeSearch({ restoreFocus = true } = {}) {
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  header.classList.remove('searching');
  document.querySelectorAll('[data-search-open]').forEach(button => button.setAttribute('aria-expanded', 'false'));
  const returnTarget = searchReturnFocus;
  searchReturnFocus = null;
  if (restoreFocus && returnTarget?.isConnected) {
    setTimeout(() => returnTarget.focus(), 0);
  }
}

function focusableElements(container) {
  return [...container.querySelectorAll('a[href], summary, button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(element => !element.hidden && element.getClientRects().length);
}

function trapSearchFocus(event) {
  if (event.key !== 'Tab') return;
  const focusable = focusableElements(modal);
  if (!focusable.length) {
    event.preventDefault();
    input.focus();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
    event.preventDefault();
    first.focus();
  }
}

function moveSearchFocus(direction) {
  const items = [...results.querySelectorAll('.search-result')];
  if (!items.length) return;
  const current = items.indexOf(document.activeElement);
  const next = current < 0
    ? (direction > 0 ? 0 : items.length - 1)
    : (current + direction + items.length) % items.length;
  items.forEach((item, index) => item.classList.toggle('active', index === next));
  items[next].focus();
}

document.querySelectorAll('[data-search-open]').forEach(button => {
  button.addEventListener('click', () => openSearch(button));
});
document.querySelector('[data-search-close]').addEventListener('click', () => closeSearch());
let searchInputTimer;
input.addEventListener('input', e => {
  clearTimeout(searchInputTimer);
  ++searchRevision;
  const query = e.target.value;
  searchInputTimer = setTimeout(() => renderResults(query), 120);
});
document.addEventListener('click', e => {
  if (modal.classList.contains('open') && !header.contains(e.target)) closeSearch({ restoreFocus: false });
});
results.addEventListener('click', event => {
  const link = event.target.closest('.search-result');
  if (link) {
    closeSearch({ restoreFocus: false });
    if (new URL(link.href).href === location.href) revealSearchDestination();
  }
});
results.addEventListener('focusin', event => {
  results.querySelectorAll('.search-result').forEach(item => item.classList.toggle('active', item === event.target.closest('.search-result')));
});
addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openSearch(document.activeElement);
    return;
  }

  if (modal.classList.contains('open')) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearch();
    } else if (modal.contains(e.target) && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      moveSearchFocus(e.key === 'ArrowDown' ? 1 : -1);
    } else if (e.key === 'Enter' && e.target === input) {
      e.preventDefault();
      results.querySelector('.search-result')?.click();
    }
    return;
  }

  if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
    e.preventDefault();
    closeMenu({ restoreFocus: true });
  }
});

// An agenda is legible on a phone; the complete month view remains one tap away.
const fullCalendar = document.querySelector('.calendar-shell iframe');
if (fullCalendar) {
  const originalCalendar = new URL(fullCalendar.src);
  const phoneCalendar = matchMedia('(max-width:760px)');
  let chosenCalendarView = null;
  const views = document.createElement('div');
  views.className = 'calendar-view-options';
  views.setAttribute('role', 'group');
  views.setAttribute('aria-label', 'Calendar view');
  views.innerHTML = '<button type="button" data-calendar-view="AGENDA">Agenda</button><button type="button" data-calendar-view="MONTH">Month</button>';
  fullCalendar.before(views);
  function showCalendarView() {
    const view = chosenCalendarView || (phoneCalendar.matches ? 'AGENDA' : originalCalendar.searchParams.get('mode') || 'MONTH');
    const url = new URL(originalCalendar);
    url.searchParams.set('mode', view);
    if (fullCalendar.src !== url.href) fullCalendar.src = url.href;
    views.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.calendarView === view)));
  }
  views.addEventListener('click', event => {
    const button = event.target.closest('[data-calendar-view]');
    if (!button) return;
    chosenCalendarView = button.dataset.calendarView;
    showCalendarView();
  });
  phoneCalendar.addEventListener('change', showCalendarView);
  showCalendarView();
}

const eventItems = [...document.querySelectorAll('[data-event-item]')];
if (eventItems.length) {
  const now = new Date();
  const dayStamp = date => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const daysUntil = date => Math.round((dayStamp(date) - dayStamp(now)) / 86400000);
  let nextEvent = null;

  eventItems.forEach(item => {
    const start = new Date(item.dataset.eventStart);
    const end = new Date(item.dataset.eventEnd);
    const label = item.querySelector('[data-event-label]');
    const ended = Number.isFinite(end.getTime()) && end < now;
    const happening = !ended && Number.isFinite(start.getTime()) && start <= now;

    item.classList.toggle('is-past', ended);
    if (ended) {
      label.textContent = 'Completed';
      return;
    }

    if (!nextEvent) nextEvent = { item, start };
    const days = daysUntil(start);
    label.textContent = happening ? 'Happening now' : days <= 0 ? 'Today' : days === 1 ? 'Tomorrow' : `In ${days} days`;
  });

  if (nextEvent) {
    const { item, start } = nextEvent;
    item.classList.add('is-next');
    const label = item.querySelector('[data-event-label]').textContent;
    const title = item.querySelector('span b').textContent;
    const day = item.querySelector('time strong').textContent;
    const detail = item.querySelector('span small').textContent.replace(/\s*·\s*[^·]+$/, '').trim();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(start);
    document.querySelector('[data-feature-status]').textContent = `${label} · Fall ${start.getFullYear()}`;
    document.querySelector('[data-feature-title]').textContent = title;
    document.querySelector('[data-feature-place]').textContent = item.dataset.eventPlace;
    document.querySelector('[data-feature-day]').textContent = day;
    document.querySelector('[data-feature-when]').textContent = `${month} · ${detail}`;
  } else {
    document.querySelector('[data-feature-status]').textContent = 'Live calendar';
    document.querySelector('[data-feature-title]').textContent = 'See what’s next';
    document.querySelector('[data-feature-place]').textContent = 'The calendar is the source for current rehearsals and performances.';
    document.querySelector('[data-feature-day]').textContent = '→';
    document.querySelector('[data-feature-when]').textContent = 'Open the full schedule';
  }
}

document.querySelectorAll('[data-carousel]').forEach((carousel, carouselIndex) => {
  const track = carousel.querySelector('[data-carousel-track]');
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  if (!track || !previous || !next) return;

  if (!track.id) track.id = `carousel-track-${carouselIndex + 1}`;
  previous.setAttribute('aria-controls', track.id);
  next.setAttribute('aria-controls', track.id);
  if (!previous.hasAttribute('aria-label')) previous.setAttribute('aria-label', 'Previous slide');
  if (!next.hasAttribute('aria-label')) next.setAttribute('aria-label', 'Next slide');
  if (!track.hasAttribute('tabindex')) track.tabIndex = 0;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const phoneGallery = matchMedia('(max-width:760px)');
  let updateFrame = 0;

  function updateCarouselControls() {
    const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
    previous.setAttribute('aria-disabled', String(maximum <= 2));
    next.setAttribute('aria-disabled', String(maximum <= 2));
    const slides = [...track.children].filter(item => !item.hidden);
    const total = carousel.querySelector('[data-carousel-total]');
    if (total) total.textContent = String(slides.length).padStart(2, '0');
    const trackLeft = track.getBoundingClientRect().left;
    const currentIndex = slides.reduce((closest, slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      return distance < closest.distance ? { index, distance } : closest;
    }, { index: 0, distance: Infinity }).index;
    const counter = carousel.querySelector('[data-carousel-current]');
    if (counter) counter.textContent = String(currentIndex + 1).padStart(2, '0');
    // Other slides may have longer captions and photo credits. On phones,
    // reserve only the active slide's natural height instead of the tallest one.
    if (phoneGallery.matches && slides[currentIndex]) {
      const height = `${Math.ceil(slides[currentIndex].getBoundingClientRect().height)}px`;
      if (track.style.height !== height) track.style.height = height;
    } else {
      track.style.removeProperty('height');
    }
  }

  function scheduleCarouselUpdate() {
    cancelAnimationFrame(updateFrame);
    updateFrame = requestAnimationFrame(updateCarouselControls);
  }

  function scrollCarousel(direction) {
    const control = direction < 0 ? previous : next;
    if (control.getAttribute('aria-disabled') === 'true') return;

    const trackRect = track.getBoundingClientRect();
    const current = track.scrollLeft;
    const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
    if (direction > 0 && current >= maximum - 4) {
      track.scrollTo({left:0,behavior:'instant'});
      scheduleCarouselUpdate();
      return;
    }
    if (direction < 0 && current <= 4) {
      track.scrollTo({left:maximum,behavior:'instant'});
      scheduleCarouselUpdate();
      return;
    }
    const rawPositions = [...track.children]
      .filter(item => !item.hidden)
      .map(item => current + item.getBoundingClientRect().left - trackRect.left);
    const firstPosition = rawPositions[0] ?? 0;
    const positions = rawPositions.map(position => Math.max(0, Math.min(maximum, position - firstPosition)));
    const tolerance = 4;
    const target = direction > 0
      ? (positions.find(position => position > current + tolerance) ?? maximum)
      : ([...positions].reverse().find(position => position < current - tolerance) ?? 0);

    track.scrollTo({ left: target, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  }

  previous.addEventListener('click', () => scrollCarousel(-1));
  next.addEventListener('click', () => scrollCarousel(1));
  track.addEventListener('scroll', scheduleCarouselUpdate, { passive: true });
  track.addEventListener('keydown', event => {
    if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    scrollCarousel(event.key === 'ArrowRight' ? 1 : -1);
  });

  if ('ResizeObserver' in window) {
    const galleryResize = new ResizeObserver(scheduleCarouselUpdate);
    galleryResize.observe(track);
    [...track.children].forEach(slide => galleryResize.observe(slide));
  }
  phoneGallery.addEventListener('change', scheduleCarouselUpdate);
  addEventListener('load', scheduleCarouselUpdate, { once: true });
  updateCarouselControls();
});

// Shared edges use inverse curves so every tab fits the adjacent socket.
document.querySelectorAll('.ensemble-puzzle').forEach(grid => {
  const cards = [...grid.querySelectorAll('.ensemble-card')];
  const colors = ['#293e52', '#3d3744', '#293b40', '#343b50', '#453b32', '#323f4b'];
  function drawPuzzle() {
    const columns = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
    const rows = Math.ceil(cards.length / columns);
    cards.forEach((card, index) => {
      const width = card.clientWidth;
      const height = card.clientHeight;
      const col = index % columns;
      const row = Math.floor(index / columns);
      let path = 'M 0 0';
      function edge(x, y, dx, dy, tab) {
        const length = Math.hypot(dx, dy);
        const nx = dy / length;
        const ny = -dx / length;
        const point = (distance, depth = 0) => `${x + dx * distance + nx * depth},${y + dy * distance + ny * depth}`;
        if (!tab) { path += ` L ${point(1)}`; return; }
        const neck = 12 / length;
        const shoulder = 25 / length;
        const depth = 18 * tab;
        path += ` L ${point(.5 - neck)}`;
        path += ` C ${point(.5 - neck, depth * .28)} ${point(.5 - shoulder, depth * .35)} ${point(.5 - shoulder, depth * .7)}`;
        path += ` C ${point(.5 - shoulder, depth * 1.22)} ${point(.5 + shoulder, depth * 1.22)} ${point(.5 + shoulder, depth * .7)}`;
        path += ` C ${point(.5 + shoulder, depth * .35)} ${point(.5 + neck, depth * .28)} ${point(.5 + neck)}`;
        path += ` L ${point(1)}`;
      }
      edge(0, 0, width, 0, row ? -(col % 2 ? -1 : 1) : 0);
      edge(width, 0, 0, height, col < columns - 1 ? (row % 2 ? -1 : 1) : 0);
      edge(width, height, -width, 0, row < rows - 1 ? (col % 2 ? -1 : 1) : 0);
      edge(0, height, 0, -height, col ? -(row % 2 ? -1 : 1) : 0);
      let svg = card.querySelector('.puzzle-shape');
      if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('puzzle-shape');
        svg.setAttribute('aria-hidden', 'true');
        const ns = 'http://www.w3.org/2000/svg';
        const defs = document.createElementNS(ns, 'defs');
        const gradient = document.createElementNS(ns, 'linearGradient');
        gradient.id = `puzzle-finish-${index}`;
        gradient.setAttribute('x2', '0.8');
        gradient.setAttribute('y2', '1');
        [['0%', '#ffffff', '.07'], ['45%', colors[index], '1'], ['100%', '#080c13', '.35']].forEach(([offset, color, opacity]) => {
          const stop = document.createElementNS(ns, 'stop');
          stop.setAttribute('offset', offset);
          stop.setAttribute('stop-color', color);
          stop.setAttribute('stop-opacity', opacity);
          gradient.append(stop);
        });
        defs.append(gradient);
        svg.append(defs);
        const base = document.createElementNS(ns, 'path');
        base.classList.add('puzzle-base');
        const finish = document.createElementNS(ns, 'path');
        finish.classList.add('puzzle-finish');
        const bevel = document.createElementNS(ns, 'path');
        bevel.classList.add('puzzle-bevel');
        svg.append(base, finish, bevel);
        card.prepend(svg);
      }
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.querySelectorAll('path').forEach(shape => shape.setAttribute('d', `${path} Z`));
      svg.querySelector('.puzzle-base').setAttribute('fill', colors[index]);
      svg.querySelector('.puzzle-finish').setAttribute('fill', `url(#puzzle-finish-${index})`);
    });
  }
  drawPuzzle();
  new ResizeObserver(drawPuzzle).observe(grid);
});

const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); }
}), { threshold: .14 });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('page-inactive', document.hidden);
});

if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.ensemble-card, .spotlight-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX-r.left}px`);
      card.style.setProperty('--my', `${e.clientY-r.top}px`);
    });
  });
}
