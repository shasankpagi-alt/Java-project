import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  LayoutDashboard, 
  Layers, 
  ShoppingBag, 
  Wallet, 
  History, 
  Globe2, 
  User, 
  Shield, 
  HardHat, 
  Building2,
  Lock,
  LogOut,
  ChevronRight
} from 'lucide-react';

export const DashboardSidebar = () => {
  const { 
    role, 
    currentPage, 
    setCurrentPage, 
    currentUser, 
    switchRole,
    creditsOwnedCount,
    creditsRetiredCount
  } = useApp();

  const companyNav = [
    { label: 'Dashboard', page: 'company-dashboard', icon: LayoutDashboard },
    { label: 'Projects', page: 'projects', icon: Layers },
    { label: 'Marketplace', page: 'marketplace', icon: ShoppingBag },
    { label: 'Wallet', page: 'wallet', icon: Wallet, badge: creditsOwnedCount },
    { label: 'Retirement', page: 'retirement', icon: Lock, badge: creditsRetiredCount },
    { label: 'Transactions', page: 'transactions', icon: History },
    { label: 'Impact', page: 'impact', icon: Globe2 },
    { label: 'Profile', page: 'profile', icon: User }
  ];

  const devNav = [
    { label: 'Developer Hub', page: 'developer', icon: HardHat },
    { label: 'All Projects', page: 'projects', icon: Layers },
    { label: 'Marketplace', page: 'marketplace', icon: ShoppingBag },
    { label: 'Transactions', page: 'transactions', icon: History },
    { label: 'Impact', page: 'impact', icon: Globe2 }
  ];

  const adminNav = [
    { label: 'Admin Center', page: 'admin', icon: Shield },
    { label: 'Projects Registry', page: 'projects', icon: Layers },
    { label: 'Marketplace', page: 'marketplace', icon: ShoppingBag },
    { label: 'Transactions Ledger', page: 'transactions', icon: History },
    { label: 'Impact Overview', page: 'impact', icon: Globe2 }
  ];

  const currentNav = role === 'developer' ? devNav : role === 'admin' ? adminNav : companyNav;

  return (
    <aside className="w-full lg:w-64 bg-white rounded-3xl border border-slate-200/80 p-5 shadow-soft-sm flex flex-col justify-between h-fit lg:sticky lg:top-24">
      <div className="space-y-6">
        
        {/* User Card */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-forest-50 to-emerald-50 border border-forest-100/80 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-forest-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            {currentUser.avatar || '🏢'}
          </div>
          <div className="overflow-hidden">
            <h4 className="text-xs font-bold text-slate-900 truncate">
              {currentUser.name}
            </h4>
            <p className="text-[11px] text-forest-700 font-semibold truncate capitalize">
              {currentUser.roleTitle || role}
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Navigation Menu
          </div>
          {currentNav.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;

            return (
              <button
                key={item.label}
                onClick={() => setCurrentPage(item.page)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                  isActive
                    ? 'bg-forest-600 text-white shadow-soft-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>

                {item.badge !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-forest-700 text-forest-100' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

      </div>

      {/* Role Switcher Pill in Sidebar */}
      <div className="mt-8 pt-4 border-t border-slate-100 space-y-3">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
          Switch Demo Persona
        </div>
        
        <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => switchRole('company')}
            className={`py-1 text-[11px] font-semibold rounded-lg capitalize transition ${
              role === 'company' ? 'bg-white text-forest-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Company Buyer"
          >
            Buyer
          </button>
          <button
            onClick={() => switchRole('developer')}
            className={`py-1 text-[11px] font-semibold rounded-lg capitalize transition ${
              role === 'developer' ? 'bg-white text-forest-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Project Developer"
          >
            Dev
          </button>
          <button
            onClick={() => switchRole('admin')}
            className={`py-1 text-[11px] font-semibold rounded-lg capitalize transition ${
              role === 'admin' ? 'bg-white text-forest-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Registry Admin"
          >
            Admin
          </button>
        </div>

        <button
          onClick={() => setCurrentPage('landing')}
          className="w-full py-2 text-center text-xs text-slate-500 hover:text-slate-800 font-medium transition flex items-center justify-center gap-1.5"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Back to Landing Page</span>
        </button>
      </div>
    </aside>
  );
};
