import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Lock, AlertCircle, Sparkles, CheckCircle2, X } from 'lucide-react';

export const RetireCreditModal = () => {
  const { activeModal, setActiveModal, retireCredit, credits } = useApp();
  const [step, setStep] = useState('input'); // 'input' | 'confirm'
  
  const targetCredit = activeModal?.data || credits.find(c => c.currentOwner.includes('EcoTech Global') && c.status !== 'Retired') || credits[0];
  const [retireQty, setRetireQty] = useState(targetCredit?.quantity || 100);
  const [reason, setReason] = useState('Corporate FY26 Scope 1 & 2 Voluntary Net-Zero Offset');
  const [beneficiary, setBeneficiary] = useState('EcoTech Global Corp ESG Disclosures');

  if (!activeModal || activeModal.type !== 'retire') return null;

  const handleProceedToConfirm = (e) => {
    e.preventDefault();
    setStep('confirm');
  };

  const handleFinalConfirm = () => {
    retireCredit(targetCredit.id, retireQty, `${reason} (Beneficiary: ${beneficiary})`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-soft-lg border border-slate-100 max-w-lg w-full p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'input' ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                ♻️
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Retire Your Carbon Credits
                </h3>
                <span className="badge-prototype">Irrevocable Environmental Claim</span>
              </div>
            </div>

            {/* Explanation Quote from spec */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 text-xs text-emerald-900 mb-5 leading-relaxed">
              <p className="font-semibold italic">
                "Retirement represents the end of a credit's tradable lifecycle in this prototype."
              </p>
              <p className="text-emerald-800 text-[11px] mt-1.5">
                Once retired, the credit is permanently locked and cannot be resold or transferred. The environmental reduction is credited to your sustainability disclosures.
              </p>
            </div>

            {/* Target Credit Info */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 mb-4 text-xs">
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-slate-500 font-bold">{targetCredit?.id}</span>
                <span className="font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">Available: {targetCredit?.quantity} tCO₂e</span>
              </div>
              <div className="font-bold text-slate-800 text-sm">{targetCredit?.projectName} ({targetCredit?.projectType})</div>
            </div>

            {/* Form */}
            <form onSubmit={handleProceedToConfirm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Quantity to Retire (tCO₂e)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max={targetCredit?.quantity}
                    value={retireQty}
                    onChange={(e) => setRetireQty(Math.min(targetCredit?.quantity || 9999, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-semibold"
                    required
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 font-bold">tCO₂e</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Retirement Purpose / Claim Reason
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs font-medium"
                >
                  <option value="Corporate FY26 Scope 1 & 2 Voluntary Net-Zero Offset">Corporate FY26 Scope 1 & 2 Voluntary Net-Zero Offset</option>
                  <option value="Product Life-Cycle Scope 3 Carbon Neutrality Claim">Product Life-Cycle Scope 3 Carbon Neutrality Claim</option>
                  <option value="Corporate Event / Travel Decarbonization">Corporate Event / Travel Decarbonization</option>
                  <option value="General Voluntary Philanthropic Offset">General Voluntary Philanthropic Offset</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Beneficiary Entity
                </label>
                <input
                  type="text"
                  value={beneficiary}
                  onChange={(e) => setBeneficiary(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs font-medium"
                  required
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-slate-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold rounded-xl bg-forest-600 hover:bg-forest-700 text-white shadow-soft-sm transition"
                >
                  Review Retirement →
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Modal Screen as specified in Spec */
          <div className="text-center py-2 animate-in zoom-in-95 duration-150">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Are you sure you want to retire this credit?
            </h3>

            <p className="text-xs text-slate-600 max-w-sm mx-auto mb-6">
              You are about to permanently retire <strong className="text-slate-900">{retireQty} tCO₂e</strong> from credit <strong className="font-mono text-slate-900">{targetCredit?.id}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Project:</span>
                <span className="font-bold text-slate-800">{targetCredit?.projectName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Retirement Volume:</span>
                <span className="font-bold text-emerald-700">{retireQty} tCO₂e</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Beneficiary:</span>
                <span className="font-medium text-slate-800 truncate max-w-[200px]">{beneficiary}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2">
                <span className="text-slate-500">Tradeability Status:</span>
                <span className="font-bold text-rose-600">Locked / Non-transferable</span>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setStep('input')}
                className="px-4 py-2.5 text-xs font-semibold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleFinalConfirm}
                className="px-6 py-2.5 text-xs font-bold rounded-xl bg-forest-700 hover:bg-forest-800 text-white shadow-soft-md transition flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                <span>Confirm Retirement</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
