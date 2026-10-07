import React from 'react';
import { useApp } from '../context/AppContext';
import { DashboardSidebar } from '../components/common/DashboardSidebar';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  HelpCircle, 
  Layers, 
  FileCheck2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const AdminDashboard = () => {
  const { 
    projects, 
    riskAlerts, 
    credits, 
    transactions, 
    adminApproveProject, 
    adminRejectProject, 
    adminRequestReview,
    setActiveModal,
    setSelectedProject,
    setCurrentPage
  } = useApp();

  // Projects in verification queue (Pending Review or Review Required)
  const pendingProjects = projects.filter(p => p.status === 'Pending Review' || p.status === 'Review Required');
  const verifiedProjectsCount = projects.filter(p => p.status === 'Verified').length;

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
                  Registry Administration Center
                </h1>
                <span className="badge-prototype">Supervisory Authority</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Audit incoming project methodologies, review automated telemetry alerts, and authorize credit minting.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
                <Shield className="w-3.5 h-3.5" />
                <span>Level 3 Admin Access</span>
              </span>
            </div>
          </div>

          {/* 6 Admin Summary Cards as specified in Spec */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            
            {/* Card 1: Pending Verification */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft-sm">
              <div className="text-[11px] font-bold text-amber-700">Pending Queue</div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {pendingProjects.length}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Need validation</div>
            </div>

            {/* Card 2: Risk Alerts */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft-sm">
              <div className="text-[11px] font-bold text-rose-700">Risk Alerts</div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {riskAlerts.length}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Automated flags</div>
            </div>

            {/* Card 3: Total Projects */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft-sm">
              <div className="text-[11px] font-bold text-slate-600">Total Projects</div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {projects.length}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">{verifiedProjectsCount} verified</div>
            </div>

            {/* Card 4: Total Credits */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft-sm">
              <div className="text-[11px] font-bold text-forest-700">Total Credits</div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {credits.length}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Active tranches</div>
            </div>

            {/* Card 5: Transactions */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft-sm">
              <div className="text-[11px] font-bold text-teal-700">Transactions</div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {transactions.length}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">On ledger</div>
            </div>

            {/* Card 6: Users */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft-sm">
              <div className="text-[11px] font-bold text-indigo-700">Active Users</div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                48
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Orgs & Devs</div>
            </div>

          </div>

          {/* Verification Queue Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Methodology Verification Queue
                </h3>
                <p className="text-xs text-slate-500">
                  Evaluate newly submitted projects and authorize registry issuance
                </p>
              </div>

              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                {pendingProjects.length} Pending Actions
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                    <th className="py-3 px-4 font-semibold">Project</th>
                    <th className="py-3 px-4 font-semibold">Developer</th>
                    <th className="py-3 px-4 font-semibold">Submitted Date</th>
                    <th className="py-3 px-4 font-semibold">Integrity Score</th>
                    <th className="py-3 px-4 font-semibold">Status</th>
                    <th className="py-3 px-4 font-semibold text-right">Auditor Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {projects.map((proj) => {
                    const isPending = proj.status === 'Pending Review' || proj.status === 'Review Required';

                    return (
                      <tr key={proj.id} className="hover:bg-slate-50/60 transition">
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <span>{proj.icon}</span>
                            <span>{proj.name}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {proj.id} • {proj.type} • {proj.location}
                          </div>
                        </td>

                        <td className="py-3.5 px-4 font-medium text-slate-700">
                          {proj.developer}
                        </td>

                        <td className="py-3.5 px-4 text-slate-500">
                          {proj.submittedDate || '2026-02-18'}
                        </td>

                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => setActiveModal({ type: 'why-score', data: { score: proj.integrityScore, projectName: proj.name } })}
                            className="font-black text-emerald-700 font-mono hover:underline flex items-center gap-1"
                          >
                            <span>{proj.integrityScore}/100</span>
                            <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                          </button>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            proj.status === 'Verified' 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : proj.status === 'Rejected'
                              ? 'bg-rose-100 text-rose-800'
                              : proj.status === 'Review Required'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-sky-100 text-sky-800'
                          }`}>
                            {proj.status}
                          </span>
                        </td>

                        {/* Interactive Buttons: Review, Approve, Request Review, Reject */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5 flex-wrap">
                            <button
                              onClick={() => {
                                setSelectedProject(proj);
                                setCurrentPage('project-details');
                              }}
                              className="px-2.5 py-1 text-[11px] font-semibold rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 transition"
                            >
                              Review
                            </button>

                            {isPending && (
                              <>
                                <button
                                  onClick={() => adminApproveProject(proj.id)}
                                  className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft-sm transition"
                                  title="Approve and mint credits"
                                >
                                  ✓ Approve
                                </button>

                                <button
                                  onClick={() => adminRequestReview(proj.id)}
                                  className="px-2 py-1 text-[11px] font-semibold rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 transition"
                                  title="Request additional telemetry documents"
                                >
                                  Request Review
                                </button>

                                <button
                                  onClick={() => adminRejectProject(proj.id)}
                                  className="px-2 py-1 text-[11px] font-semibold rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition"
                                  title="Reject project submission"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Risk Alerts Control Center */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Telemetry Risk & Anomaly Center
                </h3>
                <p className="text-xs text-slate-500">
                  Automated background scanner results across sensor, GIS and trading telemetry
                </p>
              </div>

              <span className="text-xs font-mono font-bold text-slate-500">
                Algorithm: CarbonGuard AI v2.4
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {riskAlerts.map((alert) => {
                const isReview = alert.level === 'Review Required';

                return (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-2xl border transition flex flex-col justify-between ${
                      isReview ? 'bg-amber-50/70 border-amber-200 text-amber-950' : 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-xs">
                          {alert.badge}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">
                          {alert.id}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-xs mb-1">
                        {alert.project}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed mb-4">
                        {alert.reason}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveModal({ type: 'risk-explanation', data: alert })}
                      className="w-full py-2 rounded-xl bg-white/90 hover:bg-white text-slate-800 text-[11px] font-bold border border-slate-200/80 transition flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                      <span>Why was this flagged?</span>
                    </button>
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
