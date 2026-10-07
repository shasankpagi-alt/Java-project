import React from 'react';
import { useApp } from '../context/AppContext';
import { DashboardSidebar } from '../components/common/DashboardSidebar';
import { 
  Wallet as WalletIcon, 
  Lock, 
  ArrowRightLeft, 
  ExternalLink, 
  Plus, 
  CheckCircle2, 
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';

export const WalletPage = () => {
  const { 
    credits, 
    creditsOwnedCount, 
    creditsRetiredCount, 
    setActiveModal, 
    setCurrentPage 
  } = useApp();

  // Filter credits owned by company (EcoTech Global)
  const myCredits = credits.filter(c => c.currentOwner.includes('EcoTech Global'));
  const availableCredits = myCredits.filter(c => c.status !== 'Retired');
  const retiredCredits = myCredits.filter(c => c.status === 'Retired');

  const totalCreditsCount = creditsOwnedCount + creditsRetiredCount;

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
                  Carbon Credit Wallet
                </h1>
                <span className="badge-prototype">Custody Registry</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                View your company's serialized carbon credit allocations, transfer ownership, or initiate permanent retirement.
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('marketplace')}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-forest-600 hover:bg-forest-700 text-white shadow-soft-sm transition flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Acquire More Credits</span>
            </button>
          </div>

          {/* Top 3 Wallet Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total Credits */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm">
              <div className="text-xs font-semibold text-slate-400">Total Credits Handled</div>
              <div className="text-3xl font-black text-slate-900 font-mono mt-1">
                {totalCreditsCount.toLocaleString()} <span className="text-xs font-normal text-slate-500">tCO₂e</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Lifetime acquired volume</div>
            </div>

            {/* Available Credits */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm">
              <div className="text-xs font-semibold text-emerald-600">Available Credits</div>
              <div className="text-3xl font-black text-emerald-700 font-mono mt-1">
                {creditsOwnedCount.toLocaleString()} <span className="text-xs font-normal text-slate-500">tCO₂e</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Tradable / Eligible for retirement</div>
            </div>

            {/* Retired Credits */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm">
              <div className="text-xs font-semibold text-teal-600">Retired Credits</div>
              <div className="text-3xl font-black text-teal-800 font-mono mt-1">
                {creditsRetiredCount.toLocaleString()} <span className="text-xs font-normal text-slate-500">tCO₂e</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Irrevocable Scope 1-3 claims</div>
            </div>
          </div>

          {/* Active Credits Table / Cards */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Owned Credits Portfolio ({myCredits.length} Tranches)
                </h3>
                <p className="text-xs text-slate-500">
                  Serialized batches anchored to your company account
                </p>
              </div>

              <button
                onClick={() => setCurrentPage('retirement')}
                className="text-xs font-bold text-forest-700 hover:text-forest-800"
              >
                Go to Retirement Portal →
              </button>
            </div>

            <div className="space-y-3">
              {myCredits.map((credit) => {
                const isRetired = credit.status === 'Retired';

                return (
                  <div
                    key={credit.id}
                    className={`p-4 rounded-2xl border transition flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                      isRetired ? 'bg-slate-50/70 border-slate-200' : 'bg-white border-slate-200/90 hover:border-forest-200'
                    }`}
                  >
                    {/* Left: Info */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                          {credit.id}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isRetired ? 'bg-slate-200 text-slate-700' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {isRetired ? '🔒 Retired (Non-transferable)' : 'Active / Tradable'}
                        </span>
                        <span className="text-xs text-slate-400">
                          Integrity: <strong>{credit.integrityScore}/100</strong>
                        </span>
                      </div>

                      <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{credit.icon}</span>
                        <span>{credit.projectName}</span>
                        <span className="text-xs text-slate-400 font-normal">({credit.projectType})</span>
                      </div>

                      {isRetired && (
                        <div className="text-[11px] text-teal-800 font-medium">
                          Fulfillment: {credit.retirementReason}
                        </div>
                      )}
                    </div>

                    {/* Middle: Quantity */}
                    <div className="text-left md:text-center">
                      <div className="text-slate-400 text-[10px] font-semibold">Quantity</div>
                      <div className="text-lg font-black text-slate-900 font-mono">
                        {credit.quantity?.toLocaleString()} tCO₂e
                      </div>
                    </div>

                    {/* Right: Actions (Transfer, Retire, View Details) */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => setActiveModal({ type: 'credit-details', data: credit })}
                        className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition"
                      >
                        View Details
                      </button>

                      {!isRetired && (
                        <>
                          <button
                            onClick={() => setActiveModal({ type: 'transfer', data: credit })}
                            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition flex items-center gap-1"
                          >
                            <ArrowRightLeft className="w-3.5 h-3.5" />
                            <span>Transfer</span>
                          </button>

                          <button
                            onClick={() => setActiveModal({ type: 'retire', data: credit })}
                            className="px-3.5 py-2 text-xs font-bold rounded-xl bg-forest-700 hover:bg-forest-800 text-white shadow-soft-sm transition flex items-center gap-1"
                          >
                            <Lock className="w-3.5 h-3.5" />
                            <span>Retire</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </main>

      </div>
    </div>
  );
};
