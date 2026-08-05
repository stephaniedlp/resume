const NAV_HTML = `
  <div class="menu-items-holder-1">
    <a href="/" class="menu-link all w-inline-block">
      <div class="menu-text-ofh">
        <div class="menu-text-ofh-secure">
          <div class="menu-text">Stephanie De La Puente Jouanne</div>
          <div class="menu-text absolute">Stephanie De La Puente Jouanne</div>
        </div>
      </div>
      <div class="menu-dot-logo-holder">
        <div class="menu-dot"></div>
      </div>
    </a>
    <div class="menu-products-link-holder">
      <div class="menu-links-col-list-wrap">
        <div role="list" class="menu-links-col-list">
          <div role="listitem" class="menu-links-col-item">
            <a href="/#workexperience" class="menu-link contact w-inline-block">
              <div class="menu-text-ofh">
                <div class="menu-text-ofh-secure">
                  <div class="menu-text">Work experience</div>
                  <div class="menu-text absolute">Work experience</div>
                </div>
              </div>
              <div class="menu-dot-holder"><div class="menu-dot"></div></div>
            </a>
          </div>
          <div role="listitem" class="menu-links-col-item">
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
  </div>
  <div class="menu-items-holder-1">
    <a href="/#aboutme" class="menu-link contact w-inline-block">
      <div class="menu-text-ofh">
        <div class="menu-text-ofh-secure">
          <div class="menu-text">About</div>
          <div class="menu-text absolute">About</div>
        </div>
      </div>
      <div class="menu-dot-holder"><div class="menu-dot"></div></div>
    </a>
    <a href="/#portafolio" class="menu-link contact w-inline-block">
      <div class="menu-text-ofh">
        <div class="menu-text-ofh-secure">
          <div class="menu-text">Portafolio</div>
          <div class="menu-text absolute">Portafolio</div>
        </div>
      </div>
      <div class="menu-dot-holder"><div class="menu-dot"></div></div>
    </a>
    <a href="/#contact" class="menu-link contact last w-inline-block">
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
        <a href="https://www.instagram.com/pagee.nott.found/" target="_blank" class="button-icon">Instagram</a>
        <a href="https://www.linkedin.com/in/stephaniedelapuentej/" target="_blank" class="button-icon">LinkedIn</a>
        <a href="https://github.com/stephaniedlp" target="_blank" class="button-icon">GitHub</a>
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
