/**
 * components.js — Shared layout elements injected on every page.
 * Nav variant is detected from the current URL.
 */

// ─── Nav builders ─────────────────────────────────────────────────

function navLink(href, label) {
  return `
    <a href="${href}" class="menu-link w-inline-block">
      <div class="menu-text-ofh">
        <div class="menu-text-ofh-secure">
          <div class="menu-text">${label}</div>
          <div class="menu-text absolute">${label}</div>
        </div>
      </div>
      <div class="menu-dot-holder"><div class="menu-dot"></div></div>
    </a>`;
}

function buildNav(isCreative) {
  const left = isCreative
    ? [navLink('#photography', 'Photography'), navLink('#coffee', 'Coffee')]
    : [navLink('/#engineering', 'Engineering'), navLink('/#skills', 'Skills')];

  const right = isCreative
    ? [navLink('/', '← Engineering'), navLink('/#contact', 'Contact')]
    : [navLink('/#about', 'About'), navLink('/pages/creative.html', 'Creative'), navLink('/#contact', 'Contact')];

  return `
    <div class="menu-items-holder-1">
      <a href="/" class="menu-link all w-inline-block">
        <div class="menu-text-ofh">
          <div class="menu-text-ofh-secure">
            <div class="menu-text">Stephanie De La Puente Jouanne</div>
            <div class="menu-text absolute">Stephanie De La Puente Jouanne</div>
          </div>
        </div>
      </a>
      <div class="menu-products-link-holder">
        <div class="menu-links-col-list">
          ${left.map(l => `<div class="menu-links-col-item">${l}</div>`).join('')}
        </div>
      </div>
    </div>
    <div class="menu-items-holder-1">
      ${right.join('')}
      <button class="menu-nav-toggle" id="menu-nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>`;
}

function buildOverlay(isCreative) {
  const links = isCreative
    ? [
        { href: '#photography',        label: 'Photography' },
        { href: '#coffee',             label: 'Coffee' },
        { href: '/',                   label: 'Engineering' },
        { href: '/#contact',           label: 'Contact' },
      ]
    : [
        { href: '/#engineering',       label: 'Engineering' },
        { href: '/#skills',            label: 'Skills' },
        { href: '/#about',             label: 'About' },
        { href: '/pages/creative.html',label: 'Creative' },
        { href: '/#contact',           label: 'Contact' },
      ];

  return `
  <div class="nav-overlay" id="nav-overlay">
    <p class="nav-overlay-eyebrow">Stephanie De La Puente</p>
    <nav class="nav-overlay-links">
      ${links.map(l => `<a href="${l.href}" class="nav-overlay-link">${l.label}</a>`).join('')}
    </nav>
  </div>`;
}

// ─── Footer ───────────────────────────────────────────────────────

const FOOTER_HTML = `
  <div class="footer_contact-col">
    <div class="t-label-1-rg">BUSINESS ENQUIRIES</div>
    <div class="footer_contact-box">
      <a href="mailto:stephaniedlp00@gmail.com" class="contact-link">stephaniedlp00@gmail.com</a>
    </div>
  </div>

  <div class="under-footer-text-title">
    <span>Stephanie de la Puente Jouanne</span>
  </div>

  <div class="footer_socials">
    <div class="footer_contact-col is-last">
      <div class="t-label-1-rg">SOCIALS</div>
      <div class="footer_social-list">
        <a href="https://www.instagram.com/pagee.nott.found/" target="_blank" rel="noopener" class="button-icon">Instagram</a>
        <a href="https://www.linkedin.com/in/stephaniedelapuentej/" target="_blank" rel="noopener" class="button-icon">LinkedIn</a>
        <a href="https://github.com/stephaniedlp" target="_blank" rel="noopener" class="button-icon">GitHub</a>
      </div>
      <p>page studio &copy; 2025</p>
    </div>
  </div>`;

// ─── Shared injected elements ─────────────────────────────────────

const SCROLL_BTN_HTML = `
  <button id="btn-ir-arriba" aria-label="Back to top">
    <svg viewBox="0 0 24 24"><path d="m4 16 8-8 8 8"></path></svg>
  </button>`;

const LIGHTBOX_HTML = `
  <div id="lightbox" class="lightbox" aria-hidden="true">
    <button class="lb-close" id="lb-close" aria-label="Close">&times;</button>
    <button class="lb-prev"  id="lb-prev"  aria-label="Previous">&#8592;</button>
    <button class="lb-next"  id="lb-next"  aria-label="Next">&#8594;</button>
    <div class="lb-content">
      <img id="lb-img" src="" alt="">
      <p id="lb-caption" class="lb-caption"></p>
    </div>
  </div>`;

// ─── Init ─────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const isCreative = window.location.pathname.includes('/pages/creative');

  const nav = document.querySelector('.menu');
  if (nav) nav.innerHTML = buildNav(isCreative);

  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = FOOTER_HTML;

  // Scroll-to-top button (shared on all pages)
  document.body.insertAdjacentHTML('beforeend', SCROLL_BTN_HTML);

  // Mobile fullscreen nav overlay
  document.body.insertAdjacentHTML('beforeend', buildOverlay(isCreative));

  // Lightbox (only on pages with a gallery)
  if (document.querySelector('.gallery')) {
    document.body.insertAdjacentHTML('beforeend', LIGHTBOX_HTML);
  }

  // ─── Hamburger toggle ─────────────────────────────────────────
  const toggle  = document.getElementById('menu-nav-toggle');
  const overlay = document.getElementById('nav-overlay');

  function openNav() {
    document.body.classList.add('nav-is-open');
    toggle?.setAttribute('aria-expanded', 'true');
    toggle?.setAttribute('aria-label', 'Close menu');
  }
  function closeNav() {
    document.body.classList.remove('nav-is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open menu');
  }

  toggle?.addEventListener('click', () => {
    document.body.classList.contains('nav-is-open') ? closeNav() : openNav();
  });

  overlay?.querySelectorAll('.nav-overlay-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });
});
