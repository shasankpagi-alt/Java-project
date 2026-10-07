import React from 'react';
import { useApp } from '../../context/AppContext';
import { AlertTriangle, CheckCircle2, X, ShieldAlert, FileText, ArrowRight } from 'lucide-react';

export const RiskExplanationModal = () => {
  const { activeModal, setActiveModal } = useApp();

  if (!activeModal || activeModal.type !== 'risk-explanation') return null;

  const alert = activeModal.data || {};
  const isReview = alert.level === 'Review Required';

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

        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold ${
            isReview ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
          }`}>
            {isReview ? <AlertTriangle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                isReview ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {alert.badge || alert.level}
              </span>
              <span className="badge-prototype">Telemetry Flag</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              Why Was This Flagged?
            </h3>
          </div>
        </div>

        {/* Project Target */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 mb-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Target Project</div>
          <div className="text-sm font-semibold text-slate-800">{alert.project}</div>
        </div>

        {/* Explanation Card */}
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Automated Telemetry Analysis
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {alert.reason}
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Auditor Context & Clarification
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {alert.explanation || 'No malicious activity was detected. CarbonTrust flags statistical variances to provide buyers with transparent context prior to purchasing or retirement.'}
            </p>
          </div>
        </div>

        {/* Balanced non-defamatory banner */}
        <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-[11px] text-sky-900 mb-6">
          💡 <strong>Objective Risk Model:</strong> A review status does not signify fraudulent behavior. It indicates standard sensor maintenance, weather delays, or routine calibration requests.
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setActiveModal(null)}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-white hover:bg-slate-900 transition"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
