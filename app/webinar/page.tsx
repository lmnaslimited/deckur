'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Building2, Target, CheckCircle, Globe, Shield, ArrowRight, Workflow, BarChart3, MessageSquare, Calendar, DollarSign, FileText, Zap, TrendingUp, Star, Clock, Database, Lightbulb, Rocket, Award, Eye, Layers, Settings } from 'lucide-react';

const WebinarDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 0: Welcome
    {
      title: "Business Workflows Using LENS",
      content: (
        <div className="h-full flex flex-col">
          {/* Title Section */}
            <h1 className="text-4xl font-bold text-center">Business Workflows Using LENS</h1>
          
          
          {/* Content Section */}
          <div className="flex-1 flex">
            {/* Visual Section */}
            <div className="w-1/2 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-32 w-28 h-28 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
              </div>
              <div className="relative z-10 text-center">
                <Workflow className="w-32 h-32 text-white mx-auto mb-6 animate-bounce" />
                <div className="flex items-center justify-center space-x-4 text-white/80">
                  <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm text-lg">LMNAs</div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm text-lg">LENS</div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-1/2 p-8 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Streamline Your Business Operations</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform chaos into clarity with structured workflows that scale with your business growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg">Eliminate bottlenecks</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg">Clear accountability</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg">Scalable processes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 1: Why Do We Need Workflows?
    {
      title: "Why Do We Need Workflows?",
      content: (
        <div className="h-full flex flex-col">
          {/* Title Section */}
            <h1 className="text-4xl font-bold text-center">Why Do We Need Workflows?</h1>
          
          {/* Content Section */}
          <div className="flex-1 flex">
            {/* Visual Section */}
            <div className="w-1/2 p-8 flex items-center justify-center bg-gray-50">
              <div className="w-full max-w-md">
                <div className="bg-red-100 border-2 border-red-200 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Without Structure
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="bg-yellow-200 p-2 text-xs rounded transform rotate-1 hover:rotate-0 transition-transform">
                        Task {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                
                <ArrowRight className="w-8 h-8 text-gray-400 mx-auto mb-6" />
                
                <div className="bg-green-100 border-2 border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    With Structure
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-blue-200 p-3 rounded-lg text-center font-medium">To Do</div>
                    <div className="bg-yellow-200 p-3 rounded-lg text-center font-medium">In Progress</div>
                    <div className="bg-green-200 p-3 rounded-lg text-center font-medium">Done</div>
                  </div>
                      <p className="text-gray-700 italic">Clean, organized Kanban structure</p>

                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-1/2 p-8 flex items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-400">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">The Challenge</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>Small teams can work informally with verbal communication</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>Growth introduces complexity and coordination challenges</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-400">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">The Impact</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <span>Work gets delayed and accountability fades away</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <span>Structure is essential to maintain speed and quality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: Who Should Adopt Workflows?
    {
      title: "Who Should Adopt Workflows?",
      content: (
        <div className="h-full flex flex-col">
          {/* Title Section */}
            <h1 className="text-4xl font-bold text-center">Who Should Adopt Workflows?</h1>
          
          {/* Content Section */}
          <div className="flex-1 flex">
            {/* Visual Section */}
            <div className="w-1/2 p-8 bg-gray-50 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                  <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-blue-800">Sales</h3>
                  <p className="text-sm text-blue-600">Lead management</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-green-800">HR</h3>
                  <p className="text-sm text-green-600">Recruitment</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                  <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-purple-800">Finance</h3>
                  <p className="text-sm text-purple-600">Invoice processing</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                  <FileText className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-orange-800">Projects</h3>
                  <p className="text-sm text-orange-600">Task management</p>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-1/2 p-8 flex items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Department Examples</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-800">Sales Teams</h4>
                      <p className="text-gray-600">Lead management, deal progression, customer onboarding</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">HR Departments</h4>
                      <p className="text-gray-600">Recruitment, onboarding, performance reviews</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Finance Teams</h4>
                      <p className="text-gray-600">Invoice processing, expense approvals, budgeting</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800">Project Teams</h4>
                      <p className="text-gray-600">Task management, milestone tracking, deliverables</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfect for Companies With:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>More than 1 department</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Repeatable processes</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Hybrid or distributed teams</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Scaling from founders to functional roles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: How Workflows Help
    {
      title: "How Workflows Help",
      content: (
        <div className="h-full flex flex-col">
          {/* Title Section */}
            <h1 className="text-4xl font-bold text-center">How Workflows Help</h1>
          
          {/* Content Section */}
          <div className="flex-1 flex">
            {/* Visual Section */}
            <div className="w-1/2 p-8 bg-gray-50 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-red-100 p-4 text-center">
                    <h3 className="text-lg font-bold text-red-800">Without Workflows</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <div className="font-medium text-red-800">Verbal follow-ups</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <div className="font-medium text-red-800">No clear ownership</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <div className="font-medium text-red-800">Manual tracking</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <div className="font-medium text-red-800">Delays and rework</div>
                    </div>
                  </div>
                </div>
                
                <ArrowRight className="w-8 h-8 text-gray-400 mx-auto my-4" />
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-green-100 p-4 text-center">
                    <h3 className="text-lg font-bold text-green-800">With Workflows</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <div className="font-medium text-green-800">Defined steps</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <div className="font-medium text-green-800">RACI-aligned roles</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <div className="font-medium text-green-800">SLA-based progress</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <div className="font-medium text-green-800">Audit and escalation paths</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-1/2 p-8 flex items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Clear Process Documentation</h4>
                      <p className="text-gray-600">Every step is documented and standardized, eliminating confusion and ensuring consistency.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Defined Responsibilities</h4>
                      <p className="text-gray-600">RACI matrix ensures everyone knows their role and accountability in each process.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Automated Tracking</h4>
                      <p className="text-gray-600">SLA-based progress monitoring with automatic alerts and escalations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Quality Control</h4>
                      <p className="text-gray-600">Built-in audit trails and escalation paths prevent bottlenecks and ensure quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: From Chaos to Clarity
    {
      title: "From Chaos to Clarity – Structured Growth",
      content: (
        <div className="h-full flex flex-col">
          {/* Title Section */}
            <h1 className="text-4xl font-bold text-center">From Chaos to Clarity – Structured Growth</h1>
          
          
          {/* Content Section */}
          <div className="flex-1 flex">
            {/* Visual Section */}
            <div className="w-1/2 p-8 bg-gray-50 flex items-center justify-center">
              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="bg-yellow-100 rounded-full w-24 h-24 mx-auto mb-3 flex items-center justify-center">
                      <Users className="w-12 h-12 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-yellow-800">10 People</h3>
                    <div className="bg-yellow-50 p-3 rounded-lg mt-2">
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full w-24 h-24 mx-auto mb-3 flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-800">50 People</h3>
                    <div className="bg-orange-50 p-3 rounded-lg mt-2">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-orange-200 p-1 rounded text-xs">Sales</div>
                        <div className="bg-orange-200 p-1 rounded text-xs">HR</div>
                        <div className="bg-orange-200 p-1 rounded text-xs">Tech</div>
                        <div className="bg-orange-200 p-1 rounded text-xs">Ops</div>
                      </div>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-3 flex items-center justify-center">
                      <Target className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800">100+ People</h3>
                    <div className="bg-green-50 p-3 rounded-lg mt-2">
                      <div className="space-y-1">
                        <div className="bg-green-200 p-1 rounded text-xs text-center">CEO</div>
                        <div className="bg-green-300 p-1 rounded text-xs text-center">VPs</div>
                        <div className="bg-green-400 p-1 rounded text-xs text-center">Teams</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 p-4 rounded-xl">
                  <div className="flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-gray-600 mr-3" />
                    <p className="font-medium text-gray-800">Growth Curve: Structure Need Increases</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-1/2 p-8 flex items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">Stage 1: Small Team (10 People)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ad hoc processes work fine</li>
                    <li>• Verbal communication is sufficient</li>
                    <li>• Overlapping responsibilities are manageable</li>
                    <li>• Everyone knows everyone</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-400">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">Stage 2: Growing Team (50 People)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Departmental structure emerging</li>
                    <li>• Communication gaps appearing</li>
                    <li>• Friction between departments visible</li>
                    <li>• Need for coordination increases</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-green-400">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Stage 3: Mature Team (100+ People)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Full RACI implementation needed</li>
                    <li>• Automated workflow management</li>
                    <li>• Clear hierarchies and processes</li>
                    <li>• Mapped workflows are essential</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Workflows in a Decentralized Environment
    {
      title: "Workflows in a Decentralized Environment",
      content: (
        <div className="h-full flex flex-col">
          {/* Title Section */}
            <h1 className="text-4xl font-bold text-center">Workflows in a Decentralized Environment</h1>
          
          {/* Content Section */}
          <div className="flex-1 flex">
            {/* Visual Section */}
            <div className="w-1/2 p-8 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Globe className="w-full h-full" />
              </div>
              
              <div className="relative z-10 text-white">
                <div className="text-center mb-8">
                  <Globe className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                  <h2 className="text-2xl font-bold mb-4">Global Team Coordination</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                    <h3 className="font-semibold">Mumbai</h3>
                    <p className="text-sm text-blue-200">Development</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-purple-300" />
                    <h3 className="font-semibold">Bangalore</h3>
                    <p className="text-sm text-purple-200">Sales & Marketing</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-green-300" />
                    <h3 className="font-semibold">Chennai</h3>
                    <p className="text-sm text-green-200">Operations</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-1/2 p-8 flex items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Challenges of Distributed Teams</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>Different time zones create communication delays</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>Lack of visibility into team progress</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>Tasks falling through communication gaps</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">How Workflows Help</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                      <div>
                        <h4 className="font-semibold">Enable Async Collaboration</h4>
                        <p className="text-sm text-gray-600">Work continues across time zones</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center"></div>
                    <div className="flex items-center">
                      <Eye className="w-6 h-6 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-semibold">Provide Complete Visibility</h4>
                        <p className="text-sm text-gray-600">Everyone sees the same status</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-6 h-6 text-purple-600 mr-3" />
                      <div>
                        <h4 className="font-semibold">Ensure Accountability</h4>
                        <p className="text-sm text-gray-600">Clear ownership and escalation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: LENS Framework Overview
    {
      title: "LENS Framework Overview",
      content: (
        <div className="h-full flex flex-col">
            <h1 className="text-4xl font-bold text-center">LENS Framework Overview</h1>
          
          <div className="flex-1 flex">
            <div className="w-1/2 p-8 bg-gray-50 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 max-w-lg">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <Layers className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-800 mb-2">L</h3>
                  <p className="text-blue-600">Layers</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <Eye className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">E</h3>
                  <p className="text-green-600">Entity</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <Workflow className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-800 mb-2">N</h3>
                  <p className="text-orange-600">Nodes</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <Settings className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-2">S</h3>
                  <p className="text-purple-600">States</p>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 p-8 flex items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">LENS Components</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-bold text-blue-800">Layers</h4>
                      <p className="text-gray-600">Hierarchical organization of workflow components</p>
                    </div>
                    
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-bold text-green-800">Entity</h4>
                      <p className="text-gray-600">The core object moving through the workflow</p>
                    </div>
                    
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h4 className="font-bold text-orange-800">Nodes</h4>
                      <p className="text-gray-600">Individual steps or decision points in the process</p>
                    </div>
                    
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="font-bold text-purple-800">States</h4>
                      <p className="text-gray-600">Current status and condition of the entity</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
                    <h4 className="font-bold text-gray-800">Key Insight</h4>
                  </div>
                  <p className="text-gray-700">LENS provides a structured approach to modeling any business process, ensuring consistency and scalability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: LENS in Action - Sales Pipeline
    {
      title: "LENS in Action - Sales Pipeline",
      content: (
        <div className="h-full flex flex-col">
            <h1 className="text-4xl font-bold text-center">LENS in Action - Sales Pipeline</h1>
          
          <div className="flex-1 flex">
            <div className="w-1/2 p-8 bg-gray-50 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-center mb-6">Sales Pipeline Flow</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                      <div className="flex-1 bg-blue-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-800">Lead Generation</h4>
                        <p className="text-sm text-blue-600">Marketing qualified leads</p>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                      <div className="flex-1 bg-green-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-800">Qualification</h4>
                        <p className="text-sm text-green-600">Sales team validation</p>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                      <div className="flex-1 bg-orange-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-orange-800">Proposal</h4>
                        <p className="text-sm text-orange-600">Deal structuring</p>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                      <div className="flex-1 bg-purple-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-800">Closure</h4>
                        <p className="text-sm text-purple-600">Contract signing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 p-8 flex items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">LENS Application</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Entity: Sales Opportunity</h4>
                      <p className="text-gray-600">The lead/prospect moving through the pipeline</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Nodes: Pipeline Stages</h4>
                      <p className="text-gray-600">Lead Gen → Qualification → Proposal → Closure</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">States: Opportunity Status</h4>
                      <p className="text-gray-600">New, Qualified, Proposal Sent, Won/Lost</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Layers: Team Structure</h4>
                      <p className="text-gray-600">Marketing → SDR → AE → Sales Manager</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-3">Benefits Achieved</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Clear handoff between teams</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Automated follow-up reminders</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Pipeline visibility for management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Implementation Roadmap
    {
      title: "Implementation Roadmap",
      content: (
        <div className="h-full flex flex-col">
            <h1 className="text-4xl font-bold text-center">Implementation Roadmap</h1>
          
          <div className="flex-1 flex">
            <div className="w-1/2 p-8 bg-gray-50 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-blue-400">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                      <h3 className="text-lg font-bold text-blue-800">Assessment</h3>
                    </div>
                    <p className="text-gray-600">Identify current processes and pain points</p>
                    <div className="mt-2 text-sm text-blue-600">Duration: 1-2 weeks</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-green-400">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                      <h3 className="text-lg font-bold text-green-800">Design</h3>
                    </div>
                    <p className="text-gray-600">Map workflows using LENS framework</p>
                    <div className="mt-2 text-sm text-green-600">Duration: 2-3 weeks</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-orange-400">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                      <h3 className="text-lg font-bold text-orange-800">Pilot</h3>
                    </div>
                    <p className="text-gray-600">Test with one department or process</p>
                    <div className="mt-2 text-sm text-orange-600">Duration: 4-6 weeks</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-purple-400">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                      <h3 className="text-lg font-bold text-purple-800">Scale</h3>
                    </div>
                    <p className="text-gray-600">Roll out across all departments</p>
                    <div className="mt-2 text-sm text-purple-600">Duration: 8-12 weeks</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 p-8 flex items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Success Factors</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Leadership Buy-in</h4>
                        <p className="text-gray-600">Executive sponsorship is crucial for adoption</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Team Training</h4>
                        <p className="text-gray-600">Comprehensive training on new processes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <BarChart3 className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Continuous Monitoring</h4>
                        <p className="text-gray-600">Regular review and optimization</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Quick Wins</h4>
                        <p className="text-gray-600">Demonstrate value early in the process</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Expected Outcomes</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">30%</div>
                      <div className="text-sm text-gray-600">Faster Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">50%</div>
                      <div className="text-sm text-gray-600">Error Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">40%</div>
                      <div className="text-sm text-gray-600">Better Visibility</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">25%</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Q&A and Thank You
    {
      title: "Q&A and Thank You",
      content: (
        <div className="h-full flex flex-col">
            <h1 className="text-4xl font-bold text-center">Questions & Thank You</h1>
          
          <div className="flex-1 flex">
            <div className="w-1/2 p-8 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Star className="w-full h-full" />
              </div>
              
              <div className="relative z-10 text-center text-white">
                <MessageSquare className="w-24 h-24 mx-auto mb-6 text-purple-300 animate-pulse" />
                <h2 className="text-3xl font-bold mb-4">Let's Discuss</h2>
                <p className="text-xl text-purple-200 mb-8">Your workflow transformation journey</p>
                
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-lg">Questions Welcome</h3>
                    <p className="text-purple-200">Share your specific challenges</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-lg">Next Steps</h3>
                    <p className="text-purple-200">Let's plan your implementation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-8">
                  <Rocket className="w-20 h-20 mx-auto mb-4 text-purple-600" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Start your workflow optimization journey with LENS
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Get Started Today</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="text-gray-700">Schedule a consultation</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Eye className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">Process assessment</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Zap className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">Quick implementation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      For attending our webinar on Business Workflows using LENS
                    </p>
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