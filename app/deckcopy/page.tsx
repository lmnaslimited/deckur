
// "use client";
// import { Card } from '@repo/ui/components/ui/card';
// import { Button } from '@repo/ui/components/ui/button';
// import {   BarChart3, Brain, Clock, Database, LineChart, Boxes, Settings, Mail, Linkedin, Globe, XCircle, Rocket, Users, Shield, Zap } from 'lucide-react';

// const PitchDeck = () => {

//   const slides = [
//     // Cover Slide
//     <div key="cover" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
//       <h1 className="text-4xl font-bold mb-4">LMNAs</h1>
//       <h2 className="text-2xl font-semibold">AI-Enabled ERP for the Future</h2>
//       <p className="text-xl">Transforming Business Operations with Smart, Scalable, and Adaptive ERP Solutions</p>
//       <Brain className="w-16 h-16 mt-8" />
//     </div>,

//     // The Character (Our Customers)
//     <div key="customers" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6">Our Customers</h2>
//       <div className="grid grid-cols-1  gap-6">
//         <Card className="p-6">
//           <h3 className="text-xl font-semibold mb-4">Who They Are</h3>
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <Boxes className="w-5 h-5 mr-2 text-blue-600 mt-1" />
//               <span>Manufacturing companies, especially Engineer-to-Order (ETO) businesses</span>
//             </li>
//             <li className="flex items-start">
//               <Settings className="w-5 h-5 mr-2 text-blue-600 mt-1" />
//               <span>Struggling with ERP complexity and customization</span>
//             </li>
//           </ul>
//         </Card>
//         <Card className="p-6">
//           <h3 className="text-xl font-semibold mb-4">Pain Points</h3>
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <Database className="w-5 h-5 mr-2 text-red-500 mt-1" />
//               <span>Outdated, rigid ERP systems</span>
//             </li>
//             <li className="flex items-start">
//               <Clock className="w-5 h-5 mr-2 text-red-500 mt-1" />
//               <span>Manual, disconnected workflows</span>
//             </li>
//           </ul>
//         </Card>
//       </div>
//     </div>,

//     // The Problem
//     <div key="problem" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6">The Problem</h2>
//       <div className="grid grid-cols-1 gap-6">
//         <Card className="p-6 bg-red-50">
//           <h3 className="text-xl font-semibold mb-4">ERP Systems Today Are Broken</h3>
//           <div className="grid grid-cols-1  gap-4">
//             <div className="flex flex-col items-center text-center p-4">
//               <BarChart3 className="w-12 h-12 text-red-500 mb-2" />
//               <p className="font-bold">80%</p>
//               <p>of ERP implementations fail to meet expectations</p>
//             </div>
//             <div className="flex flex-col items-center text-center p-4">
//               <Clock className="w-12 h-12 text-red-500 mb-2" />
//               <p className="font-bold">30%</p>
//               <p>of time wasted on non-automated workflows</p>
//             </div>
//             <div className="flex flex-col items-center text-center p-4">
//               <LineChart className="w-12 h-12 text-green-500 mb-2" />
//               <p className="font-bold">5x</p>
//               <p>faster growth in AI-driven ERP adoption</p>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>,

//     // The Solution
//     <div key="solution" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6">Introducing LENS ERP</h2>
//       <div className="grid grid-cols-1 gap-6">
//         <Card className="p-6">
//           <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <Brain className="w-5 h-5 mr-2 text-blue-600 mt-1" />
//               <span>AI-Powered Workflows that reduce manual work</span>
//             </li>
//             <li className="flex items-start">
//               <Settings className="w-5 h-5 mr-2 text-blue-600 mt-1" />
//               <span>Built on Frappe & ERPNext, enterprise-grade yet open-source</span>
//             </li>
//             <li className="flex items-start">
//               <Database className="w-5 h-5 mr-2 text-blue-600 mt-1" />
//               <span>Seamless integration with SAP, IoT, and third-party tools</span>
//             </li>
//           </ul>
//         </Card>
//         <Card className="p-6 bg-blue-50">
//           <h3 className="text-xl font-semibold mb-4">Case Study: SGB Transformers</h3>
//           <div className="space-y-4">
//             <p className="font-semibold">Challenge:</p>
//             <p>Complex CPQ & order management</p>
//             <p className="font-semibold">Impact:</p>
//             <ul className="list-disc pl-5">
//               <li>50% faster quoting</li>
//               <li>30% reduction in manual work</li>
//             </ul>
//           </div>
//         </Card>
//       </div>
//     </div>,

//     // Implementation Process
//     <div key="implementation" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6">Implementation Process</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card className="p-6">
//           <div className="flex flex-col items-center text-center">
//             <div className="bg-blue-100 p-4 rounded-full mb-4">
//               <Users className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">1. Discovery</h3>
//             <p>Understanding your processes and pain points</p>
//           </div>
//         </Card>
//         <Card className="p-6">
//           <div className="flex flex-col items-center text-center">
//             <div className="bg-purple-100 p-4 rounded-full mb-4">
//               <Brain className="w-8 h-8 text-purple-600" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">2. AI Integration</h3>
//             <p>Implementing LENS ERP with custom AI workflows</p>
//           </div>
//         </Card>
//         <Card className="p-6">
//           <div className="flex flex-col items-center text-center">
//             <div className="bg-green-100 p-4 rounded-full mb-4">
//               <Rocket className="w-8 h-8 text-green-600" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">3. Go-Live</h3>
//             <p>Ensuring smooth adoption and continuous improvement</p>
//           </div>
//         </Card>
//       </div>
//     </div>,

//     // Competitive Advantages
//     <div key="advantages" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6">Why Choose LMNAs?</h2>
//       <div className="grid grid-cols-1 gap-6">
//         <Card className="p-6">
//           <h3 className="text-xl font-semibold mb-4">Our Advantages</h3>
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <Zap className="w-5 h-5 mr-2 text-yellow-500 mt-1" />
//               <span>Faster implementation at fraction of SAP costs</span>
//             </li>
//             <li className="flex items-start">
//               <Shield className="w-5 h-5 mr-2 text-green-500 mt-1" />
//               <span>Enterprise-grade security with open-source flexibility</span>
//             </li>
//             <li className="flex items-start">
//               <Brain className="w-5 h-5 mr-2 text-blue-500 mt-1" />
//               <span>Advanced AI capabilities built-in</span>
//             </li>
//           </ul>
//         </Card>
//         <Card className="p-6 bg-red-50">
//           <h3 className="text-xl font-semibold mb-4">Cost of Inaction</h3>
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <XCircle className="w-5 h-5 mr-2 text-red-500 mt-1" />
//               <span>Continued inefficiencies & high manual effort</span>
//             </li>
//             <li className="flex items-start">
//               <XCircle className="w-5 h-5 mr-2 text-red-500 mt-1" />
//               <span>Fall behind competitors adopting AI-driven solutions</span>
//             </li>
//           </ul>
//         </Card>
//       </div>
//     </div>,

//     // Call to Action
//     <div key="cta" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
//       <h2 className="text-3xl font-bold">Ready to Transform Your Operations?</h2>
//       <p className="text-xl">Lets explore how LENS ERP can revolutionize your business</p>
//       <div className="flex space-x-4 mt-8">
//         <Button className="bg-white text-blue-600 hover:bg-gray-100 flex items-center space-x-2">
//           <Mail className="w-4 h-4" />
//           <span>Contact Us</span>
//         </Button>
//         <div className="flex space-x-4">
//           <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
//             <Globe className="w-4 h-4" />
//           </Button>
//           <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
//             <Linkedin className="w-4 h-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   ];

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {slides.map((slide, index) => (
//         <div key={index} className="mb-10">
//           <div className="w-full flex justify-center">
//   <div className="w-[297mm] h-[168mm] overflow-hidden">
//     {slide}
//   </div>
// </div>
  
//           {index < slides.length - 1 && (
//             <div className="break-after"></div> 
//           )}
//         </div>
//       ))}
//     </div>
//   );
  
// };

// export default PitchDeck;


"use client"
import { useState } from 'react';
import { Card, CardContent } from '@repo/ui/components/ui/card';
import { Button } from '@repo/ui/components/ui/button';
import { ArrowLeft, ArrowRight, BarChart3, Brain, Clock, Database, LineChart, Boxes, Settings, Mail, Linkedin, Globe, CheckCircle2, XCircle, Rocket, Users, Shield, Zap } from 'lucide-react';

export default function LENSCRMPitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // Slide 1: Title Slide
    {
      title: "Future-Proof Your Customer Journey with LENS CRM",
      subtitle: "From Lead to Delivery — All in One Unified System",
      presenter: "Presented by: LMNAs",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 rounded-full bg-blue-100">
              <Database size={64} className="text-blue-500" />
            </div>
            <div className="mx-4 text-3xl font-bold">+</div>
            <div className="p-4 rounded-full bg-green-100">
              <Boxes size={64} className="text-green-500" />
            </div>
            <div className="mx-4 text-3xl font-bold">+</div>
            <div className="p-4 rounded-full bg-purple-100">
              <Settings size={64} className="text-purple-500" />
            </div>
          </div>
          <div className="text-xl text-center text-gray-600">
            CRM | Project Management | Helpdesk
          </div>
        </div>
      )
    },
    
    // Slide 2: Client's Current Setup (Pipedrive)
    {
      title: "Client's Current Setup (Pipedrive)",
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <CheckCircle2 className="mr-2 text-green-500" /> What Works
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-6 mr-2 mt-1">•</div>
                  <div>Clean and simple sales pipeline</div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-6 mr-2 mt-1">•</div>
                  <div>Visual deal tracking</div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <XCircle className="mr-2 text-red-500" /> What's Missing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-6 mr-2 mt-1">•</div>
                  <div>No integrated project delivery</div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-6 mr-2 mt-1">•</div>
                  <div>Fragmented service tracking</div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-6 mr-2 mt-1">•</div>
                  <div>Need for third-party integrations for post-sales processes</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    
    // Slide 3: LENS Advantage
    {
      title: "LENS = CRM + Projects + Service (Unified)",
      subtitle: "LENS Advantage",
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-blue-100 mr-3 mt-1">
                <Database size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold">Native <span className="text-blue-500">CRM</span>, <span className="text-green-500">Project Management</span>, and <span className="text-purple-500">Helpdesk</span></p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-blue-100 mr-3 mt-1">
                <LineChart size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold">End-to-end visibility from <span className="text-blue-500">Lead → Deal → Delivery → Support</span></p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-blue-100 mr-3 mt-1">
                <Zap size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold">No data silos, no switching tools</p>
                <p className="text-gray-600 italic">"One System to Manage the Entire Customer Lifecycle"</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="text-center px-4 py-2 bg-gray-200 rounded-t-lg font-bold w-24">Pipedrive</div>
              <div className="text-center px-4 py-2 bg-blue-500 text-white rounded-t-lg font-bold w-24">LENS</div>
            </div>
            
            <div className="flex items-center justify-center h-full">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-10">
                  <div className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full mx-auto">
                      <Database size={32} className="text-gray-500" />
                    </div>
                    <p className="mt-2 text-sm font-medium">CRM</p>
                  </div>
                  <ArrowRight className="text-gray-400" />
                  <div className="flex flex-col items-center opacity-30">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto border-2 border-dashed border-gray-300">
                      <Boxes size={24} className="text-gray-400" />
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Projects</p>
                  </div>
                  <ArrowRight className="text-gray-200" />
                  <div className="flex flex-col items-center opacity-30">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto border-2 border-dashed border-gray-300">
                      <Settings size={24} className="text-gray-400" />
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Service</p>
                  </div>
                </div>
                
                <div className="w-full h-1 bg-gray-100 mb-8"></div>
                
                <div className="flex items-center gap-2">
                  <div className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mx-auto">
                      <Database size={32} className="text-blue-500" />
                    </div>
                    <p className="mt-2 text-sm font-medium">CRM</p>
                  </div>
                  <ArrowRight className="text-blue-500" />
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto">
                      <Boxes size={32} className="text-green-500" />  
                    </div>
                    <p className="mt-2 text-sm font-medium">Projects</p>
                  </div>
                  <ArrowRight className="text-blue-500" />
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full mx-auto">
                      <Settings size={32} className="text-purple-500" />
                    </div>
                    <p className="mt-2 text-sm font-medium">Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 4: Key Differentiators
    {
      title: "Key Differentiators Over Pipedrive",
      content: (
        <div className="overflow-hidden h-full">
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 w-1/3">Feature</th>
                  <th className="text-center py-3 px-4 w-1/3">Pipedrive</th>
                  <th className="text-center py-3 px-4 w-1/3">LENS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-4 px-4 font-medium">Deal → Project Handoff</td>
                  <td className="py-4 px-4 text-center text-gray-600">Manual or via integrations</td>
                  <td className="py-4 px-4 text-center font-bold text-blue-600">Automatic & Seamless</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-4 px-4 font-medium">Built-in Project Management</td>
                  <td className="py-4 px-4 text-center text-gray-600">Basic (via add-ons)</td>
                  <td className="py-4 px-4 text-center font-bold text-blue-600">Full-featured & Native</td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 font-medium">Task Dependencies / Milestones</td>
                  <td className="py-4 px-4 text-center text-gray-600">Limited</td>
                  <td className="py-4 px-4 text-center font-bold text-blue-600">Advanced Capabilities</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-4 px-4 font-medium">Service Ticketing</td>
                  <td className="py-4 px-4 text-center text-gray-600">Not Native</td>
                  <td className="py-4 px-4 text-center font-bold text-blue-600">Integrated Helpdesk</td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 font-medium">ERP Extension<br/>(Billing, HRMS, Inventory)</td>
                  <td className="py-4 px-4 text-center text-gray-600">External tools</td>
                  <td className="py-4 px-4 text-center font-bold text-blue-600">Built-In</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    
    // Slide 5: Real-World Use Case
    {
      title: "Real-World Use Case",
      content: (
        <div className="flex h-full">
          <div className="w-full">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                <Card className="w-40 bg-blue-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <Database size={24} className="mx-auto mb-2 text-blue-500" />
                    <p className="text-sm font-medium">Deal Closed</p>
                  </CardContent>
                </Card>
              </div>
              <ArrowRight size={20} className="mx-2 text-gray-400" />
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">2</div>
                <Card className="w-40 bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <Rocket size={24} className="mx-auto mb-2 text-green-500" />
                    <p className="text-sm font-medium">Project Triggered</p>
                  </CardContent>
                </Card>
              </div>
              <ArrowRight size={20} className="mx-2 text-gray-400" />
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">3</div>
                <Card className="w-40 bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <Users size={24} className="mx-auto mb-2 text-green-500" />
                    <p className="text-sm font-medium">Auto-Assigned Tasks</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="flex items-center justify-center mt-2">
              <ArrowLeft size={20} className="mx-2 text-gray-400 rotate-90" />
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">6</div>
                <Card className="w-40 bg-purple-50 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <Shield size={24} className="mx-auto mb-2 text-purple-500" />
                    <p className="text-sm font-medium">Ongoing Support</p>
                  </CardContent>
                </Card>
              </div>
              <ArrowLeft size={20} className="mx-2 text-gray-400" />
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">5</div>
                <Card className="w-40 bg-purple-50 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <Settings size={24} className="mx-auto mb-2 text-purple-500" />
                    <p className="text-sm font-medium">Service Ticketing</p>
                  </CardContent>
                </Card>
              </div>
              <ArrowLeft size={20} className="mx-2 text-gray-400" />
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">4</div>
                <Card className="w-40 bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <LineChart size={24} className="mx-auto mb-2 text-green-500" />
                    <p className="text-sm font-medium">Real-time Progress</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-block px-6 py-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-700 font-semibold">All interactions visible on the customer timeline</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Why LENS for Jasser?
    {
      title: "Why LENS for Jasser?",
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-blue-100 mr-4 mt-1">
                <Rocket size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold">Scale beyond just sales</p>
                <p className="text-gray-600">Future-proof your operations</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-green-100 mr-4 mt-1">
                <Users size={24} className="text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Deliver better customer experience</p>
                <p className="text-gray-600">With integrated service management</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                <Zap size={24} className="text-yellow-500" />
              </div>
              <div>
                <p className="font-semibold">Increase operational efficiency</p>
                <p className="text-gray-600">With one unified platform</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-purple-100 mr-4 mt-1">
                <Brain size={24} className="text-purple-500" />
              </div>
              <div>
                <p className="font-semibold">Flexible and future-ready</p>
                <p className="text-gray-600">ERP, billing, and more if needed</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                  <Database size={48} className="text-blue-500" />
                </div>
              </div>
              <p className="text-xl font-bold text-gray-800 mt-4">Let's explore how we can tailor LENS for your business</p>
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-white p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">LENS CRM</div>
          <div className="ml-2 text-sm text-gray-500">by LMNAs</div>
        </div>
        <div className="text-sm text-gray-500">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-6xl mx-auto p-8 h-full flex flex-col">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{slides[currentSlide].title}</h2>
            {slides[currentSlide].subtitle && (
              <p className="text-xl text-gray-600 mt-2">{slides[currentSlide].subtitle}</p>
            )}
            {slides[currentSlide].presenter && (
              <p className="text-sm text-gray-500 mt-1">{slides[currentSlide].presenter}</p>
            )}
          </div>
          
          <div className="flex-1 overflow-auto">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>
      
      {/* Footer with navigation */}
      <div className="bg-white p-4 border-t flex justify-between">
        <Button 
          variant="outline"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        
        <div className="flex gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        <Button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white"
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  // return (
  //   <div className="w-full max-w-4xl mx-auto py-8">
  //     {slides.map((slide, index) => (
  //       <div key={index} className="mb-10">
  //         <div className="w-full flex justify-center">
  //           <div className="w-[297mm] h-[168mm] overflow-hidden bg-white shadow border p-8 flex flex-col">
  //             <div className="mb-6">
  //               <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
  //               {slide.subtitle && (
  //                 <p className="text-xl text-gray-600 mt-2">{slide.subtitle}</p>
  //               )}
  //               {slide.presenter && (
  //                 <p className="text-sm text-gray-500 mt-1">{slide.presenter}</p>
  //               )}
  //             </div>
  //             <div className="flex-1 overflow-auto">
  //               {slide.content}
  //             </div>
  //           </div>
  //         </div>
  
  //         {/* Optional page break for printing */}
  //         {index < slides.length - 1 && (
  //           <div className="break-after-page"></div>
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );
  
}