/**
 * render.js — Pure render functions. Each returns an HTML string.
 * Exposed as window.R for use by main.js after data.js loads.
 */

window.R = {

  expRow({ company, period, location, role, subtitle, projectList, bullets, tags }) {
    const projectsBlock = projectList && projectList.length
      ? `<div class="exp-projects">
           <p class="exp-projects-label">Projects</p>
           <div class="exp-projects-grid">
             ${projectList.map(p => `
               <div class="exp-project-item">
                 <span class="exp-project-name">${p.name}</span>
                 <span class="exp-project-desc">${p.desc}</span>
               </div>`).join('')}
           </div>
         </div>`
      : '';

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
          ${projectsBlock}
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
    // When the whole card is a link, avoid nested <a> in footer
    const footer = link
      ? `${client ? `<span class="project-client">${client}</span>` : ''}<span class="project-link-hint">${isExternal ? 'Live demo →' : 'View project →'}</span>`
      : `<span class="project-client">${client}</span>`;

    const card = `
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

    return link
      ? `<a class="project-card-link" href="${link}"${isExternal ? ' target="_blank" rel="noopener"' : ''}>${card}</a>`
      : card;
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
