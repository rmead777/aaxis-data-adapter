import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { 
  FileSearch, Package, Activity, Cpu, GitMerge, Layers, Box, Shield,
  Cloud, FileCode, Database, Network, BarChart3, TrendingUp, Zap, Lock,
  Play, CheckCircle2, AlertCircle, Sparkles, ChevronRight, ChevronLeft, Building, Users,
  Brain, Globe, Rocket, Target, DollarSign, ArrowUpRight
} from 'lucide-react';

interface SourceType {
  name: string;
  examples: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface ProcessingPhase {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  metrics: string[];
  color: string;
}

interface BusinessOutcome {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel: string;
}

// Define interfaces for competitive component (moved to top level for clarity)
interface Feature {
  score: number;
  features: string[];
}

interface Capability {
  category: string;
  aaxis: Feature;
  datax: Feature;
  differentiator: string;
}

interface Differentiator {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  aaxis: string;
  datax: string;
  impact: string;
}

interface ClientResult {
  client: string;
  metric: string;
  aaxis: string;
  datax: string;
  improvement: string;
}

interface Advantage {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel: string;
}

// DataAdapterPitch Component
const DataAdapterPitch: React.FC = () => {
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
      { name: 'Enterprise ERP', examples: 'SAP, Oracle, Dynamics', icon: Building, color: 'from-indigo-500 to-purple-600' },
      { name: 'CRM Systems', examples: 'Salesforce, HubSpot', icon: Users, color: 'from-rose-500 to-pink-600' },
      { name: 'Cloud APIs', examples: 'Salesforce, HubSpot, AWS', icon: Cloud, color: 'from-cyan-500 to-blue-600' },
      { name: 'Legacy Files', examples: 'CSV, XML, Excel, JSON', icon: FileCode, color: 'from-amber-500 to-orange-600' },
    ] as SourceType[]
  };

  const processingPhases: ProcessingPhase[] = [
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

  // Example flow sentences for each phase (used in the example panel)
  const exampleFlow: { [id: number]: string } = {
    0: 'Discovery: Auto-detect SAP Orders table and related schemas so we know what to extract.',
    1: 'Extraction: Capture initial full load and continue with CDC to stream order updates.',
    2: 'Profiling: Score field quality (dates, prices), find missing customer IDs and anomalies.',
    3: 'Parsing: Extract line-items and normalize free-text descriptions with NLP.',
    4: 'Mapping: Auto-map source fields to the canonical Order model and surface conflicts.',
    5: 'Transformation: Apply business rules to compute order totals, taxes, and currency.',
    6: 'Normalization: Standardize product SKUs, dedupe customers and canonicalize addresses.',
    7: 'Validation: Run business rule checks; create audit entries and mark data as production-ready.'
  };

  const businessOutcomes: BusinessOutcome[] = [
    { icon: TrendingUp, label: '80% Faster Integration', sublabel: 'Time to insight' },
    { icon: BarChart3, label: 'Single Source of Truth', sublabel: 'Unified analytics' },
    { icon: Zap, label: 'Real-time Processing', sublabel: 'Instant updates' },
    { icon: Lock, label: 'Enterprise Security', sublabel: 'SOC2 compliant' },
  ];

  // pipeline scroll refs/state for the top strip
  const pipelineRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const updateScrollButtons = () => {
    const el = pipelineRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };
  const scrollBy = (offset: number) => {
    const el = pipelineRef.current;
    if (!el) return;
    el.scrollBy({ left: offset, behavior: 'smooth' });
    // micro-delay to update after scroll starts
    setTimeout(updateScrollButtons, 150);
  };
  useEffect(() => {
    updateScrollButtons();
    const el = pipelineRef.current;
    if (!el) return;
    const onScroll = () => updateScrollButtons();
    el.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);
  // keep active phase card in view
  useEffect(() => {
    const el = pipelineRef.current;
    if (!el) return;
    const activeEl = el.querySelector(`[data-phase="${activePhase}"]`) as HTMLElement | null;
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setTimeout(updateScrollButtons, 200);
    }
  }, [activePhase]);

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

      {/* Full-width Pipeline Strip */}
      <div className="w-full bg-slate-900/40 py-6">
        <div className="max-w-7xl mx-auto px-8">
          {/* Phase indicators positioned above the pipeline */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {processingPhases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  activePhase === i
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110 shadow-lg text-white'
                    : activePhase > i
                    ? 'bg-green-600/50 text-white'
                    : 'bg-slate-700 text-slate-200'
                }`}
              >
                {activePhase > i ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
              </button>
            ))}
          </div>

          {/* Expanded pipeline with arrows */}
          <div className="flex items-center gap-3">
            <button onClick={() => scrollBy(-400)} disabled={!canLeft} className={`p-2 rounded-md transition ${canLeft ? 'bg-slate-800/50 hover:bg-slate-800/70' : 'bg-slate-800/20 opacity-50 cursor-not-allowed'}`}><ChevronLeft className="w-4 h-4" /></button>
            <div ref={pipelineRef} className="overflow-x-auto no-scrollbar flex-1 min-w-0">
              <div className="flex items-center gap-2 transition-all will-change-transform">
                {processingPhases.map((p) => {
                  const Icon = p.icon;
                  const isActive = activePhase === p.id;
                  return (
                    <div key={p.id} data-phase={p.id} className={`w-[160px] flex-shrink-0 p-3 rounded-lg border ${isActive ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl' : 'bg-slate-800/70 text-slate-200 border-slate-700'}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-md p-2 flex items-center justify-center bg-white/5`}>
                          <Icon className="w-full h-full" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold truncate">{p.title}</div>
                          <div className="text-xs text-slate-400 truncate">{p.subtitle}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button onClick={() => scrollBy(400)} disabled={!canRight} className={`p-2 rounded-md transition ${canRight ? 'bg-slate-800/50 hover:bg-slate-800/70' : 'bg-slate-800/20 opacity-50 cursor-not-allowed'}`}><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Main Flow Visualization */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-12 gap-8 items-start pt-4">

          {/* Source Systems - Left Panel */}
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
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
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-300 text-center">Processing Pipeline</h3>

            {/* Pipeline indicators moved to the full-width strip above */}
            <div className="mb-4" />

            {/* Active Phase Detail (render only the active phase to keep layout in-flow) */}
            <div className="relative min-h-[420px] pb-8">
              {(() => {
                const phase = processingPhases.find((p) => p.id === activePhase) || processingPhases[0];
                const Icon = phase.icon;
                return (
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
                        className={`h-full bg-gradient-to-r ${phase.color} transition-all duration-700`}
                        style={{ width: '100%' }}
                      ></div>
                    </div>

                    {/* Example flow explanation for the currently active phase */}
                    <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-white/6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-blue-400 mt-1" />
                        <div>
                          <div className="text-sm text-slate-300 font-semibold">Example: {phase.title}</div>
                          <div className="text-xs text-slate-400 mt-1">{exampleFlow[phase.id]}</div>
                          <div className="mt-3 flex flex-wrap gap-2 text-[12px]">
                            {processingPhases.map((step) => (
                              <span key={step.id} className={`px-2 py-1 rounded-full ${step.id === phase.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
                                {step.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* View ROI Metrics Button - moved above the metrics */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowMetrics(!showMetrics)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 mx-auto"
              >
                {showMetrics ? 'Hide ROI Metrics' : 'View ROI Metrics'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* ROI Metrics Section - widened cards */}
            {showMetrics && (
              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Integration Time', value: '2 weeks', change: 'vs 6 months traditional', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Data Quality', value: '99.9%', change: 'accuracy guaranteed', color: 'from-emerald-500 to-green-500' },
                  { label: 'Cost Reduction', value: '60%', change: 'lower TCO', color: 'from-purple-500 to-pink-500' },
                  { label: 'Time to Value', value: '24 hrs', change: 'first insights', color: 'from-orange-500 to-amber-500' },
                ].map((metric, i) => (
                  <div key={i} className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${metric.color}`}></div>
                    <div className="text-4xl font-bold mb-3">{metric.value}</div>
                    <div className="text-base text-slate-300 mb-2 font-medium">{metric.label}</div>
                    <div className="text-sm text-slate-500">{metric.change}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Navigation Hint */}
            <div className="mt-8 text-center">
              <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                <AlertCircle className="w-3 h-3" />
                Click any phase number to explore • Auto-advancing every 2.5s
              </p>
            </div>
          </div>

          {/* Output/Results - Right Panel */}
          <div className="col-span-12 md:col-span-3">
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

                <div className={`rounded-xl bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-xl border border-amber-500/30 p-4 transform transition-all ${
                  activePhase === 7 ? 'scale-105 shadow-2xl shadow-amber-500/20' : ''
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold text-amber-300">Real-time Pipeline</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Live data streaming and processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// AAXISvDataX Component (inline for tab)
const AAXISvDataXInline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'differentiators' | 'results'>('capabilities');
  // Local state for capabilities controls and modal
  const [capColumns, setCapColumns] = useState<number>(2);
  const [capSort, setCapSort] = useState<'aaxis' | 'datax' | 'alpha'>('aaxis');
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  // Determine grid class for columns (Tailwind-friendly)
  const capGridClass = capColumns === 1 ? 'grid grid-cols-1' : capColumns === 2 ? 'grid grid-cols-1 md:grid-cols-2' : 'grid grid-cols-1 md:grid-cols-3';

  const competitiveMatrix = {
    capabilities: [
      {
        category: 'Intelligence Layer',
        aaxis: { score: 95, features: ['Predictive AI', 'NLP Processing', 'AutoML'] },
        datax: { score: 30, features: ['Rule-based logic', 'Basic matching'] },
        differentiator: 'Native AI architecture vs bolt-on intelligence'
      },
      {
        category: 'Data Processing',
        aaxis: { score: 90, features: ['Real-time streaming', 'Semantic understanding', 'Context aware'] },
        datax: { score: 70, features: ['Batch processing', 'Schema mapping', 'ETL focused'] },
        differentiator: 'Intelligent parsing vs traditional ETL'
      },
      {
        category: 'Scalability',
        aaxis: { score: 92, features: ['Auto-scaling', 'Multi-region', 'Edge computing'] },
        datax: { score: 75, features: ['Manual scaling', 'Single region', 'Centralized'] },
        differentiator: 'Cloud-native vs legacy architecture'
      },
      {
        category: 'Time to Value',
        aaxis: { score: 88, features: ['2-week deployment', 'Self-learning', 'Zero-code setup'] },
        datax: { score: 45, features: ['6-month deployment', 'Manual config', 'Heavy coding'] },
        differentiator: 'AI-accelerated vs traditional implementation'
      },
      {
        category: 'Cost Efficiency',
        aaxis: { score: 85, features: ['40-60% lower TCO', 'Usage-based', 'Automated optimization'] },
        datax: { score: 60, features: ['High license fees', 'Fixed pricing', 'Manual tuning'] },
        differentiator: 'Offshore delivery + automation vs traditional model'
      }
    ] as Capability[],
    
    keyDifferentiators: [
      { 
        icon: Brain, 
        title: 'AI-Native Architecture',
        aaxis: 'Built from ground up with AI/ML at core',
        datax: 'Traditional ETL with AI add-ons',
        impact: '+80% accuracy in data mapping'
      },
      {
        icon: Globe,
        title: 'Global Delivery Model',
        aaxis: '150+ engineers across 5 delivery centers',
        datax: 'Limited to regional teams',
        impact: '24/7 development, 40% cost savings'
      },
      {
        icon: Rocket,
        title: 'Speed to Market',
        aaxis: '2-week average deployment',
        datax: '6-month typical implementation',
        impact: '12x faster time to first insight'
      },
      {
        icon: Target,
        title: 'Business Outcomes',
        aaxis: 'PE-focused, exit multiple optimization',
        datax: 'Generic enterprise approach',
        impact: '3-5x higher exit valuations'
      }
    ] as Differentiator[],
    
    clientResults: [
      { client: 'Guitar Center', metric: 'Integration Time', aaxis: '2 weeks', datax: '6 months', improvement: '92%' },
      { client: 'QXO/Beacon', metric: 'Data Quality', aaxis: '99.9%', datax: '85%', improvement: '17%' },
      { client: 'Zenni Optical', metric: 'Processing Speed', aaxis: 'Real-time', datax: '24hr batch', improvement: '∞' },
      { client: 'Braskem', metric: 'TCO Reduction', aaxis: '60%', datax: '15%', improvement: '4x' }
    ] as ClientResult[]
  };

  const aaxisAdvantages: Advantage[] = [
    { icon: Brain, label: 'Chief AI Officer', sublabel: 'Naresh - AI Strategy' },
    { icon: Cpu, label: 'Chief Data Science Officer', sublabel: 'Prashant - ML Innovation' },
    { icon: Users, label: '150+ Technical Team', sublabel: 'Global talent pool' },
    { icon: DollarSign, label: '$10M+ Delivery Capacity', sublabel: 'Enterprise scale' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Next-Gen Data Intelligence Platform</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AAXIS Meta-Layer®
              </span>
              <span className="block text-3xl mt-4 text-slate-400">
                vs Traditional Integration (DataX)
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              AI-native architecture delivering 12x faster deployment, 60% cost reduction, 
              and 99.9% data accuracy through intelligent automation
            </p>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {aaxisAdvantages.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                    <item.icon className="w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sublabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-4 mb-8 border-b border-slate-800">
          {['capabilities', 'differentiators', 'results'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'capabilities' | 'differentiators' | 'results')}
              className={`px-6 py-3 font-semibold capitalize transition-all ${
                activeTab === tab 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Controls (columns + sort) */}
        {activeTab === 'capabilities' && (
          <div className="max-w-7xl mx-auto px-8 mb-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Columns</span>
                <div className="inline-flex rounded-md overflow-hidden border border-slate-700">
                  {[1,2,3].map((c) => (
                    <button
                      key={c}
                      onClick={() => setCapColumns(c)}
                      className={`px-2 py-1 text-xs ${capColumns===c ? 'bg-slate-700 text-white' : 'bg-transparent text-slate-400 hover:bg-slate-800'}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-xs text-slate-400">Sort</label>
                <select value={capSort} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCapSort(e.target.value as 'aaxis' | 'datax' | 'alpha')} className="bg-slate-900 text-xs text-slate-200 p-1 rounded border border-slate-700">
                  <option value="aaxis">AAXIS score</option>
                  <option value="datax">DataX score</option>
                  <option value="alpha">Category</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Capabilities Comparison */}
        {activeTab === 'capabilities' && (
          <div className={`${capGridClass} gap-4 px-8`}> 
            {competitiveMatrix.capabilities.slice().sort((a,b) => {
              if (capSort === 'aaxis') return b.aaxis.score - a.aaxis.score;
              if (capSort === 'datax') return b.datax.score - a.datax.score;
              return a.category.localeCompare(b.category);
            }).map((item, i) => (
              <CapabilityCard key={i} item={item} onShowDetail={(title: string, body: string) => setModalContent({ title, body })} />
            ))}
          </div>
        )}

        {/* Key Differentiators */}
        {activeTab === 'differentiators' && (
          <div className="grid grid-cols-2 gap-6">
            {competitiveMatrix.keyDifferentiators.map((diff, i) => {
              const Icon = diff.icon;
              return (
                <div 
                  key={i}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-3 flex-shrink-0">
                      <Icon className="w-full h-full" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold mb-3">{diff.title}</h3>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                          <div className="text-xs font-semibold text-emerald-400 mb-1">AAXIS</div>
                          <div className="text-sm text-slate-200">{diff.aaxis}</div>
                        </div>
                        
                        <div className="p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                          <div className="text-xs font-semibold text-slate-500 mb-1">DataX</div>
                          <div className="text-sm text-slate-400">{diff.datax}</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center gap-2 text-blue-400">
                        <ArrowUpRight className="w-4 h-4" />
                        <span className="text-sm font-semibold">{diff.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Client Results */}
        {activeTab === 'results' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Proven Client Outcomes</h2>
              <p className="text-slate-400">Real results from AAXIS deployments vs traditional DataX implementations</p>
            </div>
            
            <div className="grid gap-4">
              {competitiveMatrix.clientResults.map((result, i) => (
                <div key={i} className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="grid grid-cols-5 gap-6 items-center">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">CLIENT</div>
                      <div className="font-bold text-lg">{result.client}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-slate-500 mb-1">METRIC</div>
                      <div className="font-semibold">{result.metric}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-emerald-500 mb-1">AAXIS</div>
                      <div className="text-xl font-bold text-emerald-400">{result.aaxis}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-slate-500 mb-1">DATAX</div>
                      <div className="text-xl font-bold text-slate-500">{result.datax}</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xs text-blue-500 mb-1">IMPROVEMENT</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {result.improvement}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Calculator Teaser */}
            <div className="mt-12 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Calculate Your ROI</h3>
                  <p className="text-slate-300">See how AAXIS can transform your data operations</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2">
                  Launch Calculator
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

  {/* Bottom CTA Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-xl border border-purple-500/30">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Leave Legacy Integration Behind?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join Guitar Center, QXO, and Zenni Optical in the AI-powered data revolution. 
              Deploy in 2 weeks, not 6 months.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">
                Schedule AI Demo
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal component (simple) - rendered only when the competitive tab needs it */}
      {modalContent && <Modal content={modalContent} onClose={() => setModalContent(null)} />}
    </div>
  );
};

// Main App with Tabs
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pitch' | 'competitive'>('pitch');

  const tabs = [
    { id: 'pitch' as const, label: 'Data Adapter Pitch' },
    { id: 'competitive' as const, label: 'Competitive Analysis' },
  ];

  // Note: capability controls and modal are managed inside the competitive tab component

  return (
    <div className="min-h-screen">
      {/* Tab Navigation */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-1 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {activeTab === 'pitch' && <DataAdapterPitch />}
        {activeTab === 'competitive' && <AAXISvDataXInline />}
      </div>

      {/* Modal for competitive tab is rendered by the competitive component */}
    </div>
  );
};

export default App;

// CapabilityCard subcomponent (updated to accept onShowDetail)
const CapabilityCard: React.FC<{ item: Capability; onShowDetail: (title: string, body: string) => void }> = ({ item, onShowDetail }: { item: Capability; onShowDetail: (title: string, body: string) => void }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/60 backdrop-blur rounded-xl p-3 border border-white/6 hover:shadow-2xl hover:scale-[1.01] transition-transform duration-200">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-white truncate">{item.category}</h3>
          <p className="text-xs text-slate-400 truncate">{item.differentiator}</p>
        </div>
        <div className="text-xs text-slate-400">{item.aaxis.score}% / {item.datax.score}%</div>
      </div>

      <div className="grid grid-cols-2 gap-3 items-start">
        <div className="p-2 rounded-lg bg-emerald-900/20 border border-emerald-600/10">
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs font-semibold text-emerald-300">AAXIS</div>
            <div className="text-sm font-bold text-emerald-300">{item.aaxis.score}%</div>
          </div>
          <div className="h-2 bg-emerald-900/40 rounded-full overflow-hidden mb-2">
            <div style={{ width: `${item.aaxis.score}%` }} className="h-full bg-gradient-to-r from-emerald-400 to-green-300 transition-all duration-700" />
          </div>
          <div className="flex flex-wrap gap-1">
            {item.aaxis.features.map((f: string) => (
              <button
                key={f}
                onClick={() => onShowDetail(f, `${f} — example details and impact.`)}
                className="text-[10px] bg-emerald-600/20 text-emerald-200 px-2 py-0.5 rounded-full hover:bg-emerald-600/30 transition"
                title={`Show details for ${f}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="p-2 rounded-lg bg-slate-800/30 border border-slate-600/10">
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs font-semibold text-slate-300">DataX</div>
            <div className="text-sm font-bold text-slate-300">{item.datax.score}%</div>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
            <div style={{ width: `${item.datax.score}%` }} className="h-full bg-gradient-to-r from-slate-500 to-slate-400 transition-all duration-700" />
          </div>
          <div className="flex flex-wrap gap-1">
            {item.datax.features.map((f: string) => (
              <span key={f} className="text-[10px] bg-slate-700/40 text-slate-300 px-2 py-0.5 rounded-full">{f}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <button onClick={() => onShowDetail('Why it matters', item.differentiator)} className="text-xs bg-slate-700/30 hover:bg-slate-700/50 text-white px-3 py-1 rounded-md">Why it matters</button>
        <div className="text-xs text-slate-400">&nbsp;</div>
      </div>
    </div>
  );
};

// Modal component (simple)
const Modal: React.FC<{ content: { title: string; body: string }; onClose: () => void }> = ({ content, onClose }: { content: { title: string; body: string }; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-slate-900 rounded-xl p-6 w-full max-w-xl border border-white/6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">{content.title}</h3>
            <p className="text-sm text-slate-400">{content.body}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">Close</button>
        </div>
      </div>
    </div>
  );
};
