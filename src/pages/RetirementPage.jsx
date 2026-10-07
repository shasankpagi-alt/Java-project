import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DashboardSidebar } from '../components/common/DashboardSidebar';
import { 
  Lock, 
  Leaf, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  FileBadge
} from 'lucide-react';

export const RetirementPage = () => {
  const { 
    credits, 
    creditsRetiredCount, 
    environmentalImpactTons, 
    setActiveModal,
    setCurrentPage
  } = useApp();

  // Find eligible credits owned by EcoTech Global that are NOT retired
  const eligibleCredits = credits.filter(c => c.currentOwner.includes('EcoTech Global') && c.status !== 'Retired');
  const alreadyRetired = credits.filter(c => c.currentOwner.includes('EcoTech Global') && c.status === 'Retired');

  const [selectedCreditId, setSelectedCreditId] = useState(eligibleCredits[0]?.id || '');
  const selectedCredit = eligibleCredits.find(c => c.id === selectedCreditId) || eligibleCredits[0];

  const handleOpenRetireModal = (credit) => {
    setActiveModal({ type: 'retire', data: credit });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Content */}
        <main className="flex-1 space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Retire Your Carbon Credits
                </h1>
                <span className="badge-prototype">Irrevocable Environmental Offsetting</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fulfill corporate Net-Zero targets by burning and retiring credits permanently.
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 font-semibold">Total Retired Impact</span>
              <div className="text-2xl font-black text-teal-700 font-mono">
                {creditsRetiredCount.toLocaleString()} tCO₂e
              </div>
            </div>
          </div>

          {/* Educational Callout Quote as instructed in Spec */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-forest-50 border border-emerald-200/80 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-sm">
                🌱
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  Understanding Credit Retirement
                </h3>
                <p className="text-sm font-semibold italic text-forest-900 leading-relaxed">
                  "Retirement represents the end of a credit's tradable lifecycle in this prototype."
                </p>
                <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                  When a carbon credit is retired, its unique serial identifier is permanently flagged on the public registry ledger. This guarantees that no other party can ever double-claim the underlying ton of reduced carbon emissions.
                </p>
              </div>
            </div>
          </div>

          {/* Retirement Selection Area */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-6">
            <h3 className="text-base font-bold text-slate-900">
              Select Credits to Retire
            </h3>

            {eligibleCredits.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-3xl mb-2">🎉</div>
                <h4 className="text-sm font-bold text-slate-800">No active credits currently available to retire</h4>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  All your owned credits have been successfully retired or transferred.
                </p>
                <button
                  onClick={() => setCurrentPage('marketplace')}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-forest-600 text-white hover:bg-forest-700 transition"
                >
                  Acquire Credits from Marketplace
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eligibleCredits.map((credit) => (
                  <div
                    key={credit.id}
                    className="p-5 rounded-2xl border border-slate-200 hover:border-forest-300 bg-slate-50/50 hover:bg-white transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {credit.id}
                        </span>
                        <span className="text-xs font-bold text-emerald-700">
                          ★ {credit.integrityScore}/100
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span>{credit.icon}</span>
                        <span>{credit.projectName}</span>
                      </h4>

                      <div className="text-xs text-slate-500 mt-1">
                        Type: <span className="font-medium text-slate-700">{credit.projectType}</span>
                      </div>

                      <div className="mt-4 p-3 rounded-xl bg-white border border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500">Available to Offset:</span>
                        <span className="font-extrabold text-slate-900 font-mono text-sm">
                          {credit.quantity?.toLocaleString()} tCO₂e
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/70 flex justify-end">
                      <button
                        onClick={() => handleOpenRetireModal(credit)}
                        className="w-full py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold shadow-soft-sm transition flex items-center justify-center gap-2"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Retire This Credit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* History of Permanently Retired Credits */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileBadge className="w-5 h-5 text-teal-600" />
                  <span>Retired Offsets Ledger ({alreadyRetired.length})</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Permanently fulfilled certificates with non-transferable locks
                </p>
              </div>

              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                🔒 Irrevocable
              </span>
            </div>

            <div className="space-y-3">
              {alreadyRetired.map((credit) => (
                <div
                  key={credit.id}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-700">{credit.id}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px]">
                        🔒 Retired — Non-transferable
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {credit.projectName}
                    </div>
                    <div className="text-slate-500">
                      Reason: <strong className="text-slate-700">{credit.retirementReason}</strong>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-slate-400 text-[10px]">Volume Extinguished</div>
                    <div className="text-base font-black text-teal-800 font-mono">
                      {credit.quantity?.toLocaleString()} tCO₂e
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Date: {credit.retirementDate || '2026-02-20'}
                    </div>
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
