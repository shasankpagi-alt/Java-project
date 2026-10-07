import React from 'react';
import { useApp } from '../context/AppContext';
import { DashboardSidebar } from '../components/common/DashboardSidebar';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  FileText, 
  Download, 
  Key, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export const ProfilePage = () => {
  const { 
    currentUser, 
    creditsRetiredCount, 
    environmentalImpactTons,
    showToast 
  } = useApp();

  const handleDownloadCertificate = () => {
    showToast('Simulated ESG Compliance Certificate generated and downloaded!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Content */}
        <main className="flex-1 space-y-8">
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Organization Profile & Compliance
              </h1>
              <span className="badge-prototype">Verified Registry Entity</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Corporate credentials, sustainability target progress, and immutable proof of retirement.
            </p>
          </div>

          {/* Org Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-3xl bg-forest-600 text-white flex items-center justify-center text-4xl shadow-soft-md flex-shrink-0">
              {currentUser.avatar || '🏢'}
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h2 className="text-xl font-bold text-slate-900">
                  {currentUser.name}
                </h2>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>KYC / AML Cleared</span>
                </span>
              </div>

              <p className="text-xs text-slate-500">
                Official Registry Entity ID: <strong className="font-mono text-slate-700">REG-CORP-2026-9041</strong>
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600 pt-1">
                <span>Email: <strong className="text-slate-800">{currentUser.email}</strong></span>
                <span>•</span>
                <span>Role: <strong className="text-slate-800 capitalize">{currentUser.roleTitle}</strong></span>
                <span>•</span>
                <span>Jurisdiction: <strong className="text-slate-800">Global / India</strong></span>
              </div>
            </div>

            <button
              onClick={handleDownloadCertificate}
              className="px-4 py-2.5 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-700 font-bold text-xs transition flex items-center gap-2 border border-forest-200"
            >
              <Download className="w-4 h-4" />
              <span>ESG Certificate</span>
            </button>
          </div>

          {/* Net-Zero Target Progress Tracker */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Corporate Net-Zero Milestone (FY26 Target)
                </h3>
                <p className="text-xs text-slate-500">
                  Track progress against declared voluntary greenhouse abatement targets
                </p>
              </div>

              <span className="text-xs font-mono font-bold text-forest-700">
                {Math.round((creditsRetiredCount / 5000) * 100)}% Fulfilled
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden p-0.5">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-forest-600 to-emerald-400 transition-all duration-700"
                style={{ width: `${Math.min(100, Math.round((creditsRetiredCount / 5000) * 100))}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-slate-500 pt-1">
              <span>Current Retired: <strong>{creditsRetiredCount.toLocaleString()} tCO₂e</strong></span>
              <span>Target: <strong>5,000 tCO₂e</strong></span>
            </div>
          </div>

          {/* Security & API Keys */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              API & Telemetry Integration Keys
            </h3>
            <p className="text-xs text-slate-500">
              Simulated REST webhook keys for synchronizing ERP energy management systems.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
              <div className="truncate max-w-md text-slate-600">
                ct_live_sec_90f23a9d7c11823ef0b99147...
              </div>
              <button 
                onClick={() => showToast('API Key copied to clipboard!')}
                className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100 transition"
              >
                Copy Key
              </button>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
};
