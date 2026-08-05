/**
 * data.js — Single source of truth for all portfolio content.
 * Edit here to update any page. Exposed as window.DATA.
 */

window.DATA = {

  // ─── Work Experience ────────────────────────────────────────────
  experience: [
    {
      company:  'Xipe Technology',
      period:   'Jan 2024 – Apr 2026',
      location: 'Tucson, AZ',
      role:     'Software Engineer — Security & Systems Integration',
      subtitle: 'Mazda · Ford · Lincoln · Changan · GEMSO',
      bullets: [
        'Designed, developed, tested, and maintained enterprise software applications using C#/.NET, SQL, Blazor, and ASP.NET Core across customer-facing and internal business platforms.',
        'Participated throughout the Software Development Life Cycle (SDLC) including requirements gathering, software design, implementation, testing, debugging, documentation, deployment support, and production maintenance.',
        'Developed and maintained database-driven application features using SQL Server, PostgreSQL, and Entity Framework Core, including data modeling, migrations, queries, and performance improvements.',
        'Created software solutions integrating external APIs and internal services, analyzing requirements, defining data flows, and implementing reliable communication between systems.',
        'Performed software testing, debugging, verification, and validation by reproducing defects, analyzing logs, using Visual Studio debugging tools, and executing unit, integration, and regression testing with MSTest and NUnit.',
        'Designed and executed test scenarios to validate software functionality, identify defects, verify fixes, and ensure applications met technical and business requirements before release.',
        'Investigated production issues through application logs, database analysis, and debugging tools, performing root-cause analysis and implementing corrective solutions.',
        'Developed and maintained technical documentation including software specifications, architecture references, testing documentation, deployment procedures, and system workflows.',
        'Collaborated with developers, business stakeholders, and cross-functional teams to translate requirements into technical solutions and deliver software improvements.',
        'Built and maintained API integrations using REST and SOAP services, handling data exchange, authentication flows, and error resolution.',
        'Developed administrative tools and database management features using C#, Blazor, and Entity Framework Core to support internal operations.',
        'Improved application performance by optimizing SQL queries, adding indexes, and improving database access patterns.',
        'Supported Agile development practices through sprint activities, code reviews, issue tracking, and continuous improvement processes.',
        'Managed source control workflows using Git, GitHub Actions, and Azure DevOps pipelines to support automated builds and deployments.',
        'Supported application deployments by validating functionality across development, testing, and production environments.',
      ],
      tags: [
        'C# / .NET 8-9', 'ASP.NET Core', 'Blazor', 'SQL Server', 'PostgreSQL',
        'EF Core', 'JavaScript', 'TypeScript', 'Azure', 'Git',
        'GitHub Actions', 'REST', 'SOAP/XML',
      ],
    },
  ],

  // ─── Projects ────────────────────────────────────────────────────
  projects: [
    {
      year:        '2024 – 2026',
      name:        'GEMSO — Mazda, Ford, Lincoln, Changan',
      description: 'Full-stack eCommerce & vehicle-financing platform. REST API on clean architecture (Domain / Application / Infrastructure), Blazor Server back-office, and a cross-platform .NET MAUI mobile app for iOS & Android. JWT auth, AWS S3 image storage, background jobs with TickerQ, typed Refit HTTP clients, and Polly resilience layer.',
      tags:   ['.NET 8', 'ASP.NET Core', 'Blazor', 'MAUI', 'SQL Server', 'PostgreSQL', 'EF Core', 'AWS S3', 'Refit', 'Polly'],
      client: 'Xipe Technology',
    },
    {
      year:        '2023',
      name:        'University of Sonora — Front End',
      description: 'Redesigned the official website for the Software Engineering department. Built with a focus on responsive design, accessibility, and clean component architecture.',
      tags:   ['HTML', 'SASS', 'TypeScript'],
      link:   '/pages/portafolio/frontend.html',
    },
  ],

  // ─── Technical Skills ────────────────────────────────────────────
  skills: [
    { title: 'Languages',        items: ['C#', 'TypeScript', 'JavaScript', 'SQL'] },
    { title: 'Frameworks',       items: ['.NET 8/9', 'ASP.NET Core', 'Blazor', '.NET MAUI', 'Entity Framework Core'] },
    { title: 'Databases',        items: ['SQL Server', 'PostgreSQL', 'Qdrant (Vector DB)'] },
    { title: 'Cloud & DevOps',   items: ['Azure', 'AWS (S3, EC2)', 'Docker', 'GitHub Actions', 'Azure DevOps'] },
    { title: 'AI & Integrations',items: ['Semantic Kernel', 'OpenAI API', 'RAG Pipelines', 'REST APIs', 'SOAP/XML'] },
    { title: 'Practices',        items: ['Clean Architecture', 'DDD', 'SDLC', 'Agile / Scrum', 'Unit & Integration Testing'] },
  ],

  // ─── Photography Gallery ─────────────────────────────────────────
  gallery: [
    {
      label: 'Hotel · Interior · Marsella',
      items: [
        { src: '/img/banio/baniouno.jpg',    caption: 'Marsella Hotel Boutique' },
        { src: '/img/banio/baniodos.jpg',    caption: 'Marsella Hotel Boutique' },
        { src: '/img/banio/baniotres.jpg',   caption: 'Marsella Hotel Boutique' },
        { src: '/img/banio/baniocuatro.jpg', caption: 'Marsella Hotel Boutique' },
        { src: '/img/banio/baniocinco.jpg',  caption: 'Marsella Hotel Boutique' },
        { src: '/img/banio/banioseis.jpg',   caption: 'Marsella Hotel Boutique' },
        { src: '/img/banio/baniosiete.jpg',  caption: 'Marsella Hotel Boutique' },
      ],
    },
    {
      label: 'Travel · Coast · Nayarit & Oaxaca',
      items: [
        { src: '/img/playa/pi1.jpg',  caption: 'Punta Mita, Nayarit' },
        { src: '/img/playa/pi2.jpg',  caption: 'Punta Mita, Nayarit' },
        { src: '/img/playa/pi3.jpg',  caption: 'Puerto Escondido, Oaxaca' },
        { src: '/img/playa/pi4.jpg',  caption: 'Puerto Escondido, Oaxaca' },
        { src: '/img/playa/pi8.jpg',  caption: 'Punta Mita, Nayarit' },
        { src: '/img/playa/p16.jpg',  caption: 'Puerto Escondido, Oaxaca' },
      ],
    },
    {
      label: 'Product · Jewelry · Maria Bonita',
      items: [
        { src: '/img/accesorios/arete1.JPG', caption: 'Maria Bonita Joyeria' },
        { src: '/img/accesorios/arete2.JPG', caption: 'Maria Bonita Joyeria' },
        { src: '/img/accesorios/arete3.JPG', caption: 'Maria Bonita Joyeria' },
        { src: '/img/accesorios/arete4.JPG', caption: 'Maria Bonita Joyeria' },
        { src: '/img/accesorios/arete5.JPG', caption: 'Maria Bonita Joyeria' },
        { src: '/img/accesorios/arete6.JPG', caption: 'Maria Bonita Joyeria' },
        { src: '/img/accesorios/arete7.JPG', caption: 'Maria Bonita Joyeria' },
        { src: '/img/accesorios/arete8.JPG', caption: 'Maria Bonita Joyeria' },
      ],
    },
  ],

  // ─── Coffee ──────────────────────────────────────────────────────
  coffee: [
    { title: 'Specialty Coffee',    text: 'Experience with single-origin beans, brewing methods, and flavor profiling. Understanding the full chain from origin to cup.' },
    { title: 'Customer Experience', text: 'Built genuine connections with customers. Hospitality as a form of craft — making every interaction feel intentional and warm.' },
    { title: 'Process & Precision', text: 'Dialing in grind size, extraction time, and temperature. The same systematic thinking I bring to engineering.' },
    { title: 'Creativity',          text: 'Seasonal menus, latte art, and drink design. Coffee as a creative medium with room for personal expression.' },
  ],

  // ─── Creative Skills ─────────────────────────────────────────────
  creativeSkills: [
    { title: 'Photography',   items: ['Visual Composition', 'Product Photography', 'Interior Photography', 'Travel Photography', 'Lightroom Editing'] },
    { title: 'Coffee',        items: ['Specialty Coffee', 'Espresso Dialing', 'Latte Art', 'Flavor Profiling', 'Customer Experience'] },
    { title: 'Storytelling',  items: ['Visual Narrative', 'Brand Photography', 'Content Creation', 'Art Direction'] },
  ],

};
