import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowLeft, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  Building2, 
  Sparkles,
  Layers,
  Leaf,
  FileText
} from 'lucide-react';

export const ProjectDetailsPage = () => {
  const { 
    selectedProject, 
    setCurrentPage, 
    setActiveModal, 
    projects,
    credits
  } = useApp();

  // Fallback to first project if none selected
  const project = selectedProject || projects[0];

  // Factors as requested in spec
  const scoreFactorsList = [
    { name: 'Verification', score: 25, max: 25, desc: 'Independent ISO 14064 validator sign-off' },
    { name: 'Data Consistency', score: 18, max: 20, desc: 'Telemetry variance < 2% vs grid substation logs' },
    { name: 'Duplicate Risk', score: 20, max: 20, desc: 'Zero double issuance or cross-registry collision' },
    { name: 'Ownership History', score: 15, max: 15, desc: 'Unbroken chain of title from project developer' },
    { name: 'Audit History', score: 8, max: 10, desc: 'Routine periodic validator field audit' },
    { name: 'Evidence', score: 9, max: 10, desc: 'Satellite multi-spectral and SCADA data packages' },
  ];

  // Lifecycle steps: Created -> Submitted -> Verified -> Credits Generated
  const lifecycle = project.lifecycle || [
    { step: 'Created', date: 'Jan 10, 2026', done: true },
    { step: 'Submitted', date: 'Jan 15, 2026', done: true },
    { step: 'Verified', date: 'Feb 02, 2026', done: true },
    { step: 'Credits Generated', date: 'Feb 10, 2026', done: true }
  ];

  // Associated credit on marketplace if any
  const associatedCredit = credits.find(c => c.projectId === project.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => setCurrentPage('projects')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </button>
      </div>

      {/* Main Project Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft-sm">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="p-2 rounded-2xl bg-forest-50 text-2xl">
                {project.icon}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-forest-100 text-forest-800">
                {project.type}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                project.status === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {project.status === 'Verified' ? '🛡️ Verified' : project.status}
              </span>
              <span className="badge-prototype">ID: {project.id}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {project.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-slate-400" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-slate-700">
                <Building2 className="w-4 h-4 text-slate-400" />
                Developer: {project.developer}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-slate-700">
                <Calendar className="w-4 h-4 text-slate-400" />
                Registered: {project.submittedDate || '2026-01-15'}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-2">
              {project.description}
            </p>
          </div>

          {/* Large Integrity Score Card as specified: 94 / 100 with button "Why This Score?" */}
          <div className="lg:w-80 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 p-6 rounded-3xl border border-emerald-200/80 shadow-soft-sm text-center flex flex-col items-center justify-between">
            <div className="w-full">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-2">
                CarbonTrust Rating
              </div>

              {/* Large Score Circle */}
              <div className="relative w-32 h-32 mx-auto my-2 flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-slate-200"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-emerald-500"
                    strokeWidth="10"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - (project.integrityScore || 94) / 100)}`}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-900 font-mono">
                    {project.integrityScore || 94}
                  </span>
                  <span className="text-xs font-bold text-emerald-700">/ 100</span>
                </div>
              </div>

              <div className="text-xs font-bold text-slate-700 mt-2">
                High Credibility Tier
              </div>
              <div className="text-[11px] text-slate-500">
                Independent Audit Passed
              </div>
            </div>

            {/* Button: Why This Score? */}
            <div className="w-full pt-4 mt-2 border-t border-emerald-200/60">
              <button
                onClick={() => setActiveModal({ 
                  type: 'why-score', 
                  data: { 
                    score: project.integrityScore || 94, 
                    projectName: project.name,
                    factors: scoreFactorsList
                  } 
                })}
                className="w-full py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shadow-soft-sm transition flex items-center justify-center gap-1.5"
              >
                <span>Why This Score?</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Two Column Grid: Score Factors (Left) + Lifecycle & Impact (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Score Factors as requested in Spec */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Score Factors Breakdown
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-700">
              Total: {scoreFactorsList.reduce((sum, f) => sum + f.score, 0)}/100
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Weighted assessment of field audits, telemetry sensors, and double-claim protections.
          </p>

          <div className="space-y-3">
            {scoreFactorsList.map((factor) => {
              const pct = (factor.score / factor.max) * 100;
              return (
                <div key={factor.name} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-slate-800">{factor.name}</span>
                    <span className="font-mono font-bold text-slate-900">{factor.score} / {factor.max}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-1.5">
                    <div 
                      className="bg-forest-500 h-full rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-500">{factor.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Lifecycle & Environmental Impact */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Simple Lifecycle: Created → Submitted → Verified → Credits Generated */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Project Verification Lifecycle
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Track the project's journey through rigorous verification
            </p>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {lifecycle.map((step, idx) => (
                <div key={step.step} className="relative flex items-start gap-4">
                  {/* Step circle */}
                  <div className={`absolute -left-6 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    step.done 
                      ? 'bg-forest-600 text-white ring-4 ring-forest-50' 
                      : 'bg-slate-200 text-slate-500 ring-4 ring-white'
                  }`}>
                    {step.done ? '✓' : idx + 1}
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span>{step.step}</span>
                      <span className="text-[10px] font-normal text-slate-400 font-mono">
                        {step.date}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {step.step === 'Created' && 'Documentation and baseline model compiled.'}
                      {step.step === 'Submitted' && 'Transmitted to registry evaluation committee.'}
                      {step.step === 'Verified' && 'Cleared independent telemetry validation.'}
                      {step.step === 'Credits Generated' && 'Serialized credits minted for marketplace trading.'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Impact Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Environmental Impact Details
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-forest-50/70 border border-forest-100">
                <div className="text-xs text-forest-700 font-semibold">Estimated CO₂e Reduction</div>
                <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                  {project.estimatedReduction?.toLocaleString()} tCO₂e
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Annualized greenhouse displacement</div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100">
                <div className="text-xs text-teal-700 font-semibold">Verification Standard</div>
                <div className="text-xl font-bold text-slate-900 mt-1">
                  ISO 14064-2
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Simulated benchmark criteria</div>
              </div>
            </div>

            {/* Marketplace link if credits available */}
            {associatedCredit && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800">Credits Available on Marketplace</div>
                  <div className="text-[11px] text-slate-500">ID: {associatedCredit.id} (${associatedCredit.prototypePrice}/ton)</div>
                </div>
                <button
                  onClick={() => setCurrentPage('marketplace')}
                  className="px-4 py-2 rounded-xl bg-forest-600 text-white font-bold text-xs hover:bg-forest-700 transition"
                >
                  View in Marketplace
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
