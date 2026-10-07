import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CheckCircle2, 
  Lock, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  ArrowRight, 
  Tag, 
  Calendar, 
  User, 
  Coins,
  History,
  AlertCircle
} from 'lucide-react';

export const CreditDetailsModal = () => {
  const { 
    activeModal, 
    setActiveModal, 
    simulatePurchase, 
    currentUser, 
    role 
  } = useApp();

  if (!activeModal || activeModal.type !== 'credit-details') return null;

  const credit = activeModal.data || {};
  const isRetired = credit.status === 'Retired' || credit.lifecycleStatus === 'Retired';

  // 7-step lifecycle timeline specified:
  // Created -> Submitted -> Verified -> Listed -> Purchased -> Transferred -> Retired
  const allStages = [
    { key: 'Created', label: 'Created', desc: 'Project registered by developer' },
    { key: 'Submitted', label: 'Submitted', desc: 'Methodology files submitted' },
    { key: 'Verified', label: 'Verified', desc: 'Third-party validator approved' },
    { key: 'Listed', label: 'Listed', desc: 'Serial batch minted on registry' },
    { key: 'Purchased', label: 'Purchased', desc: 'Acquired by corporate buyer' },
    { key: 'Transferred', label: 'Transferred', desc: 'Secondary custody transfer' },
    { key: 'Retired', label: 'Retired', desc: 'Permanently offset & locked' }
  ];

  // Determine stage progress
  const getStageIndex = (status) => {
    switch (status) {
      case 'Created': return 0;
      case 'Submitted': return 1;
      case 'Verified': return 2;
      case 'Listed': return 3;
      case 'Purchased': return 4;
      case 'Transferred': return 5;
      case 'Retired': return 6;
      default: return 3;
    }
  };

  const currentStageIdx = getStageIndex(credit.lifecycleStatus || (isRetired ? 'Retired' : 'Listed'));

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
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold px-2.5 py-1 bg-slate-100 rounded-md text-slate-700">
                {credit.id}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                isRetired ? 'bg-slate-200 text-slate-700' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {credit.status}
              </span>
              <span className="badge-prototype">Prototype Ledger</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>{credit.icon}</span>
              <span>{credit.projectName}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Type: <span className="font-medium text-slate-700">{credit.projectType}</span> • Issuance: <span className="font-medium text-slate-700">{credit.issuanceDate || '2026-02-10'}</span>
            </p>
          </div>

          {/* Large Integrity Badge */}
          <button
            onClick={() => setActiveModal({ type: 'why-score', data: { score: credit.integrityScore, projectName: credit.projectName } })}
            className="flex-shrink-0 p-3 rounded-2xl bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/70 transition text-center group cursor-pointer"
            title="Click to view full factor breakdown"
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Integrity</div>
            <div className="text-2xl font-black text-emerald-700 font-mono">
              {credit.integrityScore}<span className="text-xs text-emerald-600 font-normal">/100</span>
            </div>
            <div className="text-[10px] text-emerald-600 underline group-hover:text-emerald-800">Why this score?</div>
          </button>
        </div>

        {/* Retired Callout Banner if Retired */}
        {isRetired && (
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300 flex items-start gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center flex-shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                <span>🔒 Retired — Non-transferable</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                This carbon credit has been permanently extinguished from circulation. The associated environmental claim ({credit.quantity} tCO₂e) has been irrevocably fulfilled for: <strong>{credit.retirementReason || 'Corporate Climate Claim'}</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Metadata Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-xs">
          <div>
            <div className="text-slate-400 font-semibold text-[11px]">Credit Volume</div>
            <div className="font-bold text-slate-900 text-sm">{credit.quantity?.toLocaleString()} tCO₂e</div>
          </div>
          <div>
            <div className="text-slate-400 font-semibold text-[11px]">Original Owner</div>
            <div className="font-medium text-slate-800 truncate" title={credit.originalOwner}>{credit.originalOwner}</div>
          </div>
          <div>
            <div className="text-slate-400 font-semibold text-[11px]">Current Owner</div>
            <div className="font-bold text-forest-700 truncate" title={credit.currentOwner}>{credit.currentOwner}</div>
          </div>
          <div>
            <div className="text-slate-400 font-semibold text-[11px]">Prototype Price</div>
            <div className="font-bold text-slate-900 text-sm">${credit.prototypePrice?.toFixed(2)} / ton</div>
          </div>
        </div>

        {/* Visual Lifecycle Timeline: Created -> Submitted -> Verified -> Listed -> Purchased -> Transferred -> Retired */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <History className="w-4 h-4 text-forest-600" />
              <span>Traceable Credit Lifecycle</span>
            </h4>
            <span className="text-[11px] text-slate-400 font-medium">Stage {currentStageIdx + 1} of 7</span>
          </div>

          <div className="space-y-2">
            {allStages.map((stg, idx) => {
              const isCompleted = idx <= currentStageIdx;
              const isCurrent = idx === currentStageIdx;

              return (
                <div 
                  key={stg.key}
                  className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                    isCurrent
                      ? 'bg-emerald-50/80 border-emerald-300 ring-1 ring-emerald-400/30'
                      : isCompleted
                      ? 'bg-emerald-50/40 border-emerald-100'
                      : 'bg-slate-50/50 border-slate-100 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isCompleted 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-slate-200 text-slate-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span>{stg.label}</span>
                        {isCurrent && (
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                            Current Stage
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500">{stg.desc}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    {isCompleted ? (
                      <span className="text-[11px] font-semibold text-emerald-700">✓ Verified</span>
                    ) : (
                      <span className="text-[11px] text-slate-400">Pending</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {isRetired ? '🔒 Non-transferable offset' : 'Simulated Sandbox Actions'}
          </div>

          <div className="flex items-center gap-2">
            {!isRetired && credit.currentOwner?.includes('EcoTech Global') && (
              <>
                <button
                  onClick={() => setActiveModal({ type: 'transfer', data: credit })}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 transition"
                >
                  Transfer Credit
                </button>
                <button
                  onClick={() => setActiveModal({ type: 'retire', data: credit })}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-forest-700 text-white hover:bg-forest-800 transition shadow-soft-sm"
                >
                  Retire Credit
                </button>
              </>
            )}

            {!isRetired && !credit.currentOwner?.includes('EcoTech Global') && (
              <button
                onClick={() => simulatePurchase(credit.id, credit.quantity)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-forest-600 text-white hover:bg-forest-700 transition shadow-soft-sm"
              >
                Simulate Purchase
              </button>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
