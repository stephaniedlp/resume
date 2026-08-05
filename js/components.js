// ─── Nav HTML builders ────────────────────────────────────────────

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

const MAIN_NAV = `
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
        <div class="menu-links-col-item">${navLink('/#engineering', 'Engineering')}</div>
        <div class="menu-links-col-item">${navLink('/#skills', 'Skills')}</div>
      </div>
    </div>
  </div>
  <div class="menu-items-holder-1">
    ${navLink('/#about', 'About')}
    ${navLink('/pages/creative.html', 'Creative')}
    ${navLink('/#contact', 'Contact')}
  </div>
`;

const CREATIVE_NAV = `
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
        <div class="menu-links-col-item">${navLink('#photography', 'Photography')}</div>
        <div class="menu-links-col-item">${navLink('#coffee', 'Coffee')}</div>
      </div>
    </div>
  </div>
  <div class="menu-items-holder-1">
    ${navLink('/', '← Engineering')}
    ${navLink('/#contact', 'Contact')}
  </div>
`;

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
  </div>
`;

// ─── Inject ───────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const isCreative = window.location.pathname.includes('/pages/creative');

  const nav = document.querySelector('.menu');
  if (nav) nav.innerHTML = isCreative ? CREATIVE_NAV : MAIN_NAV;

  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = FOOTER_HTML;
});
