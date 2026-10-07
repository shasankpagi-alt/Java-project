import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  Plus
} from 'lucide-react';

export const ProjectsPage = () => {
  const { projects, setSelectedProject, setCurrentPage, setActiveModal, role } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedScore, setSelectedScore] = useState('All');

  // Filter projects dynamically
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.developer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === 'All' || project.type.toLowerCase().includes(selectedType.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
    const matchesScore = 
      selectedScore === 'All' ||
      (selectedScore === '90+' && project.integrityScore >= 90) ||
      (selectedScore === '80+' && project.integrityScore >= 80);

    return matchesSearch && matchesType && matchesStatus && matchesScore;
  });

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setCurrentPage('project-details');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header & Register Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Explore Environmental Projects
            </h1>
            <span className="badge-prototype">Verified Registry</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Discover rigorously screened decarbonization projects with real telemetry and high integrity ratings.
          </p>
        </div>

        {role === 'developer' ? (
          <button
            onClick={() => setActiveModal({ type: 'register-project' })}
            className="px-5 py-2.5 rounded-2xl bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs shadow-soft-sm transition flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Register New Project</span>
          </button>
        ) : (
          <button
            onClick={() => setActiveModal({ type: 'why-score', data: { score: 94 } })}
            className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>How We Score Projects</span>
          </button>
        )}
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-soft-sm space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search projects by name, location, or developer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-500 text-xs sm:text-sm placeholder:text-slate-400 font-medium"
          />
        </div>

        {/* Filter Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          
          {/* Filter: Project Type */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Project Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-forest-500 font-medium text-slate-700"
            >
              <option value="All">All Categories</option>
              <option value="Solar">☀️ Solar</option>
              <option value="Wind">🌬️ Wind</option>
              <option value="Reforestation">🌳 Reforestation</option>
              <option value="Waste">♻️ Waste Management</option>
            </select>
          </div>

          {/* Filter: Verification Status */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Verification Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-forest-500 font-medium text-slate-700"
            >
              <option value="All">All Statuses</option>
              <option value="Verified">Verified</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Review Required">Review Required</option>
            </select>
          </div>

          {/* Filter: Integrity Score */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Integrity Score
            </label>
            <select
              value={selectedScore}
              onChange={(e) => setSelectedScore(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-forest-500 font-medium text-slate-700"
            >
              <option value="All">Any Score</option>
              <option value="90+">90+ High Integrity (Grade A)</option>
              <option value="80+">80+ Satisfactory</option>
            </select>
          </div>

          {/* Result Count and Reset */}
          <div className="flex items-end justify-between">
            <span className="text-xs font-bold text-slate-500 pb-2">
              Showing <strong>{filteredProjects.length}</strong> projects
            </span>
            {(searchTerm || selectedType !== 'All' || selectedStatus !== 'All' || selectedScore !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('All');
                  setSelectedStatus('All');
                  setSelectedScore('All');
                }}
                className="text-[11px] font-bold text-forest-700 pb-2 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md hover:border-forest-200 transition-all flex flex-col justify-between overflow-hidden group"
          >
            <div>
              {/* Card Header & Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl p-2 rounded-2xl bg-forest-50 border border-forest-100/60">
                      {project.icon}
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-forest-700">
                        {project.type}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    project.status === 'Verified' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : project.status === 'Pending Review'
                      ? 'bg-sky-100 text-sky-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {project.status === 'Verified' ? '🛡️ Verified' : project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-forest-700 transition leading-snug">
                  {project.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Metrics Box */}
              <div className="mx-6 p-3 rounded-2xl bg-slate-50 border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-slate-400 text-[10px] font-semibold">Estimated Reduction</div>
                  <div className="font-extrabold text-slate-900 flex items-center gap-1">
                    <span>🌱</span>
                    <span>{project.estimatedReduction?.toLocaleString()} tCO₂e</span>
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 text-[10px] font-semibold">Integrity Score</div>
                  <div className="font-extrabold text-emerald-700 flex items-center gap-1">
                    <span>⭐</span>
                    <span>{project.integrityScore}/100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 truncate max-w-[140px]">
                By {project.developer}
              </span>

              <button
                onClick={() => handleViewDetails(project)}
                className="px-4 py-2 rounded-xl bg-forest-50 hover:bg-forest-600 text-forest-700 hover:text-white font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
