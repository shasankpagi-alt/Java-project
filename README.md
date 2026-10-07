# 🌱 CarbonTrust — Carbon Credit Management & Integrity Verification Prototype

> **"Trust Every Carbon Credit. Track Every Impact."**  
> CarbonTrust makes carbon credits more transparent, traceable, and trustworthy through simulated multi-dimensional integrity scoring, end-to-end custody tracking, and non-transferable retirement verification.

---

## 🌟 Executive Overview

**CarbonTrust** is a clean, modern, responsive environmental-tech prototype designed to solve the critical trust deficits in the voluntary carbon offset market (such as double counting, opaque verification, and phantom credits). 

It provides an intuitive interface for **Corporate Buyers**, **Project Developers**, and **Registry Administrators** to track emissions reductions from project generation all the way through permanent retirement.

---

## ✨ Key Features & Architecture

### 1. 🌿 Interactive Landing Page
- **Hero Section**: Value proposition with a step-by-step pipeline illustration:  
  `Project Created → Verification → Carbon Credit → Marketplace → Impact`
- **Ambient Sustainability Elements**: Floating environmental indicators (`🌱`, `🌍`, `♻️`, `☀️`).
- **Live Metrics Counter**: Displays verified project numbers, tracked credits, tCO₂e impact, and average integrity score labeled as **Prototype Demo Data**.
- **How It Works**: 5-step transparent workflow with connecting visual progress nodes.
- **Integrity Score Showcase**: Interactive circular gauge (92/100) detailing verification, consistency, custody, and evidence pillars.
- **Diversified Categories**: Highlights Solar, Wind, Reforestation, and Waste Management.
- **Impact Trajectory Chart**: Clean progression tracking annual tCO₂e abatement (2023–2026).

### 2. 🛡️ CarbonTrust Integrity Score Model
A transparent, multi-dimensional scoring rubric evaluating projects on six objective criteria:
1. **Verification Status (25 pts)**: Independent third-party auditor ISO 14064 alignment.
2. **Data Consistency (20 pts)**: SCADA & telemetry cross-validation against substation logs.
3. **Duplicate Risk Prevention (20 pts)**: Cadastral GIS polygon deduplication against national registries.
4. **Ownership History (15 pts)**: Immutable unbroken custody ledger.
5. **Audit History (10 pts)**: Periodic site inspections and recalibration records.
6. **Evidence Completeness (10 pts)**: Satellite NDVI imagery, inverter logs, and weighbridge receipts.

### 3. 🏢 Corporate Buyer Experience (Company Portal)
- **Top Metrics**: Active Credits Owned, Credits Retired, Environmental Impact (tCO₂e), and Portfolio Integrity Score.
- **Portfolio Breakdown**: Interactive breakdown by mechanism (Solar, Wind, Reforestation, Waste).
- **Recent Activity Ledger**: Real-time purchases, transfers, and retirement events.
- **Registry Risk Alerts**: Clear categorization (`🟢 Low Risk`, `🟡 Review Required`) with a non-defamatory *"Why was this flagged?"* explainer.

### 4. 🛒 Carbon Credit Marketplace
- Discover serialized credits (e.g. `CT-2026-000145`).
- Filter by project type and risk classification.
- **Simulate Purchase**: One-click acquisition that updates company wallet, records ledger transactions, and triggers celebratory feedback without real-money payment gateways.

### 5. 💳 Wallet & 🔒 Permanent Retirement Portal
- **Wallet**: View available vs. retired allocations with **Transfer** and **Retire** actions.
- **Retirement Flow**:
  - Educational explanation: *"Retirement represents the end of a credit's tradable lifecycle in this prototype."*
  - Select volume, claim purpose (e.g. Scope 1/2 Net-Zero, Product Carbon Neutrality), and beneficiary.
  - Confirmation modal safeguards against accidental retirement.
  - Locks the credit with an irrevocable badge: `🔒 Retired — Non-transferable`.

### 6. 🌍 Planetary Impact Dashboard
- Global abatement metrics: Total Impact, Projects Supported, Credits Retired, Renewable Projects.
- Interactive multi-year carbon reduction trajectory chart.
- **Real-World Equivalencies**: Automatically converts tons into equivalent tree seedlings growing for 10 years, gasoline vehicle km saved, and homes powered.

### 7. 🛡️ Supervisory Admin Center
- **Verification Queue**: Audit incoming methodologies with real-time `Review`, `Approve`, `Request Review`, and `Reject` actions.
- Approving a project immediately mints new serialized credits onto the marketplace.
- **Risk Telemetry Center**: Explains statistical variances without false fraud claims.

### 8. 🌱 Project Developer Hub
- Track submitted projects, verified status, and crediting potential.
- **Register New Project Form**:
  - Captures project type, location, baseline emissions, and project emissions.
  - Auto-computes: `Potential Reduction = max(0, Baseline Emissions - Project Emissions)`
  - Clearly marked as: `Prototype Calculation — Not an Official Carbon Credit Methodology`.
  - Submissions immediately enter the Admin Verification Queue.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom environmental palette (`forest`, `emeraldTeal`, `skySoft`, `earthWarm`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visual Delight**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **State Architecture**: Reactive Context API with real-time custody and transaction management

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or later)
- npm or yarn

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gowthamvongoor/carbontrust.git
   cd carbontrust
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🎭 Persona Switching for Prototype Demonstration

To make evaluation simple for reviewers, professors, and evaluators, CarbonTrust features a **One-Click Persona Switcher** in the top navigation and dashboard sidebar:
- **🏢 Company Buyer**: Test browsing, simulated purchasing, transferring, and retiring carbon credits.
- **🌱 Project Developer**: Register new methodologies, calculate potential reductions, and monitor approvals.
- **🛡️ Registry Admin**: Access the verification queue, approve or reject submissions, and review risk alerts.

---

## ⚖️ Prototype Disclaimer

> **Notice:** CarbonTrust is a student and startup demonstration prototype. All metrics, projects, credits, and integrity ratings are simulated mock data intended for functional and UI evaluation. This prototype does not execute real-world financial transactions or grant legal environmental certification under UNFCCC, Gold Standard, or Verra mechanisms.

---

## 📄 License

Licensed under the [MIT License](LICENSE).
