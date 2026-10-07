import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Leaf, Heart, ExternalLink, Info } from 'lucide-react';

export const Footer = () => {
  const { setCurrentPage, setActiveModal } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-forest-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl">
                🌱
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Carbon<span className="text-emerald-400">Trust</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              "Building trust in every carbon credit."
            </p>

            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              A transparent, traceable, and integrity-scored carbon credit prototype engineered to connect authentic environmental projects with verified corporate retirement goals.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Prototype Sandbox v1.0
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setCurrentPage('landing')} className="hover:text-emerald-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentPage('landing');
                    setTimeout(() => {
                      const el = document.getElementById('how-it-works');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="hover:text-emerald-400 transition"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('projects')} className="hover:text-emerald-400 transition">
                  Explore Projects
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('marketplace')} className="hover:text-emerald-400 transition">
                  Carbon Marketplace
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('impact')} className="hover:text-emerald-400 transition">
                  Environmental Impact
                </button>
              </li>
            </ul>
          </div>

          {/* Verification & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Integrity Framework</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setActiveModal({ type: 'why-score', data: { score: 92 } })}
                  className="hover:text-emerald-400 transition flex items-center gap-1 text-left"
                >
                  <span>Why This Score?</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <span className="text-slate-400">Double Counting Guard</span>
              </li>
              <li>
                <span className="text-slate-400">Satellite Sensor Telemetry</span>
              </li>
              <li>
                <span className="text-slate-400">Non-Transferable Retirement</span>
              </li>
              <li>
                <button 
                  onClick={() => setActiveModal({ type: 'auth', data: { mode: 'login' } })}
                  className="hover:text-emerald-400 transition"
                >
                  Portal Login
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Prototype Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-start gap-2 max-w-2xl">
            <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-400">Prototype Disclaimer:</strong> CarbonTrust is a student and startup demonstration prototype. All metrics, projects, credits, and integrity ratings are simulated mock data intended for functional and UI evaluation. This prototype does not execute real-world financial transactions or grant legal environmental certification.
            </p>
          </div>

          <div className="text-right">
            <p>© {new Date().getFullYear()} CarbonTrust. Built for sustainable impact.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
