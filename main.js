/**
 * AHFL Enterprise Parent Portal — main.js
 * Comprehensive logic for Global Hubs, External/Internal mode,
 * Architecture/Execution views, 15-Year Intelligence model,
 * multi-currency calculation, and platform tabs.
 */

// Exchange rates from PortalNotes.pdf (Page 25)
const EXCHANGE_RATES = {
  USD: { rate: 1.00, symbol: '$', suffix: 'B', isCr: false },
  AED: { rate: 3.6725, symbol: 'AED ', suffix: 'B', isCr: false },
  INR: { rate: 94.00, symbol: '₹', suffix: ' Cr', isCr: true }, // in Crores
  CAD: { rate: 1.36, symbol: 'CAD $', suffix: 'B', isCr: false },
  EUR: { rate: 0.85, symbol: '€', suffix: 'B', isCr: false },
  GBP: { rate: 0.73, symbol: '£', suffix: 'B', isCr: false },
};

// 15-Year Revenue Projection Datasets (in USD Billions)
const SCENARIO_DATA = {
  downside: {
    name: 'Downside (Execution Delays)',
    cagrY1_5: '18%',
    cagrY6_10: '12%',
    cagrY11_15: '8%',
    ebitdaMarginY15: 0.18,
    multiple: '7x',
    y2: 0.35,
    y5: 1.05,
    y10: 1.87,
    y15: 2.70,
    ebitdaY15: 0.49,
    patY15: 0.28,
  },
  base: {
    name: 'Base Case (Commercial Schedules)',
    cagrY1_5: '28%',
    cagrY6_10: '20%',
    cagrY11_15: '12%',
    ebitdaMarginY15: 0.244,
    multiple: '12x',
    y2: 0.49,
    y5: 1.30,
    y10: 4.10,
    y15: 7.98,
    ebitdaY15: 1.95,
    patY15: 1.35,
  },
  upside: {
    name: 'Upside (AI & EaaS Acceleration)',
    cagrY1_5: '38%',
    cagrY6_10: '28%',
    cagrY11_15: '18%',
    ebitdaMarginY15: 0.32,
    multiple: '15x',
    y2: 0.60,
    y5: 1.95,
    y10: 6.20,
    y15: 11.41,
    ebitdaY15: 3.65,
    patY15: 2.45,
  }
};

// Global Operating Hubs
const GLOBAL_HUBS = [
  {
    id: 'group',
    flag: '🌐',
    name: 'Group Consolidated',
    role: 'Consolidated Global Ecosystem & Holding',
    currency: 'USD',
    badge: 'Dual-Jurisdiction Platform',
    heroTagline: 'Two Jurisdictions. One Enterprise Ecosystem.',
    heroSub: 'Consolidated Global Architecture &bull; Strategic Holding &bull; Capital Allocation &bull; Global Delivery',
    metrics: [
      { val: 'USD 7.98B', label: '15-Year Revenue Target', sub: 'Base Case (2040)', glow: 'glow-cyan' },
      { val: 'USD 1.95B', label: '15-Year EBITDA', sub: '24.4% Margin (USD 1.35B PAT)', glow: 'glow-emerald' },
      { val: 'USD 10B+', label: 'Potential Enterprise Value', sub: '12x EBITDA Multiplier', glow: 'glow-amber' },
      { val: '2 + 3 Hubs', label: 'Global Footprint', sub: 'UAE & India + Canada, USA, Saudi', glow: '' }
    ]
  },
  {
    id: 'uae',
    flag: '🇦🇪',
    name: 'UAE Hub',
    role: 'Global Investment & Enterprise Hub',
    currency: 'AED',
    badge: 'Capital & Partnerships Hub',
    heroTagline: 'Global Investment, Sovereign Capital & Free Zones',
    heroSub: 'JAFZA &bull; Dubai South &bull; KEZAD &bull; RAKEZ &bull; ESCO &bull; EaaS &bull; Sovereign & Institutional Partnerships',
    metrics: [
      { val: 'AED 29.31B', label: '15-Year Equivalent Revenue', sub: 'USD 7.98B Consolidated base', glow: 'glow-cyan' },
      { val: 'AED 7.17B', label: '15-Year EBITDA Target', sub: 'AED 4.96B 15-Year PAT', glow: 'glow-emerald' },
      { val: 'Licensed', label: 'Institutional Activities', sub: 'Investment, Enterprise & Sovereign Deals', glow: 'glow-amber' },
      { val: 'JAFZA / KEZAD', label: 'Strategic Deployment', sub: 'Trade Corridors & Free Zone Operations', glow: '' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    name: 'Canada Hub',
    role: 'AI, Digital Twin & Clean Tech Hub',
    currency: 'CAD',
    badge: 'Holding & Governance Core',
    heroTagline: 'Holding, Global Governance & Deep Tech COE',
    heroSub: 'Corporate HQ &bull; Global Capital & Investors &bull; IP Holding &bull; AI + Digital Twin Centre of Excellence',
    metrics: [
      { val: 'CAD 10.85B', label: '15-Year Revenue Equivalent', sub: 'USD 7.98B Consolidated Base', glow: 'glow-cyan' },
      { val: 'AI & Twin COE', label: 'Centre of Excellence', sub: 'Nuclear, Aerospace & Clean Tech R&D', glow: 'glow-emerald' },
      { val: 'USD / CAD', label: 'Dual Reporting Currency', sub: 'Global Compliance & Audit Standards', glow: 'glow-amber' },
      { val: 'Holding HQ', label: 'Sovereign Governance', sub: 'Consolidated Group Balance Sheet', glow: '' }
    ]
  },
  {
    id: 'india',
    flag: '🇮🇳',
    name: 'India Hub',
    role: 'Technology, Manufacturing & Workforce Hub',
    currency: 'INR',
    badge: 'Delivery & Engineering Core',
    heroTagline: 'Delivery Engine, High-Tech Manufacturing & Workforce',
    heroSub: 'Delivery & Operations &bull; MFAP &bull; Semiconductor & Advanced Electronics &bull; DEM & DAAP &bull; HUMI-ID Academies &bull; MSME Integration',
    metrics: [
      { val: '₹75,012 Cr', label: '15-Year Revenue Target', sub: 'USD 7.98B Consolidated (₹94/USD)', glow: 'glow-cyan' },
      { val: '₹18,330 Cr', label: '15-Year EBITDA Target', sub: '₹12,690 Cr 15-Year PAT', glow: 'glow-emerald' },
      { val: '28 States / 36 TH', label: 'India-Wide Reach', sub: 'Trade Houses & State Technology Hubs', glow: 'glow-amber' },
      { val: 'HUMI-ID', label: 'Certified Workforce', sub: 'National Talent Deployment Engine', glow: '' }
    ]
  },
  {
    id: 'usa',
    flag: '🇺🇸',
    name: 'USA Hub',
    role: 'Innovation, Research & Institutional Funding',
    currency: 'USD',
    badge: 'Federal & Capital Hub',
    heroTagline: 'Innovation, Research & Capital Access Hub',
    heroSub: 'Federal Programs &bull; Energy Transition &bull; Hydrogen &bull; Digital Platforms &bull; Institutional Wall Street Capital',
    metrics: [
      { val: 'USD 7.98B', label: 'Global Anchor Currency', sub: 'Consolidated Baseline Benchmark', glow: 'glow-cyan' },
      { val: 'Institutional', label: 'Capital Access', sub: 'Private Equity & Sovereign Allocations', glow: 'glow-emerald' },
      { val: 'Federal Grants', label: 'Clean Energy Programs', sub: 'IRA & Energy Transition Alignment', glow: 'glow-amber' },
      { val: 'Deep Tech', label: 'R&D Ecosystems', sub: 'Next-Gen Cyber & Grid Platforms', glow: '' }
    ]
  },
  {
    id: 'saudi',
    flag: '🇸🇦',
    name: 'Saudi Arabia Hub',
    role: 'Energy, Infrastructure & Mega Projects Hub',
    currency: 'SAR',
    badge: 'Mega Projects Hub',
    heroTagline: 'Mega Projects, Hydrogen, Utilities & Smart Cities',
    heroSub: 'Vision 2030 &bull; Utilities &bull; Water Infrastructure &bull; Hydrogen &bull; Smart Cities &bull; Industrial Corridors',
    metrics: [
      { val: 'SAR 29.9B', label: '15-Year SAR Equivalent', sub: 'USD 7.98B Pegged Conversion', glow: 'glow-cyan' },
      { val: 'Mega Projects', label: 'Delivery Scope', sub: 'Grid Automation, Desalination, Clean Cities', glow: 'glow-emerald' },
      { val: 'Energy Hub', label: 'Transition Focus', sub: 'Solar, Hydrogen, Water Infrastructure', glow: 'glow-amber' },
      { val: 'Giga Scale', label: 'Program Partnerships', sub: 'Institutional Contracting & ESCO', glow: '' }
    ]
  }
];

// Institutional Funding Data (Tier 1 & Tier 2)
// External: Functional Capability view
// Internal: Named Entity view (BCS, ACUD, ERCON/SAMCO, PRDC, GTC-CSI, CBL, DeLen)
const TIERS_DATA = {
  external: {
    tier1: [
      {
        code: 'TIER 1.1',
        name: 'Build & Deliver',
        role: 'EPC, Construction & Infrastructure Solutions',
        tags: ['EPC Contracting', 'Power Grids', 'Civil & Industrial', 'Turnkey Delivery']
      },
      {
        code: 'TIER 1.2',
        name: 'Develop & Operate',
        role: 'Industrial Projects & Real Asset Development',
        tags: ['Industrial Parks', 'Asset Development', 'Concessions', 'O&M Programs']
      },
      {
        code: 'TIER 1.3',
        name: 'Engineer & Enable',
        role: 'Engineering, Project Development & Specialised Solutions',
        tags: ['Specialised Engineering', 'FEED Studies', 'Project Management', 'Technical Due Diligence']
      }
    ],
    tier2: [
      {
        code: 'TIER 2.1',
        name: 'Systems Intelligence',
        role: 'Power Systems, Energy & Engineering Advisory',
        tags: ['Grid Studies', 'Protection & Automation', 'Renewable Integration', 'Smart Grids']
      },
      {
        code: 'TIER 2.2',
        name: 'Cyber Resilience',
        role: 'Cybersecurity, OT/ICS Security & Digital Trust',
        tags: ['OT-SOC', 'SIEM Operations', 'Zero Trust Architecture', 'Critical Infrastructure']
      },
      {
        code: 'TIER 2.3',
        name: 'AI & Software Platforms',
        role: 'AI, Software, Data & Engineering Platforms',
        tags: ['Agentic AI', 'Digital Twins', 'Data Engineering', 'Blockchain / Web3']
      },
      {
        code: 'TIER 2.4',
        name: 'Clean Energy Solutions',
        role: 'Digital, Solar, EV & Sustainable Technologies',
        tags: ['Solar / EV Infra', 'Clean Mobility', 'Energy Storage BESS', 'Asset Operations']
      }
    ]
  },
  internal: {
    tier1: [
      {
        code: 'ENTITY: BCS',
        name: 'Buildings, Contracting & Solutions (BCS)',
        role: 'Turnkey physical buildings, institutional facilities, and specialized infrastructure execution.',
        tags: ['Tier 1 Industrial', 'Civil Execution', 'Facility Contracting', 'Structural Delivery']
      },
      {
        code: 'ENTITY: ACUD',
        name: 'EPC, Construction & Industrial Development (ACUD)',
        role: 'Large-scale EPC project integration, utility installations, and industrial estate development.',
        tags: ['Tier 1 Industrial', 'EPC Prime', 'Substations & Grids', 'Industrial Estates']
      },
      {
        code: 'ENTITY: ERCON / SAMCO',
        name: 'Engineering, Infrastructure & Project Development',
        role: 'Heavy engineering design, project development structuring, and public infrastructure delivery.',
        tags: ['Tier 1 Industrial', 'Heavy Infra', 'Specialised Engineering', 'Asset SPVs']
      }
    ],
    tier2: [
      {
        code: 'ENTITY: PRDC',
        name: 'Power Research & Development Consultants (PRDC)',
        role: 'Pioneering power systems engineering, grid simulation, protection, automation, and advisory.',
        tags: ['Power Systems', 'Grid Simulation', 'Relay Protection', 'SCADA / Smart Grids']
      },
      {
        code: 'ENTITY: GTC-CSI',
        name: 'Cybersecurity & Digital Trust (GTC-CSI)',
        role: 'National-grade OT/ICS cybersecurity, 24/7 SOC/SIEM operations, and critical infrastructure defense.',
        tags: ['OT Cybersecurity', 'SOC-as-a-Service', 'SIEM Fabric', 'Zero Trust']
      },
      {
        code: 'ENTITY: CBL',
        name: 'AI, Software & Engineering Platforms (CBL)',
        role: 'Core digital platform engine, enterprise AI/ML, digital twins, SaaS, and blockchain systems.',
        tags: ['AI / GenAI', 'Digital Twin Platform', 'Cloud & DevSecOps', 'Blockchain Wallet']
      },
      {
        code: 'ENTITY: DeLen',
        name: 'Digital / Web3 & Solar-EV Infrastructure (DeLen)',
        role: 'Next-generation clean mobility, solar PV, BESS storage integration, and tokenized energy assets.',
        tags: ['Solar & EV Infra', 'Energy Storage', 'Clean Mobility', 'Digital Assets']
      }
    ]
  }
};

// 16 Shared Project Pipeline Sectors (from diagram)
const PIPELINE_SECTORS = [
  { icon: '🏢', name: 'Buildings & Facilities' },
  { icon: '🌉', name: 'Roads & Bridges' },
  { icon: '💧', name: 'Water & Wastewater' },
  { icon: '🌊', name: 'Stormwater & Drainage' },
  { icon: '⚡', name: 'Power & Electrical' },
  { icon: '📡', name: 'Telecom & Comms' },
  { icon: '⚙️', name: 'MEP & HVAC' },
  { icon: '🏭', name: 'Industrial Infra' },
  { icon: '🛢️', name: 'Oil & Gas' },
  { icon: '🚢', name: 'Ports & Marine' },
  { icon: '🚆', name: 'Rail & Transit' },
  { icon: '☀️', name: 'Renewable Energy' },
  { icon: '🌱', name: 'Environmental Solutions' },
  { icon: '🏙️', name: 'Urban Dev & Landscaping' },
  { icon: '🎓', name: 'Education Infrastructure' },
  { icon: '🚀', name: 'Aerospace & Space' }
];

// 10 Licensed & Approved Sectors
const LICENSED_SECTORS = [
  { icon: '🛢️', name: 'Oil & Natural Gas' },
  { icon: '🌾', name: 'Agriculture & Agri-Business' },
  { icon: '🏃', name: 'Sports Infrastructure' },
  { icon: '🏨', name: 'Tourism & Hospitality' },
  { icon: '🏭', name: 'Industrial & Manufacturing' },
  { icon: '🏢', name: 'Commercial Enterprises' },
  { icon: '🎓', name: 'Education & Academies' },
  { icon: '💧', name: 'Water Infrastructure' },
  { icon: '💻', name: 'Technology & Digital' },
  { icon: '🛰️', name: 'Outer Space & Aerospace' }
];

// Active State variables
let currentHubId = 'group';
let currentMode = 'external'; // 'external' or 'internal'
let currentArchView = 'arch'; // 'arch' or 'exec'
let currentScenario = 'base';
let currentCurrency = 'USD';

/* ============================================================
   INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderHubsGrid();
  selectHub('group');
  renderTiers();
  renderSectors();
  updateIntelligenceDashboard();
  initTheme();
  initNavbarScroll();
  initMobileMenu();
});

/* ============================================================
   GLOBAL HUBS LOGIC
   ============================================================ */
function renderHubsGrid() {
  const container = document.getElementById('hubsGrid');
  if (!container) return;

  container.innerHTML = GLOBAL_HUBS.map(hub => `
    <div class="hub-card ${hub.id === currentHubId ? 'active' : ''}" onclick="selectHub('${hub.id}')">
      <div class="hub-flag">${hub.flag}</div>
      <div class="hub-name">${hub.name}</div>
      <div class="hub-role">${hub.role}</div>
      <span class="hub-currency-pill">${hub.currency} Primary</span>
    </div>
  `).join('');
}

function selectHub(hubId) {
  currentHubId = hubId;
  const hub = GLOBAL_HUBS.find(h => h.id === hubId) || GLOBAL_HUBS[0];

  // Update active state in cards
  document.querySelectorAll('.hub-card').forEach(card => card.classList.remove('active'));
  const activeCard = Array.from(document.querySelectorAll('.hub-card')).find(c => c.textContent.includes(hub.name));
  if (activeCard) {
    activeCard.classList.add('active');
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Update hero elements
  document.getElementById('heroJurFlag').textContent = hub.flag;
  document.getElementById('heroJurTitle').textContent = `${hub.name} • ${hub.badge}`;
  document.getElementById('heroTagline').textContent = hub.heroTagline;
  document.getElementById('heroSubtitle').innerHTML = `
    ${hub.heroSub}
    <br />
    <span style="color: var(--cyan); font-weight: 500;">
      Build &gt; Integrate &gt; Operate &gt; Monetise &mdash; From Market Capture to Lifecycle Monetisation.
    </span>
  `;

  // Render hero metrics
  const metricsContainer = document.getElementById('heroMetricsGrid');
  if (metricsContainer) {
    metricsContainer.innerHTML = hub.metrics.map(m => `
      <div class="metric-card">
        <div class="metric-val ${m.glow}">${m.val}</div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-sub">${m.sub}</div>
      </div>
    `).join('');
  }
}

/* ============================================================
   EXTERNAL VS INTERNAL PORTAL MODE
   ============================================================ */
function setPortalMode(mode) {
  currentMode = mode;

  // Update navbar mode buttons
  document.getElementById('btnModeExternal')?.classList.toggle('active', mode === 'external');
  document.getElementById('btnModeInternal')?.classList.toggle('active', mode === 'internal');

  // Update tier mode buttons
  document.getElementById('btnTierExternal')?.classList.toggle('active', mode === 'external');
  document.getElementById('btnTierInternal')?.classList.toggle('active', mode === 'internal');

  const subtitle = document.getElementById('tiersSubtitle');
  if (subtitle) {
    subtitle.innerHTML = mode === 'external'
      ? '<strong>External View:</strong> Functional Capabilities across Industrial &amp; Digital Tiers (Build, Develop, Systems Intelligence, Cyber Resilience)'
      : '<strong>Internal View:</strong> Named Operating Entities (<span style="color: var(--cyan);">BCS, ACUD, ERCON/SAMCO, PRDC, GTC-CSI, CBL, DeLen</span>) &amp; Execution Mandates';
  }

  renderTiers();
}

function renderTiers() {
  const data = TIERS_DATA[currentMode];
  const t1Container = document.getElementById('tier1Grid');
  const t2Container = document.getElementById('tier2Grid');

  if (t1Container) {
    t1Container.innerHTML = data.tier1.map(item => `
      <div class="entity-card">
        <span class="entity-code-badge">${item.code}</span>
        <div class="entity-name">${item.name}</div>
        <div class="entity-role">${item.role}</div>
        <div class="entity-tags">
          ${item.tags.map(t => `<span class="entity-tag-item">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  if (t2Container) {
    t2Container.innerHTML = data.tier2.map(item => `
      <div class="entity-card">
        <span class="entity-code-badge" style="border-color: var(--emerald); color: var(--emerald);">${item.code}</span>
        <div class="entity-name">${item.name}</div>
        <div class="entity-role">${item.role}</div>
        <div class="entity-tags">
          ${item.tags.map(t => `<span class="entity-tag-item">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

/* ============================================================
   SECTORS RENDERING
   ============================================================ */
function renderSectors() {
  const pipelineEl = document.getElementById('pipelineSectorsGrid');
  if (pipelineEl) {
    pipelineEl.innerHTML = PIPELINE_SECTORS.map(s => `
      <div class="sector-card">
        <div class="sector-icon">${s.icon}</div>
        <div class="sector-name">${s.name}</div>
      </div>
    `).join('');
  }

  const licensedEl = document.getElementById('licensedSectorsGrid');
  if (licensedEl) {
    licensedEl.innerHTML = LICENSED_SECTORS.map(s => `
      <div class="sector-card">
        <div class="sector-icon">${s.icon}</div>
        <div class="sector-name">${s.name}</div>
      </div>
    `).join('');
  }
}

/* ============================================================
   ARCHITECTURE VS EXECUTION VIEW
   ============================================================ */
function setArchitectureView(view) {
  currentArchView = view;
  document.getElementById('btnArchView')?.classList.toggle('active', view === 'arch');
  document.getElementById('btnExecView')?.classList.toggle('active', view === 'exec');

  const chain = document.getElementById('chevronChain');
  if (chain) {
    if (view === 'exec') {
      chain.style.boxShadow = '0 0 25px rgba(0, 242, 254, 0.4)';
    } else {
      chain.style.boxShadow = 'none';
    }
  }
}

/* ============================================================
   PLATFORM TABS (DEM, SOC, HUMI)
   ============================================================ */
function switchPlatformTab(tabId) {
  document.getElementById('tabDemBtn')?.classList.toggle('active', tabId === 'dem');
  document.getElementById('tabSocBtn')?.classList.toggle('active', tabId === 'soc');
  document.getElementById('tabHumiBtn')?.classList.toggle('active', tabId === 'humi');

  const demPane = document.getElementById('tabDemContent');
  const socPane = document.getElementById('tabSocContent');
  const humiPane = document.getElementById('tabHumiContent');

  if (demPane) demPane.style.display = tabId === 'dem' ? 'block' : 'none';
  if (socPane) socPane.style.display = tabId === 'soc' ? 'block' : 'none';
  if (humiPane) humiPane.style.display = tabId === 'humi' ? 'block' : 'none';
}

function openPlatformDetail(platform) {
  switchPlatformTab(platform);
  document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   15-YEAR STRATEGIC INTELLIGENCE MODEL
   ============================================================ */
function setScenario(scenKey) {
  currentScenario = scenKey;
  document.getElementById('scenDown')?.classList.toggle('active', scenKey === 'downside');
  document.getElementById('scenBase')?.classList.toggle('active', scenKey === 'base');
  document.getElementById('scenUp')?.classList.toggle('active', scenKey === 'upside');
  updateIntelligenceDashboard();
}

function setCurrency(currKey) {
  currentCurrency = currKey;
  document.querySelectorAll('.currency-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(currKey));
  });
  updateIntelligenceDashboard();
}

function formatVal(usdVal) {
  const cfg = EXCHANGE_RATES[currentCurrency] || EXCHANGE_RATES.USD;
  if (cfg.isCr) {
    // In Crore INR: e.g. Year 15 base 7.98B * 94 = 750.12B INR = 75,012 Crore
    const crVal = Math.round(usdVal * cfg.rate * 100);
    return `${cfg.symbol}${crVal.toLocaleString()}${cfg.suffix}`;
  } else {
    const converted = (usdVal * cfg.rate).toFixed(2);
    return `${cfg.symbol}${converted}${cfg.suffix}`;
  }
}

function updateIntelligenceDashboard() {
  const scen = SCENARIO_DATA[currentScenario] || SCENARIO_DATA.base;

  // Trajectory Cards for 4 key horizons
  const horizons = [
    { label: 'Year 2 (24 Months)', val: scen.y2, ebitda: (scen.y2 * 0.142).toFixed(2), cagr: scen.cagrY1_5 },
    { label: 'Year 5 (60 Months)', val: scen.y5, ebitda: (scen.y5 * 0.182).toFixed(2), cagr: scen.cagrY1_5 },
    { label: 'Year 10 (120 Months)', val: scen.y10, ebitda: (scen.y10 * 0.216).toFixed(2), cagr: scen.cagrY6_10 },
    { label: 'Year 15 (180 Months)', val: scen.y15, ebitda: scen.ebitdaY15.toFixed(2), cagr: scen.cagrY11_15 }
  ];

  const cardsContainer = document.getElementById('trajectoryCards');
  if (cardsContainer) {
    cardsContainer.innerHTML = horizons.map(h => `
      <div class="trajectory-card">
        <div class="trajectory-year">${h.label}</div>
        <div class="trajectory-rev">${formatVal(h.val)}</div>
        <div class="trajectory-ebitda">Est. EBITDA: ${formatVal(parseFloat(h.ebitda))} &bull; CAGR ${h.cagr}</div>
      </div>
    `).join('');
  }

  // Key displays
  const ebitdaEl = document.getElementById('ebitdaDisplay');
  const ebitdaMarginEl = document.getElementById('ebitdaMarginDisplay');
  const patEl = document.getElementById('patDisplay');
  const valEl = document.getElementById('valDisplay');

  if (ebitdaEl) ebitdaEl.textContent = formatVal(scen.ebitdaY15);
  if (ebitdaMarginEl) {
    ebitdaMarginEl.textContent = `Margin: ${(scen.ebitdaMarginY15 * 100).toFixed(1)}% • ${scen.name}`;
  }

  if (patEl) patEl.textContent = formatVal(scen.patY15);
  if (valEl) {
    const impliedVal = scen.ebitdaY15 * parseInt(scen.multiple);
    valEl.textContent = `Implied EV: ${scen.multiple} EBITDA Multiple (${formatVal(impliedVal)})`;
  }
}

/* ============================================================
   STEP MODAL (CHEVRON DETAILS)
   ============================================================ */
const STEP_DETAILS = {
  capture: {
    title: 'Stage 01: Market Capture',
    sub: 'Deal Origination, Market Intelligence & Strategic Pipeline',
    content: `
      <p>Market capture serves as the leading edge of AHFL's institutional engagement model. Rather than waiting for competitive tenders, AHFL originates early-stage energy, industrial, and infrastructure transactions.</p>
      <ul style="margin: 12px 0 16px 20px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
        <li>Direct engagement with sovereign ministries, state utilities, and global developers.</li>
        <li>Bilateral pipeline structuring with local government bodies (e.g., JAFZA, KEZAD, Odisha Industrial Corridors).</li>
        <li>Integration with trade house intelligence networks across India and Middle East.</li>
      </ul>
    `
  },
  epicc: {
    title: 'Stage 02: EPICC Contracting',
    sub: 'Engineering, Procurement, Installation, Construction, Commissioning & Consultancy',
    content: `
      <p>EPICC represents AHFL's integrated delivery framework, ensuring complete commercial and technical accountability across the asset lifecycle.</p>
      <ul style="margin: 12px 0 16px 20px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
        <li>End-to-end commercial contracting with ring-fenced project SPVs.</li>
        <li>Integration of LOD 200 through LOD 500 digital twins during preliminary engineering.</li>
        <li>Consortium and joint-venture governance protecting delivery margins.</li>
      </ul>
    `
  },
  si: {
    title: 'Stage 03: System Integrator (S.I.)',
    sub: 'Execution Fabric, SCADA, Automation & Grid Modernisation',
    content: `
      <p>The System Integrator layer operates between physical OEM machinery and software command layers. AHFL acts as the prime integrator across smart grids, automated substations, and industrial manufacturing plants.</p>
      <ul style="margin: 12px 0 16px 20px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
        <li>Smart substations, SCADA, DERMS, and GIS spatial intelligence.</li>
        <li>OT/ICS cybersecurity zoning and industrial edge communications.</li>
        <li>Integration across multi-vendor automation ecosystems.</li>
      </ul>
    `
  },
  oem: {
    title: 'Stage 04: OEM & Strategic Partners',
    sub: 'Supply Chain Alliances & Equipment Localization',
    content: `
      <p>Partner-leveraged execution guarantees technical capability without bearing full capital equipment balance-sheet burdens.</p>
      <ul style="margin: 12px 0 16px 20px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
        <li>Non-exclusive tier-1 OEM relationships for power transformers, switchgear, and robotics.</li>
        <li>Local assembly and technical adaptation for Indian, UAE, and North American grid codes.</li>
        <li>Long-term spare parts, warranty, and technical service level agreements.</li>
      </ul>
    `
  },
  mfap: {
    title: 'Stage 05: MFAP Platform',
    sub: 'Manufacturing Fulfilment & Assembly Platform',
    content: `
      <p>MFAP powers physical assembly and manufacturing execution under a flexible, demand-driven model ("Customer-before-factory").</p>
      <ul style="margin: 12px 0 16px 20px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
        <li>Modular factory units designed for high-mix, high-reliability manufacturing.</li>
        <li>Early Revenue Generation (ERGI) trading and integration prior to factory commissioning.</li>
        <li>Full traceability using DEM & DAAP digital manufacturing execution systems (MES).</li>
      </ul>
    `
  },
  software: {
    title: 'Stage 06: Software & Digital Platform',
    sub: 'Applications, Data Fabric, AI/ML & Digital Twins',
    content: `
      <p>The intelligence layer connecting all physical assets to real-time predictive analytics and autonomous operations.</p>
      <ul style="margin: 12px 0 16px 20px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
        <li>Living BIM/GIS digital twin synchronisation with SCADA telemetry.</li>
        <li>Agentic AI and GenAI models for asset maintenance and energy optimisation.</li>
        <li>Cloud and edge hybrid microservices platform architecture.</li>
      </ul>
    `
  },
  lcs: {
    title: 'Stage 07: Lifecycle Services (LCS / LCM)',
    sub: 'Long-Term Operations, Maintenance & Upgrades',
    content: `
      <p>Lifecycle services secure multi-decade recurring revenues after project handover.</p>
      <ul style="margin: 12px 0 16px 20px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
        <li>Performance-based O&M contracts with guaranteed asset uptime.</li>
        <li>Predictive maintenance schedules minimizing unscheduled downtime.</li>
        <li>Continuous brownfield hardware and firmware modernization.</li>
      </ul>
    `
  },
  gbos: {
    title: 'Stage 08: GBOS & Monetisation',
    sub: 'Global Business & Operational Services, EaaS & ESCO',
    content: `
      <p>GBOS converts industrial assets into recurring cash flows via Everything-as-a-Service (EaaS) and energy performance contracts (ESCO).</p>
      <ul style="margin: 12px 0 16px 20px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
        <li>Targeting 70% recurring revenue mix by Year 15.</li>
        <li>Centralized shared services (BPO, KPO, EPO) reducing group overheads.</li>
        <li>Monetisation of verified carbon credits and energy savings certificates.</li>
      </ul>
    `
  }
};

function openStepModal(stepKey) {
  const info = STEP_DETAILS[stepKey];
  if (!info) return;

  const modal = document.getElementById('detailModal');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <span class="entity-code-badge">${info.sub}</span>
    <h3 style="font-size: 1.3rem; font-weight: 800; color: #fff; margin: 10px 0 14px;">${info.title}</h3>
    <div style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6;">${info.content}</div>
  `;

  modal.classList.add('open');
}

function closeModal(event) {
  if (event && event.target !== document.getElementById('detailModal') && !event.target.classList.contains('modal-close-btn')) {
    return;
  }
  document.getElementById('detailModal')?.classList.remove('open');
}

/* ============================================================
   NAVBAR SCROLL & THEME
   ============================================================ */
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
}

function initTheme() {
  const saved = localStorage.getItem('ahfl-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  const btn = document.getElementById('themeToggleBtn');
  btn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ahfl-theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
  } else {
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    `;
  }
}

function initMobileMenu() {
  const btn = document.getElementById('hamburgerBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('active', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when clicking any nav link
  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('active');
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !links.contains(e.target) && !btn.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('active');
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      links.classList.remove('open');
      btn.classList.remove('active');
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}
