export const INITIAL_PROJECTS = [
  {
    id: 'PRJ-001',
    name: 'Green Solar Initiative',
    type: 'Solar',
    icon: '☀️',
    location: 'Telangana, India',
    estimatedReduction: 4500,
    status: 'Verified',
    developer: 'SunPower Renewables Ltd',
    submittedDate: '2026-01-15',
    integrityScore: 94,
    description: 'Utility-scale 50 MW photovoltaic power generation providing clean electricity to regional industrial corridors and displacing fossil-fuel grid power.',
    scoreFactors: {
      verification: { score: 25, max: 25, label: 'Verification Status', desc: 'Independently audited by accredited third-party ISO 14064 validator.' },
      dataConsistency: { score: 18, max: 20, label: 'Data Consistency', desc: 'Continuous telemetry feed with 99.4% sensor uptime matching grid dispatcher logs.' },
      duplicateRisk: { score: 20, max: 20, label: 'Duplicate Risk Prevention', desc: 'Serial numbers cryptographically anchored to prevent double issuance.' },
      ownershipHistory: { score: 15, max: 15, label: 'Ownership History', desc: 'Unbroken immutable custody ledger from origination.' },
      auditHistory: { score: 8, max: 10, label: 'Audit History', desc: 'Annual field inspection completed with minor seasonal variance notes.' },
      evidence: { score: 9, max: 10, label: 'Evidence Completeness', desc: 'High-resolution satellite imagery and monthly transformer feed invoices attached.' }
    },
    lifecycle: [
      { step: 'Created', date: 'Jan 10, 2026', done: true },
      { step: 'Submitted', date: 'Jan 15, 2026', done: true },
      { step: 'Verified', date: 'Feb 02, 2026', done: true },
      { step: 'Credits Generated', date: 'Feb 10, 2026', done: true }
    ],
    impactHighlights: {
      cleanEnergyMWh: '68,400 MWh/year',
      coalDisplacedTons: '3,850 Tons',
      localJobsCreated: '42 Technical roles'
    }
  },
  {
    id: 'PRJ-002',
    name: 'Wind Power for Communities',
    type: 'Wind',
    icon: '🌬️',
    location: 'Tamil Nadu, India',
    estimatedReduction: 3200,
    status: 'Verified',
    developer: 'Vayu Green Energy Corp',
    submittedDate: '2026-01-20',
    integrityScore: 91,
    description: 'Community-integrated wind farm generating clean energy in coastal high-wind corridors while funding local school green infrastructure.',
    scoreFactors: {
      verification: { score: 24, max: 25, label: 'Verification Status', desc: 'Verified under national carbon governance guidelines.' },
      dataConsistency: { score: 18, max: 20, label: 'Data Consistency', desc: 'SCADA anemometer records cross-referenced with state load dispatch center.' },
      duplicateRisk: { score: 20, max: 20, label: 'Duplicate Risk Prevention', desc: 'Cross-registry deduplication verified against global registries.' },
      ownershipHistory: { score: 14, max: 15, label: 'Ownership History', desc: 'Single developer to primary issuance transfer recorded.' },
      auditHistory: { score: 7, max: 10, label: 'Audit History', desc: 'Biannual maintenance logs submitted on schedule.' },
      evidence: { score: 8, max: 10, label: 'Evidence Completeness', desc: 'Acoustic survey, grid interconnection certification, and meter seals attached.' }
    },
    lifecycle: [
      { step: 'Created', date: 'Jan 12, 2026', done: true },
      { step: 'Submitted', date: 'Jan 20, 2026', done: true },
      { step: 'Verified', date: 'Feb 05, 2026', done: true },
      { step: 'Credits Generated', date: 'Feb 15, 2026', done: true }
    ],
    impactHighlights: {
      cleanEnergyMWh: '49,200 MWh/year',
      coalDisplacedTons: '2,700 Tons',
      localJobsCreated: '28 Community stewards'
    }
  },
  {
    id: 'PRJ-003',
    name: 'Forest Restoration Project',
    type: 'Reforestation',
    icon: '🌳',
    location: 'Western Ghats, India',
    estimatedReduction: 6800,
    status: 'Verified',
    developer: 'Canopy Ecological Foundation',
    submittedDate: '2025-11-10',
    integrityScore: 95,
    description: 'Native biodiversity reforestation over 1,200 hectares of degraded buffer zones, enhancing wildlife corridors and soil moisture retention.',
    scoreFactors: {
      verification: { score: 25, max: 25, label: 'Verification Status', desc: 'Multi-spectral satellite LiDAR verification with ground biomass sample plots.' },
      dataConsistency: { score: 19, max: 20, label: 'Data Consistency', desc: 'Quarterly tree crown measurement aligns with allometric growth models.' },
      duplicateRisk: { score: 20, max: 20, label: 'Duplicate Risk Prevention', desc: 'GPS polygon boundaries tagged with zero overlap against national parks.' },
      ownershipHistory: { score: 15, max: 15, label: 'Ownership History', desc: 'Community stewardship land title deeds validated with municipal authorities.' },
      auditHistory: { score: 8, max: 10, label: 'Audit History', desc: 'Independent forest conservation audit report rated Grade A.' },
      evidence: { score: 8, max: 10, label: 'Evidence Completeness', desc: 'High-res Sentinel-2 NDVI time series and drone orthomosaics submitted.' }
    },
    lifecycle: [
      { step: 'Created', date: 'Nov 01, 2025', done: true },
      { step: 'Submitted', date: 'Nov 10, 2025', done: true },
      { step: 'Verified', date: 'Dec 18, 2025', done: true },
      { step: 'Credits Generated', date: 'Jan 08, 2026', done: true }
    ],
    impactHighlights: {
      treesPlanted: '450,000 Native saplings',
      hectaresRestored: '1,200 Hectares',
      speciesProtected: '38 Endangered endemic species'
    }
  },
  {
    id: 'PRJ-004',
    name: 'Clean Waste Management',
    type: 'Waste Management',
    icon: '♻️',
    location: 'Bengaluru, India',
    estimatedReduction: 2100,
    status: 'Verified',
    developer: 'UrbanEco Solutions',
    submittedDate: '2026-01-05',
    integrityScore: 89,
    description: 'Methane capture and anaerobic composting for municipal market wet waste, preventing harmful open-dump decomposition and landfill emissions.',
    scoreFactors: {
      verification: { score: 23, max: 25, label: 'Verification Status', desc: 'Certified methane destruction flow monitoring protocol applied.' },
      dataConsistency: { score: 17, max: 20, label: 'Data Consistency', desc: 'Daily flare meter readings and compost weighbridge slips match within 2.1%.' },
      duplicateRisk: { score: 19, max: 20, label: 'Duplicate Risk Prevention', desc: 'Municipal waste concession contract verified for exclusivity.' },
      ownershipHistory: { score: 14, max: 15, label: 'Ownership History', desc: 'Joint venture registration clearly documented.' },
      auditHistory: { score: 7, max: 10, label: 'Audit History', desc: 'Flare gas chromatograph calibrated bi-monthly.' },
      evidence: { score: 9, max: 10, label: 'Evidence Completeness', desc: 'Weighbridge logs, CCTV records of tipping floor, and methane sensor logs.' }
    },
    lifecycle: [
      { step: 'Created', date: 'Dec 20, 2025', done: true },
      { step: 'Submitted', date: 'Jan 05, 2026', done: true },
      { step: 'Verified', date: 'Jan 28, 2026', done: true },
      { step: 'Credits Generated', date: 'Feb 12, 2026', done: true }
    ],
    impactHighlights: {
      wasteDiverted: '14,000 Tons organic waste',
      organicCompost: '2,800 Tons produced',
      methaneCaptured: '98,000 m³ captured'
    }
  },
  {
    id: 'PRJ-005',
    name: 'Coastal Mangrove Conservation',
    type: 'Reforestation',
    icon: '🌊',
    location: 'Sundarbans, India',
    estimatedReduction: 5400,
    status: 'Pending Review',
    developer: 'Bengal Delta Ecology Trust',
    submittedDate: '2026-02-18',
    integrityScore: 88,
    description: 'Tidal mangrove plantation protecting vulnerable coastal settlements from cyclone surges while sequestering high-density blue carbon in peat sediments.',
    scoreFactors: {
      verification: { score: 21, max: 25, label: 'Verification Status', desc: 'Undergoing initial methodology validation for blue carbon soil core analysis.' },
      dataConsistency: { score: 18, max: 20, label: 'Data Consistency', desc: 'Satellite tidal boundary indices consistent with hydrological records.' },
      duplicateRisk: { score: 20, max: 20, label: 'Duplicate Risk Prevention', desc: 'Cadastral coastal zone map registered with marine authority.' },
      ownershipHistory: { score: 14, max: 15, label: 'Ownership History', desc: 'Community cooperative lease documented.' },
      auditHistory: { score: 7, max: 10, label: 'Audit History', desc: 'Initial baseline audit pending formal committee signoff.' },
      evidence: { score: 8, max: 10, label: 'Evidence Completeness', desc: 'Soil sediment cores and tidal drone footage provided.' }
    },
    lifecycle: [
      { step: 'Created', date: 'Feb 10, 2026', done: true },
      { step: 'Submitted', date: 'Feb 18, 2026', done: true },
      { step: 'Verified', date: 'Pending', done: false },
      { step: 'Credits Generated', date: 'Pending', done: false }
    ],
    impactHighlights: {
      coastlineProtected: '42 km storm barrier',
      mangrovePropagules: '280,000 planted',
      blueCarbonSediment: 'High density organic sediment'
    }
  },
  {
    id: 'PRJ-006',
    name: 'Clean Biogas Energy Project',
    type: 'Waste Management',
    icon: '🔥',
    location: 'Punjab, India',
    estimatedReduction: 1950,
    status: 'Review Required',
    developer: 'Punjab Agro-Bio Pvt Ltd',
    submittedDate: '2026-02-22',
    integrityScore: 76,
    description: 'Paddy straw and cattle manure digestion to produce bio-CNG for agricultural tractors, curbing harmful post-harvest stubble burning.',
    scoreFactors: {
      verification: { score: 18, max: 25, label: 'Verification Status', desc: 'Quarterly telemetry report had minor discrepancy in flare meter flow rate.' },
      dataConsistency: { score: 15, max: 20, label: 'Data Consistency', desc: '12% variance observed between winter digestate weight and gas output model.' },
      duplicateRisk: { score: 18, max: 20, label: 'Duplicate Risk Prevention', desc: 'Farm collection catchment area verified.' },
      ownershipHistory: { score: 12, max: 15, label: 'Ownership History', desc: 'Additional cooperative partnership addendum requested.' },
      auditHistory: { score: 6, max: 10, label: 'Audit History', desc: 'Sensor recalibration report requested by auditor.' },
      evidence: { score: 7, max: 10, label: 'Evidence Completeness', desc: 'Biogas analyzer logs uploaded, awaiting third-party calibration certificate.' }
    },
    lifecycle: [
      { step: 'Created', date: 'Feb 15, 2026', done: true },
      { step: 'Submitted', date: 'Feb 22, 2026', done: true },
      { step: 'Verified', date: 'In Review', done: false },
      { step: 'Credits Generated', date: 'Pending', done: false }
    ],
    impactHighlights: {
      stubbleBurntAvoided: '3,200 Tons paddy straw',
      bioCNGProduced: '78,000 kg bio-methane',
      airQualityImprovement: 'Noticeable reduction in regional PM2.5'
    }
  }
];

export const INITIAL_CREDITS = [
  {
    id: 'CT-2026-000145',
    projectId: 'PRJ-001',
    projectName: 'Green Solar Initiative',
    projectType: 'Solar',
    icon: '☀️',
    quantity: 1450,
    prototypePrice: 14.50,
    integrityScore: 94,
    status: 'Verified',
    originalOwner: 'SunPower Renewables Ltd',
    currentOwner: 'EcoTech Global',
    issuanceDate: '2026-02-10',
    riskLevel: 'Low Risk',
    riskColor: 'green',
    lifecycleStatus: 'Listed',
    history: [
      { event: 'Created & Registered', by: 'SunPower Renewables Ltd', date: '2026-01-10' },
      { event: 'Independent Verification', by: 'TUV Carbon Verifiers', date: '2026-02-02' },
      { event: 'Issuance & Minting', by: 'CarbonTrust Registry', date: '2026-02-10' },
      { event: 'Listed on Marketplace', by: 'SunPower Renewables Ltd', date: '2026-02-12' }
    ]
  },
  {
    id: 'CT-2026-000210',
    projectId: 'PRJ-002',
    projectName: 'Wind Power for Communities',
    projectType: 'Wind',
    icon: '🌬️',
    quantity: 1000,
    prototypePrice: 12.00,
    integrityScore: 91,
    status: 'Verified',
    originalOwner: 'Vayu Green Energy Corp',
    currentOwner: 'EcoTech Global',
    issuanceDate: '2026-02-15',
    riskLevel: 'Low Risk',
    riskColor: 'green',
    lifecycleStatus: 'Purchased',
    history: [
      { event: 'Created & Registered', by: 'Vayu Green Energy Corp', date: '2026-01-12' },
      { event: 'Independent Verification', by: 'Bureau Veritas', date: '2026-02-05' },
      { event: 'Issuance & Minting', by: 'CarbonTrust Registry', date: '2026-02-15' },
      { event: 'Acquired by EcoTech Global', by: 'EcoTech Global', date: '2026-02-18' }
    ]
  },
  {
    id: 'CT-2026-000302',
    projectId: 'PRJ-003',
    projectName: 'Forest Restoration Project',
    projectType: 'Reforestation',
    icon: '🌳',
    quantity: 800,
    prototypePrice: 18.50,
    integrityScore: 95,
    status: 'Verified',
    originalOwner: 'Canopy Ecological Foundation',
    currentOwner: 'Canopy Ecological Foundation',
    issuanceDate: '2026-01-08',
    riskLevel: 'Low Risk',
    riskColor: 'green',
    lifecycleStatus: 'Listed',
    history: [
      { event: 'Created & Registered', by: 'Canopy Ecological Foundation', date: '2025-11-01' },
      { event: 'Satellite Biomass Audit', by: 'EarthSense AI Verification', date: '2025-12-18' },
      { event: 'Issuance & Minting', by: 'CarbonTrust Registry', date: '2026-01-08' },
      { event: 'Listed on Marketplace', by: 'Canopy Ecological Foundation', date: '2026-01-15' }
    ]
  },
  {
    id: 'CT-2026-000418',
    projectId: 'PRJ-004',
    projectName: 'Clean Waste Management',
    projectType: 'Waste Management',
    icon: '♻️',
    quantity: 650,
    prototypePrice: 11.00,
    integrityScore: 89,
    status: 'Verified',
    originalOwner: 'UrbanEco Solutions',
    currentOwner: 'UrbanEco Solutions',
    issuanceDate: '2026-02-12',
    riskLevel: 'Low Risk',
    riskColor: 'green',
    lifecycleStatus: 'Listed',
    history: [
      { event: 'Created & Registered', by: 'UrbanEco Solutions', date: '2025-12-20' },
      { event: 'Methane Destruction Audit', by: 'SGS India', date: '2026-01-28' },
      { event: 'Issuance & Minting', by: 'CarbonTrust Registry', date: '2026-02-12' },
      { event: 'Listed on Marketplace', by: 'UrbanEco Solutions', date: '2026-02-14' }
    ]
  },
  {
    id: 'CT-2026-000089',
    projectId: 'PRJ-001',
    projectName: 'Green Solar Initiative',
    projectType: 'Solar',
    icon: '☀️',
    quantity: 600,
    prototypePrice: 14.00,
    integrityScore: 94,
    status: 'Retired',
    originalOwner: 'SunPower Renewables Ltd',
    currentOwner: 'EcoTech Global (Permanently Retired)',
    issuanceDate: '2026-01-15',
    riskLevel: 'Low Risk',
    riskColor: 'green',
    lifecycleStatus: 'Retired',
    retirementReason: 'Corporate FY25 Scope 2 Clean Electricity Claim',
    retirementDate: '2026-02-20',
    history: [
      { event: 'Created & Registered', by: 'SunPower Renewables Ltd', date: '2026-01-10' },
      { event: 'Verification Approved', by: 'CarbonTrust Registry', date: '2026-01-15' },
      { event: 'Purchased by EcoTech Global', by: 'EcoTech Global', date: '2026-01-25' },
      { event: 'Permanently Retired (Non-Transferable)', by: 'EcoTech Global', date: '2026-02-20' }
    ]
  },
  {
    id: 'CT-2026-000052',
    projectId: 'PRJ-003',
    projectName: 'Forest Restoration Project',
    projectType: 'Reforestation',
    icon: '🌳',
    quantity: 680,
    prototypePrice: 17.50,
    integrityScore: 95,
    status: 'Retired',
    originalOwner: 'Canopy Ecological Foundation',
    currentOwner: 'EcoTech Global (Permanently Retired)',
    issuanceDate: '2026-01-10',
    riskLevel: 'Low Risk',
    riskColor: 'green',
    lifecycleStatus: 'Retired',
    retirementReason: 'Corporate Value Chain Scope 3 Nature Restoration Goal',
    retirementDate: '2026-02-24',
    history: [
      { event: 'Created & Registered', by: 'Canopy Ecological Foundation', date: '2025-11-01' },
      { event: 'Verification Approved', by: 'CarbonTrust Registry', date: '2026-01-08' },
      { event: 'Purchased by EcoTech Global', by: 'EcoTech Global', date: '2026-01-20' },
      { event: 'Permanently Retired (Non-Transferable)', by: 'EcoTech Global', date: '2026-02-24' }
    ]
  }
];

export const INITIAL_TRANSACTIONS = [
  {
    id: 'TXN-9081',
    type: 'Retirement',
    creditId: 'CT-2026-000052',
    quantity: 680,
    counterparty: 'EcoTech Global',
    date: '2026-02-24 14:15',
    status: 'Confirmed',
    notes: 'Retired for Scope 3 Offsets'
  },
  {
    id: 'TXN-8840',
    type: 'Retirement',
    creditId: 'CT-2026-000089',
    quantity: 600,
    counterparty: 'EcoTech Global',
    date: '2026-02-20 11:30',
    status: 'Confirmed',
    notes: 'Retired for FY25 ESG Target'
  },
  {
    id: 'TXN-8512',
    type: 'Purchase',
    creditId: 'CT-2026-000210',
    quantity: 1000,
    counterparty: 'Vayu Green Energy Corp',
    date: '2026-02-18 16:45',
    status: 'Completed',
    notes: 'Simulated OTC acquisition @ $12.00/t'
  },
  {
    id: 'TXN-8199',
    type: 'Purchase',
    creditId: 'CT-2026-000145',
    quantity: 1450,
    counterparty: 'SunPower Renewables Ltd',
    date: '2026-02-16 09:20',
    status: 'Completed',
    notes: 'Simulated Marketplace order @ $14.50/t'
  },
  {
    id: 'TXN-7945',
    type: 'Verification',
    creditId: 'CT-2026-000418',
    quantity: 650,
    counterparty: 'SGS India Auditor',
    date: '2026-02-12 10:00',
    status: 'Approved',
    notes: 'Registry issuance after verified telemetry'
  },
  {
    id: 'TXN-7630',
    type: 'Transfer',
    creditId: 'CT-2026-000302',
    quantity: 200,
    counterparty: 'Canopy Foundation → EcoPartner LLC',
    date: '2026-02-05 15:10',
    status: 'Completed',
    notes: 'Demonstration bilateral credit transfer'
  }
];

export const RISK_ALERTS = [
  {
    id: 'RISK-01',
    level: 'Low Risk',
    color: 'emerald',
    badge: '🟢 Low Risk',
    project: 'Solar Project A (Green Solar Initiative)',
    reason: 'Verified generation logs cross-matched with substation meters. Zero duplication flagged in national registry matching.',
    explanation: 'Satellite irradiance levels match solar farm generation inverter logs within 1.2% margin. All credits possess unique cryptographically verified serial identifiers.'
  },
  {
    id: 'RISK-02',
    level: 'Review Required',
    color: 'amber',
    badge: '🟡 Review Required',
    project: 'Project B (Clean Biogas Energy)',
    reason: 'Winter sensor report shows a 12% flow-rate variance against baseline model. Third-party recalibration certificate requested.',
    explanation: 'Flow sensors recorded temporary telemetry gaps during maintenance. No evidence of intentional manipulation; routine auditor review required before issuing additional vintage tranches.'
  },
  {
    id: 'RISK-03',
    level: 'Low Risk',
    color: 'emerald',
    badge: '🟢 Low Risk',
    project: 'Wind Power for Communities',
    reason: 'State transmission grid dispatch data fully verified. Third-party annual environmental audit cleared.',
    explanation: 'Wind turbine SCADA feed connects straight into regional load dispatch. Verified carbon displacement is fully traceable.'
  }
];

export const IMPACT_TIMELINE = [
  { year: '2023', impact: 4, label: '4K tCO₂e', projects: 28, credits: 5800 },
  { year: '2024', impact: 8, label: '8K tCO₂e', projects: 62, credits: 11400 },
  { year: '2025', impact: 13, label: '13K tCO₂e', projects: 94, credits: 18900 },
  { year: '2026', impact: 18, label: '18K tCO₂e', projects: 120, credits: 25000 }
];

export const PORTFOLIO_BREAKDOWN = [
  { type: 'Solar', percentage: 38, count: 1450, color: '#f59e0b', icon: '☀️' },
  { type: 'Wind', percentage: 26, count: 1000, color: '#0ea5e9', icon: '🌬️' },
  { type: 'Reforestation', percentage: 22, count: 680, color: '#16a34a', icon: '🌳' },
  { type: 'Waste', percentage: 14, count: 600, color: '#0d9488', icon: '♻️' }
];
