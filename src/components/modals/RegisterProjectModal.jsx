import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UploadCloud, FileText, CheckCircle2, X, Calculator, AlertCircle, Sparkles } from 'lucide-react';

export const RegisterProjectModal = () => {
  const { activeModal, setActiveModal, submitProject, currentUser } = useApp();

  const [formData, setFormData] = useState({
    name: 'Rural Solar Microgrid Project',
    type: 'Solar',
    location: 'Rajasthan, India',
    period: '2026 - 2036 (10 Years)',
    activityInfo: 'Installation of 25 decentral solar minigrids replacing diesel pumps in agrarian villages.',
    baselineEmissions: 4800,
    projectEmissions: 600,
    developer: currentUser.organization || currentUser.name || 'SunPower Renewables Ltd',
    evidenceFile: 'Methodology_PDD_V1.pdf'
  });

  const [uploadSimulated, setUploadSimulated] = useState(false);

  if (!activeModal || activeModal.type !== 'register-project') return null;

  // Formula as requested in specification:
  // Potential Reduction = max(0, Baseline Emissions - Project Emissions)
  const baseline = parseFloat(formData.baselineEmissions) || 0;
  const projectEmissions = parseFloat(formData.projectEmissions) || 0;
  const potentialReduction = Math.max(0, baseline - projectEmissions);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitProject({
      ...formData,
      potentialReduction
    });
  };

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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl font-bold">
            🌱
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Register New Environmental Project
            </h3>
            <p className="text-xs text-slate-500">
              Submit baseline methodology and emissions data for verification
            </p>
          </div>
        </div>

        {/* Prototype Calculation Notice from spec */}
        <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900 mb-6">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Prototype Calculation — Not an Official Carbon Credit Methodology</div>
            <p className="text-[11px] text-amber-800 mt-0.5">
              Net emission reduction estimates are computed using demonstration baseline differentials and do not replace formal ISO 14064 or CDM auditing.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-medium"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Project Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-medium"
              >
                <option value="Solar">☀️ Solar Power</option>
                <option value="Wind">🌬️ Wind Power</option>
                <option value="Reforestation">🌳 Reforestation & Nature</option>
                <option value="Waste Management">♻️ Waste & Methane Capture</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Project Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-medium"
                placeholder="e.g. Gujarat, India"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Project Period / Crediting Timeline
              </label>
              <input
                type="text"
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-medium"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Activity Information & Scope Description
            </label>
            <textarea
              rows="2"
              value={formData.activityInfo}
              onChange={(e) => setFormData({ ...formData, activityInfo: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-medium"
              required
            />
          </div>

          {/* Emissions Inputs & Formula Section */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-4 h-4 text-forest-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Methodology Reduction Calculator
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Baseline Emissions (tCO₂e)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.baselineEmissions}
                  onChange={(e) => setFormData({ ...formData, baselineEmissions: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-bold"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Project Emissions (tCO₂e)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.projectEmissions}
                  onChange={(e) => setFormData({ ...formData, projectEmissions: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-bold"
                  required
                />
              </div>
            </div>

            {/* Calculated Output Display */}
            <div className="p-3 rounded-xl bg-forest-50 border border-forest-200/80 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-forest-800 uppercase tracking-wider">
                  Potential Reduction = max(0, Baseline - Project)
                </div>
                <div className="text-xs text-forest-700">
                  {baseline} tCO₂e − {projectEmissions} tCO₂e
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-forest-800 font-mono">
                  {potentialReduction.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-forest-700 ml-1">tCO₂e / yr</span>
              </div>
            </div>
          </div>

          {/* Evidence Upload Simulator */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Evidence Upload (Satellite, Meter Readings, PDD)
            </label>
            <div 
              onClick={() => setUploadSimulated(true)}
              className={`p-4 border-2 border-dashed rounded-2xl text-center cursor-pointer transition ${
                uploadSimulated 
                  ? 'border-emerald-500 bg-emerald-50/60' 
                  : 'border-slate-300 hover:border-forest-500 bg-slate-50'
              }`}
            >
              <UploadCloud className={`w-8 h-8 mx-auto mb-1 ${uploadSimulated ? 'text-emerald-600' : 'text-slate-400'}`} />
              {uploadSimulated ? (
                <div className="text-xs font-semibold text-emerald-800 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Evidence Attached: Telemetry_Verification_Package.zip (4.8 MB)</span>
                </div>
              ) : (
                <>
                  <div className="text-xs font-semibold text-slate-700">Click to simulate telemetry evidence upload</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">PDF, CSV, GeoJSON or SCADA logs up to 25MB</div>
                </>
              )}
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-3 flex items-center justify-between border-t border-slate-100">
            <span className="text-xs text-slate-400">
              Submitted projects enter the Admin Verification Queue
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold rounded-xl bg-forest-600 hover:bg-forest-700 text-white shadow-soft-sm transition flex items-center gap-1.5"
              >
                <span>Submit for Verification</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
