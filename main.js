/**
 * HFL Portal — main.js
 * Handles: navbar scroll, hamburger menu, scroll-reveal,
 *          pillar modal, bottom-nav highlighting, smooth scroll.
 */

/* ============================================================
   PILLAR DATA
   ============================================================ */
const PILLARS = [
  {
    id: 1,
    title: 'Electrification & Grid Automation',
    desc: 'Advanced energy management systems for the modern smart grid. We deliver intelligent control, real-time monitoring, and automated switching solutions that maximise efficiency and reliability across transmission and distribution networks.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
           </svg>`,
  },
  {
    id: 2,
    title: 'Digital Engineering & Smart Infrastructure',
    desc: 'Designing the backbone of resilient urban and industrial environments. Our digital-twin-driven approach integrates BIM, IoT sensors, and AI analytics to create infrastructure that is adaptive, sustainable, and future-proof.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
           </svg>`,
  },
  {
    id: 3,
    title: 'Advanced Cyber-Physical Systems',
    desc: 'Secure integration of digital control with physical operational technology. We architect zero-trust OT/IT convergence solutions that protect critical assets while enabling unprecedented visibility and responsiveness.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
           </svg>`,
  },
  {
    id: 4,
    title: 'Industrial 4.0 / 5.0 Manufacturing',
    desc: 'Pioneering cognitive manufacturing and human-robot collaboration. From digital shopfloors to autonomous quality control, we transform production facilities into intelligent, self-optimising ecosystems.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
           </svg>`,
  },
  {
    id: 5,
    title: 'EdTech & Capability Building',
    desc: 'Training the next generation of engineers for the energy transition. Our immersive simulation platforms, micro-credentials, and knowledge transfer programmes upskill workforces at the pace the industry demands.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
           </svg>`,
  },
  {
    id: 6,
    title: 'Strategic Investment & Holding',
    desc: 'Fostering innovation through targeted capital and growth partnerships. Our investment arm identifies, funds, and scales high-impact technology ventures that accelerate the global energy and infrastructure transition.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
           </svg>`,
  },
  {
    id: 7,
    title: 'Mobility & Logistics Tech',
    desc: 'Smart logistics solutions for a globalized supply chain. We integrate autonomous vehicles, predictive routing, and real-time asset tracking to eliminate friction from end-to-end goods movement.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
           </svg>`,
  },
  {
    id: 8,
    title: 'Outer Space Systems',
    desc: 'Extending engineering excellence to orbital and extraterrestrial frontiers. We design power, communications, and control systems for satellite constellations, orbital platforms, and beyond-LEO missions.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
             <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
             <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
           </svg>`,
  },
  {
    id: 9,
    title: 'Global Enterprise Execution',
    desc: 'Delivering complex multi-geography projects with world-class operational precision. Our PMO infrastructure, digital command centres, and global delivery network ensure every project is on time, on budget, and exceptional.',
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
             <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
           </svg>`,
  },
];


/* ============================================================
   NAVBAR — scroll effect
   ============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });


/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');

function toggleMenu(open) {
  hamburgerBtn.classList.toggle('open', open);
  mobileMenu.classList.toggle('open', open);
  hamburgerBtn.setAttribute('aria-expanded', String(open));
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  toggleMenu(!isOpen);
});

// Close mobile menu when a mobile nav link is tapped
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    toggleMenu(false);
  }
});


/* ============================================================
   SCROLL REVEAL — IntersectionObserver
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => revealObserver.observe(el));


/* ============================================================
   BOTTOM NAV — highlight active section
   ============================================================ */
const sections = [
  { id: 'home',    navId: 'bnav-home' },
  { id: 'pillars', navId: 'bnav-pillars' },
  { id: 'about',   navId: 'bnav-about' },
  { id: 'contact', navId: 'bnav-contact' },
];

const sectionEls = sections.map(s => ({
  el: document.getElementById(s.id),
  nav: document.getElementById(s.navId),
}));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const matched = sectionEls.find(s => s.el === entry.target);
        if (matched) {
          sectionEls.forEach(s => s.nav && s.nav.classList.remove('active'));
          matched.nav && matched.nav.classList.add('active');
        }
      }
    });
  },
  { threshold: 0.35 }
);

sectionEls.forEach(s => s.el && navObserver.observe(s.el));


/* ============================================================
   PILLAR MODAL
   ============================================================ */
const modal       = document.getElementById('pillarModal');
const modalIcon   = document.getElementById('modal-icon');
const modalTitle  = document.getElementById('modal-title');
const modalDesc   = document.getElementById('modal-desc');
const modalClose  = document.getElementById('modalCloseBtn');

function openModal(pillar) {
  modalIcon.innerHTML  = pillar.icon;
  modalTitle.textContent = pillar.title;
  modalDesc.textContent  = pillar.desc;
  modal.removeAttribute('aria-hidden');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Attach click to each pillar card
document.querySelectorAll('.pillar-card').forEach(card => {
  card.addEventListener('click', () => {
    const id     = parseInt(card.dataset.pillar, 10);
    const pillar = PILLARS.find(p => p.id === id);
    if (pillar) openModal(pillar);
  });
});

modalClose.addEventListener('click', closeModal);

// Close on overlay click
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});


/* ============================================================
   SMOOTH SCROLL POLYFILL (for older browsers)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
