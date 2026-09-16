/* =====================================================
   RR Skillverse Handbook — Shared JavaScript
   Power BI Data Analysis for Engineers
   ===================================================== */

/* ===== MODULE REGISTRY ===== */
const MODULES = [
  {
    id: 1, title: "Power BI Foundations", file: "module1.html",
    topics: [
      { id: "bi-concepts",       title: "BI Concepts & Power BI's Role" },
      { id: "ecosystem",         title: "The Power BI Ecosystem" },
      { id: "architecture",      title: "Architecture & Data Flow" },
      { id: "analytics-workflow",title: "The Analytics Workflow" },
      { id: "lab-explore",       title: "Hands-On: Exploring Power BI Desktop" }
    ]
  },
  {
    id: 2, title: "Connecting to Data Sources", file: "module2.html",
    topics: [
      { id: "connectors",        title: "Connectors Overview" },
      { id: "combining",         title: "Combining Multiple Sources" },
      { id: "connectivity-modes",title: "Import vs DirectQuery vs Live" },
      { id: "industry-cases",    title: "Industry Use Cases" },
      { id: "credentials",       title: "Credentials & Privacy Levels" },
      { id: "error-handling",    title: "Handling Import Errors" },
      { id: "naming-conventions",title: "Naming Conventions" },
      { id: "lab-connect",       title: "Hands-On: Connect to RR EngineerWorks" }
    ]
  },
  {
    id: 3, title: "Data Transformation with Power Query", file: "module3.html",
    topics: [
      { id: "pq-interface",      title: "Power Query Interface & Applied Steps" },
      { id: "basic-transforms",  title: "Filter, Sort, Group, Replace" },
      { id: "column-ops",        title: "Column Operations" },
      { id: "append-merge",      title: "Appending & Merging Queries" },
      { id: "custom-columns",    title: "Conditional & Custom Columns" },
      { id: "nulls-errors",      title: "Handling Nulls, Blanks & Errors" },
      { id: "data-profiling",    title: "Data Profiling" },
      { id: "parameters",        title: "Query Parameters & Reusability" },
      { id: "lab-transform",     title: "Hands-On: Clean RR EngineerWorks Data" }
    ]
  },
  {
    id: 4, title: "Data Modelling & Semantic Design", file: "module4.html",
    topics: [
      { id: "semantic-model",    title: "What Is a Semantic Model?" },
      { id: "fact-dim",          title: "Fact & Dimension Tables" },
      { id: "star-schema",       title: "Star vs Snowflake Schema" },
      { id: "relationships",     title: "Relationships & Cardinality" },
      { id: "date-table",        title: "Creating a Date Table" },
      { id: "model-opt",         title: "Model Optimization" },
      { id: "hierarchies",       title: "Building Hierarchies" },
      { id: "lab-model",         title: "Hands-On: Build the Semantic Model" }
    ]
  },
  {
    id: 5, title: "DAX Foundations", file: "module5.html",
    topics: [
      { id: "dax-intro",         title: "DAX Syntax & Concepts" },
      { id: "calc-types",        title: "Measures vs Columns vs Tables" },
      { id: "first-measures",    title: "Writing Your First Measures" },
      { id: "filter-context",    title: "Understanding Filter Context" },
      { id: "calculate",         title: "CALCULATE & Context Modifiers" },
      { id: "core-functions",    title: "Core DAX Functions" },
      { id: "lab-dax-basics",    title: "Hands-On: DAX Calculations" }
    ]
  },
  {
    id: 6, title: "Advanced DAX & Time Intelligence", file: "module6.html",
    topics: [
      { id: "iterators",         title: "Row Context & Iterator Functions" },
      { id: "table-functions",   title: "Table Functions" },
      { id: "calendar-table",    title: "Date Table for Time Intelligence" },
      { id: "time-intel",        title: "Time Intelligence Functions" },
      { id: "yoy",               title: "Year-on-Year Growth" },
      { id: "semi-additive",     title: "Semi-Additive Measures" },
      { id: "visual-calcs",      title: "Visual Calculations" },
      { id: "lab-advanced-dax",  title: "Hands-On: Time Intelligence Lab" }
    ]
  },
  {
    id: 7, title: "Report Design & Visualization", file: "module7.html",
    topics: [
      { id: "right-visual",      title: "Choosing the Right Visual" },
      { id: "core-visuals",      title: "Core Visuals Reference" },
      { id: "layout-principles", title: "Layout & Design Principles" },
      { id: "interactivity",     title: "Drill-Down, Tooltips & Bookmarks" },
      { id: "conditional-fmt",   title: "Conditional Formatting" },
      { id: "use-cases",         title: "Sales & Finance Report Design" },
      { id: "lab-reports",       title: "Hands-On: Build the RR Dashboard" }
    ]
  },
  {
    id: 8, title: "Advanced Analytics & Performance", file: "module8.html",
    topics: [
      { id: "analytics-features",title: "Trend Lines & Forecasting" },
      { id: "ai-visuals",        title: "AI Visuals" },
      { id: "whatif",            title: "What-If Parameters" },
      { id: "perf-analyzer",     title: "Performance Analyzer" },
      { id: "optimization",      title: "Report Optimization" },
      { id: "storytelling",      title: "Storytelling with Data" },
      { id: "lab-analytics",     title: "Hands-On: Analytics Lab" }
    ]
  },
  {
    id: 9, title: "Publishing, Collaboration & Security", file: "module9.html",
    topics: [
      { id: "publishing",        title: "Publishing to Power BI Service" },
      { id: "workspaces",        title: "Workspaces & Permissions" },
      { id: "refresh",           title: "Scheduled Refresh & Gateway" },
      { id: "rls",               title: "Row-Level Security" },
      { id: "sharing",           title: "Exporting & Sharing" },
      { id: "fabric-copilot",    title: "Copilot & Microsoft Fabric" },
      { id: "lab-service",       title: "Hands-On: Publish & Secure" }
    ]
  },
  {
    id: 10, title: "Capstone: End-to-End Solution", file: "module10.html",
    topics: [
      { id: "scenarios",         title: "Choose Your Scenario" },
      { id: "build-transform",   title: "Stage 1 — Transform" },
      { id: "build-model",       title: "Stage 2 — Model" },
      { id: "build-visualize",   title: "Stage 3 — Visualize" },
      { id: "build-publish",     title: "Stage 4 — Publish & Secure" },
      { id: "present",           title: "Present Your Insights" },
      { id: "deliverables",      title: "Deliverables Checklist" }
    ]
  }
];

/* ===== COMPLETION STATE (localStorage) =====
 *
 * Key:   'pbi4e_completed'
 * Value: JSON array of completed module IDs, e.g. [1, 3, 5]
 *
 * getCompleted() — read on every page load to restore UI state.
 *   Called by: buildSidebar, initCompletion, initIndexProgress.
 *   Does NOT trigger confetti or overlay.
 *
 * markComplete(id) — write on button click only.
 *   Called by: the btn-complete click handler (and nowhere else).
 *
 * =========================================== */
function getCompleted() {
  try { return JSON.parse(localStorage.getItem('pbi4e_completed') || '[]'); }
  catch { return []; }
}

function markComplete(id) {
  const list = getCompleted();
  if (!list.includes(id)) {
    list.push(id);
    localStorage.setItem('pbi4e_completed', JSON.stringify(list));
  }
  return list;
}

/* ===== SIDEBAR =====
 *
 * buildSidebar() renders the sidebar from MODULES.
 * window.CURRENT_MODULE_ID (set inline on each page) determines:
 *   - which module header is styled .active
 *   - which module section is auto-expanded
 *   - whether topic links use '#anchor' (current) or 'moduleN.html#anchor' (other)
 *
 * Expand/collapse state lives in DOM only — no persistence across page loads.
 * Completed modules read from localStorage to show checkmarks.
 * ================================================= */
function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const completed = getCompleted();
  const currentId = window.CURRENT_MODULE_ID || 0;

  let html = `
    <div class="sidebar-header">
      <div class="sidebar-course-label">Power BI for Engineers</div>
      <div class="sidebar-course-title">Data Analysis Handbook</div>
      <div class="sidebar-course-author">by Raushan Ranjan, MCT</div>
    </div>
    <nav class="sidebar-nav">`;

  for (const mod of MODULES) {
    const isCurrent   = mod.id === currentId;
    const isDone      = completed.includes(mod.id);
    const isExpanded  = isCurrent; // auto-expand current module only
    const isSoon      = !!mod.comingSoon;

    html += `
      <div class="nav-module ${isExpanded ? 'expanded' : ''} ${isSoon ? 'coming-soon' : ''}" data-mod="${mod.id}">
        <div class="nav-module-header ${isCurrent ? 'active' : ''} ${isDone ? 'done' : ''} ${isSoon ? 'coming-soon' : ''}">
          <span class="nav-module-num">${isDone ? '✓' : mod.id}</span>
          ${isSoon
            ? `<span class="nav-module-name nav-coming-soon">${mod.title}<span class="nav-soon-badge">Soon</span></span>`
            : `<a class="nav-module-name" href="${mod.file}">${mod.title}</a>`
          }
          <span class="nav-done-mark">✓</span>
          <span class="nav-chevron">›</span>
        </div>
        <div class="nav-topics">`;

    for (const topic of mod.topics) {
      if (isSoon) {
        html += `<span class="nav-topic-link nav-topic-soon">${topic.title}</span>`;
      } else {
        const href = isCurrent ? `#${topic.id}` : `${mod.file}#${topic.id}`;
        html += `<a class="nav-topic-link" href="${href}">${topic.title}</a>`;
      }
    }
    html += `</div></div>`;
  }

  html += `
    <div class="nav-extras-divider"></div>
    <a class="nav-extras-link${currentId === 'learning-curve' ? ' active' : ''}" href="learning-curve.html">
      <span class="nav-extras-icon">📈</span>
      Power Learning Curve
    </a>
    <a class="nav-extras-link${currentId === 'qa' ? ' active' : ''}" href="real-world-qa.html">
      <span class="nav-extras-icon">💬</span>
      Real-World Q&amp;A
    </a>
    <a class="nav-extras-link${currentId === 'resources' ? ' active' : ''}" href="resources.html">
      <span class="nav-extras-icon">📂</span>
      Additional Sample Datasets
    </a>
  </nav>`;
  sidebar.innerHTML = html;

  // Wire expand/collapse: clicking header row toggles, but clicks on <a> navigate normally
  sidebar.querySelectorAll('.nav-module-header').forEach(header => {
    header.addEventListener('click', e => {
      if (e.target.tagName === 'A') return; // let the link do its job
      header.closest('.nav-module').classList.toggle('expanded');
    });
  });
}

function refreshSidebarMarks() {
  const completed = getCompleted();
  document.querySelectorAll('.nav-module[data-mod]').forEach(el => {
    const id = parseInt(el.dataset.mod, 10);
    const header = el.querySelector('.nav-module-header');
    if (completed.includes(id)) {
      header.classList.add('done');
      const numEl = header.querySelector('.nav-module-num');
      if (numEl) numEl.textContent = '✓';
    }
  });
}

/* ===== SIDEBAR TOGGLE =====
 *
 * body.sidebar-closed controls visibility via CSS transform.
 * On desktop (≥ 1024px): sidebar open by default.
 * On mobile/tablet (< 1024px): sidebar closed by default; overlay appears when open.
 * ================================================= */
function initToggle() {
  const btn     = document.getElementById('sidebar-toggle');
  const overlay = document.getElementById('sidebar-overlay');

  if (window.innerWidth < 1024) {
    document.body.classList.add('sidebar-closed');
  }

  btn?.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-closed');
  });

  overlay?.addEventListener('click', () => {
    document.body.classList.add('sidebar-closed');
  });
}

/* ===== SEARCH =====
 *
 * Client-side only — no network requests.
 * Index is built from MODULES array (module titles + topic titles).
 * Keyboard: ArrowDown/Up navigate results, Enter jumps to highlighted item,
 * Escape closes the dropdown.
 * ================================================= */
function buildSearchIndex() {
  const idx = [];
  for (const mod of MODULES) {
    idx.push({ title: mod.title, url: mod.file, tag: `Module ${mod.id}`, sub: '' });
    for (const t of mod.topics) {
      idx.push({ title: t.title, url: `${mod.file}#${t.id}`, tag: `M${mod.id}`, sub: mod.title });
    }
  }
  return idx;
}

function initSearch() {
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  const INDEX = buildSearchIndex();
  let activeIdx = -1;

  function render(query) {
    const q = query.trim().toLowerCase();
    if (!q) { results.classList.remove('visible'); return; }

    const hits = INDEX.filter(
      item => item.title.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q)
    ).slice(0, 9);

    if (!hits.length) {
      results.innerHTML = `<div class="search-no-results">No results for "<em>${query}</em>"</div>`;
    } else {
      results.innerHTML = hits.map((item, i) => `
        <a class="search-result-item" href="${item.url}" data-i="${i}">
          <span class="search-result-tag">${item.tag}</span>
          <div>
            <div class="search-result-title">${item.title}</div>
            ${item.sub ? `<div class="search-result-module">${item.sub}</div>` : ''}
          </div>
        </a>`).join('');
    }

    results.classList.add('visible');
    activeIdx = -1;
  }

  input.addEventListener('input',  e => render(e.target.value));
  input.addEventListener('focus',  e => { if (e.target.value.trim()) render(e.target.value); });

  input.addEventListener('keydown', e => {
    const items = [...results.querySelectorAll('.search-result-item')];
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = items[activeIdx] ?? items[0];
      if (target) { window.location.href = target.href; }
    } else if (e.key === 'Escape') {
      results.classList.remove('visible');
      input.blur();
    } else { return; }

    items.forEach((item, i) => item.classList.toggle('active', i === activeIdx));
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) results.classList.remove('visible');
  });
}

/* ===== CONFETTI =====
 *
 * Pure JS canvas animation. No external library.
 * Called ONLY from the btn-complete click handler.
 * Never called on page load, never called during localStorage read.
 * ================================================= */
function launchConfetti() {
  let canvas = document.getElementById('confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#F2C811','#1a2332','#2e7d32','#e53935','#1976d2','#ff9800','#9c27b0','#ffffff'];
  const particles = Array.from({ length: 160 }, () => ({
    x:   Math.random() * canvas.width,
    y:   -20 - Math.random() * 320,
    w:   6 + Math.random() * 9,
    h:   3 + Math.random() * 5,
    col: COLORS[Math.floor(Math.random() * COLORS.length)],
    isCircle: Math.random() > 0.6,
    vx:  (Math.random() - 0.5) * 4.5,
    vy:  1.8 + Math.random() * 4,
    vr:  (Math.random() - 0.5) * 9,
    rot: Math.random() * 360,
    op:  1
  }));

  const t0 = performance.now();
  let raf;

  (function frame(now) {
    const elapsed = now - t0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    for (const p of particles) {
      p.x += p.vx; p.y += p.vy; p.vy += 0.065; p.rot += p.vr;
      if (elapsed > 1800) p.op = Math.max(0, p.op - 0.013);
      if (p.y < canvas.height + 60 && p.op > 0.01) alive = true;

      ctx.save();
      ctx.globalAlpha = p.op;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.col;
      if (p.isCircle) {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx.restore();
    }

    if (alive && elapsed < 4200) { raf = requestAnimationFrame(frame); }
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); cancelAnimationFrame(raf); }
  })(t0);
}

/* ===== COMPLETION OVERLAY ===== */
function showOverlay(moduleId, isFinal) {
  const overlay = document.getElementById('completion-overlay');
  if (!overlay) return;

  const mod = MODULES.find(m => m.id === moduleId);
  overlay.querySelector('.completion-emoji').textContent   = isFinal ? '🏆' : '🎉';
  overlay.querySelector('.completion-title').textContent   = isFinal
    ? 'Handbook Complete!'
    : `Module ${moduleId} Complete!`;
  overlay.querySelector('.completion-message').textContent = isFinal
    ? `Outstanding — you've completed all 10 modules of Power BI Data Analysis for Engineers. You're ready to build production-ready analytics solutions.`
    : `Great work finishing "${mod?.title}". Keep the momentum going!`;
  overlay.querySelector('.btn-overlay-close').textContent  = isFinal ? 'View Summary →' : 'Continue →';

  overlay.classList.add('visible');

  overlay.querySelector('.btn-overlay-close').addEventListener('click', () => {
    overlay.classList.remove('visible');
  }, { once: true });

  // Also close on backdrop click
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('visible');
  }, { once: true });
}

/* ===== COMPLETION TRACKING =====
 *
 * On page load: reads localStorage, restores button/section state.
 *   → NO confetti, NO overlay on load.
 *
 * On button click: writes localStorage, fires confetti, shows overlay.
 *   → Confetti and overlay triggered HERE and ONLY here.
 * ================================================= */
function initCompletion() {
  const moduleId = window.CURRENT_MODULE_ID;
  if (!moduleId) return;

  const btn     = document.getElementById('btn-complete');
  const zone    = document.getElementById('complete-zone');
  if (!btn || !zone) return;

  // Restore state silently (no animation)
  if (getCompleted().includes(moduleId)) {
    zone.classList.add('done');
    btn.disabled = true;
    btn.textContent = '✓ Module Complete';
  }

  btn.addEventListener('click', () => {
    if (btn.disabled) return;

    // 1. Persist to localStorage
    const completed = markComplete(moduleId);

    // 2. Update button/section UI
    zone.classList.add('done');
    btn.disabled = true;
    btn.textContent = '✓ Module Complete';

    // 3. Refresh sidebar checkmarks
    refreshSidebarMarks();

    // 4. Confetti — fires ONLY here
    launchConfetti();

    // 5. Overlay — fires ONLY here
    showOverlay(moduleId, moduleId === MODULES.length);
  });
}

/* ===== REVEAL SOLUTION TOGGLES ===== */
function initReveal() {
  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const open = target.classList.toggle('open');
      btn.textContent = open ? '▲ Hide Solution' : '▼ Reveal Solution';
    });
  });
}

/* ===== SCROLL SPY ===== */
function initScrollSpy() {
  const anchors = document.querySelectorAll('.topic-section[id]');
  if (!anchors.length) return;

  const io = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-topic-link').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    }
  }, { threshold: 0.25, rootMargin: '-60px 0px -55% 0px' });

  anchors.forEach(el => io.observe(el));
}

/* ===== INDEX PAGE PROGRESS ===== */
function initIndexProgress() {
  const completed = getCompleted();
  const total = MODULES.length;
  const count = completed.length;

  const fill     = document.getElementById('progress-bar-fill');
  const countEl  = document.getElementById('progress-count');
  const grid     = document.getElementById('modules-grid');

  if (fill)    fill.style.width = `${(count / total) * 100}%`;
  if (countEl) countEl.textContent = `${count} / ${total} modules complete`;

  if (grid) {
    grid.innerHTML = MODULES.map(mod => {
      const done = completed.includes(mod.id);
      if (mod.comingSoon) {
        return `
          <div class="module-card coming-soon-card" data-module="${mod.id}" aria-disabled="true">
            <span class="card-check" aria-hidden="true">✓</span>
            <div class="card-num">Module ${mod.id}</div>
            <div class="card-title">${mod.title}</div>
            <div class="card-meta">${mod.topics.length} topics</div>
            <div class="card-status coming-soon-label">⏳ Coming Soon</div>
          </div>`;
      }
      return `
        <a class="module-card ${done ? 'completed' : ''}" href="${mod.file}" data-module="${mod.id}">
          <span class="card-check">✓</span>
          <div class="card-num">Module ${mod.id}</div>
          <div class="card-title">${mod.title}</div>
          <div class="card-meta">${mod.topics.length} topics</div>
          <div class="card-status ${done ? 'done' : ''}">
            ${done ? '✓ Complete' : '→ Start module'}
          </div>
        </a>`;
    }).join('');
  }
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  initToggle();
  initSearch();
  initCompletion();
  initReveal();
  initScrollSpy();

  // Index page only
  if (document.getElementById('modules-grid') || document.getElementById('progress-bar-fill')) {
    initIndexProgress();
  }
});
