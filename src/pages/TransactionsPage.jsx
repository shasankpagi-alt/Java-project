import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DashboardSidebar } from '../components/common/DashboardSidebar';
import { 
  History, 
  Search, 
  Filter, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Lock, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export const TransactionsPage = () => {
  const { transactions, setActiveModal, credits } = useApp();
  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter(t => {
    const matchesType = filterType === 'All' || t.type === filterType;
    const matchesSearch = 
      t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.creditId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.counterparty?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getTypeBadge = (type) => {
    switch (type) {
      case 'Purchase':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">🛒 Purchase</span>;
      case 'Retirement':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 flex items-center gap-1">🔒 Retirement</span>;
      case 'Transfer':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 flex items-center gap-1">↗️ Transfer</span>;
      case 'Verification':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 flex items-center gap-1">🛡️ Verification</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">{type}</span>;
    }
  };

  const handleInspectCredit = (creditId) => {
    const credit = credits.find(c => c.id === creditId);
    if (credit) {
      setActiveModal({ type: 'credit-details', data: credit });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Content */}
        <main className="flex-1 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Transaction Audit Trail
                </h1>
                <span className="badge-prototype">Ledger v1.0</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Immutable record of every issuance, purchase, transfer, and permanent retirement.
              </p>
            </div>

            <div className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              Total Recorded: {transactions.length} Events
            </div>
          </div>

          {/* Filters & Search */}
          <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-soft-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search by Transaction ID, Credit ID, or counterparty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-forest-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {['All', 'Purchase', 'Retirement', 'Transfer', 'Verification'].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition ${
                    filterType === t 
                      ? 'bg-forest-600 text-white shadow-soft-sm' 
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Transaction Table */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                    <th className="py-3.5 px-4 font-semibold">Transaction ID</th>
                    <th className="py-3.5 px-4 font-semibold">Type</th>
                    <th className="py-3.5 px-4 font-semibold">Credit ID</th>
                    <th className="py-3.5 px-4 font-semibold">Quantity</th>
                    <th className="py-3.5 px-4 font-semibold">Counterparty / Notes</th>
                    <th className="py-3.5 px-4 font-semibold">Date</th>
                    <th className="py-3.5 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50/60 transition group">
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-800">
                        {tx.id}
                      </td>
                      <td className="py-3.5 px-4">
                        {getTypeBadge(tx.type)}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-semibold text-forest-700">
                        <button
                          onClick={() => handleInspectCredit(tx.creditId)}
                          className="hover:underline flex items-center gap-1"
                        >
                          <span>{tx.creditId}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </button>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-extrabold text-slate-900">
                        {tx.quantity?.toLocaleString()} tCO₂e
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate" title={tx.counterparty || tx.notes}>
                        <div className="font-medium text-slate-800">{tx.counterparty}</div>
                        {tx.notes && <div className="text-[10px] text-slate-400 truncate">{tx.notes}</div>}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                        {tx.date}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          tx.status === 'Confirmed' || tx.status === 'Completed' || tx.status === 'Approved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          ✓ {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTransactions.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-xs">
                No transactions found matching the selected filter.
              </div>
            )}
          </div>

        </main>

      </div>
    </div>
  );
};
