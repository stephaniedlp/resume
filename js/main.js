/**
 * main.js — Page orchestration and interactions.
 * Reads from window.DATA and window.R (loaded before this script).
 */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Render page content ────────────────────────────────────────
  const path = window.location.pathname;

  if (path === '/' || path.endsWith('index.html')) {
    renderIndex();
  } else if (path.includes('creative')) {
    renderCreative();
  }

  // ─── Scroll-to-top ──────────────────────────────────────────────
  const btnTop = document.getElementById('btn-ir-arriba');
  if (btnTop) {
    window.addEventListener('scroll', () => {
      btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    }, { passive: true });

    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Lightbox (event delegation — works after dynamic render) ───
  initLightbox();

  // ─── Nav colour (dark ↔ light based on section background) ─────
  initNavTheme();

  // ─── Fade-in on scroll ──────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.section, .hero').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

});

// ─── Page renderers ─────────────────────────────────────────────────

function renderIndex() {
  const { R, DATA } = window;

  mount('exp-table',      DATA.experience.map(R.expRow).join(''));
  mount('projects-grid',  DATA.projects.map(R.projectCard).join(''));
  mount('skills-grid',    DATA.skills.map(R.skillGroup).join(''));
}

function renderCreative() {
  const { R, DATA } = window;

  mount('gallery',        DATA.gallery.map(R.galleryCategory).join(''));
  mount('coffee-items',   DATA.coffee.map(R.coffeeItem).join(''));
  mount('creative-skills-grid', DATA.creativeSkills.map(R.skillGroup).join(''));
}

// ─── Lightbox ───────────────────────────────────────────────────────

function initLightbox() {
  let items = [];
  let current = 0;

  // Event delegation: works even if gallery renders after this runs
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;

    // Build items list from current DOM at click time
    items = [...document.querySelectorAll('.gallery-item')];
    current = items.indexOf(item);
    openAt(current);
  });

  document.addEventListener('click', (e) => {
    if (e.target.id === 'lb-close' || e.target.id === 'lightbox') close();
    if (e.target.id === 'lb-prev') openAt(current - 1);
    if (e.target.id === 'lb-next') openAt(current + 1);
  });

  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('is-open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   openAt(current - 1);
    if (e.key === 'ArrowRight')  openAt(current + 1);
  });

  function openAt(index) {
    const lb       = document.getElementById('lightbox');
    const lbImg    = document.getElementById('lb-img');
    const lbCaption = document.getElementById('lb-caption');
    if (!lb || !items.length) return;

    current = (index + items.length) % items.length;
    lbImg.src             = items[current].dataset.src;
    lbCaption.textContent = items[current].dataset.caption || '';
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    const lb    = document.getElementById('lightbox');
    const lbImg = document.getElementById('lb-img');
    if (!lb) return;
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
  }
}

// ─── Nav theme (white text over dark sections) ──────────────────────

function initNavTheme() {
  const nav = document.querySelector('.menu');
  if (!nav) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nav.classList.toggle('menu--light', entry.target.dataset.nav === 'light');
      }
    });
  }, {
    // Thin 1px strip at the very top of the viewport — fires when a
    // section's leading edge crosses the nav area.
    rootMargin: '-1px 0px -99% 0px',
    threshold: 0,
  });

  document.querySelectorAll('[data-nav]').forEach(el => obs.observe(el));
}

// ─── Utility ────────────────────────────────────────────────────────

function mount(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
