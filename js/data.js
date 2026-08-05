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
      subtitle: 'customer-facing eCommerce & vehicle-financing platforms',
      projectList: [
        { name: 'GEMSO',            desc: 'Full-stack eCommerce & vehicle-financing platform · Mazda, Ford, Lincoln, Changan' },
        { name: 'AgentikSystem',    desc: 'AI / RAG document intelligence platform · Semantic Kernel · Qdrant · OpenAI' },
        { name: 'Diana',            desc: 'Internal CLI code generator · Roslyn + Scriban · v1 → v4' },
        { name: 'XipePlatform',     desc: 'Azure cloud infrastructure management portal · Resource Manager SDK' },
        { name: 'XipeSAS',          desc: 'Multi-tenant SaaS boilerplate · dual-DB · Diana integration' },
        { name: 'BusinessBox',      desc: 'Business management platform · Azure Blob Storage · MongoDB' },
        { name: 'HISMagazine2',     desc: 'Digital magazine · public reader + admin panel · Blazor WASM' },
        { name: 'CarWashPayStation',desc: 'Self-service POS · Blazor WASM · MVVM pattern' },
        { name: 'AppAgriculture',   desc: 'Cross-platform agricultural app · MAUI + Blazor Hybrid · offline SQLite' },
      ],
      bullets: [
        'Designed, developed, tested, and maintained enterprise software applications using C#/.NET, SQL, Blazor, and ASP.NET Core across customer-facing and internal business platforms.',
        'Participated throughout the Software Development Life Cycle (SDLC) including requirements gathering, software design, implementation, testing, debugging, documentation, deployment support, and production maintenance.',
        'Developed and maintained database-driven application features using SQL Server, PostgreSQL, and Entity Framework Core, including data modeling, migrations, queries, and performance improvements.',
        'Created software solutions integrating external APIs and internal services, analyzing requirements, defining data flows, and implementing reliable communication between systems.',
        'Built RAG (Retrieval-Augmented Generation) pipelines using Microsoft Semantic Kernel, KernelMemory, OpenAI API, and Qdrant vector database for intelligent document Q&A systems.',
        'Authored Diana, an internal CLI code-generation tool using Roslyn (Microsoft.CodeAnalysis.CSharp) and Scriban templates to scaffold .NET projects automatically, significantly reducing boilerplate setup time.',
        'Architected and maintained XipePlatform, an Azure cloud infrastructure management portal using Azure Resource Manager SDK to programmatically provision App Services, SQL databases, and compute resources.',
        'Performed software testing, debugging, verification, and validation by reproducing defects, analyzing logs, using Visual Studio debugging tools, and executing unit, integration, and regression testing with MSTest, NUnit, and Moq.',
        'Designed and executed test scenarios to validate software functionality, identify defects, verify fixes, and ensure applications met technical and business requirements before release.',
        'Investigated production issues through application logs, database analysis, and debugging tools, performing root-cause analysis and implementing corrective solutions.',
        'Developed and maintained technical documentation including software specifications, architecture references, testing documentation, deployment procedures, and system workflows.',
        'Collaborated with developers, business stakeholders, and cross-functional teams to translate requirements into technical solutions and deliver software improvements.',
        'Built and maintained API integrations using REST and SOAP services, handling data exchange, authentication flows, and error resolution.',
        'Improved application performance by optimizing SQL queries, adding indexes, and improving database access patterns.',
        'Managed source control workflows using Git, GitHub Actions, and Azure DevOps pipelines to support automated builds and deployments.',
      ],
      tags: [
        'C# / .NET 8-9', 'ASP.NET Core', 'Blazor', 'SQL Server', 'PostgreSQL',
        'EF Core', 'JavaScript', 'TypeScript', 'Azure', 'AWS S3',
        'Semantic Kernel', 'OpenAI', 'Qdrant', 'Roslyn', 'Git', 'GitHub Actions', 'REST', 'SOAP/XML',
      ],
    },
  ],

  // ─── Featured Projects ───────────────────────────────────────────
  projects: [
    {
      year:        '2024 – 2026',
      name:        'GEMSO — Mazda, Ford, Lincoln, Changan',
      description: 'Full-stack eCommerce & vehicle-financing platform for major automotive brands. REST API on clean architecture (Domain / Application / Infrastructure), Blazor WebAssembly back-office with MudBlazor, and a cross-platform .NET MAUI 10 mobile app for iOS & Android. JWT auth, AWS S3 image storage, Firebase push notifications, TickerQ job scheduler, Refit HTTP clients, and Polly resilience layer.',
      tags:   ['.NET 8', 'ASP.NET Core', 'Blazor WASM', 'MAUI', 'SQL Server', 'EF Core', 'AWS S3', 'Firebase', 'Refit', 'Polly', 'MudBlazor'],
      client: 'Xipe Technology',
    },
    {
      year:        '2025 – 2026',
      name:        'AgentikSystem — AI Document Platform',
      description: 'Intelligent document management system with RAG (Retrieval-Augmented Generation). Users upload documents which are parsed, embedded with text-embedding-3-large, and stored in Qdrant vector DB. The system answers questions about documents using GPT via Semantic Kernel. Includes JWT + Cookie auth, PDF parsing with PdfPig, and full MSTest test coverage.',
      tags:   ['Semantic Kernel', 'KernelMemory', 'OpenAI API', 'Qdrant', 'ASP.NET Core 8', 'EF Core 9', 'SQL Server', 'MongoDB', 'JWT', 'MSTest'],
      client: 'Personal Project',
    },
    {
      year:        '2024 – 2026',
      name:        'Diana — CLI Code Generator',
      description: 'Internal developer productivity tool that generates .NET boilerplate code using Roslyn (Microsoft.CodeAnalysis.CSharp) and Scriban templates. Reads project structure and scaffolds controllers, services, domain models, and more following clean architecture conventions. Rich terminal UI via Spectre.Console. Evolved through v1 → v4 and integrated into multiple production platforms.',
      tags:   ['Roslyn', 'Scriban', 'Spectre.Console', '.NET 8 CLI', 'C#', 'Code Generation', 'Developer Tooling'],
      client: 'Xipe Technology',
    },
    {
      year:        '2024 – 2026',
      name:        'XipePlatform — Azure Cloud Manager',
      description: 'SaaS portal for managing Azure cloud infrastructure programmatically. Provisions and manages App Services, SQL databases, and compute resources via Azure Resource Manager SDK. Built with Blazor Server and MudBlazor for the admin UI, ASP.NET Core Identity for auth, and SendGrid for transactional email.',
      tags:   ['ASP.NET Core 8', 'Blazor Server', 'Azure Resource Manager', 'Azure SDK', 'MudBlazor', 'EF Core', 'SendGrid', 'Identity'],
      client: 'Xipe Technology',
    },
    {
      year:        '2024',
      name:        'QuePlan — Event Platform',
      description: 'Full-stack event & activity planning platform for Hermosillo. Vue 3 SPA with GSAP animations and client-side routing. REST API backend with a "StalkerMan" scraper module using Selenium WebDriver, ChromeDriver, and Tesseract OCR to automatically collect event data. MongoDB persistence, Azure Pipelines CI/CD for dev and production branches.',
      tags:   ['Vue 3', 'GSAP', 'ASP.NET Core 8', 'MongoDB', 'Selenium', 'Tesseract OCR', 'Azure Pipelines', 'Cypress', 'Vitest'],
      client: 'Personal Project',
    },
    {
      year:        '2024',
      name:        'queplanapp — Modern Full-Stack',
      description: 'Modern full-stack monorepo with React 19 frontend and Express 5 backend in TypeScript. Type-safe database access via Drizzle ORM + Drizzle Zod, server state with TanStack Query, validated forms with React Hook Form + Zod, and Wouter for routing. Built with Vite 7.',
      tags:   ['React 19', 'Express 5', 'TypeScript', 'Drizzle ORM', 'TanStack Query', 'Zod', 'Vite 7'],
      client: 'Personal Project',
    },
    {
      year:        '2023',
      name:        'Video Game Catalog',
      description: 'Sales dashboard for videogame records built with Angular 16. Modular architecture split into dashboard, ventas, and autenticacion feature modules. Centralized HTTP layer via a typed DataService returning Observable&lt;Videojuegos[]&gt; streams. Features a live data table (Sale ID, Game Name, Date, Price, Client, Seller), click-to-open detail modal, custom 404 page, and SCSS partials (_variables, flex-layout, modal, table). Deployed to GitHub Pages via angular-cli-ghpages.',
      tags:   ['Angular 16', 'TypeScript 5.1', 'RxJS', 'SCSS', 'Angular Router', 'HttpClient', 'MockAPI', 'Karma + Jasmine', 'GitHub Pages'],
      client: 'University of Sonora',
    },
  ],

  // ─── Technical Skills ────────────────────────────────────────────
  skills: [
    {
      title: 'Languages',
      items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'HTML5 / CSS3'],
    },
    {
      title: '.NET Ecosystem',
      items: ['ASP.NET Core 8/9', 'Blazor (WASM + Server)', '.NET MAUI 9/10', 'Entity Framework Core', 'ASP.NET Core Identity', 'Semantic Kernel', 'SignalR'],
    },
    {
      title: 'Frontend',
      items: ['Vue 3 (Composition API)', 'React 18/19', 'Angular 16', 'GSAP', 'Framer Motion', 'TanStack Query', 'MudBlazor'],
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'SQLite', 'Qdrant (Vector DB)', 'Drizzle ORM', 'Prisma'],
    },
    {
      title: 'Cloud, DevOps & Testing',
      items: ['Azure (Resource Manager, Blob, Pipelines)', 'AWS S3', 'Firebase', 'Docker', 'GitHub Actions', 'MSTest · Moq · Coverlet', 'Cypress · Vitest'],
    },
    {
      title: 'AI, Security & Architecture',
      items: ['RAG Pipelines', 'OpenAI API', 'Tesseract OCR', 'JWT + OAuth', 'BCrypt', 'Clean Architecture', 'DDD', 'MVVM', 'Agile / Scrum'],
    },
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
