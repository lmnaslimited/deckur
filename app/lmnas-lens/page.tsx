
// "use client";
// import { Card } from '@repo/ui/components/ui/card';
// import { Button } from '@repo/ui/components/ui/button';
// import {   BarChart3, Brain, Clock, Database, LineChart, Boxes, Settings, Mail, Linkedin, Globe, XCircle, Rocket, Users, Shield, Zap, Activity, CheckCircle2, Eye, Handshake, Package, RefreshCw, Target, Wrench } from 'lucide-react';

// const PitchDeck = () => {

// //  const slides = [
// //     // Cover Slide
// //     <div key="cover" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
// //       <h1 className="text-4xl font-bold mb-4">LMNAs x LENS</h1>
// //       <h2 className="text-2xl font-semibold">Empowering Agile ERP Delivery</h2>
// //       <p className="text-xl">Next-Generation ERP Solutions Built for Speed, Innovation & Manufacturing Excellence</p>
// //       <div className="flex space-x-4 mt-8">
// //         <Rocket className="w-16 h-16" />
// //         <Zap className="w-16 h-16" />
// //       </div>
// //     </div>,
// // // bg-gradient-to-br from-blue-600 to-purple-700
// //     // Who We Are
// //     <div key="who-we-are" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
// //       <div className="grid grid-cols-1  gap-6">
// //         <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
// //           <h3 className="text-xl font-semibold mb-4 flex items-center">
// //             <Users className="w-6 h-6 mr-2 text-emerald-600" />
// //             LMNAs Leadership
// //           </h3>
// //           <ul className="space-y-3">
// //             <li className="flex items-start">
// //               <Shield className="w-5 h-5 mr-2 text-blue-600 mt-1" />
// //               <span>Founded by seasoned SAP consultant</span>
// //             </li>
// //             <li className="flex items-start">
// //               <Globe className="w-5 h-5 mr-2 text-blue-600 mt-1" />
// //               <span>Decades of experience from Apple, Philips, Shell, Nestlé</span>
// //             </li>
// //             <li className="flex items-start">
// //               <Rocket className="w-5 h-5 mr-2 text-blue-600 mt-1" />
// //               <span>Next-generation ERP and CRM company</span>
// //             </li>
// //           </ul>
// //         </Card>
// //         <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
// //           <h3 className="text-xl font-semibold mb-4 flex items-center">
// //             <Brain className="w-6 h-6 mr-2 text-emerald-600" />
// //             LENS Platform Focus
// //           </h3>
// //           <ul className="space-y-3">
// //             <li className="flex items-start">
// //               <Zap className="w-5 h-5 mr-2 text-emerald-600 mt-1" />
// //               <span><strong>Speed of delivery</strong></span>
// //             </li>
// //             <li className="flex items-start">
// //               <Boxes className="w-5 h-5 mr-2 text-emerald-600 mt-1" />
// //               <span><strong>Deep domain focus</strong> in manufacturing</span>
// //             </li>
// //             <li className="flex items-start">
// //               <LineChart className="w-5 h-5 mr-2 text-emerald-600 mt-1" />
// //               <span><strong>Affordable innovation</strong></span>
// //             </li>
// //           </ul>
// //         </Card>
// //       </div>
// //     </div>,

// //     // What We Offer
// //     <div key="what-we-offer" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-emerald-600">What We Offer</h2>
// //       <div className="grid grid-cols-1  gap-6">
// //         <Card className="p-6">
// //           <h3 className="text-xl font-semibold mb-4 flex items-center">
// //             <Package className="w-6 h-6 mr-2 text-blue-600" />
// //             Core Enterprise Modules
// //           </h3>
// //           <ul className="space-y-3">
// //             <li className="flex items-start">
// //               <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
// //               <span>CRM, CPQ (Auto Offer), Sales, Inventory</span>
// //             </li>
// //             <li className="flex items-start">
// //               <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
// //               <span>Project & Task Management</span>
// //             </li>
// //             <li className="flex items-start">
// //               <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
// //               <span>Analytics Dashboards</span>
// //             </li>
// //             <li className="flex items-start">
// //               <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
// //               <span>Integrations via REST, GraphQL, and native tools</span>
// //             </li>
// //           </ul>
// //         </Card>
// //         <Card className="p-6 bg-blue-50">
// //           <h3 className="text-xl font-semibold mb-4 flex items-center">
// //             <Wrench className="w-6 h-6 mr-2 text-blue-600" />
// //             Built for ETO/Manufacturing
// //           </h3>
// //           <div className="space-y-4">
// //             <p className="text-gray-700">Tailored implementations for companies with complex needs:</p>
// //             <ul className="space-y-2">
// //               <li className="flex items-center">
// //                 <Activity className="w-4 h-4 mr-2 text-blue-500" />
// //                 <span>Complex quotation processes</span>
// //               </li>
// //               <li className="flex items-center">
// //                 <Database className="w-4 h-4 mr-2 text-blue-500" />
// //                 <span>Bill of Materials (BOM)</span>
// //               </li>
// //               <li className="flex items-center">
// //                 <Settings className="w-4 h-4 mr-2 text-blue-500" />
// //                 <span>Project management needs</span>
// //               </li>
// //             </ul>
// //           </div>
// //         </Card>
// //       </div>
// //     </div>,

// //     // Why We're Different
// //     <div key="why-different" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-emerald-600">Why We're Different</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <Card className="p-6 bg-emerald-50">
// //           <h3 className="text-lg font-semibold mb-3 flex items-center">
// //             <Settings className="w-5 h-5 mr-2 text-emerald-600" />
// //             Configurable & Low-Code
// //           </h3>
// //           <p>Built on Frappe's low-code stack, LENS is highly adaptable</p>
// //         </Card>
// //         <Card className="p-6 bg-blue-50">
// //           <h3 className="text-lg font-semibold mb-3 flex items-center">
// //             <Zap className="w-5 h-5 mr-2 text-blue-600" />
// //             Faster Time-to-Value
// //           </h3>
// //           <p>Go-live in <strong>weeks, not months</strong></p>
// //         </Card>
// //         <Card className="p-6 bg-purple-50">
// //           <h3 className="text-lg font-semibold mb-3 flex items-center">
// //             <Brain className="w-5 h-5 mr-2 text-purple-600" />
// //             AI-Ready
// //           </h3>
// //           <p>Embedded AI assistant (LUMI) for user guidance, ticketing, and contextual help</p>
// //         </Card>
// //         <Card className="p-6 bg-orange-50">
// //           <h3 className="text-lg font-semibold mb-3 flex items-center">
// //             <Target className="w-5 h-5 mr-2 text-orange-600" />
// //             Execution-Focused Team
// //           </h3>
// //           <p>Proven delivery with global companies like SGB Transformers (India, Europe, China)</p>
// //         </Card>
// //       </div>
// //     </div>,

// //     // Our Vision
// //     <div key="vision" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-emerald-600">Our Vision</h2>
// //       <Card className="p-8 bg-gradient-to-br from-emerald-100 to-blue-100">
// //         <div className="text-center mb-6">
// //           <Eye className="w-16 h-16 mx-auto text-emerald-600 mb-4" />
// //           <h3 className="text-2xl font-semibold mb-4">The "Execution Arm" for Forward-Thinking ERP Platforms</h3>
// //           <p className="text-lg text-gray-700 mb-6">Partnering with platforms like Rappit to deliver comprehensive solutions</p>
// //         </div>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           <div className="text-center">
// //             <Rocket className="w-12 h-12 mx-auto text-blue-600 mb-2" />
// //             <h4 className="font-semibold">Delivery Muscle</h4>
// //             <p className="text-sm text-gray-600">Proven implementation capabilities</p>
// //           </div>
// //           <div className="text-center">
// //             <Brain className="w-12 h-12 mx-auto text-emerald-600 mb-2" />
// //             <h4 className="font-semibold">Domain Understanding</h4>
// //             <p className="text-sm text-gray-600">Deep manufacturing expertise</p>
// //           </div>
// //           <div className="text-center">
// //             <Zap className="w-12 h-12 mx-auto text-purple-600 mb-2" />
// //             <h4 className="font-semibold">Agile Approach</h4>
// //             <p className="text-sm text-gray-600">Fast, iterative delivery methods</p>
// //           </div>
// //         </div>
// //       </Card>
// //     </div>,

// //     // Opportunity to Collaborate
// //     <div key="collaborate" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-emerald-600">Opportunity to Collaborate</h2>
// //       <div className="grid grid-cols-1 gap-6">
// //         <Card className="p-6 bg-blue-50">
// //           <h3 className="text-xl font-semibold mb-3 flex items-center">
// //             <Handshake className="w-6 h-6 mr-2 text-blue-600" />
// //             Delivery Partnership
// //           </h3>
// //           <p>Use LMNAs as an implementation partner for Rappit-led solutions</p>
// //         </Card>
// //         <Card className="p-6 bg-emerald-50">
// //           <h3 className="text-xl font-semibold mb-3 flex items-center">
// //             <Boxes className="w-6 h-6 mr-2 text-emerald-600" />
// //             Industry Accelerators
// //           </h3>
// //           <p>Jointly package prebuilt flows for manufacturing, logistics, and engineering firms</p>
// //         </Card>
// //         <Card className="p-6 bg-purple-50">
// //           <h3 className="text-xl font-semibold mb-3 flex items-center">
// //             <RefreshCw className="w-6 h-6 mr-2 text-purple-600" />
// //             Co-Innovation
// //           </h3>
// //           <p>Blend Rappit's platform with LENS's CRM/CPQ layer for integrated solutions</p>
// //         </Card>
// //       </div>
// //     </div>,

// //     // Contact
// //     <div key="contact" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-emerald-600 to-blue-700 text-white p-8 rounded-lg">
// //       <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
// //       <div className="space-y-4">
// //         <div className="flex items-center justify-center space-x-3">
// //           <Users className="w-8 h-8" />
// //           <div className="text-left">
// //             <h3 className="text-xl font-semibold">Arunkumar Ganesan</h3>
// //             <p className="text-lg">Founder & CEO, LMNAs</p>
// //           </div>
// //         </div>
// //         <div className="space-y-2 mt-6">
// //           <div className="flex items-center justify-center space-x-2">
// //             <Mail className="w-5 h-5" />
// //             <span className="text-lg">arun@lmnas.com</span>
// //           </div>
// //           <div className="flex items-center justify-center space-x-2">
// //             <Globe className="w-5 h-5" />
// //             <span className="text-lg">www.lmnas.com</span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mt-8">
// //         <Rocket className="w-12 h-12 mx-auto" />
// //       </div>
// //     </div>
// //   ];

// // const slides = [
// //     // Cover Slide
// //     <div key="cover" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
// //       <h1 className="text-4xl font-bold mb-4">LMNAs x LENS</h1>
// //       <h2 className="text-2xl font-semibold">Empowering Agile ERP Delivery</h2>
// //       <p className="text-xl">Next-Generation ERP Solutions Built for Speed, Innovation & Manufacturing Excellence</p>
// //       <div className="flex space-x-4 mt-8">
// //         <Rocket className="w-16 h-16" />
// //         <Zap className="w-16 h-16" />
// //       </div>
// //     </div>,

// //     // Who We Are
// //     <div key="who-we-are" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-blue-600">Who We Are</h2>
// //       <div className="grid grid-cols-1  gap-6">
// //         <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
// //           <h3 className="text-xl font-semibold mb-4 flex items-center">
// //             <Users className="w-6 h-6 mr-2 text-blue-600" />
// //             LMNAs Leadership
// //           </h3>
// //           <ul className="space-y-3">
// //             <li className="flex items-start">
// //               <Shield className="w-5 h-5 mr-2 text-blue-600 mt-1" />
// //               <span>Founded by seasoned SAP consultant</span>
// //             </li>
// //             <li className="flex items-start">
// //               <Globe className="w-5 h-5 mr-2 text-blue-600 mt-1" />
// //               <span>Decades of experience from Apple, Philips, Shell, Nestlé</span>
// //             </li>
// //             <li className="flex items-start">
// //               <Rocket className="w-5 h-5 mr-2 text-blue-600 mt-1" />
// //               <span>Next-generation ERP and CRM company</span>
// //             </li>
// //           </ul>
// //         </Card>
// //         <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
// //           <h3 className="text-xl font-semibold mb-4 flex items-center">
// //             <Brain className="w-6 h-6 mr-2 text-purple-600" />
// //             LENS Platform Focus
// //           </h3>
// //           <ul className="space-y-3">
// //             <li className="flex items-start">
// //               <Zap className="w-5 h-5 mr-2 text-purple-600 mt-1" />
// //               <span><strong>Speed of delivery</strong></span>
// //             </li>
// //             <li className="flex items-start">
// //               <Boxes className="w-5 h-5 mr-2 text-purple-600 mt-1" />
// //               <span><strong>Deep domain focus</strong> in manufacturing</span>
// //             </li>
// //             <li className="flex items-start">
// //               <LineChart className="w-5 h-5 mr-2 text-purple-600 mt-1" />
// //               <span><strong>Affordable innovation</strong></span>
// //             </li>
// //           </ul>
// //         </Card>
// //       </div>
// //     </div>,

// //     // What We Offer
// //     <div key="what-we-offer" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-blue-600">What We Offer</h2>
// //       <div className="grid grid-cols-1  gap-6">
// //         <Card className="p-6">
// //           <h3 className="text-xl font-semibold mb-4 flex items-center">
// //             <Package className="w-6 h-6 mr-2 text-blue-600" />
// //             Core Enterprise Modules
// //           </h3>
// //           <ul className="space-y-3">
// //             <li className="flex items-start">
// //               <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500 mt-1" />
// //               <span>CRM, CPQ (Auto Offer), Sales, Inventory</span>
// //             </li>
// //             <li className="flex items-start">
// //               <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500 mt-1" />
// //               <span>Project & Task Management</span>
// //             </li>
// //             <li className="flex items-start">
// //               <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500 mt-1" />
// //               <span>Analytics Dashboards</span>
// //             </li>
// //             <li className="flex items-start">
// //               <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500 mt-1" />
// //               <span>Integrations via REST, GraphQL, and native tools</span>
// //             </li>
// //           </ul>
// //         </Card>
// //         <Card className="p-6 bg-blue-50">
// //           <h3 className="text-xl font-semibold mb-4 flex items-center">
// //             <Wrench className="w-6 h-6 mr-2 text-blue-600" />
// //             Built for ETO/Manufacturing
// //           </h3>
// //           <div className="space-y-4">
// //             <p className="text-gray-700">Tailored implementations for companies with complex needs:</p>
// //             <ul className="space-y-2">
// //               <li className="flex items-center">
// //                 <Activity className="w-4 h-4 mr-2 text-blue-500" />
// //                 <span>Complex quotation processes</span>
// //               </li>
// //               <li className="flex items-center">
// //                 <Database className="w-4 h-4 mr-2 text-blue-500" />
// //                 <span>Bill of Materials (BOM)</span>
// //               </li>
// //               <li className="flex items-center">
// //                 <Settings className="w-4 h-4 mr-2 text-blue-500" />
// //                 <span>Project management needs</span>
// //               </li>
// //             </ul>
// //           </div>
// //         </Card>
// //       </div>
// //     </div>,

// //     // Why We're Different
// //     <div key="why-different" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-blue-600">Why We're Different</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <Card className="p-6 bg-blue-50">
// //           <h3 className="text-lg font-semibold mb-3 flex items-center">
// //             <Settings className="w-5 h-5 mr-2 text-blue-600" />
// //             Configurable & Low-Code
// //           </h3>
// //           <p>Built on Frappe's low-code stack, LENS is highly adaptable</p>
// //         </Card>
// //         <Card className="p-6 bg-purple-50">
// //           <h3 className="text-lg font-semibold mb-3 flex items-center">
// //             <Zap className="w-5 h-5 mr-2 text-purple-600" />
// //             Faster Time-to-Value
// //           </h3>
// //           <p>Go-live in <strong>weeks, not months</strong></p>
// //         </Card>
// //         <Card className="p-6 bg-purple-50">
// //           <h3 className="text-lg font-semibold mb-3 flex items-center">
// //             <Brain className="w-5 h-5 mr-2 text-purple-600" />
// //             AI-Ready
// //           </h3>
// //           <p>Embedded AI assistant (LUMI) for user guidance, ticketing, and contextual help</p>
// //         </Card>
// //         <Card className="p-6 bg-blue-50">
// //           <h3 className="text-lg font-semibold mb-3 flex items-center">
// //             <Target className="w-5 h-5 mr-2 text-blue-600" />
// //             Execution-Focused Team
// //           </h3>
// //           <p>Proven delivery with global companies like SGB Transformers (India, Europe, China)</p>
// //         </Card>
// //       </div>
// //     </div>,

// //     // Our Vision
// //     <div key="vision" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-blue-600">Our Vision</h2>
// //       <Card className="p-8 bg-gradient-to-br from-blue-100 to-purple-100">
// //         <div className="text-center mb-6">
// //           <Eye className="w-16 h-16 mx-auto text-blue-600 mb-4" />
// //           <h3 className="text-2xl font-semibold mb-4">The "Execution Arm" for Forward-Thinking ERP Platforms</h3>
// //           <p className="text-lg text-gray-700 mb-6">Partnering with platforms like Rappit to deliver comprehensive solutions</p>
// //         </div>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           <div className="text-center">
// //             <Rocket className="w-12 h-12 mx-auto text-blue-600 mb-2" />
// //             <h4 className="font-semibold">Delivery Muscle</h4>
// //             <p className="text-sm text-gray-600">Proven implementation capabilities</p>
// //           </div>
// //           <div className="text-center">
// //             <Brain className="w-12 h-12 mx-auto text-purple-600 mb-2" />
// //             <h4 className="font-semibold">Domain Understanding</h4>
// //             <p className="text-sm text-gray-600">Deep manufacturing expertise</p>
// //           </div>
// //           <div className="text-center">
// //             <Zap className="w-12 h-12 mx-auto text-purple-600 mb-2" />
// //             <h4 className="font-semibold">Agile Approach</h4>
// //             <p className="text-sm text-gray-600">Fast, iterative delivery methods</p>
// //           </div>
// //         </div>
// //       </Card>
// //     </div>,

// //     // Opportunity to Collaborate
// //     <div key="collaborate" className="p-8 space-y-6">
// //       <h2 className="text-2xl font-bold mb-6 text-blue-600">Opportunity to Collaborate</h2>
// //       <div className="grid grid-cols-1 gap-6">
// //         <Card className="p-6 bg-blue-50">
// //           <h3 className="text-xl font-semibold mb-3 flex items-center">
// //             <Handshake className="w-6 h-6 mr-2 text-blue-600" />
// //             Delivery Partnership
// //           </h3>
// //           <p>Use LMNAs as an implementation partner for Rappit-led solutions</p>
// //         </Card>
// //         <Card className="p-6 bg-purple-50">
// //           <h3 className="text-xl font-semibold mb-3 flex items-center">
// //             <Boxes className="w-6 h-6 mr-2 text-purple-600" />
// //             Industry Accelerators
// //           </h3>
// //           <p>Jointly package prebuilt flows for manufacturing, logistics, and engineering firms</p>
// //         </Card>
// //         <Card className="p-6 bg-blue-50">
// //           <h3 className="text-xl font-semibold mb-3 flex items-center">
// //             <RefreshCw className="w-6 h-6 mr-2 text-blue-600" />
// //             Co-Innovation
// //           </h3>
// //           <p>Blend Rappit's platform with LENS's CRM/CPQ layer for integrated solutions</p>
// //         </Card>
// //       </div>
// //     </div>,

// //     // Contact
// //     <div key="contact" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
// //       <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
// //       <div className="space-y-4">
// //         <div className="flex items-center justify-center space-x-3">
// //           <Users className="w-8 h-8" />
// //           <div className="text-left">
// //             <h3 className="text-xl font-semibold">Arunkumar Ganesan</h3>
// //             <p className="text-lg">Founder & CEO, LMNAs</p>
// //           </div>
// //         </div>
// //         <div className="space-y-2 mt-6">
// //           <div className="flex items-center justify-center space-x-2">
// //             <Mail className="w-5 h-5" />
// //             <span className="text-lg">arun@lmnas.com</span>
// //           </div>
// //           <div className="flex items-center justify-center space-x-2">
// //             <Globe className="w-5 h-5" />
// //             <span className="text-lg">www.lmnas.com</span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mt-8">
// //         <Rocket className="w-12 h-12 mx-auto" />
// //       </div>
// //     </div>
// //   ];

// //   return (
// //     <div className="w-full max-w-4xl mx-auto">
// //       {slides.map((slide, index) => (
// //         <div key={index} className="mb-10">
// //           <div className="w-full flex justify-center">
// //   <div className="w-[297mm] h-[168mm] overflow-hidden">
// //     {slide}
// //   </div>
// // </div>

//  const slides = [
//     // Cover Slide
//     <div key="cover" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
//       <h1 className="text-4xl font-bold mb-4">LMNAs x LENS</h1>
//       <h2 className="text-2xl font-semibold">Empowering Agile ERP Delivery</h2>
//       <p className="text-xl">Next-Generation ERP Solutions Built for Speed, Innovation & Manufacturing Excellence</p>
//       <div className="flex space-x-4 mt-8">
//         <Rocket className="w-16 h-16" />
//         <Zap className="w-16 h-16" />
//       </div>
//     </div>,

//     // Who We Are
//     <div key="who-we-are" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6 text-blue-600">Who We Are</h2>
//       <div className="grid grid-cols-1  gap-6">
//         <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
//           <h3 className="text-xl font-semibold mb-4 flex items-center">
//             <Users className="w-6 h-6 mr-2 text-blue-600" />
//             LMNAs Leadership
//           </h3>
//           <ul className="space-y-3">
//             <li className="flex items-start">
//               <Shield className="w-5 h-5 mr-2 text-blue-600 mt-1" />
//               <span>Founded by seasoned SAP consultant</span>
//             </li>
//             <li className="flex items-start">
//               <Globe className="w-5 h-5 mr-2 text-blue-600 mt-1" />
//               <span>Decades of experience from Apple, Philips, Shell, Nestlé</span>
//             </li>
//             <li className="flex items-start">
//               <Rocket className="w-5 h-5 mr-2 text-blue-600 mt-1" />
//               <span>Next-generation ERP and CRM company</span>
//             </li>
//           </ul>
//         </Card>
//         <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
//           <h3 className="text-xl font-semibold mb-4 flex items-center">
//             <Brain className="w-6 h-6 mr-2 text-purple-600" />
//             LENS Platform Focus
//           </h3>
//           <ul className="space-y-3">
//             <li className="flex items-start">
//               <Zap className="w-5 h-5 mr-2 text-purple-600 mt-1" />
//               <span><strong>Speed of delivery</strong></span>
//             </li>
//             <li className="flex items-start">
//               <Boxes className="w-5 h-5 mr-2 text-purple-600 mt-1" />
//               <span><strong>Deep domain focus</strong> in manufacturing</span>
//             </li>
//             <li className="flex items-start">
//               <LineChart className="w-5 h-5 mr-2 text-purple-600 mt-1" />
//               <span><strong>Affordable innovation</strong></span>
//             </li>
//           </ul>
//         </Card>
//       </div>
//     </div>,

//     // What We Offer
//     <div key="what-we-offer" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6 text-blue-600">What We Offer</h2>
//       <div className="grid grid-cols-1  gap-6">
//         <Card className="p-6">
//           <h3 className="text-xl font-semibold mb-4 flex items-center">
//             <Package className="w-6 h-6 mr-2 text-blue-600" />
//             Core Enterprise Modules
//           </h3>
//           <ul className="space-y-3">
//             <li className="flex items-start">
//               <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
//               <span>CRM, CPQ (Auto Offer), Sales, Inventory</span>
//             </li>
//             <li className="flex items-start">
//               <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
//               <span>Project & Task Management</span>
//             </li>
//             <li className="flex items-start">
//               <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
//               <span>Analytics Dashboards</span>
//             </li>
//             <li className="flex items-start">
//               <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
//               <span>Integrations via REST, GraphQL, and native tools</span>
//             </li>
//           </ul>
//         </Card>
//         <Card className="p-6 bg-blue-50">
//           <h3 className="text-xl font-semibold mb-4 flex items-center">
//             <Wrench className="w-6 h-6 mr-2 text-blue-600" />
//             Built for ETO/Manufacturing
//           </h3>
//           <div className="space-y-4">
//             <p className="text-gray-700">Tailored implementations for companies with complex needs:</p>
//             <ul className="space-y-2">
//               <li className="flex items-center">
//                 <Activity className="w-4 h-4 mr-2 text-orange-500" />
//                 <span>Complex quotation processes</span>
//               </li>
//               <li className="flex items-center">
//                 <Database className="w-4 h-4 mr-2 text-orange-500" />
//                 <span>Bill of Materials (BOM)</span>
//               </li>
//               <li className="flex items-center">
//                 <Settings className="w-4 h-4 mr-2 text-orange-500" />
//                 <span>Project management needs</span>
//               </li>
//             </ul>
//           </div>
//         </Card>
//       </div>
//     </div>,

//     // Why We're Different
//     <div key="why-different" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6 text-blue-600">Why We're Different</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card className="p-6 bg-indigo-50">
//           <h3 className="text-lg font-semibold mb-3 flex items-center">
//             <Settings className="w-5 h-5 mr-2 text-indigo-600" />
//             Configurable & Low-Code
//           </h3>
//           <p>Built on Frappe's low-code stack, LENS is highly adaptable</p>
//         </Card>
//         <Card className="p-6 bg-purple-50">
//           <h3 className="text-lg font-semibold mb-3 flex items-center">
//             <Zap className="w-5 h-5 mr-2 text-purple-600" />
//             Faster Time-to-Value
//           </h3>
//           <p>Go-live in <strong>weeks, not months</strong></p>
//         </Card>
//         <Card className="p-6 bg-emerald-50">
//           <h3 className="text-lg font-semibold mb-3 flex items-center">
//             <Brain className="w-5 h-5 mr-2 text-emerald-600" />
//             AI-Ready
//           </h3>
//           <p>Embedded AI assistant (LUMI) for user guidance, ticketing, and contextual help</p>
//         </Card>
//         <Card className="p-6 bg-orange-50">
//           <h3 className="text-lg font-semibold mb-3 flex items-center">
//             <Target className="w-5 h-5 mr-2 text-orange-600" />
//             Execution-Focused Team
//           </h3>
//           <p>Proven delivery with global companies like SGB Transformers (India, Europe, China)</p>
//         </Card>
//       </div>
//     </div>,

//     // Our Vision
//     <div key="vision" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6 text-blue-600">Our Vision</h2>
//       <Card className="p-8 bg-gradient-to-br from-blue-100 to-purple-100">
//         <div className="text-center mb-6">
//           <Eye className="w-16 h-16 mx-auto text-blue-600 mb-4" />
//           <h3 className="text-2xl font-semibold mb-4">The "Execution Arm" for Forward-Thinking ERP Platforms</h3>
//           <p className="text-lg text-gray-700 mb-6">Partnering with platforms like Rappit to deliver comprehensive solutions</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="text-center">
//             <Rocket className="w-12 h-12 mx-auto text-blue-600 mb-2" />
//             <h4 className="font-semibold">Delivery Muscle</h4>
//             <p className="text-sm text-gray-600">Proven implementation capabilities</p>
//           </div>
//           <div className="text-center">
//             <Brain className="w-12 h-12 mx-auto text-emerald-600 mb-2" />
//             <h4 className="font-semibold">Domain Understanding</h4>
//             <p className="text-sm text-gray-600">Deep manufacturing expertise</p>
//           </div>
//           <div className="text-center">
//             <Zap className="w-12 h-12 mx-auto text-orange-600 mb-2" />
//             <h4 className="font-semibold">Agile Approach</h4>
//             <p className="text-sm text-gray-600">Fast, iterative delivery methods</p>
//           </div>
//         </div>
//       </Card>
//     </div>,

//     // Opportunity to Collaborate
//     <div key="collaborate" className="p-8 space-y-6">
//       <h2 className="text-2xl font-bold mb-6 text-blue-600">Opportunity to Collaborate</h2>
//       <div className="grid grid-cols-1 gap-6">
//         <Card className="p-6 bg-blue-50">
//           <h3 className="text-xl font-semibold mb-3 flex items-center">
//             <Handshake className="w-6 h-6 mr-2 text-blue-600" />
//             Delivery Partnership
//           </h3>
//           <p>Use LMNAs as an implementation partner for Rappit-led solutions</p>
//         </Card>
//         <Card className="p-6 bg-emerald-50">
//           <h3 className="text-xl font-semibold mb-3 flex items-center">
//             <Boxes className="w-6 h-6 mr-2 text-emerald-600" />
//             Industry Accelerators
//           </h3>
//           <p>Jointly package prebuilt flows for manufacturing, logistics, and engineering firms</p>
//         </Card>
//         <Card className="p-6 bg-orange-50">
//           <h3 className="text-xl font-semibold mb-3 flex items-center">
//             <RefreshCw className="w-6 h-6 mr-2 text-orange-600" />
//             Co-Innovation
//           </h3>
//           <p>Blend Rappit's platform with LENS's CRM/CPQ layer for integrated solutions</p>
//         </Card>
//       </div>
//     </div>,

//     // Contact
//     <div key="contact" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
//       <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
//       <div className="space-y-4">
//         <div className="flex items-center justify-center space-x-3">
//           <Users className="w-8 h-8" />
//           <div className="text-left">
//             <h3 className="text-xl font-semibold">Arunkumar Ganesan</h3>
//             <p className="text-lg">Founder & CEO, LMNAs</p>
//           </div>
//         </div>
//         <div className="space-y-2 mt-6">
//           <div className="flex items-center justify-center space-x-2">
//             <Mail className="w-5 h-5" />
//             <span className="text-lg">arun@lmnas.com</span>
//           </div>
//           <div className="flex items-center justify-center space-x-2">
//             <Globe className="w-5 h-5" />
//             <span className="text-lg">www.lmnas.com</span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <Rocket className="w-12 h-12 mx-auto" />
//       </div>
//     </div>
//   ];
  
//           {index < slides.length - 1 && (
//             <div className="break-after"></div> 
//           )}
//         </div>
//       ))}
//     </div>
//   );
  
// };

// export default PitchDeck;


"use client";
import { Card } from '@repo/ui/components/ui/card';
import { Button } from '@repo/ui/components/ui/button';
import {   BarChart3, Brain, Clock, Database, LineChart, Boxes, Settings, Mail, Linkedin, Globe, XCircle, Rocket, Users, Shield, Zap, Activity, CheckCircle2, Eye, Handshake, Package, RefreshCw, Target, Wrench } from 'lucide-react';

const PitchDeck = () => {

  // const slides = [
  //   // Cover Slide
  //   <div key="cover" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
  //     <h1 className="text-4xl font-bold mb-4">LMNAs</h1>
  //     <h2 className="text-2xl font-semibold">AI-Enabled ERP for the Future</h2>
  //     <p className="text-xl">Transforming Business Operations with Smart, Scalable, and Adaptive ERP Solutions</p>
  //     <Brain className="w-16 h-16 mt-8" />
  //   </div>,

  //   // The Character (Our Customers)
  //   <div key="customers" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Our Customers</h2>
  //     <div className="grid grid-cols-1  gap-6">
  //       <Card className="p-6">
  //         <h3 className="text-xl font-semibold mb-4">Who They Are</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <Boxes className="w-5 h-5 mr-2 text-blue-600 mt-1" />
  //             <span>Manufacturing companies, especially Engineer-to-Order (ETO) businesses</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Settings className="w-5 h-5 mr-2 text-blue-600 mt-1" />
  //             <span>Struggling with ERP complexity and customization</span>
  //           </li>
  //         </ul>
  //       </Card>
  //       <Card className="p-6">
  //         <h3 className="text-xl font-semibold mb-4">Pain Points</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <Database className="w-5 h-5 mr-2 text-red-500 mt-1" />
  //             <span>Outdated, rigid ERP systems</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Clock className="w-5 h-5 mr-2 text-red-500 mt-1" />
  //             <span>Manual, disconnected workflows</span>
  //           </li>
  //         </ul>
  //       </Card>
  //     </div>
  //   </div>,

  //   // The Problem
  //   <div key="problem" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">The Problem</h2>
  //     <div className="grid grid-cols-1 gap-6">
  //       <Card className="p-6 bg-red-50">
  //         <h3 className="text-xl font-semibold mb-4">ERP Systems Today Are Broken</h3>
  //         <div className="grid grid-cols-1  gap-4">
  //           <div className="flex flex-col items-center text-center p-4">
  //             <BarChart3 className="w-12 h-12 text-red-500 mb-2" />
  //             <p className="font-bold">80%</p>
  //             <p>of ERP implementations fail to meet expectations</p>
  //           </div>
  //           <div className="flex flex-col items-center text-center p-4">
  //             <Clock className="w-12 h-12 text-red-500 mb-2" />
  //             <p className="font-bold">30%</p>
  //             <p>of time wasted on non-automated workflows</p>
  //           </div>
  //           <div className="flex flex-col items-center text-center p-4">
  //             <LineChart className="w-12 h-12 text-green-500 mb-2" />
  //             <p className="font-bold">5x</p>
  //             <p>faster growth in AI-driven ERP adoption</p>
  //           </div>
  //         </div>
  //       </Card>
  //     </div>
  //   </div>,

  //   // The Solution
  //   <div key="solution" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Introducing LENS ERP</h2>
  //     <div className="grid grid-cols-1 gap-6">
  //       <Card className="p-6">
  //         <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <Brain className="w-5 h-5 mr-2 text-blue-600 mt-1" />
  //             <span>AI-Powered Workflows that reduce manual work</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Settings className="w-5 h-5 mr-2 text-blue-600 mt-1" />
  //             <span>Built on Frappe & ERPNext, enterprise-grade yet open-source</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Database className="w-5 h-5 mr-2 text-blue-600 mt-1" />
  //             <span>Seamless integration with SAP, IoT, and third-party tools</span>
  //           </li>
  //         </ul>
  //       </Card>
  //       <Card className="p-6 bg-blue-50">
  //         <h3 className="text-xl font-semibold mb-4">Case Study: SGB Transformers</h3>
  //         <div className="space-y-4">
  //           <p className="font-semibold">Challenge:</p>
  //           <p>Complex CPQ & order management</p>
  //           <p className="font-semibold">Impact:</p>
  //           <ul className="list-disc pl-5">
  //             <li>50% faster quoting</li>
  //             <li>30% reduction in manual work</li>
  //           </ul>
  //         </div>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Implementation Process
  //   <div key="implementation" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Implementation Process</h2>
  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //       <Card className="p-6">
  //         <div className="flex flex-col items-center text-center">
  //           <div className="bg-blue-100 p-4 rounded-full mb-4">
  //             <Users className="w-8 h-8 text-blue-600" />
  //           </div>
  //           <h3 className="text-lg font-semibold mb-2">1. Discovery</h3>
  //           <p>Understanding your processes and pain points</p>
  //         </div>
  //       </Card>
  //       <Card className="p-6">
  //         <div className="flex flex-col items-center text-center">
  //           <div className="bg-purple-100 p-4 rounded-full mb-4">
  //             <Brain className="w-8 h-8 text-purple-600" />
  //           </div>
  //           <h3 className="text-lg font-semibold mb-2">2. AI Integration</h3>
  //           <p>Implementing LENS ERP with custom AI workflows</p>
  //         </div>
  //       </Card>
  //       <Card className="p-6">
  //         <div className="flex flex-col items-center text-center">
  //           <div className="bg-green-100 p-4 rounded-full mb-4">
  //             <Rocket className="w-8 h-8 text-green-600" />
  //           </div>
  //           <h3 className="text-lg font-semibold mb-2">3. Go-Live</h3>
  //           <p>Ensuring smooth adoption and continuous improvement</p>
  //         </div>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Competitive Advantages
  //   <div key="advantages" className="p-8 space-y-6">
  //     <h2 className="text-2xl font-bold mb-6">Why Choose LMNAs?</h2>
  //     <div className="grid grid-cols-1 gap-6">
  //       <Card className="p-6">
  //         <h3 className="text-xl font-semibold mb-4">Our Advantages</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <Zap className="w-5 h-5 mr-2 text-yellow-500 mt-1" />
  //             <span>Faster implementation at fraction of SAP costs</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Shield className="w-5 h-5 mr-2 text-green-500 mt-1" />
  //             <span>Enterprise-grade security with open-source flexibility</span>
  //           </li>
  //           <li className="flex items-start">
  //             <Brain className="w-5 h-5 mr-2 text-blue-500 mt-1" />
  //             <span>Advanced AI capabilities built-in</span>
  //           </li>
  //         </ul>
  //       </Card>
  //       <Card className="p-6 bg-red-50">
  //         <h3 className="text-xl font-semibold mb-4">Cost of Inaction</h3>
  //         <ul className="space-y-4">
  //           <li className="flex items-start">
  //             <XCircle className="w-5 h-5 mr-2 text-red-500 mt-1" />
  //             <span>Continued inefficiencies & high manual effort</span>
  //           </li>
  //           <li className="flex items-start">
  //             <XCircle className="w-5 h-5 mr-2 text-red-500 mt-1" />
  //             <span>Fall behind competitors adopting AI-driven solutions</span>
  //           </li>
  //         </ul>
  //       </Card>
  //     </div>
  //   </div>,

  //   // Call to Action
  //   <div key="cta" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
  //     <h2 className="text-3xl font-bold">Ready to Transform Your Operations?</h2>
  //     <p className="text-xl">Lets explore how LENS ERP can revolutionize your business</p>
  //     <div className="flex space-x-4 mt-8">
  //       <Button className="bg-white text-blue-600 hover:bg-gray-100 flex items-center space-x-2">
  //         <Mail className="w-4 h-4" />
  //         <span>Contact Us</span>
  //       </Button>
  //       <div className="flex space-x-4">
  //         <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
  //           <Globe className="w-4 h-4" />
  //         </Button>
  //         <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
  //           <Linkedin className="w-4 h-4" />
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // ];

const slides = [
    // Cover Slide
    <div key="cover" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
      <h1 className="text-4xl font-bold mb-4">LMNAs x LENS</h1>
      <h2 className="text-2xl font-semibold">Empowering Agile ERP Delivery</h2>
      <p className="text-xl">Next-Generation ERP Solutions Built for Speed, Innovation & Manufacturing Excellence</p>
      <div className="flex space-x-4 mt-8">
        <Rocket className="w-16 h-16" />
        <Zap className="w-16 h-16" />
      </div>
    </div>,

    // Who We Are
    <div key="who-we-are" className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Who We Are</h2>
      <div className="grid grid-cols-1  gap-6">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow-none">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2 text-blue-600" />
            LMNAs Leadership
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Shield className="w-5 h-5 mr-2 text-blue-600 mt-1" />
              <span>Founded by seasoned SAP consultant</span>
            </li>
            <li className="flex items-start">
              <Globe className="w-5 h-5 mr-2 text-blue-600 mt-1" />
              <span>Decades of experience from Apple, Philips, Shell, Nestlé</span>
            </li>
            <li className="flex items-start">
              <Rocket className="w-5 h-5 mr-2 text-blue-600 mt-1" />
              <span>Next-generation ERP and CRM company</span>
            </li>
          </ul>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 shadow-none">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Brain className="w-6 h-6 mr-2 text-purple-600" />
            LENS Platform Focus
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Zap className="w-5 h-5 mr-2 text-purple-600 mt-1" />
              <span><strong>Speed of delivery</strong></span>
            </li>
            <li className="flex items-start">
              <Boxes className="w-5 h-5 mr-2 text-purple-600 mt-1" />
              <span><strong>Deep domain focus</strong> in manufacturing</span>
            </li>
            <li className="flex items-start">
              <LineChart className="w-5 h-5 mr-2 text-purple-600 mt-1" />
              <span><strong>Affordable innovation</strong></span>
            </li>
          </ul>
        </Card>
      </div>
    </div>,

    // What We Offer
    <div key="what-we-offer" className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">What We Offer</h2>
      <div className="grid grid-cols-1  gap-6">
        <Card className="p-6 shadow-none">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Package className="w-6 h-6 mr-2 text-blue-600" />
            Core Enterprise Modules
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
              <span>CRM, CPQ (Auto Offer), Sales, Inventory</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
              <span>Project & Task Management</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
              <span>Analytics Dashboards</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 mt-1" />
              <span>Integrations via REST, GraphQL, and native tools</span>
            </li>
          </ul>
        </Card>
        <Card className="p-6 bg-blue-50 shadow-none">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Wrench className="w-6 h-6 mr-2 text-blue-600" />
            Built for ETO/Manufacturing
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700">Tailored implementations for companies with complex needs:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Activity className="w-4 h-4 mr-2 text-orange-500" />
                <span>Complex quotation processes</span>
              </li>
              <li className="flex items-center">
                <Database className="w-4 h-4 mr-2 text-orange-500" />
                <span>Bill of Materials (BOM)</span>
              </li>
              <li className="flex items-center">
                <Settings className="w-4 h-4 mr-2 text-orange-500" />
                <span>Project management needs</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>,

    // Why We're Different
    <div key="why-different" className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Why We're Different</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-indigo-50 shadow-none">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Settings className="w-5 h-5 mr-2 text-indigo-600" />
            Configurable & Low-Code
          </h3>
          <p>Built on Frappe's low-code stack, LENS is highly adaptable</p>
        </Card>
        <Card className="p-6 bg-purple-50 shadow-none">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-purple-600" />
            Faster Time-to-Value
          </h3>
          <p>Go-live in <strong>weeks, not months</strong></p>
        </Card>
        <Card className="p-6 bg-emerald-50 shadow-none">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-emerald-600" />
            AI-Ready
          </h3>
          <p>Embedded AI assistant (LUMI) for user guidance, ticketing, and contextual help</p>
        </Card>
        <Card className="p-6 bg-orange-50 shadow-none">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Target className="w-5 h-5 mr-2 text-orange-600" />
            Execution-Focused Team
          </h3>
          <p>Proven delivery with global companies like SGB Transformers (India, Europe, China)</p>
        </Card>
      </div>
    </div>,

    // Our Vision
    <div key="vision" className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Our Vision</h2>
      <Card className="p-8 bg-gradient-to-br from-blue-100 to-purple-100 shadow-none">
        <div className="text-center mb-6">
          <Eye className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-4">The "Execution Arm" for Forward-Thinking ERP Platforms</h3>
          <p className="text-lg text-gray-700 mb-6">Partnering with platforms like Rappit to deliver comprehensive solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Rocket className="w-12 h-12 mx-auto text-blue-600 mb-2" />
            <h4 className="font-semibold">Delivery Muscle</h4>
            <p className="text-sm text-gray-600">Proven implementation capabilities</p>
          </div>
          <div className="text-center">
            <Brain className="w-12 h-12 mx-auto text-emerald-600 mb-2" />
            <h4 className="font-semibold">Domain Understanding</h4>
            <p className="text-sm text-gray-600">Deep manufacturing expertise</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 mx-auto text-orange-600 mb-2" />
            <h4 className="font-semibold">Agile Approach</h4>
            <p className="text-sm text-gray-600">Fast, iterative delivery methods</p>
          </div>
        </div>
      </Card>
    </div>,

    // Opportunity to Collaborate
    <div key="collaborate" className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Opportunity to Collaborate</h2>
      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6 bg-blue-50 shadow-none">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Handshake className="w-6 h-6 mr-2 text-blue-600" />
            Delivery Partnership
          </h3>
          <p>Use LMNAs as an implementation partner for Rappit-led solutions</p>
        </Card>
        <Card className="p-6 bg-emerald-50 shadow-none">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Boxes className="w-6 h-6 mr-2 text-emerald-600" />
            Industry Accelerators
          </h3>
          <p>Jointly package prebuilt flows for manufacturing, logistics, and engineering firms</p>
        </Card>
        <Card className="p-6 bg-orange-50 shadow-none ">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <RefreshCw className="w-6 h-6 mr-2 text-orange-600" />
            Co-Innovation
          </h3>
          <p>Blend Rappit's platform with LENS's CRM/CPQ layer for integrated solutions</p>
        </Card>
      </div>
    </div>,

    // Contact
    <div key="contact" className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Users className="w-8 h-8" />
          <div className="text-left">
            <h3 className="text-xl font-semibold">Arunkumar Ganesan</h3>
            <p className="text-lg">Founder & CEO, LMNAs</p>
          </div>
        </div>
        <div className="space-y-2 mt-6">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-5 h-5" />
            <span className="text-lg">arun@lmnas.com</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Globe className="w-5 h-5" />
            <span className="text-lg">www.lmnas.com</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Rocket className="w-12 h-12 mx-auto" />
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