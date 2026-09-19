/**
 * AMS Sub-Domain Portal — ams.js
 * Logic for AMS External (Public Ecosystem) & Internal (12-Leader Intranet),
 * 12 Executive leadership roles, and 26-Chapter Odisha Strategy Intranet.
 */

// 12-Leader Architecture Data (from Sanjay's Internal Portal.jpeg)
const AMS_LEADERS = [
  {
    id: 1,
    code: '01',
    title: 'Chief Executive Officer (CEO)',
    mandate: 'Vision, Strategy & Institutional Leadership',
    duties: [
      'Strategic leadership & overall commercial growth',
      'Institutional development with central and state governments',
      'Ecosystem architecture & partner credibility',
      'Global technology partnerships & sovereign MOUs',
      'Corporate governance & group alignment with AHFL holding'
    ],
    value: 'Ensures overall corporate vision and strategic positioning in the national semiconductor grid.'
  },
  {
    id: 2,
    code: '02',
    title: 'Chief Commercial Officer (CCO)',
    mandate: 'Markets, Customers & Revenue Growth',
    duties: [
      'Market strategy & demand capture across India',
      'Customer acquisition, account management & pipeline build',
      'Trade house commercial distribution network expansion',
      'Contract structuring, margin governance & price parity',
      'Global & regional export sales acceleration'
    ],
    value: 'Drives the USD 170M 24-month ERGI target and customer allocations.'
  },
  {
    id: 3,
    code: '03',
    title: 'Chief Data & Intelligence Officer (CDIO)',
    mandate: 'Data Architecture, AI & Market Intelligence',
    duties: [
      'Data architecture & enterprise intelligence fabric',
      'AI and advanced analytics for demand forecasting',
      'Market & component technology intelligence feeds',
      'Decision support systems & automated pipeline analytics',
      'Asset graph and data governance enforcement'
    ],
    value: 'Provides real-time visibility across 36 trade houses and global component prices.'
  },
  {
    id: 4,
    code: '04',
    title: 'Chief Strategy & Transformation Officer (CSTO)',
    mandate: 'Corporate Strategy & Business Transformation',
    duties: [
      'Long-range 15-year strategic transformation roadmap',
      'Strategic alliances, consortium structuring & JVs',
      'Cross-functional alignment across 8 technology platforms',
      'Change management & business model innovation',
      'Institutional alignment with state electronics policies'
    ],
    value: 'Transforms trading revenues into high-margin domestic manufacturing capacity.'
  },
  {
    id: 5,
    code: '05',
    title: 'Chief Partnerships & Ecosystems Officer (CPO)',
    mandate: 'Global Technology Partnerships & Channel Development',
    duties: [
      'Global technology partner onboarding (Japan, Taiwan, US, Europe)',
      'Trade house dealer & distributor relationship management',
      'OEM & equipment supplier agreements and warranties',
      'Academy and university knowledge exchange partnerships',
      'Manufacturing pull-through channel coordination'
    ],
    value: 'Locks in top-tier global equipment suppliers and domestic channel partners.'
  },
  {
    id: 6,
    code: '06',
    title: 'Chief Industrial Systems Officer (CISO)',
    mandate: 'OT, Automation & Manufacturing Systems',
    duties: [
      'OT and industrial automation architecture (DCS / PLC / SCADA)',
      'Cyber-physical integration of cleanrooms & SMT lines',
      'Industrial applicability & high-reliability standards',
      'Manufacturing process optimisation and zero-defect initiatives',
      'Industrial engineering & plant utility integration'
    ],
    value: 'Guarantees world-class uptime and yields in cleanroom operations.'
  },
  {
    id: 7,
    code: '07',
    title: 'Chief Customer Operations Officer (CCOO)',
    mandate: 'Customer Success & Service Delivery',
    duties: [
      'Customer project engagement from kickoff to commissioning',
      'GPOC & implementation delivery across customer facilities',
      'Service level agreement (SLA) monitoring and enforcement',
      'Customer account expansion and satisfaction tracking',
      'Global delivery operations for international buyers'
    ],
    value: 'Turns transactional customers into multi-year recurring contract partners.'
  },
  {
    id: 8,
    code: '08',
    title: 'Chief Enterprise Platform Officer (CEPO)',
    mandate: 'IT Infrastructure, Applications & Data',
    duties: [
      'Enterprise cloud infrastructure & core data centres',
      'API gateway integration for B2B supplier portals',
      'Workflow management, ERP integration & microservices',
      'Internal digital workplace and collaboration systems',
      'High-availability platform reliability (99.99%)'
    ],
    value: 'Operates the unified digital control plane for group-wide operations.'
  },
  {
    id: 9,
    code: '09',
    title: 'Chief Applications & Digital Solutions Officer (CADO)',
    mandate: 'Industrial Applications, Digital Twins & Simulation',
    duties: [
      'Industrial software solutions for semiconductor tracking',
      'Digital twin simulation of cleanroom flows and thermal stress',
      'Application engineering for customer design teams',
      'Customer portals and telemetry dashboards',
      'Industrial UX & operator command interfaces'
    ],
    value: 'Bridges physical electronics hardware with living digital twins.'
  },
  {
    id: 10,
    code: '10',
    title: 'Chief Technology Integration Officer (CTIO)',
    mandate: 'Engineering, APIs & Systems Integration',
    duties: [
      'Engineering workflow automation and CI/CD pipelines',
      'Multi-vendor API and protocol mediation',
      'Customer engineering design-in integration support',
      'Azure and cloud microservices orchestration',
      'Technical standards compliance (IPC, JEDEC, ISO)'
    ],
    value: 'Ensures seamless hardware-software integration across the ecosystem.'
  },
  {
    id: 11,
    code: '11',
    title: 'Chief Risk & Compliance Officer (CRCO)',
    mandate: 'Governance, Security & Regulatory Assurance',
    duties: [
      'Institutional governance and statutory compliance',
      'Information security and cybersecurity defense (ISO 27001)',
      'Identity and access management across trade houses',
      'Regulatory compliance with Indian semiconductor mission guidelines',
      'Business continuity, emergency recovery & crisis planning'
    ],
    value: 'Protects enterprise intellectual property, assets, and regulatory standing.'
  },
  {
    id: 12,
    code: '12',
    title: 'Chief Support & Service Excellence Officer (CSSE)',
    mandate: 'Product Support & Lifecycle Assurance',
    duties: [
      '24/7 technical customer support desk and incident triage',
      'Spare parts inventory buffer across state trade houses',
      'Knowledge base and field runbook maintenance',
      'RMA analysis and root cause corrective actions (RCCA)',
      'Customer voice and satisfaction feedback loops'
    ],
    value: 'Maximizes customer retention and long-term brand equity.'
  }
];

// Odisha Industrial Strategy: 26 Chapters Repository (from Sanjay's Documents)
const ODISHA_CHAPTERS = [
  { ch: '01', vol: 'Volume I', title: 'Institutional Land Allocation Philosophy', sub: 'Governance, Ethics, ESG & Government-First Policy', desc: 'Framework establishing that industrial land is an institutional asset rather than a speculative input. Details transparent audit trails, statutory alignments, and zero-compromise environmental stewardship.' },
  { ch: '02', vol: 'Volume I', title: 'Manufacturing Location Strategy', sub: 'Resilience, Redundancy & Multi-Location Portfolio', desc: 'Multi-location manufacturing strategy across Odisha linking deep-water ports (Dhamra, Paradip), dedicated freight corridors, clean power, and water utilities for world-class semiconductor packaging.' },
  { ch: '03', vol: 'Volume I', title: 'Odisha Industrial Strategy', sub: 'State Policy, Ecosystem & Sectoral Alignment', desc: 'Comprehensive alignment with the Odisha Industrial Policy Resolution (IPR) and Electronics Manufacturing Policy, identifying key tax incentives and infrastructure capital support.' },
  { ch: '04', vol: 'Volume I', title: 'Jajpur–Kalinga Nagar Strategic Evaluation', sub: 'Detailed Assessment & Metal/Heavy Engineering Proximity', desc: 'Site evaluation of Jajpur-Kalinga Nagar corridor highlighting power reliability, auxiliary engineering infrastructure, and multimodal road-rail logistics.' },
  { ch: '05', vol: 'Volume I', title: 'Comparative Evaluation of Odisha Locations', sub: 'Multi-Parameter Quantitative Analysis', desc: 'Comparative matrix ranking shortlisted parcels across 15 criteria including seismic stability, water security, power redundant feeders, and talent accessibility.' },
  { ch: '06', vol: 'Volume I', title: 'Land Allocation Strategy & Government Engagement', sub: 'Process & Institutional Engagement Framework', desc: 'Direct statutory route with IDCO (Odisha Industrial Infrastructure Development Corporation) avoiding intermediaries and ensuring clear freehold/long-term leasehold title.' },
  { ch: '07', vol: 'Volume II', title: 'Integrated Industrial Masterplan', sub: 'Phased Campus Development & Modular Zoning', desc: 'Zoning layout demarcating cleanrooms, chemical storage, gas yards, wastewater reclamation, power substations, employee dormitories, and customs bonded warehouses.' },
  { ch: '08', vol: 'Volume II', title: 'Odisha Industrial Strategy & Sectoral Development', sub: 'Upstream & Downstream Integration', desc: 'Integration with local chemical suppliers, quartz/silicon precursors, copper leadframes, and packaging substrates to build a captive supply base.' },
  { ch: '09', vol: 'Volume II', title: 'Dhamra–Chandbali Region Institutional Evaluation', sub: 'Deep-Water Port Proximity & Export Gateway', desc: 'Detailed assessment of Dhamra-Chandbali coastal parcel with direct access to Dhamra Port, enabling low-cost containerized import of capital equipment and direct export to APAC.' },
  { ch: '10', vol: 'Volume II', title: 'Other Shortlisted Odisha Locations', sub: 'Evaluation & Strategic Ranking', desc: 'Secondary fallback locations including Khordha, Info Valley Bhubaneswar, and Ganjam corridor for redundant satellite facilities.' },
  { ch: '11', vol: 'Volume II', title: 'Integrated Odisha Manufacturing Strategy', sub: 'Holistic Implementation & Synergies', desc: 'Unified operating matrix linking all selected parcels into a single distributed manufacturing cluster sharing centralized utilities and waste treatment.' },
  { ch: '12', vol: 'Volume II', title: 'Financial, Economic & Strategic Value Framework', sub: 'Business Case & Institutional ROI', desc: 'Detailed financial modeling showing capital expenditure phasing, state subsidy drawdowns, tax holidays, and projected unit economics.' },
  { ch: '13', vol: 'Volume III', title: 'Regulatory & Statutory Framework', sub: 'Approvals, Clearances & Environmental Conformance', desc: 'Roadmap for single-window clearances, pollution control board consents (CTE/CTO), fire approvals, factory inspectorate, and customs bonded registration.' },
  { ch: '14', vol: 'Volume III', title: 'Infrastructure & Utilities Plan', sub: 'Power Redundancy, Ultra-Pure Water & Industrial Gases', desc: 'Engineering requirements for dual 132kV/33kV grid substations, 24/7 dedicated water pipeline, and on-site nitrogen/argon/oxygen generation plants.' },
  { ch: '15', vol: 'Volume III', title: 'Environmental & Social Framework (ESG)', sub: 'Zero-Liquid Discharge & Community Integration', desc: 'Zero Liquid Discharge (ZLD) effluent treatment plant design, rainwater harvesting, solar rooftop integration, and community CSR programs.' },
  { ch: '16', vol: 'Volume III', title: 'Risk Assessment & Mitigation Matrix', sub: 'Multi-Dimensional Institutional Risk Safeguards', desc: 'Mitigation strategies for cyclonic weather, supply chain disruptions, currency volatility, utility interruptions, and geopolitical shifts.' },
  { ch: '17', vol: 'Volume III', title: 'Eight-Platform Architecture Integration', sub: 'Mapping to AMS Core Platforms', desc: 'How the Odisha campus directly anchors Platforms 1 (Materials), 2 (HDI PCB), 3 (Packaging), and 5 (Equipment Automation).' },
  { ch: '18', vol: 'Volume III', title: 'Manufacturing Platform Facilities & Operations', sub: 'Cleanroom Classifications & Equipment Schedules', desc: 'Technical specifications for ISO Class 5 to Class 8 cleanrooms, vibration-isolated flooring, anti-static epoxy coatings, and air handling units (AHU).' },
  { ch: '19', vol: 'Volume III', title: 'Supply Chain & Vendor Ecosystem', sub: 'Localisation & Vendor Parks', desc: 'Blueprint for an adjacent 50-acre vendor park hosting component fabricators, reel packaging suppliers, and precision tooling machine shops.' },
  { ch: '20', vol: 'Volume III', title: 'Talent, Workforce & AMS Academy', sub: 'Workforce Sourcing & Technical Training', desc: 'Partnership with Odisha engineering colleges and ITIs for certified diploma programs in cleanroom operations and SMT maintenance.' },
  { ch: '21', vol: 'Volume III', title: 'Technology, R&D & Innovation Platform', sub: 'Advanced Lab & University Co-Development', desc: 'Joint applied R&D lab with IIT Bhubaneswar and NIT Rourkela for thermal dissipation packaging and failure analysis.' },
  { ch: '22', vol: 'Volume III', title: 'Implementation Roadmap & Milestones', sub: '24-Month Project Phasing', desc: 'Month-by-month project execution chart from land deed execution and grading through MEP installation to pilot manufacturing run.' },
  { ch: '23', vol: 'Volume III', title: 'Governance & Institutional Structure', sub: 'Steering Committees & Audit Oversight', desc: 'Board oversight committee, environmental compliance board, and project monitoring cell with state government representation.' },
  { ch: '24', vol: 'Volume III', title: 'Commercial Strategy & Strategic Offtake', sub: 'Anchor Customers & Export Agreements', desc: 'Pre-commercial offtake agreements with Indian defense contractors, automotive tier-1s, and telecommunications equipment manufacturers.' },
  { ch: '25', vol: 'Volume III', title: 'National & Global Expansion Blueprint', sub: 'Replicating the Odisha Template', desc: 'Blueprint for scaling the integrated model to Gujarat, Tamil Nadu, and international partner nodes in the Middle East.' },
  { ch: '26', vol: 'Volume III', title: 'Conclusion & Immediate Action Plan', sub: 'Next 90-Day Execution Steps', desc: 'Summary of critical-path action items including formal application submission to IDCO, security deposits, and joint site inspection.' }
];

/* ============================================================
   INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderLeaders();
  renderOdishaChapters();
  loadChapter(0);
});

/* ============================================================
   VIEW MODE SWITCH (EXTERNAL VS INTERNAL)
   ============================================================ */
function setAmsView(view) {
  const isInternal = view === 'internal';
  const extView = document.getElementById('amsExternalView');
  const intView = document.getElementById('amsInternalView');
  const watermark = document.getElementById('internalWatermarkBar');
  const btnExt = document.getElementById('btnAmsExternal');
  const btnInt = document.getElementById('btnAmsInternal');

  if (extView) extView.style.display = isInternal ? 'none' : 'block';
  if (intView) intView.style.display = isInternal ? 'block' : 'none';
  if (watermark) watermark.style.display = isInternal ? 'flex' : 'none';

  btnExt?.classList.toggle('active', !isInternal);
  btnInt?.classList.toggle('active', isInternal);
  btnInt?.classList.toggle('internal-active', isInternal);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   12-LEADER EXECUTION ROLES RENDERING
   ============================================================ */
function renderLeaders() {
  const container = document.getElementById('leadersGrid');
  if (!container) return;

  container.innerHTML = AMS_LEADERS.map(ldr => `
    <div class="leader-card" onclick="openLeaderModal(${ldr.id})">
      <div class="leader-card-header">
        <div class="leader-badge">${ldr.code}</div>
        <div>
          <div class="leader-title">${ldr.title}</div>
          <div class="leader-mandate">${ldr.mandate}</div>
        </div>
      </div>
      <div class="leader-duties">
        ${ldr.duties.slice(0, 3).map(d => `<div>&bull; ${d}</div>`).join('')}
      </div>
      <div style="font-size: 0.7rem; color: var(--ams-cyan); margin-top: 10px; font-weight: 600;">
        Inspect Complete Role &amp; Value &rarr;
      </div>
    </div>
  `).join('');
}

function openLeaderModal(leaderId) {
  const ldr = AMS_LEADERS.find(l => l.id === leaderId);
  if (!ldr) return;

  const modal = document.getElementById('leaderModal');
  const body = document.getElementById('leaderModalBody');

  body.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
      <div class="leader-badge" style="width: 36px; height: 36px; font-size: 0.95rem;">${ldr.code}</div>
      <div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #fff;">${ldr.title}</h3>
        <div style="color: #fcd34d; font-size: 0.8rem; font-weight: 600;">${ldr.mandate}</div>
      </div>
    </div>
    <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px; margin-top: 14px;">
      <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--ams-cyan); margin-bottom: 8px; text-transform: uppercase;">
        Core Operational Accountabilities
      </h4>
      <ul style="list-style: none; font-size: 0.82rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px;">
        ${ldr.duties.map(d => `<li style="position: relative; padding-left: 14px;">&bull; ${d}</li>`).join('')}
      </ul>
      <div style="margin-top: 16px; background: rgba(0, 242, 254, 0.08); border: 1px solid var(--border); padding: 12px; border-radius: var(--radius-sm);">
        <strong style="color: #fff; font-size: 0.78rem;">Strategic Value Creation:</strong>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 4px;">${ldr.value}</p>
      </div>
    </div>
  `;

  modal?.classList.add('open');
}

function closeLeaderModal(event) {
  if (event && event.target !== document.getElementById('leaderModal') && !event.target.classList.contains('modal-close-btn')) {
    return;
  }
  document.getElementById('leaderModal')?.classList.remove('open');
}

/* ============================================================
   ODISHA CHAPTERS BROWSER
   ============================================================ */
function renderOdishaChapters() {
  const container = document.getElementById('chaptersGrid');
  if (!container) return;

  container.innerHTML = ODISHA_CHAPTERS.map((ch, idx) => `
    <div class="chapter-item ${idx === 0 ? 'active' : ''}" onclick="loadChapter(${idx})" id="ch-item-${idx}">
      <div class="ch-num">${ch.vol} &bull; CH ${ch.ch}</div>
      <div class="ch-title">${ch.title}</div>
      <div class="ch-sub">${ch.sub}</div>
    </div>
  `).join('');
}

function loadChapter(index) {
  const ch = ODISHA_CHAPTERS[index];
  if (!ch) return;

  document.querySelectorAll('.chapter-item').forEach(el => el.classList.remove('active'));
  document.getElementById(`ch-item-${index}`)?.classList.add('active');

  const heading = document.getElementById('currentChapterHeading');
  const body = document.getElementById('chapterDetailText');

  if (heading) {
    heading.textContent = `Chapter ${ch.ch}: ${ch.title}`;
  }

  if (body) {
    body.innerHTML = `
      <div style="margin-bottom: 10px; color: var(--ams-cyan); font-weight: 600; font-size: 0.85rem;">
        ${ch.vol} &bull; ${ch.sub}
      </div>
      <p style="margin-bottom: 12px; font-size: 0.88rem; line-height: 1.6;">${ch.desc}</p>
      <div style="background: rgba(10, 19, 36, 0.7); border: 1px solid var(--border-subtle); padding: 12px 16px; border-radius: var(--radius-sm); font-size: 0.78rem; display: flex; align-items: center; justify-content: space-between;">
        <span class="text-muted">Repository Status: Institutional Grade &bull; Legally Vetted</span>
        <span style="color: var(--ams-emerald); font-weight: 700;">Complete Chapter Registered &check;</span>
      </div>
    `;
  }
}
