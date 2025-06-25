
"use client";
import { Card } from '@repo/ui/components/ui/card';
import {   BarChart3, Brain, Clock, Database, LineChart, Boxes, Settings, Mail, Linkedin, Globe, XCircle, Rocket, Users, Shield, Zap, Activity, CheckCircle2, Eye, Handshake, Package, RefreshCw, Target, Wrench, ArrowRight, Award, Calendar, DollarSign, Factory, FileText, MessageSquare, Play, TrendingUp, Building2, CheckCircle, Layers, Lightbulb, Star, Workflow, ArrowDown, UserCheck } from 'lucide-react';

const PitchDeck = () => {

  // const slides = [
  //   // Slide 1: Title Slide
  //   <div key="title" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
  //     <h1 className="text-4xl font-bold mb-4">Digitally Empowering Custom Tank Manufacturing</h1>
  //     <h2 className="text-2xl font-semibold">Tank Vision x LMNAs — An Intelligent Sales-to-Execution Journey</h2>
  //     <div className="mt-8 space-y-2">
  //       <p className="text-xl">Presented by</p>
  //       <p className="text-2xl font-bold">Arunkumar Ganesan</p>
  //       <p className="text-lg">Founder & CEO, LMNAs</p>
  //     </div>
  //     <Factory className="w-16 h-16 mt-8" />
  //   </div>,

  //   // Slide 2: The Problem
  //   <div key="problem" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">The Problem</h2>
  //     <div className="grid grid-cols-1  gap-6">
  //       <Card className="p-6 bg-red-50 shadow-none">
  //         <h3 className="text-xl font-semibold mb-4 text-red-700">Current Challenges</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <XCircle className="w-5 h-5 mr-2 text-red-500 mt-1" />
  //             <span>ERP system mid-deployment and underperforming</span>
  //           </li>
  //           <li className="flex items-start">
  //             <FileText className="w-5 h-5 mr-2 text-red-500 mt-1" />
  //             <span>Heavy reliance on manual processes and spreadsheets</span>
  //           </li>
  //         </ul>
  //       </Card>
  //       <Card className="p-6 bg-red-50 shadow-none">
  //         <h3 className="text-xl font-semibold mb-4 text-red-700">Impact on Business</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <Target className="w-5 h-5 mr-2 text-red-500 mt-1" />
  //             <span>Estimation errors and misalignment between Sales and Engineering</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Users className="w-5 h-5 mr-2 text-red-500 mt-1" />
  //             <span>Lack of collaboration tools leading to siloed teams</span>
  //           </li>
  //         </ul>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Slide 3: LMNAs Solution Framework
  //   <div key="solution" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">LMNAs Solution Framework</h2>
  //     <div className="text-center mb-6">
  //       <h3 className="text-xl font-semibold text-blue-600">Powered by LENS CPQ, LUMI & Insights</h3>
  //     </div>
  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //       <Card className="p-6 bg-blue-50 shadow-none">
  //         <div className="text-center">
  //           <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">CPQ</h4>
  //           <p className="text-sm">Dynamic tank configuration and accurate costing</p>
  //         </div>
  //       </Card>
  //       <Card className="p-6 bg-purple-50 shadow-none">
  //         <div className="text-center">
  //           <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">LUMI</h4>
  //           <p className="text-sm">Seamless collaboration across departments</p>
  //         </div>
  //       </Card>
  //       <Card className="p-6 bg-green-50 shadow-none">
  //         <div className="text-center">
  //           <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">Insights</h4>
  //           <p className="text-sm">Data-driven decisions and real-time reporting</p>
  //         </div>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Slide 4: Lead to Quote Flow
  //   <div key="lead-quote" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Lead to Quote Flow</h2>
  //     <div className="grid grid-cols-1 gap-6">
  //       <Card className="p-6 shadow-none">
  //         <h3 className="text-xl font-semibold mb-4">Automated Process</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <Globe className="w-5 h-5 mr-2 text-blue-600 mt-1" />
  //             <span>Lead generated from webform</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Clock className="w-5 h-5 mr-2 text-blue-600 mt-1" />
  //             <span>SLA-based assignment to sales agents</span>
  //           </li>
  //         </ul>
  //       </Card>
  //       <Card className="p-6 shadow-none">
  //         <h3 className="text-xl font-semibold mb-4">Smart Notifications</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <Mail className="w-5 h-5 mr-2 text-purple-600 mt-1" />
  //             <span>Email and LUMI notifications triggered automatically</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Brain className="w-5 h-5 mr-2 text-purple-600 mt-1" />
  //             <span>LUMI-powered lead questionnaire and AI alerts</span>
  //           </li>
  //         </ul>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Slide 5: Smart Collaboration with LUMI
  //   <div key="collaboration" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Smart Collaboration with LUMI</h2>
  //     <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg">
  //       <div className="grid grid-cols-1  gap-6">
  //         <div className="text-center">
  //           <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">Centralized Discussions</h4>
  //           <p className="text-sm">All lead, quote, and design discussions in one place</p>
  //         </div>
  //         <div className="text-center">
  //           <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">AI-Powered</h4>
  //           <p className="text-sm">AI suggestions, reminders, and alerts in channels</p>
  //         </div>
  //         <div className="text-center">
  //           <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">Team Collaboration</h4>
  //           <p className="text-sm">Personal and team-based collaboration similar to Slack</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>,

  //   // Slide 6: Configurable CPQ + BOM Templates
  //   <div key="cpq-bom" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Configurable CPQ + BOM Templates</h2>
  //     <div className="grid grid-cols-1  gap-6">
  //       <Card className="p-6 bg-blue-50 shadow-none">
  //         <h3 className="text-xl font-semibold mb-4">Tank Configuration</h3>
  //         <ul className="space-y-3">
  //           <li className="flex items-center">
  //             <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
  //             <span>Diameter, height, shape selection</span>
  //           </li>
  //           <li className="flex items-center">
  //             <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
  //             <span>Metal type configuration</span>
  //           </li>
  //           <li className="flex items-center">
  //             <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
  //             <span>Accessories: ladders, valves, fittings</span>
  //           </li>
  //         </ul>
  //       </Card>
  //       <Card className="p-6 bg-green-50 shadow-none">
  //         <h3 className="text-xl font-semibold mb-4">Automated Processing</h3>
  //         <ul className="space-y-3">
  //           <li className="flex items-center">
  //             <Zap className="w-4 h-4 mr-2 text-blue-500" />
  //             <span>BOM created automatically from templates</span>
  //           </li>
  //           <li className="flex items-center">
  //             <DollarSign className="w-4 h-4 mr-2 text-blue-500" />
  //             <span>Costing from material and labor databases</span>
  //           </li>
  //         </ul>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Slide 7: Deal to Costing to Project
  //   <div key="deal-project" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Deal to Costing to Project</h2>
  //     <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
  //       <div className="space-y-6">
  //         <div className="flex items-center justify-center space-x-8">
  //           <div className="text-center">
  //             <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">1</div>
  //             <p className="font-semibold">Deal drives design collaboration in LUMI</p>
  //           </div>
  //           <ArrowRight className="w-8 h-8 text-gray-400" />
  //           <div className="text-center">
  //             <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">2</div>
  //             <p className="font-semibold">BOM posted to channel with full costing insights</p>
  //           </div>
  //           <ArrowRight className="w-8 h-8 text-gray-400" />
  //           <div className="text-center">
  //             <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">3</div>
  //             <p className="font-semibold">Project auto-created linking all components</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>,

  //   // Slide 8: Dashboard & Insights
  //   <div key="dashboard" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Dashboard & Insights</h2>
  //     <div className="grid grid-cols-1  gap-6">
  //       <Card className="p-6 shadow-none">
  //         <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
  //         <ul className="space-y-3">
  //           <li className="flex items-center">
  //             <Activity className="w-4 h-4 mr-2 text-red-500" />
  //             <span>Heatmaps of Lead-to-Quote stage durations and age</span>
  //           </li>
  //           <li className="flex items-center">
  //             <Award className="w-4 h-4 mr-2 text-blue-500" />
  //             <span>Sales leaderboard and conversion ratios</span>
  //           </li>
  //         </ul>
  //       </Card>
  //       <Card className="p-6 shadow-none">
  //         <h3 className="text-xl font-semibold mb-4">Action Insights</h3>
  //         <ul className="space-y-3">
  //           <li className="flex items-center">
  //             <Target className="w-4 h-4 mr-2 text-green-500" />
  //             <span>Top 3 leads needing immediate action</span>
  //           </li>
  //           <li className="flex items-center">
  //             <TrendingUp className="w-4 h-4 mr-2 text-purple-500" />
  //             <span>Quote vs Budget tracking</span>
  //           </li>
  //         </ul>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Slide 9: Real-world Extensions – SGBCZ Use Case
  //   <div key="extensions" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Real-world Extensions – SGBCZ Use Case</h2>
  //     <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //         <Card className="p-4 shadow-none">
  //           <Zap className="w-8 h-8 text-blue-600 mb-2" />
  //           <h4 className="font-semibold mb-2">Dynamic Fields</h4>
  //           <p className="text-sm">Dynamic field value determination</p>
  //         </Card>
  //         <Card className="p-4 shadow-none">
  //           <FileText className="w-8 h-8 text-purple-600 mb-2" />
  //           <h4 className="font-semibold mb-2">Custom Formats</h4>
  //           <p className="text-sm">Custom print formats and technical data sheets</p>
  //         </Card>
  //         <Card className="p-4 shadow-none">
  //           <Calendar className="w-8 h-8 text-green-600 mb-2" />
  //           <h4 className="font-semibold mb-2">Weekly Reports</h4>
  //           <p className="text-sm">Capacity and sales summary reports</p>
  //         </Card>
  //       </div>
  //     </div>
  //   </div>,

  //   // Slide 10: Manufacturing Overview
  //   <div key="manufacturing" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Manufacturing Overview</h2>
  //     <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
  //       <div className="grid grid-cols-1  gap-6">
  //         <div className="text-center">
  //           <Factory className="w-12 h-12 text-blue-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">Fabrication Process</h4>
  //           <p className="text-sm">High-level view of fabrication and installation</p>
  //         </div>
  //         <div className="text-center">
  //           <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">Capacity Planning</h4>
  //           <p className="text-sm">Routing and capacity planning included</p>
  //         </div>
  //         <div className="text-center">
  //           <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
  //           <h4 className="font-semibold mb-2">Data Integration</h4>
  //           <p className="text-sm">Production data linked with quote and design</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>,

  //   // Slide 11: How We Can Start
  //   <div key="start" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">How We Can Start</h2>
  //     <div className="space-y-6">
  //       <Card className="p-6 bg-green-50 shadow-none">
  //         <div className="flex items-center mb-4">
  //           <Rocket className="w-8 h-8 text-green-600 mr-3" />
  //           <h3 className="text-xl font-semibold">Quick Win Pilot</h3>
  //         </div>
  //         <p className="mb-4">CPQ + Collaboration + Dashboards</p>
  //       </Card>
  //       <Card className="p-6 bg-blue-50 shadow-none">
  //         <div className="flex items-center mb-4">
  //           <Database className="w-8 h-8 text-blue-600 mr-3" />
  //           <h3 className="text-xl font-semibold">Data Migration</h3>
  //         </div>
  //         <p className="mb-4">Import existing BOMs, spreadsheets, and routing into LENS</p>
  //       </Card>
  //       <Card className="p-6 bg-purple-50 shadow-none">
  //         <div className="flex items-center mb-4">
  //           <Users className="w-8 h-8 text-purple-600 mr-3" />
  //           <h3 className="text-xl font-semibold">Collaborative Approach</h3>
  //         </div>
  //         <p className="mb-4">Migration plan with minimal disruption</p>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Slide 12: Call to Action
  //   <div key="cta" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-green-600 to-blue-700 text-white p-8 rounded-lg">
  //     <div className="text-3xl font-bold mb-6 italic">
  //       "You don't need a big ERP to think big. You need the right one."
  //     </div>
  //     <div className="space-y-4">
  //       <h2 className="text-2xl font-semibold">Let's co-create Tank Vision's next-gen digital core</h2>
  //       <div className="flex items-center justify-center space-x-4">
  //         <Play className="w-8 h-8" />
  //         <span className="text-xl">Ready to pilot? Let's define the next steps together</span>
  //       </div>
  //     </div>
  //     <Rocket className="w-16 h-16 mt-8" />
  //   </div>
  // ];






  // const slides = [
  //   // Slide 0: Welcome
  //       <div className="h-full flex flex-col">
  //         {/* Title Section */}
  //           <h1 className="text-4xl font-bold text-center">Business Workflows Using LENS</h1>
          
  //         {/* Content Section */}
  //         <div className="flex-1 flex">
  //           {/* Visual Section */}
  //           <div className="w-1/2 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8 flex items-center justify-center relative overflow-hidden">
  //             <div className="absolute inset-0">
  //               <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
  //               <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
  //               <div className="absolute bottom-20 left-32 w-28 h-28 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
  //             </div>
  //             <div className="relative z-10 text-center">
  //               <Workflow className="w-32 h-32 text-white mx-auto mb-6 animate-bounce" />
  //               <div className="flex items-center justify-center space-x-4 text-white/80">
  //                 <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm text-lg">LMNAs</div>
  //                 <div className="w-3 h-3 bg-white rounded-full"></div>
  //                 <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm text-lg">LENS</div>
  //               </div>
  //             </div>
  //           </div>
            
  //           {/* Content Section */}
  //           <div className="w-1/2 p-8 flex items-center justify-center">
  //             <div className="text-center">
  //               <h2 className="text-3xl font-bold text-gray-800 mb-6">Streamline Your Business Operations</h2>
  //               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
  //                 Transform chaos into clarity with structured workflows that scale with your business growth.
  //               </p>
  //               <div className="space-y-4">
  //                 <div className="flex items-center text-gray-700">
  //                   <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
  //                   <span className="text-lg">Eliminate bottlenecks</span>
  //                 </div>
  //                 <div className="flex items-center text-gray-700">
  //                   <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
  //                   <span className="text-lg">Clear accountability</span>
  //                 </div>
  //                 <div className="flex items-center text-gray-700">
  //                   <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
  //                   <span className="text-lg">Scalable processes</span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
      
  //   ,
    
    
  //   // Slide 1: Why Do We Need Workflows?
   
  //       <div className="h-full flex flex-col">
  //         {/* Title Section */}
          
  //         {/* Content Section */}
  //         <div className="flex-1 flex">
  //           {/* Visual Section */}
  //           <div className="w-1/2 p-10 flex items-center justify-center ">
  //             <div className="w-full max-w-md">
  //               <div className="bg-red-100 border-2 border-red-200 rounded-xl p-6 mb-6">
  //                 <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
  //                   <MessageSquare className="w-6 h-6 mr-3" />
  //                   Without Structure
  //                 </h3>
  //                 <div className="grid grid-cols-3 gap-2">
  //                   {[...Array(12)].map((_, i) => (
  //                     <div key={i} className="bg-yellow-200 p-2 text-xs rounded transform rotate-1 hover:rotate-0 transition-transform">
  //                       Task {i + 1}
  //                     </div>
  //                   ))}
  //                 </div>
  //                  <p className="text-gray-700 italic">Chaos of sticky notes and informal processes</p>

  //               </div>
                
  //               <ArrowDown className="w-8 h-8 text-gray-400 mx-auto mb-6" />
                
  //               <div className="bg-green-100 border-2 border-green-200 rounded-xl p-6">
  //                 <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
  //                   <CheckCircle className="w-6 h-6 mr-3" />
  //                   With Structure
  //                 </h3>
  //                 <div className="space-y-2">
  //                   <div className="bg-blue-200 p-3 rounded-lg text-center font-medium">To Do</div>
  //                   <div className="bg-yellow-200 p-3 rounded-lg text-center font-medium">In Progress</div>
  //                   <div className="bg-green-200 p-3 rounded-lg text-center font-medium">Done</div>
  //                 </div>
  //                                       <p className="text-gray-700 italic">Clean, organized Kanban structure</p>

  //               </div>
  //             </div>
  //           </div>
            
  //           {/* Content Section */}
  //           <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-8">
  //               <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
  //                 <h3 className="text-2xl font-bold text-red-800 mb-4">The Challenge</h3>
  //                 <ul className="space-y-3 text-gray-700">
  //                   <li className="flex items-start">
  //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
  //                     <span>Small teams can work informally with verbal communication</span>
  //                   </li>
  //                   <li className="flex items-start">
  //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
  //                     <span>Growth introduces complexity and coordination challenges</span>
  //                   </li>
  //                 </ul>
  //               </div>
                
  //               <div className="bg-white rounded-lg p-6 border border-l-4 border-orange-400">
  //                 <h3 className="text-2xl font-bold text-orange-800 mb-4">The Impact</h3>
  //                 <ul className="space-y-3 text-gray-700">
  //                   <li className="flex items-start">
  //                     <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
  //                     <span>Work gets delayed and accountability fades away</span>
  //                   </li>
  //                   <li className="flex items-start">
  //                     <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
  //                     <span>Structure is essential to maintain speed and quality</span>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
      
  //   ,

  //   // Slide 2: Who Should Adopt Workflows?
   
  //       <div className="h-full flex flex-col">
  //         {/* Title Section */}
  //           {/* <h1 className="text-4xl font-bold text-center">Who Should Adopt Workflows?</h1> */}
          
  //         {/* Content Section */}
  //         <div className="flex-1 flex">
  //           {/* Visual Section */}
  //           <div className="w-1/2 p-8  flex items-center justify-center">
  //             <div className="grid grid-cols-2 gap-6 w-full max-w-md">
  //               <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
  //                 <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-3" />
  //                 <h3 className="text-lg font-bold text-blue-800">Sales</h3>
  //                 <p className="text-sm text-blue-600">Lead management</p>
  //               </div>
                
  //               <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
  //                 <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
  //                 <h3 className="text-lg font-bold text-green-800">HR</h3>
  //                 <p className="text-sm text-green-600">Recruitment</p>
  //               </div>
                
  //               <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
  //                 <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
  //                 <h3 className="text-lg font-bold text-purple-800">Finance</h3>
  //                 <p className="text-sm text-purple-600">Invoice processing</p>
  //               </div>
                
  //               <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
  //                 <FileText className="w-12 h-12 text-orange-600 mx-auto mb-3" />
  //                 <h3 className="text-lg font-bold text-orange-800">Projects</h3>
  //                 <p className="text-sm text-orange-600">Task management</p>
  //               </div>
  //             </div>
  //           </div>
            
  //           {/* Content Section */}
  //           <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-6">
  //               <div className="bg-white rounded-lg p-6 border">
  //                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Department Examples</h3>
  //                 <div className="space-y-4">
  //                   <div>
  //                     <h4 className="font-semibold text-blue-800">Sales Teams</h4>
  //                     <p className="text-gray-600">Lead management, deal progression, customer onboarding</p>
  //                   </div>
  //                   <div>
  //                     <h4 className="font-semibold text-green-800">HR Departments</h4>
  //                     <p className="text-gray-600">Recruitment, onboarding, performance reviews</p>
  //                   </div>
  //                   <div>
  //                     <h4 className="font-semibold text-purple-800">Finance Teams</h4>
  //                     <p className="text-gray-600">Invoice processing, expense approvals, budgeting</p>
  //                   </div>
  //                   <div>
  //                     <h4 className="font-semibold text-orange-800">Project Teams</h4>
  //                     <p className="text-gray-600">Task management, milestone tracking, deliverables</p>
  //                   </div>
  //                 </div>
  //               </div>
                
              
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //    ,

  // <div className="bg-blue-50 rounded-lg p-6">
  //                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfect for Companies With:</h3>
  //                 <div className="space-y-2">
  //                   <div className="flex items-center text-gray-700">
  //                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
  //                     <span>More than 1 department</span>
  //                   </div>
  //                   <div className="flex items-center text-gray-700">
  //                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
  //                     <span>Repeatable processes</span>
  //                   </div>
  //                   <div className="flex items-center text-gray-700">
  //                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
  //                     <span>Hybrid or distributed teams</span>
  //                   </div>
  //                   <div className="flex items-center text-gray-700">
  //                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
  //                     <span>Scaling from founders to functional roles</span>
  //                   </div>
  //                 </div>
  //               </div>
  //    ,
  //       <div className="h-full flex flex-col">
  //         {/* Title Section */}
  //           {/* <h1 className="text-4xl font-bold text-center">How Workflows Help</h1> */}
          
  //         {/* Content Section */}
  //         <div className="flex-1 flex">
  //           {/* Visual Section */}
  //           <div className="w-1/2 p-8  flex items-center justify-center">
  //             <div className="w-full max-w-md">
  //               <div className="bg-white rounded-xl border overflow-hidden">
  //                 <div className="bg-red-100 p-4 text-center">
  //                   <h3 className="text-lg font-bold text-red-800">Without Workflows</h3>
  //                 </div>
  //                 <div className="p-4 space-y-3">
  //                   <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
  //                     <div className="font-medium text-red-800">Verbal follow-ups</div>
  //                   </div>
  //                   <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
  //                     <div className="font-medium text-red-800">No clear ownership</div>
  //                   </div>
  //                   <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
  //                     <div className="font-medium text-red-800">Manual tracking</div>
  //                   </div>
  //                   <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
  //                     <div className="font-medium text-red-800">Delays and rework</div>
  //                   </div>
  //                 </div>
  //               </div>
                
  //               <ArrowDown className="w-8 h-8 text-gray-400 mx-auto my-4" />
                
               
  //             </div>
  //           </div>
            
  //           {/* Content Section */}
  //           <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-6">
  //               <div className="bg-white rounded-lg p-6 border">
  //                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits</h3>
  //                 <div className="space-y-4">
  //                   <div>
  //                     <h4 className="font-semibold text-green-800 mb-2">Clear Process Documentation</h4>
  //                     <p className="text-gray-600">Every step is documented and standardized, eliminating confusion and ensuring consistency.</p>
  //                   </div>
  //                   <div>
  //                     <h4 className="font-semibold text-blue-800 mb-2">Defined Responsibilities</h4>
  //                     <p className="text-gray-600">RACI matrix ensures everyone knows their role and accountability in each process.</p>
  //                   </div>
  //                   <div>
  //                     <h4 className="font-semibold text-purple-800 mb-2">Automated Tracking</h4>
  //                     <p className="text-gray-600">SLA-based progress monitoring with automatic alerts and escalations.</p>
  //                   </div>
  //                   <div>
  //                     <h4 className="font-semibold text-orange-800 mb-2">Quality Control</h4>
  //                     <p className="text-gray-600">Built-in audit trails and escalation paths prevent bottlenecks and ensure quality.</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ,

  //     <div className="w-1/2 p-8  flex items-center justify-center">
  //             <div className="w-full max-w-md">
  //      <div className="bg-white rounded-xl border overflow-hidden">
  //                 <div className="bg-green-100 p-4 text-center">
  //                   <h3 className="text-lg font-bold text-green-800">With Workflows</h3>
  //                 </div>
  //                 <div className="p-4 space-y-3">
  //                   <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
  //                     <div className="font-medium text-green-800">Defined steps</div>
  //                   </div>
  //                   <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
  //                     <div className="font-medium text-green-800">RACI-aligned roles</div>
  //                   </div>
  //                   <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
  //                     <div className="font-medium text-green-800">SLA-based progress</div>
  //                   </div>
  //                   <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
  //                     <div className="font-medium text-green-800">Audit and escalation paths</div>
  //                   </div>
  //                 </div>
  //               </div>
  //               </div>
  //               </div>
  //     ,
  //       <div className="h-full flex flex-col">
  //         {/* Title Section */}
  //           <h1 className="text-4xl font-bold text-center">From Chaos to Clarity – Structured Growth</h1>
          
  //         {/* Content Section */}
  //         <div className="flex-1 flex">
  //           {/* Visual Section */}
  //           <div className=" p-8  flex items-center justify-center">
  //             <div className="space-y-8">
  //               <div className="flex items-center justify-center space-x-8">
  //                 <div className="text-center">
  //                   <div className="bg-yellow-100 rounded-full w-24 h-24 mx-auto mb-3 flex items-center justify-center">
  //                     <Users className="w-12 h-12 text-yellow-600" />
  //                   </div>
  //                   <h3 className="text-lg font-bold text-yellow-800">10 People</h3>
  //                   <div className="bg-yellow-50 p-3 rounded-lg mt-2">
  //                     <div className="flex justify-center space-x-1">
  //                       {[...Array(5)].map((_, i) => (
  //                         <div key={i} className="w-4 h-4 bg-yellow-300 rounded-full"></div>
  //                       ))}
  //                     </div>
  //                   </div>
  //                 </div>
                  
  //                 <ArrowRight className="w-6 h-6 text-gray-400" />
                  
  //                 <div className="text-center">
  //                   <div className="bg-orange-100 rounded-full w-24 h-24 mx-auto mb-3 flex items-center justify-center">
  //                     <Building2 className="w-12 h-12 text-orange-600" />
  //                   </div>
  //                   <h3 className="text-lg font-bold text-orange-800">50 People</h3>
  //                   <div className="bg-orange-50 p-3 rounded-lg mt-2">
  //                     <div className="grid grid-cols-2 gap-1">
  //                       <div className="bg-orange-200 p-1 rounded text-xs">Sales</div>
  //                       <div className="bg-orange-200 p-1 rounded text-xs">HR</div>
  //                       <div className="bg-orange-200 p-1 rounded text-xs">Tech</div>
  //                       <div className="bg-orange-200 p-1 rounded text-xs">Ops</div>
  //                     </div>
  //                   </div>
  //                 </div>
                  
  //                 <ArrowRight className="w-6 h-6 text-gray-400" />
                  
  //                 <div className="text-center">
  //                   <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-3 flex items-center justify-center">
  //                     <Target className="w-12 h-12 text-green-600" />
  //                   </div>
  //                   <h3 className="text-lg font-bold text-green-800">100+ People</h3>
  //                   <div className="bg-green-50 p-3 rounded-lg mt-2">
  //                     <div className="space-y-1">
  //                       <div className="bg-green-200 p-1 rounded text-xs text-center">CEO</div>
  //                       <div className="bg-green-300 p-1 rounded text-xs text-center">VPs</div>
  //                       <div className="bg-green-400 p-1 rounded text-xs text-center">Teams</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
                
  //               <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 p-4 rounded-xl">
  //                 <div className="flex items-center justify-center">
  //                   <BarChart3 className="w-6 h-6 text-gray-600 mr-3" />
  //                   <p className="font-medium text-gray-800">Growth Curve: Structure Need Increases</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
            
  //           {/* Content Section */}
           
  //         </div>
  //       </div>
  //    ,
  //     <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-6">
  //               <div className="bg-white rounded-lg p-6 border border-l-4 border-yellow-400">
  //                 <h3 className="text-xl font-bold text-yellow-800 mb-3">Stage 1: Small Team (10 People)</h3>
  //                 <ul className="space-y-2 text-gray-700">
  //                   <li>• Ad hoc processes work fine</li>
  //                   <li>• Verbal communication is sufficient</li>
  //                   <li>• Overlapping responsibilities are manageable</li>
  //                   <li>• Everyone knows everyone</li>
  //                 </ul>
  //               </div>
                
  //               <div className="bg-white rounded-lg p-6 border border-l-4 border-orange-400">
  //                 <h3 className="text-xl font-bold text-orange-800 mb-3">Stage 2: Growing Team (50 People)</h3>
  //                 <ul className="space-y-2 text-gray-700">
  //                   <li>• Departmental structure emerging</li>
  //                   <li>• Communication gaps appearing</li>
  //                   <li>• Friction between departments visible</li>
  //                   <li>• Need for coordination increases</li>
  //                 </ul>
  //               </div>
                
                
  //             </div>
  //           </div>
  //    ,
  //    <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-6">
  //    <div className="bg-white rounded-lg p-6 border border-l-4 border-green-400">
  //                 <h3 className="text-xl font-bold text-green-800 mb-3">Stage 3: Mature Team (100+ People)</h3>
  //                 <ul className="space-y-2 text-gray-700">
  //                   <li>• Full RACI implementation needed</li>
  //                   <li>• Automated workflow management</li>
  //                   <li>• Clear hierarchies and processes</li>
  //                   <li>• Mapped workflows are essential</li>
  //                 </ul>
  //               </div>
  //               </div>
  //               </div>

                
  //    ,
  //       <div className="h-full flex flex-col">
  //         {/* Title Section */}
          
  //         {/* Content Section */}
  //         <div className="flex-1 flex">
  //           {/* Visual Section */}
  //           <div className="w-1/2 p-8 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
  //             <div className="absolute inset-0 opacity-10">
  //               <Globe className="w-full h-full" />
  //             </div>
              
  //             <div className="relative z-10 text-white">
  //               <div className="text-center mb-8">
  //                 <Globe className="w-16 h-16 mx-auto mb-4 text-blue-300" />
  //                 <h2 className="text-2xl font-bold mb-4">Global Team Coordination</h2>
  //               </div>
                
  //               <div className="grid grid-cols-1 gap-6">
  //                 <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
  //                   <Users className="w-8 h-8 mx-auto mb-2 text-blue-300" />
  //                   <h3 className="font-semibold">Mumbai</h3>
  //                   <p className="text-sm text-blue-200">Development</p>
  //                 </div>
                  
  //                 <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
  //                   <Users className="w-8 h-8 mx-auto mb-2 text-purple-300" />
  //                   <h3 className="font-semibold">Bangalore</h3>
  //                   <p className="text-sm text-purple-200">Sales & Marketing</p>
  //                 </div>
                  
  //                 <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
  //                   <Users className="w-8 h-8 mx-auto mb-2 text-green-300" />
  //                   <h3 className="font-semibold">Chennai</h3>
  //                   <p className="text-sm text-green-200">Operations</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
            
  //           {/* Content Section */}
  //           <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-6">
  //               <div className="bg-white rounded-lg p-6 border">
  //                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Challenges of Distributed Teams</h3>
  //                 <ul className="space-y-3 text-gray-700">
  //                   <li className="flex items-start">
  //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
  //                     <span>Different time zones create communication delays</span>
  //                   </li>
  //                   <li className="flex items-start">
  //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
  //                     <span>Lack of visibility into team progress</span>
  //                   </li>
  //                   <li className="flex items-start">
  //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
  //                     <span>Tasks falling through communication gaps</span>
  //                   </li>
  //                 </ul>
  //               </div>
                
  //               <div className="bg-green-50 rounded-lg p-6">
  //                 <h3 className="text-xl font-bold text-green-800 mb-4">How Workflows Help</h3>
  //                 <div className="space-y-4">
  //                   <div className="flex items-center">
  //                     <Calendar className="w-6 h-6 text-blue-600 mr-3" />
  //                     <div>
  //                       <h4 className="font-semibold">Enable Async Collaboration</h4>
  //                       <p className="text-sm text-gray-600">Work continues across time zones</p>
  //                     </div>
  //                   </div>
                    
  //                   <div className="flex items-center"></div>
  //                   <div className="flex items-center">
  //                     <Eye className="w-6 h-6 text-green-600 mr-3" />
  //                     <div>
  //                       <h4 className="font-semibold">Provide Complete Visibility</h4>
  //                       <p className="text-sm text-gray-600">Everyone sees the same status</p>
  //                     </div>
  //                   </div>
  //                   <div className="flex items-center">
  //                     <Shield className="w-6 h-6 text-purple-600 mr-3" />
  //                     <div>
  //                       <h4 className="font-semibold">Ensure Accountability</h4>
  //                       <p className="text-sm text-gray-600">Clear ownership and escalation</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //    ,
  //       <div className="h-full flex flex-col">
  //           <h1 className="text-4xl font-bold text-center">LENS Framework Overview</h1>
          
  //         <div className="flex-1 flex">
  //           <div className="w-1/2 p-8  flex items-center justify-center">
  //             <div className="grid grid-cols-2 gap-6 max-w-lg">
  //               <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center hover:scale-105 transition-transform">
  //                 <Layers className="w-16 h-16 text-blue-600 mx-auto mb-4" />
  //                 <h3 className="text-xl font-bold text-blue-800 mb-2">L</h3>
  //                 <p className="text-blue-600">Layers</p>
  //               </div>
                
  //               <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center hover:scale-105 transition-transform">
  //                 <Eye className="w-16 h-16 text-green-600 mx-auto mb-4" />
  //                 <h3 className="text-xl font-bold text-green-800 mb-2">E</h3>
  //                 <p className="text-green-600">Entity</p>
  //               </div>
                
  //               <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center hover:scale-105 transition-transform">
  //                 <Workflow className="w-16 h-16 text-orange-600 mx-auto mb-4" />
  //                 <h3 className="text-xl font-bold text-orange-800 mb-2">N</h3>
  //                 <p className="text-orange-600">Nodes</p>
  //               </div>
                
  //               <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center hover:scale-105 transition-transform">
  //                 <Settings className="w-16 h-16 text-purple-600 mx-auto mb-4" />
  //                 <h3 className="text-xl font-bold text-purple-800 mb-2">S</h3>
  //                 <p className="text-purple-600">States</p>
  //               </div>
  //             </div>
  //           </div>
            
  //           <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-6">
  //               <div className="bg-white rounded-lg p-6 border">
  //                 <h3 className="text-2xl font-bold text-gray-800 mb-4">LENS Components</h3>
                  
  //                 <div className="space-y-4">
  //                   <div className="border-l-4 border-blue-400 pl-4">
  //                     <h4 className="font-bold text-blue-800">Layers</h4>
  //                     <p className="text-gray-600">Hierarchical organization of workflow components</p>
  //                   </div>
                    
  //                   <div className="border-l-4 border-green-400 pl-4">
  //                     <h4 className="font-bold text-green-800">Entity</h4>
  //                     <p className="text-gray-600">The core object moving through the workflow</p>
  //                   </div>
                    
  //                   <div className="border-l-4 border-orange-400 pl-4">
  //                     <h4 className="font-bold text-orange-800">Nodes</h4>
  //                     <p className="text-gray-600">Individual steps or decision points in the process</p>
  //                   </div>
                    
  //                   <div className="border-l-4 border-purple-400 pl-4">
  //                     <h4 className="font-bold text-purple-800">States</h4>
  //                     <p className="text-gray-600">Current status and condition of the entity</p>
  //                   </div>
  //                 </div>
  //               </div>
                
  //               <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
  //                 <div className="flex items-center mb-3">
  //                   <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
  //                   <h4 className="font-bold text-gray-800">Key Insight</h4>
  //                 </div>
  //                 <p className="text-gray-700">LENS provides a structured approach to modeling any business process, ensuring consistency and scalability.</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //    ,
  //       <div className="h-full flex flex-col">
  //           <h1 className="text-4xl font-bold text-center">LENS in Action - Sales Pipeline</h1>
          
  //         <div className="flex-1 flex">
  //           <div className="w-1/2 p-8  flex items-center justify-center">
  //             <div className="w-full max-w-md">
  //               <div className="bg-white rounded-xl border p-6">
  //                 <h3 className="text-xl font-bold text-center mb-6">Sales Pipeline Flow</h3>
                  
  //                 <div className="space-y-4">
  //                   <div className="flex items-center">
  //                     <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
  //                     <div className="flex-1 bg-blue-100 p-3 rounded-lg">
  //                       <h4 className="font-semibold text-blue-800">Lead Generation</h4>
  //                       <p className="text-sm text-blue-600">Marketing qualified leads</p>
  //                     </div>
  //                   </div>
                    
  //                   <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                    
  //                   <div className="flex items-center">
  //                     <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
  //                     <div className="flex-1 bg-green-100 p-3 rounded-lg">
  //                       <h4 className="font-semibold text-green-800">Qualification</h4>
  //                       <p className="text-sm text-green-600">Sales team validation</p>
  //                     </div>
  //                   </div>
                    
  //                   <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                    
  //                   <div className="flex items-center">
  //                     <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
  //                     <div className="flex-1 bg-orange-100 p-3 rounded-lg">
  //                       <h4 className="font-semibold text-orange-800">Proposal</h4>
  //                       <p className="text-sm text-orange-600">Deal structuring</p>
  //                     </div>
  //                   </div>
                    
  //                   <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                    
  //                   <div className="flex items-center">
  //                     <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
  //                     <div className="flex-1 bg-purple-100 p-3 rounded-lg">
  //                       <h4 className="font-semibold text-purple-800">Closure</h4>
  //                       <p className="text-sm text-purple-600">Contract signing</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
            
  //           <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-6">
  //               <div className="bg-white rounded-lg p-6 border">
  //                 <h3 className="text-xl font-bold text-gray-800 mb-4">LENS Application</h3>
                  
  //                 <div className="space-y-4">
  //                   <div>
  //                     <h4 className="font-semibold text-blue-800 mb-2">Entity: Sales Opportunity</h4>
  //                     <p className="text-gray-600">The lead/prospect moving through the pipeline</p>
  //                   </div>
                    
  //                   <div>
  //                     <h4 className="font-semibold text-green-800 mb-2">Nodes: Pipeline Stages</h4>
  //                     <p className="text-gray-600">Lead Gen → Qualification → Proposal → Closure</p>
  //                   </div>
                    
  //                   <div>
  //                     <h4 className="font-semibold text-orange-800 mb-2">States: Opportunity Status</h4>
  //                     <p className="text-gray-600">New, Qualified, Proposal Sent, Won/Lost</p>
  //                   </div>
                    
  //                   <div>
  //                     <h4 className="font-semibold text-purple-800 mb-2">Layers: Team Structure</h4>
  //                     <p className="text-gray-600">Marketing → SDR → AE → Sales Manager</p>
  //                   </div>
  //                 </div>
  //               </div>
                
  //               <div className="bg-green-50 rounded-lg p-6">
  //                 <h4 className="font-bold text-green-800 mb-3">Benefits Achieved</h4>
  //                 <ul className="space-y-2 text-gray-700">
  //                   <li className="flex items-center">
  //                     <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
  //                     <span>Clear handoff between teams</span>
  //                   </li>
  //                   <li className="flex items-center">
  //                     <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
  //                     <span>Automated follow-up reminders</span>
  //                   </li>
  //                   <li className="flex items-center">
  //                     <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
  //                     <span>Pipeline visibility for management</span>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //   ,
  //       <div className="h-full flex flex-col">
  //           <h1 className="text-4xl font-bold text-center">Implementation Roadmap</h1>
          
  //         <div className="flex-1 flex">
  //           <div className="w-1/2 p-8  flex items-center justify-center">
  //             <div className="w-full max-w-md">
  //               <div className="space-y-6">
  //                 <div className="bg-white rounded-lg p-4 border border-l-4 border-blue-400">
  //                   <div className="flex items-center mb-3">
  //                     <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
  //                     <h3 className="text-lg font-bold text-blue-800">Assessment</h3>
  //                   </div>
  //                   <p className="text-gray-600">Identify current processes and pain points</p>
  //                   <div className="mt-2 text-sm text-blue-600">Duration: 1-2 weeks</div>
  //                 </div>
                  
  //                 <div className="bg-white rounded-lg p-4 border border-l-4 border-green-400">
  //                   <div className="flex items-center mb-3">
  //                     <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
  //                     <h3 className="text-lg font-bold text-green-800">Design</h3>
  //                   </div>
  //                   <p className="text-gray-600">Map workflows using LENS framework</p>
  //                   <div className="mt-2 text-sm text-green-600">Duration: 2-3 weeks</div>
  //                 </div>
                  
  //                 <div className="bg-white rounded-lg p-4 border border-l-4 border-orange-400">
  //                   <div className="flex items-center mb-3">
  //                     <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
  //                     <h3 className="text-lg font-bold text-orange-800">Pilot</h3>
  //                   </div>
  //                   <p className="text-gray-600">Test with one department or process</p>
  //                   <div className="mt-2 text-sm text-orange-600">Duration: 4-6 weeks</div>
  //                 </div>
                  
  //                 <div className="bg-white rounded-lg p-4 border border-l-4 border-purple-400">
  //                   <div className="flex items-center mb-3">
  //                     <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
  //                     <h3 className="text-lg font-bold text-purple-800">Scale</h3>
  //                   </div>
  //                   <p className="text-gray-600">Roll out across all departments</p>
  //                   <div className="mt-2 text-sm text-purple-600">Duration: 8-12 weeks</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
            
  //           <div className="w-1/2 p-8 flex items-center">
  //             <div className="space-y-6">
  //               <div className="bg-white rounded-lg p-6 border">
  //                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Success Factors</h3>
                  
  //                 <div className="space-y-4">
  //                   <div className="flex items-start">
  //                     <Award className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
  //                     <div>
  //                       <h4 className="font-semibold text-gray-800">Leadership Buy-in</h4>
  //                       <p className="text-gray-600">Executive sponsorship is crucial for adoption</p>
  //                     </div>
  //                   </div>
                    
  //                   <div className="flex items-start">
  //                     <Users className="w-6 h-6 text-blue-500 mr-3 mt-1" />
  //                     <div>
  //                       <h4 className="font-semibold text-gray-800">Team Training</h4>
  //                       <p className="text-gray-600">Comprehensive training on new processes</p>
  //                     </div>
  //                   </div>
                    
  //                   <div className="flex items-start">
  //                     <BarChart3 className="w-6 h-6 text-green-500 mr-3 mt-1" />
  //                     <div>
  //                       <h4 className="font-semibold text-gray-800">Continuous Monitoring</h4>
  //                       <p className="text-gray-600">Regular review and optimization</p>
  //                     </div>
  //                   </div>
                    
  //                   <div className="flex items-start">
  //                     <Zap className="w-6 h-6 text-orange-500 mr-3 mt-1" />
  //                     <div>
  //                       <h4 className="font-semibold text-gray-800">Quick Wins</h4>
  //                       <p className="text-gray-600">Demonstrate value early in the process</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
                
  //               <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
  //                 <h4 className="font-bold text-gray-800 mb-3">Expected Outcomes</h4>
  //                 <div className="grid grid-cols-2 gap-4">
  //                   <div className="text-center">
  //                     <div className="text-2xl font-bold text-blue-600">30%</div>
  //                     <div className="text-sm text-gray-600">Faster Processing</div>
  //                   </div>
  //                   <div className="text-center">
  //                     <div className="text-2xl font-bold text-green-600">50%</div>
  //                     <div className="text-sm text-gray-600">Error Reduction</div>
  //                   </div>
  //                   <div className="text-center">
  //                     <div className="text-2xl font-bold text-orange-600">40%</div>
  //                     <div className="text-sm text-gray-600">Better Visibility</div>
  //                   </div>
  //                   <div className="text-center">
  //                     <div className="text-2xl font-bold text-purple-600">25%</div>
  //                     <div className="text-sm text-gray-600">Cost Savings</div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ,
  //       <div className="h-full flex flex-col">
  //           <h1 className="text-4xl font-bold text-center">Questions & Thank You</h1>
          
  //         <div className="flex-1 flex">
  //           <div className="w-1/2 p-8 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
  //             <div className="absolute inset-0 opacity-10">
  //               <Star className="w-full h-full" />
  //             </div>
              
  //             <div className="relative z-10 text-center text-white">
  //               <MessageSquare className="w-24 h-24 mx-auto mb-6 text-purple-300 animate-pulse" />
  //               <h2 className="text-3xl font-bold mb-4">Let's Discuss</h2>
  //               <p className="text-xl text-purple-200 mb-8">Your workflow transformation journey</p>
                
  //               <div className="space-y-4">
  //                 <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
  //                   <h3 className="font-semibold text-lg">Questions Welcome</h3>
  //                   <p className="text-purple-200">Share your specific challenges</p>
  //                 </div>
                  
  //                 <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
  //                   <h3 className="font-semibold text-lg">Next Steps</h3>
  //                   <p className="text-purple-200">Let's plan your implementation</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
            
  //           <div className="w-1/2 p-8 flex items-center justify-center">
  //             <div className="text-center">
  //               <div className="mb-8">
  //                 <Rocket className="w-20 h-20 mx-auto mb-4 text-purple-600" />
  //                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform?</h2>
  //                 <p className="text-xl text-gray-600 mb-8">
  //                   Start your workflow optimization journey with LENS
  //                 </p>
  //               </div>
                
  //               <div className="space-y-6">
  //                 <div className="bg-white rounded-lg p-6 border">
  //                   <h3 className="text-xl font-bold text-gray-800 mb-4">Get Started Today</h3>
  //                   <div className="space-y-3">
  //                     <div className="flex items-center justify-center">
  //                       <Calendar className="w-5 h-5 text-blue-500 mr-3" />
  //                       <span className="text-gray-700">Schedule a consultation</span>
  //                     </div>
  //                     <div className="flex items-center justify-center">
  //                       <Eye className="w-5 h-5 text-green-500 mr-3" />
  //                       <span className="text-gray-700">Process assessment</span>
  //                     </div>
  //                     <div className="flex items-center justify-center">
  //                       <Zap className="w-5 h-5 text-orange-500 mr-3" />
  //                       <span className="text-gray-700">Quick implementation</span>
  //                     </div>
  //                   </div>
  //                 </div>
                  
  //                 <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
  //                   <h3 className="text-lg font-bold text-gray-800 mb-2">Thank You!</h3>
  //                   <p className="text-gray-600">
  //                     For attending our webinar on Business Workflows using LENS
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
      
  // ];

 const slides = [
    // Slide 1: Welcome
 
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto ">
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
,
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
,
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
,
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-5xl">
            <div className="bg-white rounded-2xl  overflow-hidden border-2 border-gray-200">
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
,
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
                  <div key={i} className={`bg-gradient-to-br from-${stage.color}-50 to-${stage.color}-100 p-6 rounded-2xl border-2 border-${stage.color}-200 text-center transform hover:scale-105 transition-all duration-300 `}>
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
,
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative w-full max-w-4xl mb-12">
            {/* Map visualization */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border-2 border-blue-200 ">
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
,
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-5xl">
            <div className="bg-white rounded-2xl  overflow-hidden border-2 border-gray-200 mb-8">
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
,
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-4xl">
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white p-8 rounded-3xl  border-2 border-gray-200">
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
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center ">
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
,
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-4xl">
            {/* <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 ">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Take the next step towards structured growth with LENS workflows</p>
            </div> */}
            
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
                <div key={i} className={`bg-gradient-to-br from-${step.color}-50 to-${step.color}-100 p-8 rounded-2xl border-2 border-${step.color}-200 text-center transform hover:scale-105 transition-all duration-300  group`}>
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

  ];



  return (
    <div className="w-full max-w-4xl mx-auto">
      {slides.map((slide, index) => (
        <div key={index} className="mb-10">
          <div className="w-full flex justify-center">
  <div className="w-[297mm] h-[168mm] overflow-hidden">
    {slide}
  </div>
</div>
  
          {index < slides.length - 1 && (
            <div className="break-after"></div> 
          )}
        </div>
      ))}
    </div>
  );
  
};

export default PitchDeck;