/**
 * HFL Portal — main.js
 * Handles: navbar scroll, hamburger menu, scroll-reveal,
 *          pillar modal, bottom-nav highlighting, smooth scroll.
 */

/* ============================================================
   PILLAR DATA  (enriched from HFL.md strategy document)
   ============================================================ */
const PILLARS = [
  {
    id: 1,
    title: 'Electrification & Grid Automation',
    desc: 'HFL\'s core competence — building a digital grid ecosystem comparable to ABB and Netcontrol. We deliver smart substations with GIS & E-House architecture, SCADA + OMS + DER Monitoring, LOD/BIM-enabled digital twins (LOD 100–500), asset health monitoring with AI/ML, and GIS spatial intelligence. Every substation is modelled from cable trays and switchgear through to control-room ergonomics. Live data bridges BIM, SCADA telemetry, and predictive reliability models in a single digital thread.',
    tags: ['SCADA / DERMS', 'Digital Twin', 'Smart Substations', 'OT Cyber', 'GIS Integration'],
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
           </svg>`,
  },
  {
    id: 2,
    title: 'Digital Engineering & Smart Infrastructure',
    desc: 'Smart, safe, sustainable business parks, industrial townships, and campus electrification — executed entirely on a digital thread. Every project progresses from LOD 200 planning through LOD 400 execution to LOD 500 as-built handover. Capabilities include BIM-led construction, digital procurement & logistics, automated commissioning logs, O&M data fed back to the living BIM model, and EPC+Digital Twin end-to-end delivery. Target segments: smart campuses, substations, logistics hubs, education infrastructure, and defence estates.',
    tags: ['BIM LOD 200–500', 'EPC + Digital Twin', 'Smart Campus', 'Digital Commissioning', 'O&M Analytics'],
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
           </svg>`,
  },
  {
    id: 3,
    title: 'Advanced Cyber-Physical Systems',
    desc: 'A full enterprise-grade ICS/OT security stack — built to protect power grids, industrial MES, smart buildings, telecom cores, and space command systems. The stack spans Zero-Trust (ZTNA), OT/ICS Cybersecurity, IoTSP/ICTSP integration, endpoint detection & response (EDR), SIEM + AI threat hunting, and identity & device trust frameworks. HFL operates a national-grade OT-SOC (Build-Operate-Transfer model) and can execute sovereign ICS/SCADA conformance audits for government ministries and utilities.',
    tags: ['Zero Trust / ZTNA', 'OT-SOC', 'ICS/SCADA Security', 'AI Threat Hunting', 'IoT Trust'],
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
           </svg>`,
  },
  {
    id: 4,
    title: 'Industrial 4.0 / 5.0 Manufacturing',
    desc: 'HFL is positioned as a Digital Factory Systems Integrator sitting between robots, PLCs, sensors, SCADA, predictive maintenance AI, and MES. Target sectors include automotive components, aerospace machining, electrical switchgear, pharma, agri-processing, and packaging. The MVP stack covers industrial IoT sensor retrofit (IoTSP/ICTSP), AI quality-inspection vision modules, predictive maintenance inference engines, MES-Lite scheduling, and PLC/robot upgrade bundles across Siemens S7, Mitsubishi Q/L, and Schneider Modicon ecosystems.',
    tags: ['Digital Factory', 'Predictive Maintenance AI', 'Robotics & Cobots', 'MES / SCADA', 'Vision AI QC'],
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
           </svg>`,
  },
  {
    id: 5,
    title: 'EdTech & Capability Building',
    desc: 'Closing the critical skills gap in digital grid, BIM/LOD, OT cybersecurity, and AI for industrial systems. The HFL EdTech platform delivers modular online curriculum linked to career pathways, virtual labs with digital twins, AR/VR VARK learning, and industry certifications (AI, Agentic AI, ML, IML) with blockchain-accredited badges. Partnerships span OEMs, SIs, MSMEs, Governments, Academia, Corporate, and Freelance ecosystems. HFL EdTech operates as a regulated competency authority — licensing content to national training academies and credentialing audit services.',
    tags: ['Digital Twin Labs', 'VR/AR Simulation', 'Certified Credentials', 'National Licensing', 'Workforce Upskilling'],
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
           </svg>`,
  },
  {
    id: 6,
    title: 'Strategic Investment & Holding',
    desc: 'HFL\'s IEDM cell operates a "Strategic Sovereign Systems Fund" — a phygital holding structure spanning 9 licensed investment categories (6499xxx codes): Outer Space Projects, Technological Enterprises, Commercial & Industrial Enterprises, Agricultural IoT, Oil & Gas Digitalization, Sport Tech, Water Infrastructure, and Retail. The fund acquires utility cyber startups, AI/physics simulation IP, and aerospace robotics ventures — then back-integrates every acquisition into EPC, MFAP, and SCADA delivery pipelines to accelerate NAV accretion.',
    tags: ['HoldCo Structure', 'Sovereign Fund', 'Tech Ventures', '6499xxx Categories', 'IP Acquisition'],
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
           </svg>`,
  },
  {
    id: 7,
    title: 'Mobility & Logistics Tech',
    desc: 'End-to-end mobility across land, air, rail, river, sea, and subsea — fully integrated with the HFL digital backbone. The stack covers EV charging + microgrid integration, Intelligent Transport Systems (ITS), EV telematics & OTA updates, eVTOL readiness, rail traction digital systems, autonomous navigation, and subsea/urban air mobility protocols. Extensions include rail telemetry, marine propulsion analytics, electric tug protocols, and river freight optimisation — opening India Inland Waterways, UAE Marine, and Canada Arctic Shipping corridors.',
    tags: ['EV + Charging Infra', 'ITS / Smart Roads', 'Rail SCADA', 'eVTOL Readiness', 'Marine & Subsea'],
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
           </svg>`,
  },
  {
    id: 8,
    title: 'Outer Space Systems',
    desc: 'Extending HFL\'s engineering excellence to orbital and extraterrestrial frontiers. Offerings include launch support software, satellite communication systems, space data analytics platforms, orbital robotics, and earth observation for industrial intelligence. Space integrates back to grid and mobility — providing LEO-based IoT connectivity, satellite-assisted remote commissioning, GNSS-based micro-synchronization for grid frequency stability, LEO SCADA failover channels, and predictive weather-impact modelling for utility grids. Sell channels: national space agencies, ministries, and aerospace primes.',
    tags: ['LEO IoT Connectivity', 'Satellite Telemetry', 'Earth Observation AI', 'Grid Frequency Sync', 'Orbital Robotics'],
    icon: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
             <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
             <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
             <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
           </svg>`,
  },
  {
    id: 9,
    title: 'Global Enterprise Execution',
    desc: 'HFL\'s UAE & Global Trade Execution model powers delivery across UAE, India, Canada, GCC, Americas, Europe, and APAC. The tri-continent engine runs on: UAE (premium EPC + sovereign cyber mandates), India (manufacturing volume + talent base), and Canada (nuclear, space, aerospace R&D). Each geography has dedicated incorporation models — LLC/Free zone, local certification, OEM partnerships, and SME micro-innovation hubs. The group operates on a tiered delivery model: Strategic R&D HQ → Regional execution hubs → Local service & support.',
    tags: ['UAE / GCC Delivery', 'India Engineering Hub', 'Canada R&D', 'SME Frameworks', 'Sovereign Contracts'],
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
  // render tags
  const tagsEl = document.getElementById('modal-tags');
  if (tagsEl && pillar.tags && pillar.tags.length) {
    tagsEl.innerHTML = pillar.tags
      .map(t => `<span class="modal-tag">${t}</span>`)
      .join('');
  } else if (tagsEl) {
    tagsEl.innerHTML = '';
  }
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
