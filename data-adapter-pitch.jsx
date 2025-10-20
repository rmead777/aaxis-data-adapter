import React, { useState, useEffect } from 'react';
import { 
  Database, FileSearch, GitMerge, Layers, Box, CheckCircle2, 
  ArrowRight, Zap, Shield, TrendingUp, BarChart3, Activity,
  Building2, Package, FileCode, Network, Cpu, Cloud, 
  AlertCircle, Lock, Sparkles, ChevronRight, Play
} from 'lucide-react';

const DataAdapterPitch = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % 8);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const sourceSystem = {
    types: [
      { name: 'ERP Systems', examples: 'SAP, Oracle, NetSuite', icon: Building2, color: 'from-blue-500 to-indigo-600' },
      { name: 'Databases', examples: 'SQL, NoSQL, Data Lakes', icon: Database, color: 'from-purple-500 to-pink-600' },
      { name: 'Cloud APIs', examples: 'Salesforce, HubSpot, AWS', icon: Cloud, color: 'from-cyan-500 to-blue-600' },
      { name: 'Legacy Files', examples: 'CSV, XML, Excel, JSON', icon: FileCode, color: 'from-amber-500 to-orange-600' },
    ]
  };

  const processingPhases = [
    {
      id: 0,
      title: 'Discovery',
      subtitle: 'Automated System Detection',
      icon: FileSearch,
      description: 'AI-powered discovery of data sources, schemas, and relationships',
      metrics: ['100+ connectors', 'Auto-detection', 'Schema inference'],
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 1,
      title: 'Extraction',
      subtitle: 'Intelligent Data Capture',
      icon: Package,
      description: 'Real-time and batch extraction with change data capture (CDC)',
      metrics: ['Zero downtime', 'Incremental sync', 'Event streaming'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'Profiling',
      subtitle: 'Quality Assessment',
      icon: Activity,
      description: 'Statistical analysis and data quality scoring with anomaly detection',
      metrics: ['Quality scores', 'Completeness check', 'Pattern analysis'],
      color: 'from-emerald-600 to-green-600'
    },
    {
      id: 3,
      title: 'Parsing',
      subtitle: 'Content Decomposition',
      icon: Cpu,
      description: 'ML-based content extraction and format recognition',
      metrics: ['NLP processing', 'OCR capability', 'Multi-format support'],
      color: 'from-cyan-600 to-teal-600'
    },
    {
      id: 4,
      title: 'Mapping',
      subtitle: 'Semantic Alignment',
      icon: GitMerge,
      description: 'Intelligent field mapping with business logic preservation',
      metrics: ['Auto-mapping', 'Custom rules', 'Conflict resolution'],
      color: 'from-pink-600 to-rose-600'
    },
    {
      id: 5,
      title: 'Transformation',
      subtitle: 'Data Structuring',
      icon: Layers,
      description: 'Schema harmonization and business rule application',
      metrics: ['Type conversion', 'Validation rules', 'Enrichment'],
      color: 'from-orange-600 to-amber-600'
    },
    {
      id: 6,
      title: 'Normalization',
      subtitle: 'Standardization Engine',
      icon: Box,
      description: 'Industry-standard formatting and canonical model creation',
      metrics: ['ISO standards', 'Master data', 'Deduplication'],
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 7,
      title: 'Validation',
      subtitle: 'Quality Assurance',
      icon: Shield,
      description: 'Multi-layer validation with business rule compliance',
      metrics: ['99.9% accuracy', 'Audit trail', 'Compliance check'],
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const businessOutcomes = [
    { icon: TrendingUp, label: '80% Faster Integration', sublabel: 'Time to insight' },
    { icon: BarChart3, label: 'Single Source of Truth', sublabel: 'Unified analytics' },
    { icon: Zap, label: 'Real-time Processing', sublabel: 'Instant updates' },
    { icon: Lock, label: 'Enterprise Security', sublabel: 'SOC2 compliant' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Universal Data Adapter
                </span>
              </h1>
              <p className="text-xl text-slate-300">
                Enterprise-Grade Data Integration & Intelligence Platform
              </p>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl transition-all"
            >
              {isPlaying ? <Activity className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? 'Auto-Playing' : 'Paused'}
            </button>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {businessOutcomes.map((outcome, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                    <outcome.icon className="w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold">{outcome.label}</div>
                    <div className="text-xs text-slate-400">{outcome.sublabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Flow Visualization */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-12 gap-6 items-start">
          
          {/* Source Systems - Left Panel */}
          <div className="col-span-3">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-300">Data Sources</h3>
              <div className="space-y-3">
                {sourceSystem.types.map((system, i) => (
                  <div 
                    key={i}
                    className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${system.color} p-4 transform transition-all ${
                      activePhase === 0 ? 'scale-105 shadow-2xl' : 'opacity-80'
                    }`}
                  >
                    <div className="relative z-10 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <system.icon className="w-5 h-5" />
                        <span className="font-semibold">{system.name}</span>
                      </div>
                      <div className="text-xs opacity-90">{system.examples}</div>
                    </div>
                    {activePhase === 0 && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Processing Pipeline - Center */}
          <div className="col-span-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-300 text-center">Processing Pipeline</h3>
            
            {/* Phase Indicators */}
            <div className="flex justify-between mb-6">
              {processingPhases.map((phase, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    activePhase === i 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-125 shadow-lg' 
                      : activePhase > i 
                      ? 'bg-green-600/50' 
                      : 'bg-slate-700'
                  }`}
                >
                  {activePhase > i ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                </button>
              ))}
            </div>

            {/* Active Phase Detail */}
            <div className="relative">
              {processingPhases.map((phase) => {
                const Icon = phase.icon;
                const isActive = activePhase === phase.id;
                
                return (
                  <div
                    key={phase.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                      {/* Phase Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} p-4 shadow-xl`}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white">{phase.title}</h4>
                            <p className="text-sm text-slate-400">{phase.subtitle}</p>
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-600">
                          {String(phase.id + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Phase Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed">{phase.description}</p>

                      {/* Phase Metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {phase.metrics.map((metric, i) => (
                          <div key={i} className="bg-white/5 rounded-lg px-3 py-2 text-center">
                            <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              {metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-6 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${phase.color} transition-all duration-2500`}
                          style={{ width: isActive ? '100%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Hint */}
            <div className="mt-80 text-center">
              <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                <AlertCircle className="w-3 h-3" />
                Click any phase number to explore • Auto-advancing every 2.5s
              </p>
            </div>
          </div>

          {/* Output/Results - Right Panel */}
          <div className="col-span-3">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-300">Unified Output</h3>
              
              {/* Output Cards */}
              <div className="space-y-3">
                <div className={`rounded-xl bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl border border-emerald-500/30 p-4 transform transition-all ${
                  activePhase === 7 ? 'scale-105 shadow-2xl shadow-emerald-500/20' : ''
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Database className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold text-emerald-300">Unified Data Model</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Standardized, validated, ready for analytics
                  </div>
                </div>

                <div className={`rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-blue-500/30 p-4 transform transition-all ${
                  activePhase === 7 ? 'scale-105 shadow-2xl shadow-blue-500/20' : ''
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Network className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold text-blue-300">Knowledge Graph</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Connected insights across all sources
                  </div>
                </div>

                <div className={`rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 p-4 transform transition-all ${
                  activePhase === 7 ? 'scale-105 shadow-2xl shadow-purple-500/20' : ''
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold text-purple-300">AI-Ready Dataset</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Optimized for ML/AI applications
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => setShowMetrics(!showMetrics)}
                className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                View ROI Metrics
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ROI Metrics Section */}
        {showMetrics && (
          <div className="mt-12 grid grid-cols-4 gap-4">
            {[
              { label: 'Integration Time', value: '2 weeks', change: 'vs 6 months traditional', color: 'from-blue-500 to-cyan-500' },
              { label: 'Data Quality', value: '99.9%', change: 'accuracy guaranteed', color: 'from-emerald-500 to-green-500' },
              { label: 'Cost Reduction', value: '60%', change: 'lower TCO', color: 'from-purple-500 to-pink-500' },
              { label: 'Time to Value', value: '24 hrs', change: 'first insights', color: 'from-orange-500 to-amber-500' },
            ].map((metric, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-xl border border-white/10 p-6">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${metric.color}`}></div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm text-slate-400 mb-1">{metric.label}</div>
                <div className="text-xs text-slate-500">{metric.change}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataAdapterPitch;