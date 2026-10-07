import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, CheckCircle2, AlertCircle, X, HelpCircle, Layers, FileCheck2, Database, History, Search } from 'lucide-react';

export const IntegrityScoreModal = () => {
  const { activeModal, setActiveModal } = useApp();

  if (!activeModal || activeModal.type !== 'why-score') return null;

  const scoreData = activeModal.data || {};
  const currentScore = scoreData.score || 94;
  const projectTitle = scoreData.projectName || 'Green Solar Initiative';

  const defaultFactors = [
    {
      name: 'Verification Status',
      score: 25,
      max: 25,
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
      desc: 'Accredited third-party ISO 14064 validator performed full onsite methodology check.'
    },
    {
      name: 'Data Consistency',
      score: 18,
      max: 20,
      icon: <Database className="w-4 h-4 text-teal-600" />,
      desc: 'Telemetry feeds matched against local substation energy logs with 98.8% agreement.'
    },
    {
      name: 'Duplicate Risk Prevention',
      score: 20,
      max: 20,
      icon: <Layers className="w-4 h-4 text-blue-600" />,
      desc: 'GPS polygons and serial blocks verified with 0% overlap across national registries.'
    },
    {
      name: 'Ownership History',
      score: 15,
      max: 15,
      icon: <History className="w-4 h-4 text-indigo-600" />,
      desc: 'Unbroken chain of custody recorded on immutable prototype ledger.'
    },
    {
      name: 'Audit History',
      score: 8,
      max: 10,
      icon: <Search className="w-4 h-4 text-amber-600" />,
      desc: 'Annual physical inspection cleared; minor seasonal weather report variance noted.'
    },
    {
      name: 'Evidence Completeness',
      score: 9,
      max: 10,
      icon: <FileCheck2 className="w-4 h-4 text-emerald-600" />,
      desc: 'Satellite NDVI optical imagery, inverter logs, and utility invoices attached.'
    }
  ];

  const factors = scoreData.factors || defaultFactors;
  const totalScore = factors.reduce((sum, f) => sum + f.score, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-soft-lg border border-slate-100 max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold">
            🛡️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                CarbonTrust Integrity Score
              </h3>
              <span className="badge-prototype">Prototype Rating</span>
            </div>
            <p className="text-xs text-slate-500">
              Multi-dimensional credibility index for {projectTitle}
            </p>
          </div>
        </div>

        {/* Circular Gauge & Overview */}
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 rounded-2xl p-6 border border-emerald-100/70 flex flex-col sm:flex-row items-center gap-6 mb-6">
          <div className="relative flex items-center justify-center">
            {/* SVG Donut Circle */}
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
                className="stroke-emerald-500 transition-all duration-1000 ease-out"
                strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - currentScore / 100)}`}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-extrabold text-slate-900 leading-none">
                {currentScore}
              </span>
              <span className="text-[11px] font-bold text-emerald-700">/ 100</span>
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>High Quality Tier • Grade A</span>
            </div>
            <h4 className="font-bold text-slate-800 text-base">
              Why does this project score {currentScore}/100?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-md">
              CarbonTrust evaluates carbon projects across six transparent pillars to eliminate phantom offsets, double counting, and exaggerated additionality claims.
            </p>
          </div>
        </div>

        {/* 6 Score Factors Breakdown */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Transparent Factor Breakdown
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {factors.map((factor) => {
              const pct = Math.round((factor.score / factor.max) * 100);
              return (
                <div key={factor.name} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      {factor.icon}
                      {factor.name}
                    </span>
                    <span className="text-xs font-bold text-slate-900 font-mono">
                      {factor.score}/{factor.max}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-2">
                    <div 
                      className="bg-emerald-500 h-full rounded-full" 
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {factor.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Prototype Model Notice:</strong> This score is calculated via CarbonTrust's simulated weighted telemetry rubric. It serves as an illustrative demonstration of transparent traceability and does not constitute official legal certification under UNFCCC or Gold Standard regulations.
          </p>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setActiveModal(null)}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-900 rounded-xl transition"
          >
            Close Explanation
          </button>
        </div>

      </div>
    </div>
  );
};
