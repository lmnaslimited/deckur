


"use client"
import { useState } from 'react';
import { Card, CardContent } from '@repo/ui/components/ui/card';
import { Button } from '@repo/ui/components/ui/button';
import { ArrowLeft, ArrowRight, BarChart3, Brain, Clock, Database, LineChart, Boxes, Settings, Mail, Linkedin, Globe, CheckCircle2, XCircle, Rocket, Users, Shield, Zap } from 'lucide-react';

export default function LENSCRMPitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [

    
    {
      title: "Future-Proof Your Customer Journey with LENS CRM",
      subtitle: "From Lead to Delivery — All in One Unified System",
      presenter: "Presented by: LMNAs",
      content: (
        <div className="w-full px-12 py-10">
          {/* Icons Row */}
          <div className="flex justify-center items-start gap-8 mb-6">
            <div className="p-4 rounded-full bg-blue-100">
              <Database size={64} className="text-blue-500" />
            </div>
            <div className="text-3xl font-bold self-center">+</div>
            <div className="p-4 rounded-full bg-green-100">
              <Boxes size={64} className="text-green-500" />
            </div>
            <div className="text-3xl font-bold self-center">+</div>
            <div className="p-4 rounded-full bg-purple-100">
              <Settings size={64} className="text-purple-500" />
            </div>
          </div>
    
          {/* Labels Below */}
          <div className="text-xl text-center text-gray-600">
            CRM | Project Management | Helpdesk
          </div>
        </div>
      )
    },
    
]


  // return (
  //   <div className="w-full max-w-4xl mx-auto py-8">
  //     {slides.map((slide, index) => (
  //       <div key={index} className="mb-10">
  //         <div className="w-full flex justify-center">
  //           <div className="w-[297mm] h-[168mm] overflow-hidden bg-white  p-8 flex flex-col">
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
  
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      {slides.map((slide, index) => (
        <div key={index} className="mb-10">
          <div className="w-full flex justify-center">
            <div className="w-[297mm] h-[168mm] overflow-hidden bg-white p-8">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
                {slide.subtitle && (
                  <p className="text-xl text-gray-600 mt-2">{slide.subtitle}</p>
                )}
                {slide.presenter && (
                  <p className="text-sm text-gray-500 mt-1">{slide.presenter}</p>
                )}
              </div>
  
              {/* Avoid flex-1, use padding/margin inside content */}
              <div>
                {slide.content}
              </div>
            </div>
          </div>
  
          {/* Optional page break for PDF rendering */}
          {index < slides.length - 1 && (
            <div className="break-after-page" />
          )}
        </div>
      ))}
    </div>
  );
  

}