import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Leaf, 
  ShieldCheck, 
  ExternalLink, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  HardHat, 
  Shield, 
  Sparkles,
  BarChart3
} from 'lucide-react';

export const Navbar = () => {
  const { 
    role, 
    switchRole, 
    currentPage, 
    setCurrentPage, 
    currentUser, 
    setActiveModal 
  } = useApp();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'landing' },
    { label: 'How It Works', page: 'landing', hash: '#how-it-works' },
    { label: 'Projects', page: 'projects' },
    { label: 'Marketplace', page: 'marketplace' },
    { label: 'Impact', page: 'impact' },
    { label: 'About', page: 'landing', hash: '#about' }
  ];

  const handleNavClick = (link) => {
    setCurrentPage(link.page);
    setMobileMenuOpen(false);
    if (link.hash) {
      setTimeout(() => {
        const el = document.querySelector(link.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const getDashboardPageForRole = (r) => {
    if (r === 'company') return 'company-dashboard';
    if (r === 'developer') return 'developer';
    if (r === 'admin') return 'admin';
    return 'company-dashboard';
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top Prototype Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-forest-600 text-white text-xs py-1 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">Prototype Demo</span>
        <span>Simulated Carbon Credit Management & Integrity Verification</span>
        <button 
          onClick={() => setActiveModal({ type: 'why-score', data: { score: 92 } })}
          className="underline hover:text-emerald-100 hidden sm:inline ml-1 font-semibold"
        >
          View Integrity Model
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('landing')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-forest-600 to-emerald-400 flex items-center justify-center text-white shadow-soft-sm font-bold text-xl hover:scale-105 transition-transform">
              🌱
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                Carbon<span className="text-forest-600">Trust</span>
              </span>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide -mt-1 hidden sm:block">
                Transparent • Traceable • Verified
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  currentPage === link.page && !link.hash
                    ? 'text-forest-700 bg-forest-50'
                    : 'text-slate-600 hover:text-forest-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Direct Dashboard Link */}
            <button
              onClick={() => setCurrentPage(getDashboardPageForRole(role))}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                ['company-dashboard', 'developer', 'admin', 'wallet', 'transactions'].includes(currentPage)
                  ? 'text-forest-700 bg-forest-50'
                  : 'text-slate-600 hover:text-forest-600 hover:bg-slate-50'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-forest-600" />
              <span>Portal</span>
            </button>
          </nav>

          {/* Right Action: Persona Switcher & Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Demo Persona Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full bg-slate-100 hover:bg-slate-200/70 border border-slate-200 text-slate-700 transition"
                title="Switch demo persona for testing"
              >
                <span>Role:</span>
                <span className="capitalize text-forest-700 font-bold flex items-center gap-1">
                  {role === 'company' && <Building2 className="w-3.5 h-3.5" />}
                  {role === 'developer' && <HardHat className="w-3.5 h-3.5" />}
                  {role === 'admin' && <Shield className="w-3.5 h-3.5" />}
                  {role}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-soft-lg border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Switch Prototype Persona
                  </div>
                  
                  <button
                    onClick={() => { switchRole('company'); setRoleDropdownOpen(false); }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center gap-2 hover:bg-forest-50 ${role === 'company' ? 'bg-forest-50/70 text-forest-800 font-bold' : 'text-slate-700'}`}
                  >
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="font-semibold">Company Buyer</div>
                      <div className="text-[10px] text-slate-500">Buy, retire & track portfolio</div>
                    </div>
                  </button>

                  <button
                    onClick={() => { switchRole('developer'); setRoleDropdownOpen(false); }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center gap-2 hover:bg-forest-50 ${role === 'developer' ? 'bg-forest-50/70 text-forest-800 font-bold' : 'text-slate-700'}`}
                  >
                    <HardHat className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="font-semibold">Project Developer</div>
                      <div className="text-[10px] text-slate-500">Register projects & methodologies</div>
                    </div>
                  </button>

                  <button
                    onClick={() => { switchRole('admin'); setRoleDropdownOpen(false); }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center gap-2 hover:bg-forest-50 ${role === 'admin' ? 'bg-forest-50/70 text-forest-800 font-bold' : 'text-slate-700'}`}
                  >
                    <Shield className="w-4 h-4 text-teal-600" />
                    <div>
                      <div className="font-semibold">Admin Registry</div>
                      <div className="text-[10px] text-slate-500">Review queue & risk flags</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Login & Get Started Buttons */}
            <button
              onClick={() => setActiveModal({ type: 'auth', data: { mode: 'login' } })}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-forest-700 transition"
            >
              Login
            </button>

            <button
              onClick={() => {
                if (currentPage === 'landing') {
                  setCurrentPage('company-dashboard');
                } else {
                  setActiveModal({ type: 'auth', data: { mode: 'register' } });
                }
              }}
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-forest-600 to-emerald-600 hover:from-forest-700 hover:to-emerald-700 rounded-xl shadow-soft-sm hover:shadow-soft-md transition-all flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="px-3 py-2 text-left rounded-lg text-sm font-medium text-slate-700 hover:bg-forest-50"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { setCurrentPage(getDashboardPageForRole(role)); setMobileMenuOpen(false); }}
              className="px-3 py-2 text-left rounded-lg text-sm font-medium text-forest-700 bg-forest-50"
            >
              Dashboard Portal
            </button>
          </div>

          {/* Role switcher on mobile */}
          <div className="pt-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Demo Role
            </div>
            <div className="flex gap-2">
              {['company', 'developer', 'admin'].map((r) => (
                <button
                  key={r}
                  onClick={() => { switchRole(r); setMobileMenuOpen(false); }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg capitalize border ${
                    role === r 
                      ? 'bg-forest-600 text-white border-forest-600' 
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => { setActiveModal({ type: 'auth', data: { mode: 'login' } }); setMobileMenuOpen(false); }}
              className="flex-1 py-2 text-sm font-medium rounded-xl border border-slate-200 text-slate-700 text-center"
            >
              Login
            </button>
            <button
              onClick={() => { setCurrentPage('company-dashboard'); setMobileMenuOpen(false); }}
              className="flex-1 py-2 text-sm font-semibold rounded-xl bg-forest-600 text-white text-center shadow-soft-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
