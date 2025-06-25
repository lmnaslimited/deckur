'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Building2, Target, CheckCircle, Globe, Shield, ArrowRight, Workflow, BarChart3, MessageSquare, Calendar, DollarSign, FileText } from 'lucide-react';

const WebinarDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 0: Welcome
    {
      title: "Business Workflows Using LENS",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-32 w-28 h-28 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
          </div>
          <div className="relative z-10">
            <div className="mb-8">
              <Workflow className="w-20 h-20 text-white mx-auto mb-4 animate-bounce" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
              Business Workflows
            </h1>
            <h2 className="text-4xl font-light text-blue-200 mb-8">Using LENS</h2>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">LMNAs</div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">LENS</div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 1: Why Do We Need Workflows?
    {
      title: "Why Do We Need Workflows?",
      content: (
        <div className="p-8 h-full">
          <div className="grid grid-cols-2 gap-12 h-full">
            <div className="flex flex-col justify-center">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-4">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                  <MessageSquare className="w-8 h-8 mr-3" />
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
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mb-4">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3" />
                  With Structure
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-100 p-3 rounded-lg">To Do</div>
                  <div className="bg-yellow-100 p-3 rounded-lg">In Progress</div>
                  <div className="bg-green-100 p-3 rounded-lg">Done</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">The Challenge:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Small teams can work informally</li>
                    <li>• Growth introduces complexity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">The Impact:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Work gets delayed, accountability fades</li>
                    <li>• Structure is needed to maintain speed</li>
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
        <div className="p-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <DollarSign className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Sales</h3>
              <p className="text-blue-600">Lead management, deal progression, customer onboarding</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <Users className="w-16 h-16 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">HR</h3>
              <p className="text-green-600">Recruitment, onboarding, performance reviews</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <BarChart3 className="w-16 h-16 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-2">Finance</h3>
              <p className="text-purple-600">Invoice processing, expense approvals, budgeting</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <FileText className="w-16 h-16 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-orange-800 mb-2">Projects</h3>
              <p className="text-orange-600">Task management, milestone tracking, deliverables</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfect for:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Companies with 1 department
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Teams with repeatable processes
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Hybrid or distributed setups
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Scaling from founders to functional roles
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
        <div className="p-8 h-full flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="bg-red-50 p-8">
                  <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Without Workflows</h3>
                  <div className="space-y-4">
                    <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-400">
                      <div className="font-semibold text-red-800">Verbal follow-ups</div>
                      <div className="text-red-600 text-sm">Constant interruptions and confusion</div>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-400">
                      <div className="font-semibold text-red-800">No clear ownership</div>
                      <div className="text-red-600 text-sm">Tasks fall through cracks</div>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-400">
                      <div className="font-semibold text-red-800">Manual tracking</div>
                      <div className="text-red-600 text-sm">No visibility into progress</div>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-400">
                      <div className="font-semibold text-red-800">Delays and rework</div>
                      <div className="text-red-600 text-sm">Costly mistakes and bottlenecks</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">With Workflows</h3>
                  <div className="space-y-4">
                    <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-400">
                      <div className="font-semibold text-green-800">Defined steps</div>
                      <div className="text-green-600 text-sm">Clear process documentation</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-400">
                      <div className="font-semibold text-green-800">RACI-aligned roles</div>
                      <div className="text-green-600 text-sm">Everyone knows their responsibility</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-400">
                      <div className="font-semibold text-green-800">SLA-based progress</div>
                      <div className="text-green-600 text-sm">Automated tracking and alerts</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-400">
                      <div className="font-semibold text-green-800">Audit and escalation paths</div>
                      <div className="text-green-600 text-sm">Built-in quality control</div>
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
        <div className="p-8 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="text-center flex-1">
              <div className="bg-yellow-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">10-Person Team</h3>
              <p className="text-yellow-700 mb-4">Ad hoc processes work fine</p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-yellow-300 rounded-full"></div>
                  ))}
                </div>
                <p className="text-sm text-yellow-600 mt-2">Overlapping responsibilities</p>
              </div>
            </div>
            
            <ArrowRight className="w-12 h-12 text-gray-400 mx-8" />
            
            <div className="text-center flex-1">
              <div className="bg-orange-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-2">50-Person Team</h3>
              <p className="text-orange-700 mb-4">Structure emerging</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-orange-200 p-2 rounded text-xs">Sales</div>
                  <div className="bg-orange-200 p-2 rounded text-xs">HR</div>
                  <div className="bg-orange-200 p-2 rounded text-xs">Tech</div>
                </div>
                <p className="text-sm text-orange-600 mt-2">Departmental friction visible</p>
              </div>
            </div>
            
            <ArrowRight className="w-12 h-12 text-gray-400 mx-8" />
            
            <div className="text-center flex-1">
              <div className="bg-green-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">100+ Person Team</h3>
              <p className="text-green-700 mb-4">Full RACI and automation</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>CEO</span>
                    <div className="w-16 h-1 bg-green-300 rounded"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>VPs</span>
                    <div className="w-12 h-1 bg-green-400 rounded"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Teams</span>
                    <div className="w-8 h-1 bg-green-500 rounded"></div>
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">Mapped workflows</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 p-6 rounded-xl">
              <div className="flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-gray-600 mr-4" />
                <p className="text-lg font-medium text-gray-800">
                  Growth Curve: The bigger you get, the more structure you need
                </p>
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
        <div className="p-8 h-full flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-12 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Globe className="w-full h-full" />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <Globe className="w-20 h-20 mx-auto mb-4 text-blue-300" />
                  <h2 className="text-3xl font-bold mb-4">Global Team Coordination</h2>
                </div>
                
                <div className="grid grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mumbai</h3>
                    <p className="text-blue-200">Development Team</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-purple-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Bangalore</h3>
                    <p className="text-purple-200">Sales & Marketing</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-green-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Chennai</h3>
                    <p className="text-green-200">Operations</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                    <h4 className="font-semibold mb-2">Enable Async Collaboration</h4>
                    <p className="text-sm text-gray-300">Work continues across time zones</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <BarChart3 className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                    <h4 className="font-semibold mb-2">Unified Dashboards</h4>
                    <p className="text-sm text-gray-300">Single source of truth for all teams</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-3 text-green-300" />
                    <h4 className="font-semibold mb-2">No Task Falls Through</h4>
                    <p className="text-sm text-gray-300">Automatic escalations and reminders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Reduce Risk with RACI + Workflows
    {
      title: "Reduce Risk with RACI + Workflows",
      content: (
        <div className="p-8 h-full">
          <div className="grid grid-cols-2 gap-12 h-full">
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">RACI Matrix Example</h3>
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left font-semibold">Role</th>
                        <th className="p-3 text-center font-semibold text-blue-600">R</th>
                        <th className="p-3 text-center font-semibold text-green-600">A</th>
                        <th className="p-3 text-center font-semibold text-yellow-600">C</th>
                        <th className="p-3 text-center font-semibold text-purple-600">I</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-medium">Requester</td>
                        <td className="p-3 text-center"><div className="w-4 h-4 bg-blue-500 rounded-full mx-auto"></div></td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center">-</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-3 font-medium">Manager</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center"><div className="w-4 h-4 bg-green-500 rounded-full mx-auto"></div></td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center">-</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-medium">Finance</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center"><div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto"></div></td>
                        <td className="p-3 text-center">-</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-3 font-medium">Procurement</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center">-</td>
                        <td className="p-3 text-center"><div className="w-4 h-4 bg-purple-500 rounded-full mx-auto"></div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">R</div>
                    <h4 className="text-xl font-semibold text-blue-800">Responsible</h4>
                  </div>
                  <p className="text-blue-700">Executes the task or deliverable</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">A</div>
                    <h4 className="text-xl font-semibold text-green-800">Accountable</h4>
                  </div>
                  <p className="text-green-700">Owns the decision and outcome</p>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">C</div>
                    <h4 className="text-xl font-semibold text-yellow-800">Consulted</h4>
                  </div>
                  <p className="text-yellow-700">Provides input and expertise</p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">I</div>
                    <h4 className="text-xl font-semibold text-purple-800">Informed</h4>
                  </div>
                  <p className="text-purple-700">Kept updated on progress</p>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Clear ownership avoids duplication</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />No inaction or confusion</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Every step is governed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Summary
    {
      title: "Summary – Why This Matters",
      content: (
        <div className="p-8 h-full flex items-center justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl p-12 shadow-2xl">
              <div className="text-center mb-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Takeaways</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-400">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-800">Chaos doesn't scale — workflows do</h3>
                  </div>
                  <p className="text-gray-600 ml-16">What works for 10 people breaks at 50, and completely fails at 100+</p>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">Growth needs clarity, not more meetings</h3>
                  <p className="text-gray-600 ml-16">What works for 10 people breaks at 50, and completely fails at 100+</p>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">Growth needs clarity, not more meetings</h3>
                  </div>
                  <p className="text-gray-600 ml-16">LENS enables structured decision-making without bureaucracy</p>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-400">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Workflow className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">LENS enables fast, flexible, RACI-driven process design</h3>
                  </div>
                  <p className="text-gray-600 ml-16">Build workflows that adapt to your business, not the other way around</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold">Try LENS</p>
                      <p className="text-sm opacity-90">Build your first workflow</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold">Get Support</p>
                      <p className="text-sm opacity-90">Tailored workflow session</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <FileText className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold">Resources</p>
                      <p className="text-sm opacity-90">Templates & use cases</p>
                    </div>
                  </div>
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

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Workflow className="w-8 h-8 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-800">Business Workflows Using LENS</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        <div className="h-full bg-white m-4 rounded-lg shadow-lg relative">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-t p-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Slide indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default WebinarDeck;