const NAV_HTML = `
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
        <div class="menu-links-col-item">
          <a href="/#engineering" class="menu-link w-inline-block">
            <div class="menu-text-ofh">
              <div class="menu-text-ofh-secure">
                <div class="menu-text">Engineering</div>
                <div class="menu-text absolute">Engineering</div>
              </div>
            </div>
            <div class="menu-dot-holder"><div class="menu-dot"></div></div>
          </a>
        </div>
        <div class="menu-links-col-item">
          <a href="/#photography" class="menu-link w-inline-block">
            <div class="menu-text-ofh">
              <div class="menu-text-ofh-secure">
                <div class="menu-text">Photography</div>
                <div class="menu-text absolute">Photography</div>
              </div>
            </div>
            <div class="menu-dot-holder"><div class="menu-dot"></div></div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="menu-items-holder-1">
    <a href="/#about" class="menu-link w-inline-block">
      <div class="menu-text-ofh">
        <div class="menu-text-ofh-secure">
          <div class="menu-text">About</div>
          <div class="menu-text absolute">About</div>
        </div>
      </div>
      <div class="menu-dot-holder"><div class="menu-dot"></div></div>
    </a>
    <a href="/#coffee" class="menu-link w-inline-block">
      <div class="menu-text-ofh">
        <div class="menu-text-ofh-secure">
          <div class="menu-text">Coffee</div>
          <div class="menu-text absolute">Coffee</div>
        </div>
      </div>
      <div class="menu-dot-holder"><div class="menu-dot"></div></div>
    </a>
    <a href="/#contact" class="menu-link w-inline-block">
      <div class="menu-text-ofh">
        <div class="menu-text-ofh-secure">
          <div class="menu-text">Contact</div>
          <div class="menu-text absolute">Contact</div>
        </div>
      </div>
      <div class="menu-dot-holder"><div class="menu-dot"></div></div>
    </a>
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

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.menu');
  if (nav) nav.innerHTML = NAV_HTML;

  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = FOOTER_HTML;
});
