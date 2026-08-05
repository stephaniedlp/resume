document.addEventListener('DOMContentLoaded', () => {

  // ─── Scroll-to-top ───────────────────────────────────────────
  const btnTop = document.getElementById('btn-ir-arriba');
  if (btnTop) {
    window.addEventListener('scroll', () => {
      btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    }, { passive: true });

    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Lightbox ────────────────────────────────────────────────
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lb-img');
  const lbCaption  = document.getElementById('lb-caption');
  const lbClose    = document.getElementById('lb-close');
  const lbPrev     = document.getElementById('lb-prev');
  const lbNext     = document.getElementById('lb-next');

  if (!lightbox) return;

  const items = [...document.querySelectorAll('.gallery-item')];
  let current = 0;

  function openAt(index) {
    current = (index + items.length) % items.length;
    lbImg.src           = items[current].dataset.src;
    lbCaption.textContent = items[current].dataset.caption || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  items.forEach((item, i) => item.addEventListener('click', () => openAt(i)));

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click',  () => openAt(current - 1));
  lbNext.addEventListener('click',  () => openAt(current + 1));

  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   openAt(current - 1);
    if (e.key === 'ArrowRight')  openAt(current + 1);
  });

  // ─── Section fade-in on scroll ───────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.section, .hero').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

});
