import React from 'react';
import { useApp } from '../context/AppContext';
import { DashboardSidebar } from '../components/common/DashboardSidebar';
import { 
  HardHat, 
  PlusCircle, 
  FileCheck2, 
  Coins, 
  Clock, 
  ExternalLink, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MapPin
} from 'lucide-react';

export const DeveloperDashboard = () => {
  const { 
    projects, 
    credits, 
    setActiveModal, 
    setSelectedProject, 
    setCurrentPage, 
    currentUser 
  } = useApp();

  // Filter projects by developer or show all for developer perspective
  const devProjects = projects;
  const verifiedCount = devProjects.filter(p => p.status === 'Verified').length;
  const pendingCount = devProjects.filter(p => p.status === 'Pending Review' || p.status === 'Review Required').length;
  const creditsGeneratedCount = devProjects.filter(p => p.status === 'Verified').reduce((sum, p) => sum + p.estimatedReduction, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Content */}
        <main className="flex-1 space-y-8">
          
          {/* Header & Registration CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Project Developer Hub
                </h1>
                <span className="badge-prototype">Methodology Registry</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Register additionality methodologies, monitor telemetry verification, and mint carbon credit tranches.
              </p>
            </div>

            <button
              onClick={() => setActiveModal({ type: 'register-project' })}
              className="px-5 py-3 rounded-2xl bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs shadow-soft-sm transition flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Register New Project</span>
            </button>
          </div>

          {/* Top 4 KPI Cards as specified in Spec */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Projects Submitted */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500">Projects Submitted</span>
                <span className="p-2 rounded-xl bg-forest-50 text-forest-700">🌱</span>
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono">
                {devProjects.length}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Across global registries</div>
            </div>

            {/* Card 2: Projects Verified */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-emerald-600">Projects Verified</span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">✓</span>
              </div>
              <div className="text-3xl font-black text-emerald-700 font-mono">
                {verifiedCount}
              </div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">ISO 14064 certified</div>
            </div>

            {/* Card 3: Credits Generated */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-amber-600">Credits Generated</span>
                <span className="p-2 rounded-xl bg-amber-50 text-amber-700">🪙</span>
              </div>
              <div className="text-3xl font-black text-amber-700 font-mono">
                {creditsGeneratedCount.toLocaleString()} <span className="text-xs text-slate-500 font-normal">tCO₂e</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Available for minting</div>
            </div>

            {/* Card 4: Pending Reviews */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-sky-600">Pending Reviews</span>
                <span className="p-2 rounded-xl bg-sky-50 text-sky-700">⏳</span>
              </div>
              <div className="text-3xl font-black text-sky-700 font-mono">
                {pendingCount}
              </div>
              <div className="text-[11px] text-sky-600 font-medium mt-1">Awaiting admin signoff</div>
            </div>

          </div>

          {/* Quick Registration Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="badge-prototype">Fast-Track Baseline Verification</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">
                Have a new Solar, Wind, or Reforestation Project?
              </h3>
              <p className="text-xs text-slate-600 max-w-xl">
                Submit baseline vs. project emissions. Our automated formula dynamically calculates potential annual carbon reduction.
              </p>
            </div>

            <button
              onClick={() => setActiveModal({ type: 'register-project' })}
              className="px-5 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shadow-soft-sm transition whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Launch Registration Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Submitted Projects Catalog */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Developer Project Portfolio
                </h3>
                <p className="text-xs text-slate-500">
                  Real-time status of all your submitted baseline methodologies
                </p>
              </div>

              <span className="text-xs font-mono font-bold text-slate-400">
                {devProjects.length} Projects
              </span>
            </div>

            <div className="space-y-3">
              {devProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-2xl border border-slate-200/80 hover:border-forest-200 bg-white hover:bg-slate-50/50 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        {p.id}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        p.status === 'Verified' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : p.status === 'Rejected'
                          ? 'bg-rose-100 text-rose-800'
                          : p.status === 'Review Required'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-sky-100 text-sky-800'
                      }`}>
                        {p.status}
                      </span>
                      <span className="text-xs text-emerald-700 font-bold">
                        ★ {p.integrityScore}/100
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>{p.icon}</span>
                      <span>{p.name}</span>
                    </h4>

                    <div className="text-xs text-slate-500 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {p.location}
                      </span>
                      <span>•</span>
                      <span>Category: <strong className="text-slate-700">{p.type}</strong></span>
                      <span>•</span>
                      <span>Reduction: <strong className="text-forest-700">{p.estimatedReduction?.toLocaleString()} tCO₂e</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedProject(p);
                        setCurrentPage('project-details');
                      }}
                      className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition"
                    >
                      Inspect Details
                    </button>

                    <button
                      onClick={() => setActiveModal({ type: 'why-score', data: { score: p.integrityScore, projectName: p.name } })}
                      className="px-3 py-2 text-xs font-bold rounded-xl bg-forest-50 text-forest-700 hover:bg-forest-100 transition flex items-center gap-1"
                    >
                      <span>Why Score?</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>

      </div>
    </div>
  );
};
