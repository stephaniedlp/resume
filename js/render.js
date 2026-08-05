/**
 * render.js — Pure render functions. Each returns an HTML string.
 * Exposed as window.R for use by main.js after data.js loads.
 */

window.R = {

  expRow({ company, period, location, role, subtitle, bullets, tags }) {
    return `
      <div class="exp-row">
        <div class="exp-meta">
          <span class="exp-company">${company}</span>
          <span class="exp-period">${period}</span>
          ${location ? `<span class="exp-location">${location}</span>` : ''}
        </div>
        <div class="exp-body">
          <h3 class="exp-role">${role}</h3>
          <p class="exp-subtitle">${subtitle}</p>
          <ul class="exp-list">
            ${bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          <div class="tag-row">
            ${tags.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      </div>`;
  },

  projectCard({ year, name, description, tags, client, link }) {
    const isExternal = link && link.startsWith('http');
    const footerRight = link
      ? `<a href="${link}" class="project-link" ${isExternal ? 'target="_blank" rel="noopener"' : ''}>
           ${isExternal ? 'Live demo →' : 'View project →'}
         </a>`
      : `<span class="project-client">${client}</span>`;
    const footer = client && link
      ? `<span class="project-client">${client}</span>${footerRight}`
      : footerRight;

    return `
      <article class="project-card">
        <div class="project-head">
          <span class="project-year">${year}</span>
          <h3 class="project-name">${name}</h3>
        </div>
        <p class="project-desc">${description}</p>
        <div class="tag-row">
          ${tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-footer">${footer}</div>
      </article>`;
  },

  skillGroup({ title, items }) {
    return `
      <div class="skill-group">
        <h4 class="skill-group-title">${title}</h4>
        <ul class="skill-list">
          ${items.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>`;
  },

  galleryItem({ src, caption }) {
    return `
      <div class="gallery-item" data-src="${src}" data-caption="${caption}">
        <img src="${src}" alt="${caption}" loading="lazy">
      </div>`;
  },

  galleryCategory({ label, items }) {
    return `
      <div class="gallery-category">
        <p class="gallery-label">${label}</p>
        <div class="gallery-grid">
          ${items.map(window.R.galleryItem).join('')}
        </div>
      </div>`;
  },

  coffeeItem({ title, text }) {
    return `
      <div class="coffee-item">
        <h4>${title}</h4>
        <p>${text}</p>
      </div>`;
  },

};
