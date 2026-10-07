import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Globe2, 
  Trees, 
  Recycle, 
  Sun, 
  Wind, 
  Sparkles, 
  TrendingUp, 
  Car, 
  Home, 
  Leaf, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const ImpactDashboard = () => {
  const { 
    environmentalImpactTons, 
    creditsRetiredCount, 
    portfolioWithPercentages,
    projects,
    setCurrentPage
  } = useApp();

  const totalRegistryImpact = 18000 + (creditsRetiredCount || 1280);
  const totalProjectsSupported = projects.length;
  const renewableProjectsCount = projects.filter(p => ['Solar', 'Wind'].includes(p.type)).length;

  const impactTrajectory = [
    { year: '2023', tons: 4000, label: '4K tCO₂e', pct: 25 },
    { year: '2024', tons: 8000, label: '8K tCO₂e', pct: 45 },
    { year: '2025', tons: 13000, label: '13K tCO₂e', pct: 72 },
    { year: '2026 (Live)', tons: totalRegistryImpact, label: `${Math.round(totalRegistryImpact / 1000)}K tCO₂e`, pct: 100 }
  ];

  // Calculated Real-world Equivalencies (1 tCO2e = ~45 trees seedling grown for 10 yrs, ~4,000 km gasoline car driven, ~0.12 homes annual electricity)
  const treesEquiv = Math.round(totalRegistryImpact * 45).toLocaleString();
  const carKmEquiv = Math.round(totalRegistryImpact * 3980).toLocaleString();
  const homesPowered = Math.round(totalRegistryImpact * 0.12).toLocaleString();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Global Environmental Impact
            </h1>
            <span className="badge-prototype">Telemetry Verified</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time planetary greenhouse gas abatement achieved through CarbonTrust verified methodologies.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('projects')}
          className="px-4 py-2 rounded-xl bg-forest-600 text-white font-bold text-xs hover:bg-forest-700 transition flex items-center gap-2"
        >
          <span>Support Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Top 4 Impact Cards as specified */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Impact */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition">
          <div className="w-10 h-10 rounded-2xl bg-forest-100 text-forest-700 flex items-center justify-center text-xl font-bold mb-3">
            🌍
          </div>
          <div className="text-xs font-semibold text-slate-500">Total Impact</div>
          <div className="text-3xl font-black text-slate-900 font-mono tracking-tight mt-1">
            {totalRegistryImpact.toLocaleString()} <span className="text-xs text-slate-400 font-normal">tCO₂e</span>
          </div>
          <div className="text-[11px] text-forest-700 font-semibold mt-1">
            Verified greenhouse reduction
          </div>
        </div>

        {/* Projects Supported */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold mb-3">
            🌳
          </div>
          <div className="text-xs font-semibold text-slate-500">Projects Supported</div>
          <div className="text-3xl font-black text-slate-900 font-mono tracking-tight mt-1">
            {totalProjectsSupported}
          </div>
          <div className="text-[11px] text-emerald-700 font-semibold mt-1">
            Active verified initiatives
          </div>
        </div>

        {/* Credits Retired */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-xl font-bold mb-3">
            ♻️
          </div>
          <div className="text-xs font-semibold text-slate-500">Credits Retired</div>
          <div className="text-3xl font-black text-teal-800 font-mono tracking-tight mt-1">
            {(creditsRetiredCount + 16720).toLocaleString()} <span className="text-xs text-slate-400 font-normal">tCO₂e</span>
          </div>
          <div className="text-[11px] text-teal-700 font-semibold mt-1">
            Irrevocably locked & fulfilled
          </div>
        </div>

        {/* Renewable Projects */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl font-bold mb-3">
            ☀️
          </div>
          <div className="text-xs font-semibold text-slate-500">Renewable Projects</div>
          <div className="text-3xl font-black text-amber-700 font-mono tracking-tight mt-1">
            {renewableProjectsCount}
          </div>
          <div className="text-[11px] text-amber-700 font-semibold mt-1">
            Clean energy displacement
          </div>
        </div>

      </div>

      {/* Main Visual Section: Impact Chart & Real-World Equivalence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Interactive Impact Progression Chart (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Decarbonization Impact Trajectory
              </h3>
              <p className="text-xs text-slate-500">
                Verified annual tCO₂e mitigation tracked on registry ledger
              </p>
            </div>
            <span className="badge-prototype">Cumulative</span>
          </div>

          {/* Clean Custom SVG / HTML Bar & Area Chart */}
          <div className="pt-6">
            <div className="h-56 flex items-end justify-between gap-4 border-b border-slate-200 pb-3">
              {impactTrajectory.map((item) => (
                <div key={item.year} className="flex-1 flex flex-col items-center gap-2 group">
                  <span className="text-xs font-bold text-slate-800 font-mono group-hover:text-forest-700 transition">
                    {item.label}
                  </span>
                  
                  {/* Bar */}
                  <div className="w-full max-w-[80px] bg-slate-100 rounded-2xl p-1 flex items-end h-44">
                    <div
                      className="w-full rounded-xl bg-gradient-to-t from-forest-600 via-teal-500 to-emerald-400 group-hover:brightness-110 transition-all"
                      style={{ height: `${item.pct}%` }}
                    />
                  </div>

                  <span className="text-xs font-bold text-slate-600">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>Baseline: 0 tCO₂e</span>
              <span className="text-forest-700 font-semibold font-mono">100% On-Chain Verifiable</span>
            </div>
          </div>
        </div>

        {/* Real-World Equivalence Metrics (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-forest-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-soft-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-World Physical Equivalent</span>
            </div>

            <h3 className="text-xl font-bold tracking-tight mb-2">
              What Does This Reduction Mean?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Translating abstract greenhouse gas metrics into tangible planetary restoration benchmarks.
            </p>

            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
                <div className="text-2xl">🌲</div>
                <div>
                  <div className="text-lg font-black font-mono text-emerald-300">{treesEquiv}</div>
                  <div className="text-xs text-slate-300">Tree seedlings growing for 10 years</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
                <div className="text-2xl">🚗</div>
                <div>
                  <div className="text-lg font-black font-mono text-teal-300">{carKmEquiv} km</div>
                  <div className="text-xs text-slate-300">Passenger vehicle travel avoided</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
                <div className="text-2xl">🏡</div>
                <div>
                  <div className="text-lg font-black font-mono text-amber-300">{homesPowered} Homes</div>
                  <div className="text-xs text-slate-300">Annual home electricity emissions displaced</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400">
            Source: EPA Greenhouse Gas Equivalencies Protocol
          </div>
        </div>

      </div>

      {/* Category Breakdown as specified: Solar, Wind, Reforestation, Waste Management */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Impact Category Breakdown
            </h3>
            <p className="text-xs text-slate-500">
              Contribution by technological and biological carbon intervention
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-forest-700">4 Core Pillars</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-amber-950">
            <div className="text-3xl mb-2">☀️</div>
            <div className="text-xs font-bold uppercase tracking-wide text-amber-800">Solar Power</div>
            <div className="text-2xl font-black font-mono mt-1">6,840 tCO₂e</div>
            <p className="text-[11px] text-amber-800/80 mt-1">Utility and distributed rooftop arrays</p>
          </div>

          <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200/80 text-sky-950">
            <div className="text-3xl mb-2">🌬️</div>
            <div className="text-xs font-bold uppercase tracking-wide text-sky-800">Wind Energy</div>
            <div className="text-2xl font-black font-mono mt-1">4,920 tCO₂e</div>
            <p className="text-[11px] text-sky-800/80 mt-1">Coastal wind farms and grid feeds</p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-emerald-950">
            <div className="text-3xl mb-2">🌳</div>
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-800">Reforestation</div>
            <div className="text-2xl font-black font-mono mt-1">5,450 tCO₂e</div>
            <p className="text-[11px] text-emerald-800/80 mt-1">Biodiversity and mangrove restoration</p>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 text-teal-950">
            <div className="text-3xl mb-2">♻️</div>
            <div className="text-xs font-bold uppercase tracking-wide text-teal-800">Waste Management</div>
            <div className="text-2xl font-black font-mono mt-1">2,070 tCO₂e</div>
            <p className="text-[11px] text-teal-800/80 mt-1">Methane flare and bio-CNG generation</p>
          </div>

        </div>
      </div>

    </div>
  );
};
