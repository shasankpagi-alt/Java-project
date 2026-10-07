import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  INITIAL_PROJECTS,
  INITIAL_CREDITS,
  INITIAL_TRANSACTIONS,
  RISK_ALERTS,
  IMPACT_TIMELINE,
  PORTFOLIO_BREAKDOWN
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Active role: 'company' | 'developer' | 'admin' | 'guest'
  const [role, setRole] = useState('company');
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCredit, setSelectedCredit] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // { type, data }
  const [toast, setToast] = useState(null);

  // Core reactive data stores
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [riskAlerts, setRiskAlerts] = useState(RISK_ALERTS);

  // User profile per role
  const userProfiles = {
    company: {
      name: 'EcoTech Global Corp',
      email: 'sustainability@ecotech.com',
      avatar: '🏢',
      roleTitle: 'Corporate Buyer & Offsetter',
      department: 'ESG & Decarbonization'
    },
    developer: {
      name: 'Dr. Arjun Verma',
      email: 'arjun@sunpowerenergy.org',
      avatar: '🌱',
      roleTitle: 'Project Developer',
      organization: 'SunPower Renewables Ltd'
    },
    admin: {
      name: 'Elena Rostova',
      email: 'admin.lead@carbontrust.org',
      avatar: '🛡️',
      roleTitle: 'Registry Administrator',
      clearance: 'Level 3 Auditor'
    },
    guest: {
      name: 'Visitor',
      email: '',
      avatar: '👋',
      roleTitle: 'Public Viewer'
    }
  };

  const currentUser = userProfiles[role] || userProfiles.guest;

  // Trigger toast notifications
  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Trigger celebratory confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10b981', '#34d399', '#059669', '#38bdf8', '#facc15']
      });
    } catch {
      // Fallback silently if canvas not available
    }
  };

  // Calculate Company Metrics dynamically based on state
  const companyCredits = credits.filter(c => c.currentOwner.includes('EcoTech Global'));
  const activeCompanyCredits = companyCredits.filter(c => c.status !== 'Retired');
  const retiredCompanyCredits = companyCredits.filter(c => c.status === 'Retired');

  const creditsOwnedCount = activeCompanyCredits.reduce((acc, c) => acc + c.quantity, 0);
  const creditsRetiredCount = retiredCompanyCredits.reduce((acc, c) => acc + c.quantity, 0);
  const environmentalImpactTons = creditsRetiredCount; // 1 retired credit = 1 tCO2e reduced

  // Dynamic Portfolio Breakdown calculation
  const portfolioSummary = [
    {
      type: 'Solar',
      icon: '☀️',
      color: '#f59e0b',
      count: companyCredits.filter(c => c.projectType === 'Solar').reduce((s, c) => s + c.quantity, 0)
    },
    {
      type: 'Wind',
      icon: '🌬️',
      color: '#0ea5e9',
      count: companyCredits.filter(c => c.projectType === 'Wind').reduce((s, c) => s + c.quantity, 0)
    },
    {
      type: 'Reforestation',
      icon: '🌳',
      color: '#16a34a',
      count: companyCredits.filter(c => c.projectType === 'Reforestation').reduce((s, c) => s + c.quantity, 0)
    },
    {
      type: 'Waste',
      icon: '♻️',
      color: '#0d9488',
      count: companyCredits.filter(c => c.projectType.includes('Waste')).reduce((s, c) => s + c.quantity, 0)
    }
  ];
  const totalCompanyPool = portfolioSummary.reduce((acc, item) => acc + item.count, 0) || 1;
  const portfolioWithPercentages = portfolioSummary.map(item => ({
    ...item,
    percentage: Math.round((item.count / totalCompanyPool) * 100)
  }));

  // ACTION: Simulate Purchase
  const simulatePurchase = (creditId, buyQuantity) => {
    const target = credits.find(c => c.id === creditId);
    if (!target) return;

    const qty = parseInt(buyQuantity) || target.quantity;

    // Add transaction
    const newTxn = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'Purchase',
      creditId: target.id,
      quantity: qty,
      counterparty: target.originalOwner,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Completed',
      notes: `Simulated marketplace acquisition @ $${target.prototypePrice.toFixed(2)}/t`
    };

    // Update credit ownership
    const updatedCredits = credits.map(c => {
      if (c.id === creditId) {
        return {
          ...c,
          currentOwner: 'EcoTech Global',
          lifecycleStatus: 'Purchased',
          history: [
            ...c.history,
            {
              event: `Acquired by EcoTech Global (${qty} tCO₂e)`,
              by: 'EcoTech Global',
              date: new Date().toISOString().substring(0, 10)
            }
          ]
        };
      }
      return c;
    });

    setCredits(updatedCredits);
    setTransactions([newTxn, ...transactions]);
    triggerConfetti();
    showToast(`Successfully simulated purchase of ${qty} credits from ${target.projectName}! Added to your Wallet.`);
    setActiveModal(null);
  };

  // ACTION: Retire Credit
  const retireCredit = (creditId, quantity, reason = 'Corporate Voluntary Net-Zero Offset') => {
    const target = credits.find(c => c.id === creditId);
    if (!target) return;

    if (target.status === 'Retired') {
      showToast('This credit is already permanently retired and non-transferable.', 'warning');
      return;
    }

    const qty = parseInt(quantity) || target.quantity;

    // Add transaction
    const newTxn = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'Retirement',
      creditId: target.id,
      quantity: qty,
      counterparty: 'CarbonTrust Registry Offsetting Ledger',
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Confirmed',
      notes: reason
    };

    // Update credit to Retired
    const updatedCredits = credits.map(c => {
      if (c.id === creditId) {
        return {
          ...c,
          status: 'Retired',
          lifecycleStatus: 'Retired',
          currentOwner: 'EcoTech Global (Permanently Retired)',
          retirementReason: reason,
          retirementDate: new Date().toISOString().substring(0, 10),
          history: [
            ...c.history,
            {
              event: `Permanently Retired (${qty} tCO₂e) — Non-Transferable`,
              by: 'EcoTech Global',
              date: new Date().toISOString().substring(0, 10)
            }
          ]
        };
      }
      return c;
    });

    setCredits(updatedCredits);
    setTransactions([newTxn, ...transactions]);
    triggerConfetti();
    showToast(`Successfully retired ${qty} tCO₂e credits! Environmental impact recorded.`);
    setActiveModal(null);
  };

  // ACTION: Transfer Credit
  const transferCredit = (creditId, recipientName, quantity) => {
    const target = credits.find(c => c.id === creditId);
    if (!target) return;

    if (target.status === 'Retired') {
      showToast('Retired credits cannot be transferred!', 'warning');
      return;
    }

    const newTxn = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'Transfer',
      creditId: target.id,
      quantity: parseInt(quantity) || target.quantity,
      counterparty: `EcoTech Global → ${recipientName}`,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Completed',
      notes: `Transferred to ${recipientName}`
    };

    const updatedCredits = credits.map(c => {
      if (c.id === creditId) {
        return {
          ...c,
          currentOwner: recipientName,
          lifecycleStatus: 'Transferred',
          history: [
            ...c.history,
            {
              event: `Ownership transferred to ${recipientName}`,
              by: 'EcoTech Global',
              date: new Date().toISOString().substring(0, 10)
            }
          ]
        };
      }
      return c;
    });

    setCredits(updatedCredits);
    setTransactions([newTxn, ...transactions]);
    showToast(`Transferred credit ${creditId} to ${recipientName}.`);
    setActiveModal(null);
  };

  // ACTION: Project Developer Registration
  const submitProject = (projectData) => {
    const baseline = parseFloat(projectData.baselineEmissions) || 0;
    const projectEmissions = parseFloat(projectData.projectEmissions) || 0;
    const calculatedReduction = Math.max(0, baseline - projectEmissions);

    const newProject = {
      id: `PRJ-${String(projects.length + 1).padStart(3, '0')}`,
      name: projectData.name,
      type: projectData.type || 'Solar',
      icon: projectData.type === 'Solar' ? '☀️' : projectData.type === 'Wind' ? '🌬️' : projectData.type === 'Reforestation' ? '🌳' : '♻️',
      location: projectData.location || 'India',
      estimatedReduction: calculatedReduction || 1500,
      status: 'Pending Review',
      developer: projectData.developer || currentUser.name,
      submittedDate: new Date().toISOString().substring(0, 10),
      integrityScore: 88,
      description: projectData.description || 'Newly registered environmental reduction activity.',
      scoreFactors: {
        verification: { score: 20, max: 25, label: 'Verification Status', desc: 'Baseline methodology documentation submitted for auditor review.' },
        dataConsistency: { score: 18, max: 20, label: 'Data Consistency', desc: 'Emissions model verified with initial emission factor coefficients.' },
        duplicateRisk: { score: 20, max: 20, label: 'Duplicate Risk Prevention', desc: 'Coordinates verified against registry cadastral boundary.' },
        ownershipHistory: { score: 15, max: 15, label: 'Ownership History', desc: 'Project ownership proof uploaded.' },
        auditHistory: { score: 7, max: 10, label: 'Audit History', desc: 'Pending first independent third-party site verification.' },
        evidence: { score: 8, max: 10, label: 'Evidence Completeness', desc: 'Project design document, energy meters, and baseline calculations provided.' }
      },
      lifecycle: [
        { step: 'Created', date: new Date().toISOString().substring(0, 10), done: true },
        { step: 'Submitted', date: new Date().toISOString().substring(0, 10), done: true },
        { step: 'Verified', date: 'Pending', done: false },
        { step: 'Credits Generated', date: 'Pending', done: false }
      ],
      impactHighlights: {
        baselineEmissions: `${baseline} tCO₂e`,
        projectEmissions: `${projectEmissions} tCO₂e`,
        netPotentialReduction: `${calculatedReduction} tCO₂e/yr`
      }
    };

    setProjects([newProject, ...projects]);
    showToast(`Project "${newProject.name}" submitted! Status: Pending Review.`);
    setActiveModal(null);
  };

  // ACTION: Admin Approves Project
  const adminApproveProject = (projectId) => {
    let approvedName = '';
    const updatedProjects = projects.map(p => {
      if (p.id === projectId) {
        approvedName = p.name;
        return {
          ...p,
          status: 'Verified',
          lifecycle: p.lifecycle.map(s => ({ ...s, done: true, date: s.date === 'Pending' ? new Date().toISOString().substring(0, 10) : s.date }))
        };
      }
      return p;
    });

    // Also auto-generate verified credits for the marketplace if not already created
    const existing = credits.find(c => c.projectId === projectId);
    if (!existing) {
      const p = projects.find(item => item.id === projectId);
      if (p) {
        const newCreditId = `CT-2026-000${Math.floor(500 + Math.random() * 400)}`;
        const newCredit = {
          id: newCreditId,
          projectId: p.id,
          projectName: p.name,
          projectType: p.type,
          icon: p.icon,
          quantity: p.estimatedReduction,
          prototypePrice: 15.00,
          integrityScore: p.integrityScore,
          status: 'Verified',
          originalOwner: p.developer,
          currentOwner: p.developer,
          issuanceDate: new Date().toISOString().substring(0, 10),
          riskLevel: 'Low Risk',
          riskColor: 'green',
          lifecycleStatus: 'Listed',
          history: [
            { event: 'Project Registered', by: p.developer, date: p.submittedDate },
            { event: 'Admin Verification Approved', by: 'Elena Rostova (Admin)', date: new Date().toISOString().substring(0, 10) },
            { event: 'Carbon Credits Minted & Listed', by: 'CarbonTrust Registry', date: new Date().toISOString().substring(0, 10) }
          ]
        };
        setCredits([newCredit, ...credits]);
      }
    }

    setProjects(updatedProjects);
    showToast(`Project "${approvedName}" approved and verified! Credits listed.`);
  };

  // ACTION: Admin Rejects Project
  const adminRejectProject = (projectId) => {
    const updated = projects.map(p => p.id === projectId ? { ...p, status: 'Rejected' } : p);
    setProjects(updated);
    showToast(`Project ${projectId} marked as Rejected.`, 'warning');
  };

  // ACTION: Admin Requests Review
  const adminRequestReview = (projectId) => {
    const updated = projects.map(p => p.id === projectId ? { ...p, status: 'Review Required' } : p);
    setProjects(updated);
    showToast(`Requested additional telemetry review for project ${projectId}.`, 'info');
  };

  // Switch role and optionally redirect
  const switchRole = (newRole) => {
    setRole(newRole);
    if (newRole === 'company') setCurrentPage('company-dashboard');
    else if (newRole === 'developer') setCurrentPage('developer');
    else if (newRole === 'admin') setCurrentPage('admin');
    else setCurrentPage('landing');
    showToast(`Switched active view to ${newRole.toUpperCase()} mode.`);
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        switchRole,
        currentPage,
        setCurrentPage,
        currentUser,
        projects,
        credits,
        transactions,
        riskAlerts,
        selectedProject,
        setSelectedProject,
        selectedCredit,
        setSelectedCredit,
        activeModal,
        setActiveModal,
        toast,
        showToast,
        triggerConfetti,
        // Computed stats
        creditsOwnedCount,
        creditsRetiredCount,
        environmentalImpactTons,
        portfolioWithPercentages,
        // Actions
        simulatePurchase,
        retireCredit,
        transferCredit,
        submitProject,
        adminApproveProject,
        adminRejectProject,
        adminRequestReview
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
