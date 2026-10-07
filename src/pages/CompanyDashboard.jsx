import React from 'react';
import { useApp } from '../context/AppContext';
import { DashboardSidebar } from '../components/common/DashboardSidebar';
import { 
  CreditCard, 
  RefreshCw, 
  Globe2, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  PlusCircle,
  HelpCircle
} from 'lucide-react';

export const CompanyDashboard = () => {
  const { 
    creditsOwnedCount, 
    creditsRetiredCount, 
    environmentalImpactTons, 
    portfolioWithPercentages,
    transactions,
    riskAlerts,
    setActiveModal,
    setCurrentPage
  } = useApp();

  // Top cards values formatted as requested
  const displayOwned = creditsOwnedCount || 2450;
  const displayRetired = creditsRetiredCount || 1280;
  const displayImpact = environmentalImpactTons || 1280;
  const displayScore = 92;

  // Recent 4 activities from ledger
  const recentActivities = transactions.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <DashboardSidebar />

        {/* Main Dashboard Content */}
        <main className="flex-1 space-y-8">
          
          {/* Header Title & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Company Portfolio Overview
                </h1>
                <span className="badge-prototype">Demo Sandbox</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Manage your carbon credits, trigger simulated retirements, and verify portfolio credibility.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage('marketplace')}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-forest-600 hover:bg-forest-700 text-white shadow-soft-sm transition flex items-center gap-1.5"
              >
                <span>Acquire Credits</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentPage('retirement')}
                className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 transition flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-forest-600" />
                <span>Retire Credits</span>
              </button>
            </div>
          </div>

          {/* Top 4 KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Credits Owned */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">Credits Owned</span>
                <span className="p-2 rounded-xl bg-forest-50 text-forest-700">💳</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                {displayOwned.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                <span>Available in Wallet</span>
              </div>
            </div>

            {/* Card 2: Credits Retired */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">Credits Retired</span>
                <span className="p-2 rounded-xl bg-teal-50 text-teal-700">♻️</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                {displayRetired.toLocaleString()}
              </div>
              <div className="text-[11px] text-teal-700 font-semibold mt-1 flex items-center gap-1">
                <span>Irrevocably Offset</span>
              </div>
            </div>

            {/* Card 3: Environmental Impact */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">Environmental Impact</span>
                <span className="p-2 rounded-xl bg-sky-50 text-sky-700">🌍</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                {displayImpact.toLocaleString()} <span className="text-xs text-slate-500 font-normal">tCO₂e</span>
              </div>
              <div className="text-[11px] text-sky-700 font-semibold mt-1">
                Verified Greenhouse Reduction
              </div>
            </div>

            {/* Card 4: Integrity Score */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">Integrity Score</span>
                <span className="p-2 rounded-xl bg-amber-50 text-amber-700">🛡️</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight flex items-baseline gap-1">
                {displayScore} <span className="text-xs font-bold text-slate-400">/ 100</span>
              </div>
              <button 
                onClick={() => setActiveModal({ type: 'why-score', data: { score: displayScore, projectName: 'EcoTech Portfolio' } })}
                className="text-[11px] text-forest-700 hover:text-forest-800 font-bold mt-1 underline flex items-center gap-1"
              >
                <span>Why This Score?</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>

          </div>

          {/* Middle Row: Portfolio Breakdown + Risk Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Portfolio Breakdown (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Portfolio Breakdown
                  </h3>
                  <p className="text-xs text-slate-500">
                    Distribution of active and retired credits by environmental mechanism
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">100% Verified</span>
              </div>

              {/* Progress bars / Category Breakdown */}
              <div className="space-y-4">
                {portfolioWithPercentages.map((item) => (
                  <div key={item.type} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700 flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span>{item.type}</span>
                      </span>
                      <span className="font-bold text-slate-900 font-mono">
                        {item.count.toLocaleString()} tCO₂e ({item.percentage}%)
                      </span>
                    </div>
                    {/* Visual bar */}
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Summary Tagline */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Diversification Quality: <strong>High</strong></span>
                <button
                  onClick={() => setCurrentPage('wallet')}
                  className="font-bold text-forest-700 hover:text-forest-800"
                >
                  Inspect in Wallet →
                </button>
              </div>
            </div>

            {/* Risk Alerts (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Registry Risk Alerts
                  </h3>
                  <span className="text-[11px] font-bold text-slate-400">Telemetry Guard</span>
                </div>

                <p className="text-xs text-slate-500 mb-4">
                  Real-time algorithmic checks flagging data discrepancies and ensuring additions are valid.
                </p>

                {/* Risk Items */}
                <div className="space-y-3">
                  {riskAlerts.map((alert) => {
                    const isReview = alert.level === 'Review Required';

                    return (
                      <div 
                        key={alert.id}
                        className={`p-3.5 rounded-2xl border transition ${
                          isReview 
                            ? 'bg-amber-50/70 border-amber-200/80 text-amber-900' 
                            : 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold flex items-center gap-1.5">
                            {alert.badge}
                          </span>
                          <button
                            onClick={() => setActiveModal({ type: 'risk-explanation', data: alert })}
                            className="text-[11px] font-bold underline hover:opacity-80 flex items-center gap-0.5"
                          >
                            <span>Why?</span>
                            <HelpCircle className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-xs font-semibold truncate mb-1">
                          {alert.project}
                        </div>
                        <p className="text-[11px] text-slate-600 line-clamp-2">
                          {alert.reason}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 text-center">
                * Zero false allegations — risk states indicate sensor and telemetry calibration statuses.
              </div>
            </div>

          </div>

          {/* Recent Activity Table/List */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft-sm">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Recent Activity
                </h3>
                <p className="text-xs text-slate-500">
                  Real-time events recorded in CarbonTrust ledger
                </p>
              </div>

              <button
                onClick={() => setCurrentPage('transactions')}
                className="text-xs font-bold text-forest-700 hover:text-forest-800"
              >
                View All Transactions →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="pb-3 font-semibold">Activity</th>
                    <th className="pb-3 font-semibold">Credit ID</th>
                    <th className="pb-3 font-semibold">Quantity</th>
                    <th className="pb-3 font-semibold">Timestamp</th>
                    <th className="pb-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentActivities.map((act) => (
                    <tr key={act.id} className="hover:bg-slate-50/60 transition">
                      <td className="py-3 font-medium text-slate-800 flex items-center gap-2">
                        {act.type === 'Purchase' && <span className="p-1 rounded-md bg-emerald-100 text-emerald-800">🛒</span>}
                        {act.type === 'Retirement' && <span className="p-1 rounded-md bg-teal-100 text-teal-800">🔒</span>}
                        {act.type === 'Transfer' && <span className="p-1 rounded-md bg-sky-100 text-sky-800">↗️</span>}
                        {act.type === 'Verification' && <span className="p-1 rounded-md bg-amber-100 text-amber-800">✓</span>}
                        <span>{act.type} Event</span>
                      </td>
                      <td className="py-3 font-mono text-slate-600 font-semibold">
                        {act.creditId}
                      </td>
                      <td className="py-3 font-bold text-slate-900">
                        {act.quantity?.toLocaleString()} tCO₂e
                      </td>
                      <td className="py-3 text-slate-500">
                        {act.date}
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          act.status === 'Confirmed' || act.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {act.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
};
