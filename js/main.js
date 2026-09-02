// ============================================================
// MAIN.JS — Core logic for the portfolio
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initNavbar();
  initSmoothScroll();
  initMarqueeCursor();
  initHeroFloatingEmoji();

  // Render dynamic sections if on index page
  if (document.getElementById("client-track-1")) renderClients();
  if (document.getElementById("project-grid")) renderProjects();
  if (document.getElementById("gallery-grid")) renderGallery();
  if (document.getElementById("service-grid")) renderServices();
  if (document.getElementById("stack-grid")) renderStacks();
  if (document.getElementById("testimonial-container")) renderTestimonials();
  if (document.getElementById("social-links-footer")) renderSocialLinks();

  // Project listing page
  if (document.getElementById("all-projects-grid")) renderAllProjects();

  // Gallery section on projects page
  if (document.getElementById("all-gallery-grid")) renderAllGallery();

  // Services page (full pricing cards)
  if (document.getElementById("services-page-grid")) renderServicesPage();

  // About page (skills, experiences, education, awards)
  if (document.getElementById("about-story-content")) renderAboutPage();

  // Detail pages
  if (document.getElementById("project-detail")) renderProjectDetail();
  if (document.getElementById("service-detail")) renderGalleryDetail();
});

// ============================================================
// MARQUEE CURSOR FOLLOWER
// ============================================================
function initMarqueeCursor() {
  const wrappers = document.querySelectorAll(".footer-marquee-wrapper");
  wrappers.forEach((wrapper) => {
    let cursor = wrapper.querySelector(".footer-marquee-cursor");
    if (!cursor) {
      cursor = document.createElement("div");
      cursor.className = "footer-marquee-cursor";
      cursor.innerHTML = '<i class="ri-arrow-right-up-line"></i>';
      wrapper.appendChild(cursor);
    }

    wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.classList.add("active");
    });

    wrapper.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
    });

    wrapper.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
    });
  });
}

// ============================================================
// DARK MODE — Default dark, with manual toggle
// ============================================================
function initDarkMode() {
  const toggle = document.getElementById("dark-mode-toggle");
  // Default is dark mode — check if user previously chose light
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  updateToggleIcon();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateToggleIcon();
    });
  }
}

function updateToggleIcon() {
  const toggle = document.getElementById("dark-mode-toggle");
  if (!toggle) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  toggle.innerHTML = isDark
    ? '<i class="ri-sun-line"></i>'
    : '<i class="ri-moon-line"></i>';
  toggle.title = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
}

// ============================================================
// HERO FLOATING EMOJI INTERACTION (Smileys, Idle, Dynamic Hover & Auto-Revert)
// ============================================================
function initHeroFloatingEmoji() {
  const container = document.getElementById("hero-floating-emoji");
  const iconEl = document.getElementById("hero-emoji-icon");
  if (!container || !iconEl) return;

  const DEFAULT_EMOJI = "😊";
  // Fun Smileys & Creative Expressive emojis from GetEmoji / Unicode Smileys
  const EMOJI_POOL = [
    "😎", "🤩", "🔥", "🚀", "🎨", "⚡", "👾", "✨", "✌️", "🪄",
    "🥳", "💯", "🤙", "🧠", "💎", "🎯", "🌟", "👀", "🫡", "🍕",
    "😜", "😋", "😻", "💡", "🌈", "🎈", "🔮", "👽", "🦄", "☕"
  ];

  let revertTimeout = null;
  let lastEmojiIndex = -1;

  function getRandomEmoji() {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * EMOJI_POOL.length);
    } while (nextIndex === lastEmojiIndex && EMOJI_POOL.length > 1);
    lastEmojiIndex = nextIndex;
    return EMOJI_POOL[nextIndex];
  }

  function setEmoji(emoji) {
    iconEl.textContent = emoji;
    container.classList.remove("is-popping");
    // Trigger reflow to restart css animation
    void container.offsetWidth;
    container.classList.add("is-popping");
  }

  container.addEventListener("mouseenter", () => {
    // Cancel any scheduled revert
    if (revertTimeout) {
      clearTimeout(revertTimeout);
      revertTimeout = null;
    }
    // Switch to a new different random emoji
    const nextEmoji = getRandomEmoji();
    setEmoji(nextEmoji);
  });

  container.addEventListener("mouseleave", () => {
    // Cancel pending revert if any
    if (revertTimeout) clearTimeout(revertTimeout);
    // Schedule reverting to the default emoji after 2 seconds
    revertTimeout = setTimeout(() => {
      setEmoji(DEFAULT_EMOJI);
      revertTimeout = null;
    }, 2000);
  });

  // Touch / Click support
  container.addEventListener("click", (e) => {
    e.stopPropagation();
    if (revertTimeout) clearTimeout(revertTimeout);
    const nextEmoji = getRandomEmoji();
    setEmoji(nextEmoji);
    revertTimeout = setTimeout(() => {
      setEmoji(DEFAULT_EMOJI);
      revertTimeout = null;
    }, 2000);
  });
}

// ============================================================
// NAVBAR — Hamburger menu & active state
// ============================================================
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.body;

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        body.classList.remove("menu-open");
      });
    });
  }
}

// ============================================================
// SMOOTH SCROLL
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function createPlaceholderBg(color) {
  return `background: linear-gradient(135deg, ${color}, ${color}99);`;
}

// --- Paginated Project Grid System ---
// Shared helper: renders a paginated grid of project cards
function renderPaginatedProjects(trackId, paginationId, projects, perPage) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const totalPages = Math.ceil(projects.length / perPage);

  // Build pages — each page is a 2x2 grid of project cards
  let pagesHTML = "";
  for (let page = 0; page < totalPages; page++) {
    const slice = projects.slice(page * perPage, (page + 1) * perPage);
    const cardsHTML = slice
      .map(
        (p) => `
      <a href="project-detail.html?id=${p.id}" class="project-card">
        <div class="project-card-image" style="${p.image ? `background-image:url('${encodeURI(p.image)}')` : createPlaceholderBg(p.placeholderColor)}">
          <span class="project-card-category">${p.category}</span>
          ${!p.image ? `<span class="placeholder-label">${p.title}</span>` : ""}
        </div>
        <div class="project-card-content">
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-subtitle">${p.subtitle || ""}</p>
        </div>
      </a>`
      )
      .join("");

    pagesHTML += `<div class="project-page ${page === 0 ? 'active' : ''}" data-page="${page}">
      <div class="project-grid">${cardsHTML}</div>
    </div>`;
  }

  track.innerHTML = pagesHTML;

  // Build pagination controls
  const pagination = document.getElementById(paginationId);
  if (pagination && totalPages > 1) {
    let paginationHTML = `<button class="project-pag-arrow project-pag-prev" data-track="${trackId}" data-pagination="${paginationId}" onclick="changePage('${trackId}', '${paginationId}', -1)"><i class="ri-arrow-left-s-line"></i></button>`;

    for (let i = 0; i < totalPages; i++) {
      paginationHTML += `<button class="project-pag-num ${i === 0 ? 'active' : ''}" data-track="${trackId}" data-pagination="${paginationId}" data-page="${i}" onclick="goToPage('${trackId}', '${paginationId}', ${i})">${i + 1}</button>`;
    }

    paginationHTML += `<button class="project-pag-arrow project-pag-next" data-track="${trackId}" data-pagination="${paginationId}" onclick="changePage('${trackId}', '${paginationId}', 1)"><i class="ri-arrow-right-s-line"></i></button>`;

    pagination.innerHTML = paginationHTML;
  }
}

// Get the current active page index for a given track
function getCurrentPage(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return 0;
  const activePage = track.querySelector(".project-page.active");
  return activePage ? parseInt(activePage.dataset.page) : 0;
}

function changePage(trackId, paginationId, dir) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const pages = track.querySelectorAll(".project-page");
  const total = pages.length;
  const current = getCurrentPage(trackId);
  const next = Math.max(0, Math.min(total - 1, current + dir));
  goToPage(trackId, paginationId, next);
}

function goToPage(trackId, paginationId, pageIdx) {
  const track = document.getElementById(trackId);
  if (!track) return;

  // Fade out current, fade in next
  const pages = track.querySelectorAll(".project-page");
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === pageIdx);
  });

  // Update pagination numbers
  const pagination = document.getElementById(paginationId);
  if (pagination) {
    pagination.querySelectorAll(".project-pag-num").forEach((btn, i) => {
      btn.classList.toggle("active", i === pageIdx);
    });

    // Update arrow opacity
    const prevBtn = pagination.querySelector(".project-pag-prev");
    const nextBtn = pagination.querySelector(".project-pag-next");
    if (prevBtn) prevBtn.style.opacity = pageIdx === 0 ? "0.3" : "1";
    if (nextBtn) nextBtn.style.opacity = pageIdx === pages.length - 1 ? "0.3" : "1";
  }

  // Scroll to top of section smoothly
  const section = track.closest(".section, .container");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// --- Homepage: Latest 4 Projects (simple grid, no pagination) ---
function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  grid.innerHTML = PROJECTS.slice(0, 4)
    .map(
      (p) => `
    <a href="project-detail.html?id=${p.id}" class="project-card">
      <div class="project-card-image" style="${p.image ? `background-image:url('${encodeURI(p.image)}')` : createPlaceholderBg(p.placeholderColor)}">
        <span class="project-card-category">${p.category}</span>
        ${!p.image ? `<span class="placeholder-label">${p.title}</span>` : ""}
      </div>
      <div class="project-card-content">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-subtitle">${p.subtitle || ""}</p>
      </div>
    </a>
  `
    )
    .join("");
}

// --- Projects Page: All Projects (4 per page) ---
function renderAllProjects() {
  if (typeof PROJECTS === "undefined") return;
  renderPaginatedProjects("all-projects-grid", "all-projects-pagination", PROJECTS, 4);
}


// --- Gallery (homepage — grid) ---
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid || typeof GALLERY_ITEMS === "undefined") return;

  grid.innerHTML = GALLERY_ITEMS.slice(0, 6)
    .map(
      (p) => `
    <a href="service-detail.html?id=${p.id}" class="product-card">
      <div class="product-card-image" style="${p.image ? `background-image:url('${encodeURI(p.image)}')` : createPlaceholderBg(p.placeholderColor)}">
        ${!p.image ? `<span class="placeholder-label">${p.title}</span>` : ""}
      </div>
      <div class="product-card-info">
        <h3 class="product-card-title">${p.category}</h3>
        <span class="product-card-category">${p.tools || p.title}</span>
      </div>
    </a>
  `
    )
    .join("");
}

// --- All Gallery (projects page — gallery section) ---
function renderAllGallery() {
  const grid = document.getElementById("all-gallery-grid");
  if (!grid || typeof GALLERY_ITEMS === "undefined") return;

  grid.innerHTML = GALLERY_ITEMS.map(
    (p) => `
    <a href="service-detail.html?id=${p.id}" class="product-card">
      <div class="product-card-image" style="${p.image ? `background-image:url('${encodeURI(p.image)}')` : createPlaceholderBg(p.placeholderColor)}">
        ${!p.image ? `<span class="placeholder-label">${p.title}</span>` : ""}
      </div>
      <div class="product-card-info">
        <h3 class="product-card-title">${p.category}</h3>
        <span class="product-card-category">${p.tools || p.title}</span>
      </div>
    </a>
  `
  ).join("");
}

// --- Services (homepage — interactive slide rows) ---
function renderServices() {
  const container = document.getElementById("service-grid");
  if (!container) return;

  const items = typeof HOME_SERVICES !== "undefined" ? HOME_SERVICES : [
    { num: "01", title: "Branding & Visual Identity", image: "assets/images/project-redesign-telkom-indonesia/stationary-syne-3.png", link: "services.html#brand-identity" },
    { num: "02", title: "Art Direction & Production", image: "assets/images/project-womenmoment/hero-womenmoment.png", link: "services.html#graphic-design" },
    { num: "03", title: "Social Media Graphics", image: "assets/images/project-rynest/rynest-feed-1.png", link: "services.html#social-media" },
    { num: "04", title: "UI/UX & Web Design", image: "assets/images/project-rynest/rynest-hero.png", link: "services.html#website-ui" },
  ];

  container.innerHTML = items.map((s, idx) => `
    <a href="${s.link || 'services.html'}" class="home-service-row reveal-slide-right" style="--stagger-delay: ${0.08 + idx * 0.12}s;">
      <div class="home-service-pill">
        <span class="home-service-num">${s.num}</span>
        <span class="home-service-title">${s.title}</span>
      </div>
      <div class="home-service-banner-card" style="${s.image ? `background-image:url('${encodeURI(s.image)}')` : `background:#222`}">
        <div class="home-service-overlay">
          <span class="home-service-badge"><i class="ri-arrow-right-up-line"></i> View Service &amp; Pricing</span>
        </div>
      </div>
    </a>
  `).join("");

  if (typeof initScrollReveal === "function") {
    initScrollReveal();
  }
}

// --- Services Page (full pricing cards on services.html) ---
function renderServicesPage() {
  const grid = document.getElementById("services-page-grid");
  if (!grid || typeof SERVICE_OFFERINGS === "undefined") return;

  grid.innerHTML = SERVICE_OFFERINGS.map(
    (s) => `
    <div class="service-card">
      <div class="service-card-header">
        <div class="service-icon"><i class="${s.icon}"></i></div>
        <h4 class="service-title">${s.title}</h4>
        <span class="service-price">${s.price}</span>
      </div>
      <p class="service-description">${s.description}</p>
      <div class="service-bonuses">
        <span class="bonuses-label">Bonuses</span>
        <ul>
          ${s.bonuses.map((b) => `<li><i class="ri-check-line"></i> ${b}</li>`).join("")}
        </ul>
      </div>
      <a href="contact.html?service=${encodeURIComponent(s.id)}" class="btn btn-primary btn-sm">${s.ctaText || 'Start Now'}</a>
    </div>
  `
  ).join("");
}

// --- Stacks ---
function renderStacks() {
  const grid = document.getElementById("stack-grid");
  if (!grid || typeof STACKS === "undefined") return;

  grid.innerHTML = STACKS.map(
    (s) => `
    <div class="stack-item">
      <div class="stack-icon"><i class="${s.icon}"></i></div>
      <div class="stack-info">
        <span class="stack-name">${s.name}</span>
        <span class="stack-desc">${s.description}</span>
      </div>
    </div>
  `
  ).join("");
}

// --- Testimonials ---
function renderTestimonials() {
  const container = document.getElementById("testimonial-container");
  if (!container || typeof TESTIMONIALS === "undefined") return;

  container.innerHTML = TESTIMONIALS.map(
    (t) => `
    <div class="testimonial-card">
      <blockquote class="testimonial-quote">"${t.quote}"</blockquote>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.author.charAt(0)}</div>
        <div>
          <span class="testimonial-name">${t.author}</span>
          <span class="testimonial-role">${t.role}</span>
        </div>
      </div>
    </div>
  `
  ).join("");
}

// --- Social links (footer) ---
function renderSocialLinks() {
  const container = document.getElementById("social-links-footer");
  if (!container || typeof SOCIAL_LINKS === "undefined") return;

  container.innerHTML = SOCIAL_LINKS.map(
    (s) => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="footer-social-link" title="${s.name}">
      <i class="${s.icon}"></i>
    </a>
  `
  ).join("");
}

// --- Tool Icon Helper (Authentic SVGs) ---
function getToolIconHtml(tool) {
  const t = tool.type || "";
  if (t === "adobe") {
    return `<svg width="18" height="15" viewBox="0 0 24 20" fill="#ff0000" style="flex-shrink:0;"><path d="M15.1 0H24v20L15.1 0zM8.9 0H0v20L8.9 0zM12 7.4L16.6 18H12.9l-1.6-4.1H8.5L12 7.4z"/></svg>`;
  }
  if (t === "figma") {
    return `<svg width="14" height="20" viewBox="0 0 38 57" fill="none" style="flex-shrink:0;"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/></svg>`;
  }
  if (t === "framer") {
    return `<svg width="16" height="20" viewBox="0 0 24 24" fill="#0055FF" style="flex-shrink:0;"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>`;
  }
  if (t === "csp") {
    return `<img src="assets/images/csp-logo.png" alt="Clip Studio Paint" style="width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; border-radius: 4px;" />`;
  }
  if (t === "capcut") {
    return `<img src="assets/images/capcut-logo.png" alt="CapCut" style="width: 20px; height: 20px; object-fit: contain; flex-shrink: 0;" />`;
  }
  if (t === "canva") {
    return `<img src="assets/images/canva-logo.png" alt="Canva" style="width: 20px; height: 20px; object-fit: cover; border-radius: 50%; flex-shrink: 0;" />`;
  }
  if (t === "trello") {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="#0079BF" style="flex-shrink:0;"><path d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2zM10 15.5a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1H9a1 1 0 0 1 1 1v10zm9.5-4a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v6z"/></svg>`;
  }
  if (t === "google") {
    return `<svg width="19" height="19" viewBox="0 0 24 24" style="flex-shrink:0;"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>`;
  }
  if (t === "office") {
    return `<svg width="18" height="18" viewBox="0 0 24 24" style="flex-shrink:0;"><path fill="#F25022" d="M1 1h10v10H1z"/><path fill="#7FBA00" d="M13 1h10v10H13z"/><path fill="#00A4EF" d="M1 13h10v10H1z"/><path fill="#FFB900" d="M13 13h10v10H13z"/></svg>`;
  }
  if (t === "chatgpt") {
    return `<img src="assets/images/chatgpt-logo.png" alt="ChatGPT" style="width: 20px; height: 20px; object-fit: contain; flex-shrink: 0;" />`;
  }
  if (t === "magnific") {
    return `<svg width="19" height="19" viewBox="0 0 100 100" fill="currentColor" style="flex-shrink:0;"><path d="M35 18 H47 L50 43 L53 18 H65 L85 82 H63 L50 51 L37 82 H15 Z"/></svg>`;
  }
  if (t === "gemini") {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="url(#geminiGrad)" style="flex-shrink:0;"><defs><linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9b5de5"/><stop offset="100%" stop-color="#00bbf9"/></linearGradient></defs><path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/></svg>`;
  }
  return `<i class="${tool.icon || 'ri-apps-2-line'}"></i>`;
}

// ============================================================
// ABOUT PAGE RENDERER
// ============================================================
function renderAboutPage() {
  if (typeof ABOUT_DATA === "undefined") return;

  // 1. Story paragraphs
  const storyContainer = document.getElementById("about-story-content");
  if (storyContainer && ABOUT_DATA.aboutStory) {
    storyContainer.innerHTML = ABOUT_DATA.aboutStory
      .map((p) => `<p class="about-bio" style="margin-bottom: 16px;">${p}</p>`)
      .join("");
  }

  // 2. Skills & Tools Flow (Pills & Logo Boxes)
  const skillsContainer = document.getElementById("about-skills-grid");
  if (skillsContainer) {
    const skills = ABOUT_DATA.skillsList || [];
    const tools = ABOUT_DATA.toolsList || [];

    skillsContainer.innerHTML = `
      <div class="skills-simple-wrapper">
        <!-- Part 1: Skill Pill Badges -->
        <div class="skills-pills-wrap">
          ${skills.map((s) => `<span class="skill-pill-badge">${s}</span>`).join("")}
        </div>

        <!-- Part 2: Tools / Software Logo Boxes -->
        <div class="tools-boxes-wrap">
          ${tools.map((t) => `
            <div class="tool-logo-box">
              ${getToolIconHtml(t)}
              <span>${t.name}</span>
              ${t.subbadges ? `
                <div class="tool-subbadges">
                  ${t.subbadges.map((b) => `<span class="tool-subbadge">${b}</span>`).join("")}
                </div>
              ` : ""}
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // 3. Experiences List (with smooth scroll reveal)
  const expContainer = document.getElementById("about-experiences-list");
  if (expContainer && ABOUT_DATA.experiences) {
    expContainer.innerHTML = ABOUT_DATA.experiences
      .map(
        (exp) => `
      <div class="experience-card reveal-slide-left">
        <div class="experience-top">
          <div>
            <h3 class="experience-role">${exp.role}</h3>
            <div class="experience-company">${exp.company}</div>
          </div>
          <span class="experience-period">${exp.period}</span>
        </div>
        <p class="experience-desc">${exp.description}</p>
        <div class="experience-tags">
          ${exp.tags.map((t) => `<span class="experience-tag">${t}</span>`).join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  // 4. Education List
  const eduContainer = document.getElementById("about-education-list");
  if (eduContainer && ABOUT_DATA.education) {
    eduContainer.innerHTML = ABOUT_DATA.education
      .map(
        (edu) => `
      <div class="edu-card reveal-slide-left">
        <h3 class="edu-title">${edu.degree}</h3>
        <div class="edu-inst">
          <span>${edu.institution}</span>
          <span class="edu-period">${edu.period}</span>
        </div>
        <p class="edu-desc">${edu.description}</p>
      </div>
    `
      )
      .join("");
  }

  // 5. Awards List
  const awardsContainer = document.getElementById("about-awards-list");
  if (awardsContainer && ABOUT_DATA.awards) {
    awardsContainer.innerHTML = ABOUT_DATA.awards
      .map(
        (award) => `
      <div class="award-card reveal-slide-left">
        <h3 class="award-title">${award.title}</h3>
        <div class="award-issuer">
          <span>${award.issuer}</span>
          <span class="award-year">${award.year}</span>
        </div>
        <p class="award-desc">${award.description}</p>
      </div>
    `
      )
      .join("");
  }

  // Initialize Scroll Reveal observer
  initScrollReveal();
}

// ============================================================
// SCROLL REVEAL (Smooth Intersection Observer)
// ============================================================
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal-slide-left, .reveal-slide-right");
  if (!elements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target); // keep revealed smoothly
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    elements.forEach((el) => el.classList.add("is-revealed"));
  }
}

// ============================================================
// CLIENTS MARQUEE RENDERER (Dual Direction)
// ============================================================
function renderClients() {
  const track1 = document.getElementById("client-track-1");
  const track2 = document.getElementById("client-track-2");
  if (!track1 || !track2 || typeof CLIENTS_ROW_1 === "undefined" || typeof CLIENTS_ROW_2 === "undefined") return;

  function createClientHtml(item) {
    if (item.logo) {
      return `
        <div class="client-logo-item">
          <img src="${encodeURI(item.logo)}" alt="${item.name}" />
          <span class="client-logo-dot"></span>
        </div>
      `;
    }
    return `
      <div class="client-logo-item">
        <div class="client-logo-text">
          <span>${item.name}</span>
          ${item.subtext ? `<span class="client-logo-subtext">${item.subtext}</span>` : ""}
        </div>
        <span class="client-logo-dot"></span>
      </div>
    `;
  }

  // Duplicate items 4x for continuous seamless infinite loop
  const list1 = [...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1];
  const list2 = [...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2];

  track1.innerHTML = list1.map(createClientHtml).join("");
  track2.innerHTML = list2.map(createClientHtml).join("");
}

// ============================================================
// PROJECT DETAIL PAGE
// ============================================================
// Global active lightbox items
let currentLightboxImages = [];
let currentLightboxIndex = 0;

function renderProjectDetail() {
  const container = document.getElementById("project-detail");
  if (!container || typeof PROJECTS === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];

  document.title = `${project.title} — ${SITE_INFO.name}`;

  // Process Images
  const processImages = Array.isArray(project.processImages) ? project.processImages : [];

  // Documentation Slider Images
  const docImages = Array.isArray(project.documentationImages) && project.documentationImages.length > 0
    ? project.documentationImages
    : [
        { title: "Documentation Overview", image: project.image, placeholderColor: project.placeholderColor },
        { title: "Process Detail 1", image: processImages[0]?.image || null, placeholderColor: project.placeholderColor },
        { title: "Process Detail 2", image: processImages[1]?.image || null, placeholderColor: project.placeholderColor },
      ];

  // Store for global lightbox
  window.__projectImages = {
    hero: [{ title: project.title, image: project.image, placeholderColor: project.placeholderColor }],
    process: processImages,
    documentation: docImages,
  };

  // Other projects
  const otherProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  container.innerHTML = `
    <!-- Centered Header -->
    <div class="project-detail-header text-center">
      <span class="detail-category">${project.category}</span>
      <h1 class="project-detail-title">${project.title}</h1>
      <p class="project-detail-subtitle">${project.subtitle || ""}</p>
      <p class="project-detail-lead">${project.description}</p>
    </div>

    <!-- Main Hero Cover Image / Showcase (Clickable for Pop-up) -->
    <div class="project-detail-hero-cover ${project.image ? 'has-real-image' : ''}" 
         onclick="openLightbox(0, 'hero')" 
         title="Click to expand"
         style="${project.image ? `background-image:url('${encodeURI(project.image)}')` : createPlaceholderBg(project.placeholderColor)}">
      ${!project.image ? `<span class="placeholder-label">${project.title} &mdash; Featured Mockup</span>` : ""}
      <div class="hero-cover-zoom-badge">
        <i class="ri-zoom-in-line"></i>
      </div>
    </div>

    <!-- Case Study Sections (Centered & Structured) -->
    <div class="project-detail-content">
      
      <!-- Section 1: Design Process -->
      <section class="project-section text-center">
        <h2 class="project-section-heading">Design Process</h2>
        <p class="project-section-text">${project.designProcess}</p>
        
        <!-- Process Images Gallery (Clickable for pop up) -->
        ${processImages.length > 0 ? `
        <div class="project-gallery-grid">
          ${processImages.map((item, idx) => `
            <div class="project-gallery-card ${item.image ? 'has-real-image' : ''}" 
                 onclick="openLightbox(${idx}, 'process')" 
                 title="Click to expand"
                 style="${item.image ? `background-image:url('${encodeURI(item.image)}')` : createPlaceholderBg(item.placeholderColor || project.placeholderColor)}">
              ${!item.image ? `<span class="placeholder-label">${item.title || `Process Showcase ${idx + 1}`}</span>` : ""}
              <div class="gallery-card-overlay">
                <span class="gallery-card-title">${item.title}</span>
                <span class="gallery-card-icon"><i class="ri-zoom-in-line"></i></span>
              </div>
            </div>
          `).join("")}
        </div>
        ` : ''}
      </section>

      <!-- Section 2: Challenge -->
      <section class="project-section text-center">
        <div class="project-callout-card">
          <h2 class="project-section-heading">Challenge</h2>
          <p class="project-section-text">${project.challenge}</p>
        </div>
      </section>

      <!-- Section 3: Solution & Result -->
      <section class="project-section text-center">
        <h2 class="project-section-heading">Solution & Result</h2>
        <p class="project-section-text">${project.solution}</p>
      </section>

      <!-- Section 4: Project Showcase / Deliverables (Interactive Slider + Pop-up Modal) -->
      <section class="project-section text-center">
        <div class="section-title-wrapper">
          <h2 class="project-section-heading">${project.documentationHeading || "Project Showcase"}</h2>
          <p class="project-section-text">${project.documentation}</p>
        </div>

        <!-- Documentation Carousel / Slider -->
        <div class="doc-slider-wrapper">
          <button class="slider-arrow slider-arrow-left" onclick="slideDocumentation(-1)" aria-label="Slide left">
            <i class="ri-arrow-left-s-line"></i>
          </button>
          
          <div class="doc-slider-track" id="docSliderTrack">
            ${docImages.map((doc, idx) => {
              if (doc.video || doc.type === "video") {
                return `
                  <div class="doc-slide-card doc-slide-video has-real-video" 
                       onclick="openLightbox(${idx}, 'documentation')" 
                       title="Click to play video">
                    <video src="${encodeURI(doc.video)}" autoplay loop muted playsinline class="doc-slide-video-preview"></video>
                    <div class="video-play-badge"><i class="ri-play-fill"></i> REELS</div>
                    <div class="slide-overlay">
                      <span class="slide-title">${doc.title || `Video ${idx + 1}`}</span>
                      <span class="slide-zoom-btn"><i class="ri-play-circle-line"></i> Play Video</span>
                    </div>
                  </div>
                `;
              }
              return `
                <div class="doc-slide-card ${doc.image ? 'has-real-image' : ''}" 
                     onclick="openLightbox(${idx}, 'documentation')" 
                     title="Click to view full size"
                     style="${doc.image ? `background-image:url('${encodeURI(doc.image)}')` : createPlaceholderBg(doc.placeholderColor || project.placeholderColor)}">
                  <div class="slide-overlay">
                    <span class="slide-title">${doc.title || `Showcase ${idx + 1}`}</span>
                    <span class="slide-zoom-btn"><i class="ri-zoom-in-line"></i> Expand</span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>

          <button class="slider-arrow slider-arrow-right" onclick="slideDocumentation(1)" aria-label="Slide right">
            <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
        <p class="slider-hint"><i class="ri-cursor-line"></i> Geser slide dari kanan ke kiri &amp; klik media untuk perbesar</p>
      </section>

      <!-- Centered CTA / Social Media Links -->
      <div class="project-detail-cta text-center" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 40px 0 60px;">
        ${project.socialLinks && project.socialLinks.length > 0 ? project.socialLinks.map(s => `
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg" style="display: inline-flex; align-items: center; gap: 8px;">
            <i class="${s.icon}"></i> ${s.name} <i class="ri-arrow-right-up-line"></i>
          </a>
        `).join("") : `
          <a href="${project.externalLink || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            View full project <i class="ri-arrow-right-up-line"></i>
          </a>
        `}
      </div>

      <!-- More Projects Section -->
      ${otherProjects.length > 0 ? `
        <div class="detail-more text-center">
          <h3 class="section-title">Other Projects</h3>
          <p class="section-subtitle">Explore more of my design case studies</p>
          <div class="project-grid" style="margin-top: 32px; text-align: left;">
            ${otherProjects.map((p) => `
              <a href="project-detail.html?id=${p.id}" class="project-card">
                <div class="project-card-image" style="${p.image ? `background-image:url(${p.image})` : createPlaceholderBg(p.placeholderColor)}">
                  <span class="project-card-category">${p.category}</span>
                  ${!p.image ? `<span class="placeholder-label">${p.title}</span>` : ""}
                </div>
                <div class="project-card-content">
                  <h3 class="project-card-title">${p.title}</h3>
                  <p class="project-card-subtitle">${p.subtitle || ""}</p>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      ` : ""}

    </div>
  `;
}

// ============================================================
// DOCUMENTATION SLIDER CONTROLS
// ============================================================
function slideDocumentation(direction) {
  const track = document.getElementById("docSliderTrack");
  if (!track) return;
  const slideWidth = 360;
  track.scrollBy({ left: direction * slideWidth, behavior: "smooth" });
}

// ============================================================
// LIGHTBOX / IMAGE POP-UP MODAL
// ============================================================
function openLightbox(index, groupName) {
  const pool = window.__projectImages && window.__projectImages[groupName];
  if (!pool || pool.length === 0) return;

  currentLightboxImages = pool;
  currentLightboxIndex = index;

  let modal = document.getElementById("lightbox-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "lightbox-modal";
    modal.className = "lightbox-modal";
    modal.innerHTML = `
      <div class="lightbox-backdrop" onclick="closeLightbox()"></div>
      <div class="lightbox-container">
        <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close modal">
          <i class="ri-close-line"></i>
        </button>
        <button class="lightbox-nav lightbox-nav-prev" onclick="navLightbox(-1)" aria-label="Previous">
          <i class="ri-arrow-left-s-line"></i>
        </button>
        <div class="lightbox-content-box" id="lightboxContent">
          <!-- Loaded dynamically -->
        </div>
        <button class="lightbox-nav lightbox-nav-next" onclick="navLightbox(1)" aria-label="Next">
          <i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navLightbox(-1);
      if (e.key === "ArrowRight") navLightbox(1);
    });
  }

  updateLightboxContent();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateLightboxContent() {
  const contentBox = document.getElementById("lightboxContent");
  if (!contentBox || !currentLightboxImages.length) return;

  const current = currentLightboxImages[currentLightboxIndex];
  if (!current) return;

  if (current.video || current.type === "video") {
    contentBox.innerHTML = `
      <video src="${encodeURI(current.video)}" controls autoplay playsinline class="lightbox-video"></video>
      <div class="lightbox-caption">
        <h4>${current.title || "Video Showcase"}</h4>
        <span>${currentLightboxIndex + 1} / ${currentLightboxImages.length}</span>
      </div>
    `;
  } else if (current.image) {
    contentBox.innerHTML = `
      <img src="${current.image}" alt="${current.title || 'Image'}" class="lightbox-image" />
      <div class="lightbox-caption">
        <h4>${current.title || ""}</h4>
        <span>${currentLightboxIndex + 1} / ${currentLightboxImages.length}</span>
      </div>
    `;
  } else {
    contentBox.innerHTML = `
      <div class="lightbox-placeholder" style="${createPlaceholderBg(current.color || current.placeholderColor || '#333')}">
        <span class="placeholder-label">${current.title || "Preview Placeholder"}</span>
      </div>
      <div class="lightbox-caption">
        <h4>${current.title || ""}</h4>
        <span>${currentLightboxIndex + 1} / ${currentLightboxImages.length}</span>
      </div>
    `;
  }
}

function navLightbox(direction) {
  if (!currentLightboxImages.length) return;
  const contentBox = document.getElementById("lightboxContent");
  if (contentBox) {
    const videos = contentBox.querySelectorAll("video");
    videos.forEach((v) => {
      v.pause();
      v.src = "";
    });
  }
  currentLightboxIndex = (currentLightboxIndex + direction + currentLightboxImages.length) % currentLightboxImages.length;
  updateLightboxContent();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.remove("active");
  }
  // Stop and destroy any playing video inside lightbox to immediately cut off audio
  const contentBox = document.getElementById("lightboxContent");
  if (contentBox) {
    const videos = contentBox.querySelectorAll("video");
    videos.forEach((v) => {
      v.pause();
      v.currentTime = 0;
      v.src = "";
      v.load();
    });
    contentBox.innerHTML = "";
  }
  document.body.style.overflow = "";
}

// ============================================================
// GALLERY DETAIL PAGE
// ============================================================
function renderGalleryDetail() {
  const container = document.getElementById("service-detail");
  if (!container || typeof GALLERY_ITEMS === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");
  const item = GALLERY_ITEMS.find((p) => p.id === itemId);

  if (!item) {
    container.innerHTML = `
      <div class="detail-not-found">
        <h2>Gallery item not found</h2>
        <p>The creative work you're looking for doesn't exist.</p>
        <a href="projects.html#gallery" class="btn btn-primary">View Gallery</a>
      </div>`;
    return;
  }

  document.title = `${item.category} — ${SITE_INFO.name}`;

  // Photos array
  const photos = item.photos || [
    { title: `${item.category} 1`, color: item.placeholderColor, image: null },
    { title: `${item.category} 2`, color: item.placeholderColor, image: null },
    { title: `${item.category} 3`, color: item.placeholderColor, image: null },
    { title: `${item.category} 4`, color: item.placeholderColor, image: null },
    { title: `${item.category} 5`, color: item.placeholderColor, image: null },
    { title: `${item.category} 6`, color: item.placeholderColor, image: null },
  ];

  // Store for global lightbox
  window.__projectImages = {
    hero: [{ title: item.category, image: item.image, placeholderColor: item.placeholderColor }],
    galleryDetail: photos,
  };

  // Split tools
  const toolsList = item.tools ? item.tools.split(",").map((t) => t.trim()) : [];

  container.innerHTML = `
    <!-- Clean Hero Banner (Big Category Title Only) -->
    <div class="gallery-detail-hero" style="${item.image ? `background-image:url('${encodeURI(item.image)}')` : createPlaceholderBg(item.placeholderColor)}">
      <div class="gallery-detail-hero-overlay">
        <h1 class="gallery-detail-title">${item.category}</h1>
      </div>
    </div>

    <div class="gallery-detail-body">
      <!-- Description -->
      <p class="gallery-detail-intro">${item.description}</p>

      <!-- Tools I Use Section -->
      ${toolsList.length > 0 ? `
        <div class="gallery-tools-wrapper">
          <div class="gallery-tools-label">
            <i class="ri-tools-line"></i> Tools I Use:
          </div>
          <div class="gallery-tools-list">
            ${toolsList.map((tool) => `
              <span class="gallery-tool-pill">
                <i class="ri-checkbox-circle-fill" style="color: var(--accent-green);"></i> ${tool}
              </span>
            `).join("")}
          </div>
        </div>
      ` : ""}

      <!-- Behance-Style Photo Grid (Pure Photos, Click to pop up) -->
      <div class="gallery-showcase-section">
        <div class="behance-photo-grid">
          ${photos.map((p, idx) => `
            <div class="behance-photo-card" 
                 onclick="openLightbox(${idx}, 'galleryDetail')" 
                 title="Click to view full size"
                 style="${p.image ? `background-image:url('${encodeURI(p.image)}')` : createPlaceholderBg(p.color || item.placeholderColor)}">
              <div class="photo-zoom-icon">
                <i class="ri-zoom-in-line"></i>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- CTA -->
      <div style="text-align: center; margin: 48px 0 60px;">
        <a href="mailto:${SITE_INFO.email}?subject=${encodeURIComponent('Inquiry: ' + item.category)}" class="btn btn-primary btn-lg">
          <i class="ri-mail-line"></i> Get in Touch
        </a>
      </div>
    </div>

    ${renderMoreGallery(item.id)}
  `;
}

function renderMoreGallery(currentId) {
  const others = GALLERY_ITEMS.filter((p) => p.id !== currentId).slice(0, 3);
  if (others.length === 0) return "";

  return `
    <div class="detail-more">
      <h3 class="section-title">More Gallery</h3>
      <div class="product-grid product-grid-small">
        ${others
          .map(
            (p) => `
          <a href="service-detail.html?id=${p.id}" class="product-card">
            <div class="product-card-image" style="${p.image ? `background-image:url('${encodeURI(p.image)}')` : createPlaceholderBg(p.placeholderColor)}">
              ${!p.image ? `<span class="placeholder-label">${p.title}</span>` : ""}
            </div>
            <div class="product-card-info">
              <h3 class="product-card-title">${p.category}</h3>
              <span class="product-card-category">${p.tools || p.title}</span>
            </div>
          </a>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}
