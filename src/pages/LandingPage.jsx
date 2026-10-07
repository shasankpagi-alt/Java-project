import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Award, 
  ExternalLink, 
  Layers,
  Leaf,
  Globe2,
  RefreshCw,
  Sun
} from 'lucide-react';

export const LandingPage = () => {
  const { setCurrentPage, setActiveModal, setSelectedProject, projects } = useApp();

  const howItWorksSteps = [
    {
      num: 1,
      title: 'Project Created',
      icon: '🌱',
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      desc: 'Renewable energy, forestry, or waste developers register methodologies with verified telemetry.'
    },
    {
      num: 2,
      title: 'Verification',
      icon: '🔍',
      color: 'bg-teal-100 text-teal-800 border-teal-200',
      desc: 'Independent ISO 14064 validators and satellite audits verify baseline differentials.'
    },
    {
      num: 3,
      title: 'Credit Generated',
      icon: '🪙',
      color: 'bg-amber-100 text-amber-800 border-amber-200',
      desc: 'Serialized, non-fungible credits minted to registry ledger with permanent integrity scores.'
    },
    {
      num: 4,
      title: 'Marketplace',
      icon: '🛒',
      color: 'bg-sky-100 text-sky-800 border-sky-200',
      desc: 'Transparent pricing with verified provenance enables corporate procurement without greenwashing.'
    },
    {
      num: 5,
      title: 'Environmental Impact',
      icon: '🌍',
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      desc: 'Credits retired irrevocably to fulfill corporate Net-Zero disclosures and real carbon reduction.'
    }
  ];

  const categories = [
    {
      name: 'Solar',
      icon: '☀️',
      desc: 'Grid-connected solar farms & industrial microgrids displacing coal energy.',
      stats: '45+ Projects • 9,400 tCO₂e'
    },
    {
      name: 'Wind',
      icon: '🌬️',
      desc: 'Coastal and high-altitude turbine arrays providing clean baseload power.',
      stats: '30+ Projects • 6,200 tCO₂e'
    },
    {
      name: 'Reforestation',
      icon: '🌳',
      desc: 'Biodiversity conservation, mangrove restoration, and native tree planting.',
      stats: '25+ Projects • 12,500 tCO₂e'
    },
    {
      name: 'Waste Management',
      icon: '♻️',
      desc: 'Landfill methane flaring, bio-CNG generation, and agricultural waste composting.',
      stats: '20+ Projects • 4,800 tCO₂e'
    }
  ];

  const impactTimeline = [
    { year: '2023', val: 4, label: '4K tCO₂e', height: 'h-24' },
    { year: '2024', val: 8, label: '8K tCO₂e', height: 'h-40' },
    { year: '2025', val: 13, label: '13K tCO₂e', height: 'h-60' },
    { year: '2026', val: 18, label: '18K tCO₂e', height: 'h-80' }
  ];

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-forest-50/60 via-slate-50 to-white">
        
        {/* Floating Environmental Ambient Icons */}
        <div className="absolute top-10 left-[8%] text-3xl select-none pointer-events-none animate-float-slow opacity-80">
          🌱
        </div>
        <div className="absolute top-28 right-[10%] text-4xl select-none pointer-events-none animate-float-delayed opacity-80">
          🌍
        </div>
        <div className="absolute bottom-16 left-[14%] text-3xl select-none pointer-events-none animate-float-slow opacity-75">
          ♻️
        </div>
        <div className="absolute top-36 right-[25%] text-3xl select-none pointer-events-none animate-float-delayed opacity-75">
          ☀️
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100/80 border border-forest-200/80 text-forest-800 text-xs font-bold tracking-wide shadow-soft-sm">
              <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse"></span>
              <span>Next-Generation Carbon Verification Prototype</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Trust Every Carbon Credit.{' '}
              <span className="bg-gradient-to-r from-forest-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Track Every Impact.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              CarbonTrust makes carbon credits more transparent, traceable and trustworthy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setCurrentPage('projects')}
                className="px-6 py-3.5 rounded-2xl bg-forest-600 hover:bg-forest-700 text-white font-bold text-sm shadow-soft-md hover:shadow-soft-lg transition-all flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage('company-dashboard')}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-bold text-sm shadow-soft-sm transition-all flex items-center gap-2"
              >
                <span>Get Started</span>
                <Sparkles className="w-4 h-4 text-emerald-600" />
              </button>
            </div>
          </div>

          {/* Attractive Pipeline Illustration: Project → Verification → Carbon Credit → Marketplace → Impact */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-soft-lg border border-slate-200/70">
              
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  End-to-End Trust Architecture
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-1">
                  From Real Ground Activity to Permanent Climate Claim
                </h3>
              </div>

              {/* Step Flow Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                
                {/* Node 1 */}
                <div className="p-4 rounded-2xl bg-forest-50/70 border border-forest-100 text-center relative group hover:bg-forest-100/60 transition">
                  <div className="text-3xl mb-2">🌱</div>
                  <div className="text-xs font-bold text-slate-900">Project</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Solar, Wind, Forest</div>
                </div>

                {/* Node 2 */}
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 text-center relative group hover:bg-teal-100/60 transition">
                  <div className="text-3xl mb-2">🔍</div>
                  <div className="text-xs font-bold text-slate-900">Verification</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Telemetry & Auditing</div>
                </div>

                {/* Node 3 */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 text-center relative group hover:bg-amber-100/60 transition">
                  <div className="text-3xl mb-2">🪙</div>
                  <div className="text-xs font-bold text-slate-900">Carbon Credit</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Serialized tCO₂e</div>
                </div>

                {/* Node 4 */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-center relative group hover:bg-sky-100/60 transition">
                  <div className="text-3xl mb-2">🛒</div>
                  <div className="text-xs font-bold text-slate-900">Marketplace</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Transparent Pricing</div>
                </div>

                {/* Node 5 */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-center relative group hover:bg-emerald-100/60 transition">
                  <div className="text-3xl mb-2">🌍</div>
                  <div className="text-xs font-bold text-slate-900">Impact</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Locked & Retired</div>
                </div>

              </div>

              {/* Connecting line badge */}
              <div className="mt-4 text-center">
                <span className="text-[11px] font-semibold text-slate-400 inline-flex items-center gap-1.5">
                  <span>Cryptographic custody</span> • <span>Zero double counting</span> • <span>Immutable registry ledger</span>
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* 2. STATISTICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Label clearly labeled as prototype/demo data */}
        <div className="text-center mb-6">
          <span className="badge-prototype text-xs">
            Prototype Demo Data • Live Simulation
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Stat 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-soft-sm border border-slate-200/80 hover:shadow-soft-md transition text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center font-bold text-lg mb-3 mx-auto sm:mx-0">
              🌱
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              120+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Projects Registered
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Across solar, wind & nature
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-soft-sm border border-slate-200/80 hover:shadow-soft-md transition text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg mb-3 mx-auto sm:mx-0">
              🪙
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              25K
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Credits Tracked
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              100% uniquely serialized
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-soft-sm border border-slate-200/80 hover:shadow-soft-md transition text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-lg mb-3 mx-auto sm:mx-0">
              🌍
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              18K
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              tCO₂e Impact
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Irrevocably retired emissions
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-soft-sm border border-slate-200/80 hover:shadow-soft-md transition text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg mb-3 mx-auto sm:mx-0">
              🛡️
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              92%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Avg. Integrity Score
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Across verified catalog
            </div>
          </div>

        </div>
      </section>


      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-3 py-1 rounded-full border border-forest-100">
            Transparent Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            How CarbonTrust Works
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A 5-step transparent pipeline ensuring verifiable emissions reductions from developer to retirement.
          </p>
        </div>

        {/* 5 Colorful Cards with Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-9 h-9 rounded-xl border flex items-center justify-center text-sm font-bold ${step.color}`}>
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-forest-700">
                <span>Phase {step.num}</span>
                <span>✓ Step</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. INTEGRITY SCORE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-900 via-forest-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-soft-lg relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Proprietary Integrity Model</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                CarbonTrust Integrity Score
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Unlike opaque legacy registries, every credit on CarbonTrust undergoes rigorous multi-criteria verification. We assess real sensors, satellite biomass indices, and legal double-claiming checks.
              </p>

              {/* Factors Checklist as requested in spec */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Verification Status</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Data Consistency</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Ownership History</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Evidence Completeness</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Audit History</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Duplicate Risk Prevention</span>
                </div>
              </div>

              {/* Button: Why This Score? */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveModal({ type: 'why-score', data: { score: 92, projectName: 'CarbonTrust Index Portfolio' } })}
                  className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-soft-md transition flex items-center gap-2"
                >
                  <span>Why This Score?</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <span className="text-[11px] text-slate-400 italic">
                  * Prototype score — not a legal carbon certification.
                </span>
              </div>
            </div>

            {/* Right: Circular Score 92 / 100 */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/15 text-center relative max-w-xs w-full">
                
                {/* Donut Gauge */}
                <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                  <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-white/10"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-emerald-400 transition-all duration-1000 ease-out"
                      strokeWidth="10"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.92)}`}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-white font-mono">
                      92
                    </span>
                    <span className="text-xs font-bold text-emerald-300">/ 100</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-bold text-white">Registry Average</div>
                  <div className="text-xs text-slate-300">Grade A+ Integrity Level</div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-around text-center text-xs">
                  <div>
                    <div className="text-emerald-300 font-bold font-mono">0.0%</div>
                    <div className="text-[10px] text-slate-400">Duplicate Risk</div>
                  </div>
                  <div className="border-r border-white/10" />
                  <div>
                    <div className="text-emerald-300 font-bold font-mono">99.4%</div>
                    <div className="text-[10px] text-slate-400">Data Uptime</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 5. PROJECT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-3 py-1 rounded-full border border-forest-100">
              Diversified Portfolio
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
              Project Categories
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('projects')}
            className="text-xs font-bold text-forest-700 hover:text-forest-800 flex items-center gap-1 group"
          >
            <span>View All Projects in Registry</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setCurrentPage('projects')}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md hover:border-forest-300 cursor-pointer transition group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-forest-700 transition">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {cat.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-forest-600">
                {cat.stats}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 6. ENVIRONMENTAL IMPACT CHART SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft-sm">
          
          <div className="max-w-xl mb-8">
            <span className="badge-prototype text-xs">
              Continuous Decarbonization Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              Environmental Impact Over Time
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Demonstration carbon reduction trajectory across verified portfolio retirements (2023 - 2026).
            </p>
          </div>

          {/* Simple Clean Environmental Bar Chart */}
          <div className="pt-8 pb-4">
            <div className="grid grid-cols-4 gap-4 sm:gap-8 items-end h-64 border-b border-slate-200 pb-4">
              {impactTimeline.map((item) => (
                <div key={item.year} className="flex flex-col items-center gap-2 group">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono group-hover:text-forest-700 transition">
                    {item.label}
                  </span>
                  
                  {/* Bar */}
                  <div className="w-full max-w-[80px] bg-slate-100 rounded-2xl p-1 flex items-end h-48">
                    <div 
                      className={`w-full rounded-xl bg-gradient-to-t from-forest-600 to-emerald-400 group-hover:from-forest-500 group-hover:to-emerald-300 transition-all ${
                        item.year === '2023' ? 'h-[25%]' :
                        item.year === '2024' ? 'h-[45%]' :
                        item.year === '2025' ? 'h-[72%]' : 'h-[100%]'
                      }`}
                    />
                  </div>

                  <span className="text-xs font-bold text-slate-600">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-forest-600"></span>
                  <span>Direct tCO₂e Offset</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                  <span>Capacity Projection</span>
                </span>
              </div>

              <button
                onClick={() => setCurrentPage('impact')}
                className="font-bold text-forest-700 hover:text-forest-800 flex items-center gap-1"
              >
                <span>Explore Full Impact Dashboard</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
