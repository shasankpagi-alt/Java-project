import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  AlertCircle, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export const MarketplacePage = () => {
  const { 
    credits, 
    simulatePurchase, 
    setActiveModal, 
    role, 
    switchRole 
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedRisk, setSelectedRisk] = useState('All');

  // Filter available credits on marketplace
  const marketplaceCredits = credits.filter((credit) => {
    // Show listed or unretired credits primarily, or all for catalog view
    const matchesSearch = 
      credit.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      credit.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      credit.projectType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === 'All' || credit.projectType.toLowerCase().includes(selectedType.toLowerCase());
    const matchesRisk = selectedRisk === 'All' || credit.riskLevel === selectedRisk;

    return matchesSearch && matchesType && matchesRisk;
  });

  const handleSimulatePurchase = (credit) => {
    simulatePurchase(credit.id, credit.quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Carbon Credit Marketplace
            </h1>
            <span className="badge-prototype">Simulated Trading</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse verified, serialized carbon offsets with real-time integrity ratings and provenance tracking.
          </p>
        </div>

        {/* Prototype Sandbox Notice */}
        <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-xs text-emerald-900 max-w-sm">
          <strong>Prototype Sandbox:</strong> Real-money payment gateways are disabled by design. Click "Simulate Purchase" to test the ledger update and wallet accumulation.
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-soft-sm flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search by Credit ID (e.g. CT-2026-000145), project, or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs sm:text-sm font-medium"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3.5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-forest-500"
          >
            <option value="All">All Types</option>
            <option value="Solar">☀️ Solar</option>
            <option value="Wind">🌬️ Wind</option>
            <option value="Reforestation">🌳 Reforestation</option>
            <option value="Waste">♻️ Waste</option>
          </select>

          <select
            value={selectedRisk}
            onChange={(e) => setSelectedRisk(e.target.value)}
            className="px-3.5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-forest-500"
          >
            <option value="All">All Risk Tiers</option>
            <option value="Low Risk">🟢 Low Risk</option>
            <option value="Review Required">🟡 Review Required</option>
          </select>
        </div>
      </div>

      {/* Credit Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketplaceCredits.map((credit) => {
          const isRetired = credit.status === 'Retired';
          const isOwnedByCurrentCompany = credit.currentOwner.includes('EcoTech Global');

          return (
            <div
              key={credit.id}
              className={`bg-white rounded-3xl border shadow-soft-sm hover:shadow-soft-md transition flex flex-col justify-between overflow-hidden ${
                isRetired ? 'border-slate-200 opacity-90' : 'border-slate-200/80 hover:border-forest-200'
              }`}
            >
              <div>
                {/* Header & Badges */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-slate-100 rounded-lg text-slate-800">
                      {credit.id}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {/* Risk Badge */}
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        credit.riskLevel === 'Low Risk'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {credit.riskLevel === 'Low Risk' ? '🟢 Low Risk' : '🟡 Review Required'}
                      </span>

                      {/* Status */}
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isRetired ? 'bg-slate-200 text-slate-700' : 'bg-forest-100 text-forest-800'
                      }`}>
                        {isRetired ? '🔒 Retired' : '🛡️ Verified'}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug flex items-center gap-2">
                    <span>{credit.icon}</span>
                    <span>{credit.projectName}</span>
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    Mechanism: <strong className="text-slate-700">{credit.projectType}</strong>
                  </div>
                </div>

                {/* Score & Pricing Grid */}
                <div className="mx-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="text-slate-400 text-[10px] font-semibold">Volume</div>
                    <div className="font-bold text-slate-900 font-mono mt-0.5">
                      {credit.quantity?.toLocaleString()} <span className="text-[10px]">tCO₂e</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-[10px] font-semibold">Demo Price</div>
                    <div className="font-bold text-forest-700 font-mono mt-0.5">
                      ${credit.prototypePrice?.toFixed(2)}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-[10px] font-semibold">Integrity</div>
                    <button
                      onClick={() => setActiveModal({ type: 'why-score', data: { score: credit.integrityScore, projectName: credit.projectName } })}
                      className="font-black text-emerald-700 font-mono mt-0.5 hover:underline"
                      title="Click to view factors"
                    >
                      {credit.integrityScore}/100
                    </button>
                  </div>
                </div>

                {/* Owner info */}
                <div className="px-6 py-3 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Current Custody:</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[170px]" title={credit.currentOwner}>
                    {credit.currentOwner}
                  </span>
                </div>
              </div>

              {/* Action Buttons: View Credit & Simulate Purchase */}
              <div className="p-6 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setActiveModal({ type: 'credit-details', data: credit })}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition text-center"
                >
                  View Credit
                </button>

                {isRetired ? (
                  <button
                    disabled
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs cursor-not-allowed flex items-center justify-center gap-1"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Retired</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleSimulatePurchase(credit)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs shadow-soft-sm transition flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Simulate Purchase</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
