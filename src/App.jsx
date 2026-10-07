import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';

// Modals
import { IntegrityScoreModal } from './components/common/IntegrityScoreModal';
import { RiskExplanationModal } from './components/modals/RiskExplanationModal';
import { CreditDetailsModal } from './components/modals/CreditDetailsModal';
import { RetireCreditModal } from './components/modals/RetireCreditModal';
import { TransferCreditModal } from './components/modals/TransferCreditModal';
import { RegisterProjectModal } from './components/modals/RegisterProjectModal';
import { AuthModal } from './components/modals/AuthModal';

// Pages
import { LandingPage } from './pages/LandingPage';
import { CompanyDashboard } from './pages/CompanyDashboard';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { WalletPage } from './pages/WalletPage';
import { RetirementPage } from './pages/RetirementPage';
import { ImpactDashboard } from './pages/ImpactDashboard';
import { TransactionsPage } from './pages/TransactionsPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { DeveloperDashboard } from './pages/DeveloperDashboard';
import { ProfilePage } from './pages/ProfilePage';

export const App = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'company-dashboard':
        return <CompanyDashboard />;
      case 'projects':
        return <ProjectsPage />;
      case 'project-details':
        return <ProjectDetailsPage />;
      case 'marketplace':
        return <MarketplacePage />;
      case 'wallet':
        return <WalletPage />;
      case 'retirement':
        return <RetirementPage />;
      case 'impact':
        return <ImpactDashboard />;
      case 'transactions':
        return <TransactionsPage />;
      case 'admin':
        return <AdminDashboard />;
      case 'developer':
        return <DeveloperDashboard />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-forest-100 selection:text-forest-800">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page View with smooth transition */}
      <div className="flex-1">
        {renderCurrentPage()}
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Reactive Modals */}
      <IntegrityScoreModal />
      <RiskExplanationModal />
      <CreditDetailsModal />
      <RetireCreditModal />
      <TransferCreditModal />
      <RegisterProjectModal />
      <AuthModal />

      {/* Notification Toast */}
      <Toast />
    </div>
  );
};

export default App;
