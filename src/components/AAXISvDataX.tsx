import React, { useState } from 'react';
import { 
  Brain, Cpu, Users, 
  ChevronRight, Sparkles, 
  DollarSign, Target, Rocket, CheckCircle, X,
  ArrowUpRight, Globe
} from 'lucide-react';

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

const AAXISvDataX: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'differentiators' | 'results'>('capabilities');

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

        {/* Capabilities Comparison */}
        {activeTab === 'capabilities' && (
          <div className="grid gap-6">
            {competitiveMatrix.capabilities.map((item, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">{item.category}</h3>
                  <p className="text-sm text-blue-400">{item.differentiator}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {/* AAXIS Column */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-emerald-400">AAXIS</span>
                      <span className="text-2xl font-bold">{item.aaxis.score}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden mb-3">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-1000"
                        style={{ width: `${item.aaxis.score}%` }}
                      />
                    </div>
                    <div className="space-y-1">
                      {item.aaxis.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* DataX Column */}
                  <div className="relative opacity-60">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-slate-400">DataX</span>
                      <span className="text-2xl font-bold">{item.datax.score}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden mb-3">
                      <div 
                        className="h-full bg-gradient-to-r from-slate-600 to-slate-500 transition-all duration-1000"
                        style={{ width: `${item.datax.score}%` }}
                      />
                    </div>
                    <div className="space-y-1">
                      {item.datax.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm">
                          <X className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default AAXISvDataX;
