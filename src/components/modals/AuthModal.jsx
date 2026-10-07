import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, HardHat, Shield, X, ArrowRight, Sparkles, Check } from 'lucide-react';

export const AuthModal = () => {
  const { activeModal, setActiveModal, switchRole, showToast } = useApp();
  const initialMode = activeModal?.data?.mode || 'login';

  const [mode, setMode] = useState(initialMode); // 'login' | 'register'
  const [selectedRole, setSelectedRole] = useState('company');
  const [email, setEmail] = useState('sustainability@ecotech.com');
  const [password, setPassword] = useState('••••••••');
  const [name, setName] = useState('EcoTech Global Corp');

  if (!activeModal || activeModal.type !== 'auth') return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    switchRole(selectedRole);
    showToast(`Logged in successfully as ${selectedRole.toUpperCase()}!`);
    setActiveModal(null);
  };

  const handleQuickPersona = (roleKey) => {
    switchRole(roleKey);
    setActiveModal(null);
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

        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-forest-600 to-emerald-400 flex items-center justify-center text-white mx-auto text-2xl font-bold mb-2 shadow-soft-sm">
            🌱
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">
            {mode === 'login' ? 'Welcome to CarbonTrust' : 'Create Prototype Account'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {mode === 'login' 
              ? 'Access verified carbon credit tracking and portfolios' 
              : 'Choose your role in the decentralized carbon integrity ecosystem'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
              mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
              mode === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name / Organization
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-medium"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs font-medium"
              required
            />
          </div>

          {/* Role selector for registration or quick role selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select Role
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedRole('company')}
                className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center gap-1 ${
                  selectedRole === 'company' 
                    ? 'border-forest-600 bg-forest-50/80 text-forest-800 font-bold' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px]">Company</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('developer')}
                className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center gap-1 ${
                  selectedRole === 'developer' 
                    ? 'border-forest-600 bg-forest-50/80 text-forest-800 font-bold' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <HardHat className="w-4 h-4 text-amber-600" />
                <span className="text-[11px]">Developer</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('admin')}
                className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center gap-1 ${
                  selectedRole === 'admin' 
                    ? 'border-forest-600 bg-forest-50/80 text-forest-800 font-bold' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Shield className="w-4 h-4 text-teal-600" />
                <span className="text-[11px]">Admin</span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs shadow-soft-sm transition flex items-center justify-center gap-2"
          >
            <span>{mode === 'login' ? 'Sign In to Dashboard' : 'Register & Enter'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Quick Instant Sandbox Switcher */}
        <div className="pt-4 border-t border-slate-100">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-2">
            One-Click Demo Profiles (No typing needed)
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickPersona('company')}
              className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition text-center"
            >
              🏢 EcoTech (Company)
            </button>
            <button
              type="button"
              onClick={() => handleQuickPersona('developer')}
              className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition text-center"
            >
              🌱 SunPower (Dev)
            </button>
            <button
              type="button"
              onClick={() => handleQuickPersona('admin')}
              className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition text-center"
            >
              🛡️ Elena (Admin)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
