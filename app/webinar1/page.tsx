'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Building2, Target, CheckCircle, Globe, Shield, ArrowRight, Workflow, BarChart3, MessageSquare, Calendar, DollarSign, FileText, Zap, TrendingUp, Star, Clock, Database, Lightbulb, Rocket, Award, Eye, Layers, Settings, UserCheck } from 'lucide-react';

const WebinarDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 const slides = [
    // Slide 1: Welcome
    {
      title: "Business Workflows Using LENS",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
              <Workflow className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Business Workflows Using LENS
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to structured growth through intelligent workflow design
          </p>
          <div className="mt-8 flex space-x-4">
            <div className="px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">LMNAs</div>
            <div className="px-6 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold">LENS</div>
          </div>
        </div>
      )
    },
    
    // Slide 2: Why Do We Need Workflows?
    {
      title: "Why Do We Need Workflows?",
      content: (
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                Without Structure
              </h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {Array.from({length: 16}).map((_, i) => (
                  <div key={i} className="w-8 h-6 bg-yellow-300 rounded transform rotate-2 shadow-sm"></div>
                ))}
              </div>
              <p className="text-gray-700 italic">Chaos of sticky notes and informal processes</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                With Workflows
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded text-center text-sm font-medium">To Do</div>
                <div className="bg-yellow-100 p-3 rounded text-center text-sm font-medium">In Progress</div>
                <div className="bg-green-100 p-3 rounded text-center text-sm font-medium">Done</div>
              </div>
              <p className="text-gray-700 italic">Clean, organized Kanban structure</p>
            </div>
          </div>
          
          <div className="col-span-2 grid grid-cols-2 gap-6 mt-8">
            {[
              { icon: Users, text: "Small teams can work informally", color: "blue" },
              { icon: TrendingUp, text: "Growth introduces complexity", color: "yellow" },
              { icon: Clock, text: "Work gets delayed, accountability fades", color: "red" },
              { icon: Target, text: "Structure is needed to maintain speed", color: "green" }
            ].map((item, i) => (
              <div key={i} className={`bg-${item.color}-50 p-4 rounded-lg border border-${item.color}-200 flex items-center space-x-3`}>
                <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                <span className="text-gray-800 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // Slide 3: Who Should Adopt Workflows?
    {
      title: "Who Should Adopt Workflows?",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="grid grid-cols-2 gap-8 mb-12 w-full max-w-4xl">
            {[
              { icon: Building2, title: "Sales", desc: "Lead management & deal progression", color: "blue" },
              { icon: Users, title: "HR", desc: "Recruitment & employee onboarding", color: "green" },
              { icon: TrendingUp, title: "Finance", desc: "Approval workflows & budgeting", color: "purple" },
              { icon: Target, title: "Projects", desc: "Task management & delivery", color: "orange" }
            ].map((dept, i) => (
              <div key={i} className={`bg-gradient-to-br from-${dept.color}-50 to-${dept.color}-100 p-8 rounded-2xl border-2 border-${dept.color}-200 text-center transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                <dept.icon className={`w-16 h-16 text-${dept.color}-600 mx-auto mb-4`} />
                <h3 className={`text-2xl font-bold text-${dept.color}-800 mb-2`}>{dept.title}</h3>
                <p className="text-gray-700">{dept.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            {[
              "Companies with >1 department",
              "Teams with repeatable processes",
              "Hybrid or distributed setups",
              "Businesses scaling from founders to functional roles"
            ].map((point, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border-2 border-gray-200 flex items-center space-x-3 shadow-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-800 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // Slide 4: How Workflows Help
    {
      title: "How Workflows Help",
      content: (
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-5xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
              <div className="grid grid-cols-2">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-8">
                  <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    Without Workflows
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Verbal follow-ups",
                      "No clear ownership", 
                      "Manual tracking",
                      "Delays and rework"
                    ].map((item, i) => (
                      <div key={i} className="bg-red-100 p-4 rounded-lg border border-red-200 text-red-800 font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8">
                  <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    With Workflows
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Defined steps",
                      "RACI-aligned roles",
                      "SLA-based progress", 
                      "Audit and escalation paths"
                    ].map((item, i) => (
                      <div key={i} className="bg-green-100 p-4 rounded-lg border border-green-200 text-green-800 font-medium flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: From Chaos to Clarity
    {
      title: "From Chaos to Clarity – Structured Growth",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-6xl">
            <div className="relative">
              {/* Growth curve background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 600 300" className="w-full h-64">
                  <path d="M50,250 Q200,200 350,150 T550,50" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </div>
              
              <div className="grid grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    size: "10-Person Team",
                    visual: "Huddle",
                    desc: "Overlapping responsibilities",
                    color: "yellow",
                    users: 3
                  },
                  {
                    size: "50-Person Team", 
                    visual: "Departments",
                    desc: "Friction visible between teams",
                    color: "orange",
                    users: 6
                  },
                  {
                    size: "100-Person Team",
                    visual: "Org Chart",
                    desc: "Mapped workflows & clear structure",
                    color: "green", 
                    users: 12
                  }
                ].map((stage, i) => (
                  <div key={i} className={`bg-gradient-to-br from-${stage.color}-50 to-${stage.color}-100 p-6 rounded-2xl border-2 border-${stage.color}-200 text-center transform hover:scale-105 transition-all duration-300 shadow-xl`}>
                    <h3 className={`text-xl font-bold text-${stage.color}-800 mb-4`}>{stage.size}</h3>
                    
                    <div className="flex justify-center mb-4">
                      <div className={`grid ${stage.users <= 6 ? 'grid-cols-3' : 'grid-cols-4'} gap-1`}>
                        {Array.from({length: stage.users}).map((_, j) => (
                          <div key={j} className={`w-6 h-6 bg-${stage.color}-400 rounded-full`}></div>
                        ))}
                      </div>
                    </div>
                    
                    <p className={`text-${stage.color}-700 font-medium mb-2`}>{stage.visual}</p>
                    <p className="text-sm text-gray-600">{stage.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">10</div>
                  <div className="text-sm text-blue-600">Ad hoc OK</div>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-500" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-800">50</div>
                  <div className="text-sm text-orange-600">Structure emerging</div>
                </div>
                <ArrowRight className="w-6 h-6 text-orange-500" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">100</div>
                  <div className="text-sm text-green-600">Full RACI & automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Decentralized Environment
    {
      title: "Workflows in a Decentralized Environment",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative w-full max-w-4xl mb-12">
            {/* Map visualization */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border-2 border-blue-200 shadow-xl">
              <div className="relative h-64">
                {/* Cities with connections */}
                {[
                  { city: "Mumbai", x: "20%", y: "40%" },
                  { city: "Bangalore", x: "25%", y: "70%" },
                  { city: "Delhi", x: "30%", y: "20%" },
                  { city: "Chennai", x: "35%", y: "80%" },
                  { city: "Pune", x: "18%", y: "50%" }
                ].map((location, i) => (
                  <div key={i} className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                       style={{ left: location.x, top: location.y }}>
                    <div className="relative">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-blue-800">
                        {location.city}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {[
                    {x1: "20%", y1: "40%", x2: "25%", y2: "70%"},
                    {x1: "30%", y1: "20%", x2: "20%", y2: "40%"},
                    {x1: "25%", y1: "70%", x2: "35%", y2: "80%"},
                    {x1: "18%", y1: "50%", x2: "30%", y2: "20%"}
                  ].map((line, i) => (
                    <line key={i} {...line} stroke="url(#connectionGradient)" strokeWidth="3" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                    </line>
                  ))}
                </svg>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
            {[
              { icon: Clock, text: "Enable async collaboration", color: "blue" },
              { icon: Target, text: "Unified dashboards bring clarity", color: "purple" },
              { icon: Shield, text: "No task falls through gaps", color: "green" }
            ].map((benefit, i) => (
              <div key={i} className={`bg-gradient-to-br from-${benefit.color}-50 to-${benefit.color}-100 p-6 rounded-xl border-2 border-${benefit.color}-200 text-center transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                <benefit.icon className={`w-12 h-12 text-${benefit.color}-600 mx-auto mb-4`} />
                <p className={`text-${benefit.color}-800 font-semibold`}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // Slide 7: RACI + Workflows
    {
      title: "Reduce Risk with RACI + Workflows",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-5xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                <h3 className="text-xl font-bold text-center">Purchase Request Workflow - RACI Matrix</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Process Step</th>
                      <th className="p-4 text-center font-semibold text-red-600">R</th>
                      <th className="p-4 text-center font-semibold text-blue-600">A</th>
                      <th className="p-4 text-center font-semibold text-green-600">C</th>
                      <th className="p-4 text-center font-semibold text-purple-600">I</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { step: "Request Submission", r: "Requester", a: "Dept Head", c: "Finance", i: "Procurement" },
                      { step: "Budget Approval", r: "Finance", a: "Finance Head", c: "Dept Head", i: "Requester" },
                      { step: "Vendor Selection", r: "Procurement", a: "Procurement Head", c: "Requester", i: "Finance" },
                      { step: "Final Approval", r: "Procurement", a: "CEO", c: "All Heads", i: "Requester" }
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-4 font-medium text-gray-800">{row.step}</td>
                        <td className="p-4 text-center">
                          <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">{row.r}</div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{row.a}</div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{row.c}</div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">{row.i}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <div className="font-bold text-red-800 flex items-center mb-2">
                    <div className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center text-sm font-bold mr-2">R</div>
                    Responsible
                  </div>
                  <p className="text-red-700 text-sm">Executes the work</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="font-bold text-blue-800 flex items-center mb-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded flex items-center justify-center text-sm font-bold mr-2">A</div>
                    Accountable
                  </div>
                  <p className="text-blue-700 text-sm">Owns the decision</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <div className="font-bold text-green-800 flex items-center mb-2">
                    <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm font-bold mr-2">C</div>
                    Consulted
                  </div>
                  <p className="text-green-700 text-sm">Provides input</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <div className="font-bold text-purple-800 flex items-center mb-2">
                    <div className="w-6 h-6 bg-purple-500 text-white rounded flex items-center justify-center text-sm font-bold mr-2">I</div>
                    Informed
                  </div>
                  <p className="text-purple-700 text-sm">Receives updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Summary
    {
      title: "Summary – Why This Matters",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-4xl">
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-200">
                <div className="text-center mb-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Key Takeaways</h2>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { 
                      icon: Zap, 
                      title: "Chaos doesn't scale", 
                      subtitle: "workflows do",
                      color: "red"
                    },
                    { 
                      icon: Target, 
                      title: "Growth needs clarity", 
                      subtitle: "not more meetings",
                      color: "blue"
                    },
                    { 
                      icon: Workflow, 
                      title: "LENS enables fast", 
                      subtitle: "flexible, RACI-driven design",
                      color: "green"
                    }
                  ].map((takeaway, i) => (
                    <div key={i} className={`bg-gradient-to-br from-${takeaway.color}-50 to-${takeaway.color}-100 p-6 rounded-2xl border-2 border-${takeaway.color}-200 text-center transform hover:scale-105 transition-all duration-300`}>
                      <takeaway.icon className={`w-12 h-12 text-${takeaway.color}-600 mx-auto mb-4`} />
                      <h3 className={`text-lg font-bold text-${takeaway.color}-800 mb-1`}>{takeaway.title}</h3>
                      <p className={`text-sm text-${takeaway.color}-700 font-medium`}>{takeaway.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workflows?</h3>
              <p className="text-lg opacity-90 mb-6">LENS enables fast, flexible, RACI-driven process design</p>
              <div className="flex justify-center space-x-4">
                <div className="bg-white bg-opacity-20 px-6 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-semibold">Structured Growth</span>
                </div>
                <div className="bg-white bg-opacity-20 px-6 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-semibold">Clear Accountability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Next Steps
    {
      title: "Next Steps",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Take the next step towards structured growth with LENS workflows</p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  icon: Workflow,
                  title: "Try LENS",
                  desc: "Build your first workflow in LENS platform",
                  color: "blue",
                  action: "Start Building"
                },
                {
                  icon: UserCheck,
                  title: "Get Expert Help",
                  desc: "Reach out to LMNAs for a tailored workflow session",
                  color: "green", 
                  action: "Contact Us"
                },
                {
                  icon: Target,
                  title: "Explore Resources",
                  desc: "Download templates or get inspired by our use cases",
                  color: "purple",
                  action: "Browse Library"
                }
              ].map((step, i) => (
                <div key={i} className={`bg-gradient-to-br from-${step.color}-50 to-${step.color}-100 p-8 rounded-2xl border-2 border-${step.color}-200 text-center transform hover:scale-105 transition-all duration-300 shadow-xl group`}>
                  <step.icon className={`w-16 h-16 text-${step.color}-600 mx-auto mb-6`} />
                  <h3 className={`text-2xl font-bold text-${step.color}-800 mb-4`}>{step.title}</h3>
                  <p className="text-gray-700 mb-6">{step.desc}</p>
                  <button className={`bg-${step.color}-500 hover:bg-${step.color}-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 group-hover:shadow-lg`}>
                    {step.action}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <p className="text-gray-600 mb-4">Questions? Need help getting started?</p>
                <div className="flex justify-center space-x-6">
                  <div className="text-sm">
                    <span className="font-semibold text-blue-600">Email:</span> hello@lmnas.com
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-purple-600">Web:</span> www.lmnas.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-800">Business Workflows Using LENS</h1>
          <div className="text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        <div className="h-full p-6">
          <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-t p-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>
        
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            {slides[currentSlide].title}
          </h2>
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default WebinarDeck;