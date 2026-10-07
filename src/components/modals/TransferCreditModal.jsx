import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRightLeft, X, AlertCircle } from 'lucide-react';

export const TransferCreditModal = () => {
  const { activeModal, setActiveModal, transferCredit, credits } = useApp();
  const targetCredit = activeModal?.data || credits[0];

  const [recipient, setRecipient] = useState('Apex Clean Logistics Corp');
  const [quantity, setQuantity] = useState(targetCredit?.quantity || 100);

  if (!activeModal || activeModal.type !== 'transfer') return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    transferCredit(targetCredit.id, recipient, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-soft-lg border border-slate-100 max-w-md w-full p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-xl font-bold">
            <ArrowRightLeft className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Transfer Carbon Credit
            </h3>
            <span className="badge-prototype">Simulated Bilateral Custody</span>
          </div>
        </div>

        {/* Selected Credit Info */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-mono text-slate-500 font-bold">{targetCredit?.id}</span>
            <span className="text-teal-700 font-semibold">Available: {targetCredit?.quantity} tCO₂e</span>
          </div>
          <div className="font-bold text-slate-800">{targetCredit?.projectName}</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Recipient Company / Entity
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-medium"
              placeholder="e.g. Acme Solar Supply Chain Inc"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Transfer Quantity (tCO₂e)
            </label>
            <input
              type="number"
              min="1"
              max={targetCredit?.quantity}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-semibold"
              required
            />
          </div>

          <div className="p-3 rounded-xl bg-slate-100 text-[11px] text-slate-600 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <span>Transferring updates registry ownership. Once transferred, credits will reflect under the counterparty's ledger.</span>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-soft-sm transition"
            >
              Confirm Transfer
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
