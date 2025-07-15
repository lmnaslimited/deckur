"use client";
import React, { useState } from 'react';

const LMNAsLandscapePoster = () => {
  const [activeVariant, setActiveVariant] = useState('modular');

  // Signature Brand Elements
  const BrandStrip = () => (
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-teal-300 to-orange-500 z-20"></div>
  );

  const DotsPattern = () => (
    <div className="absolute top-10 right-10 grid grid-cols-4 gap-2 z-5">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 bg-teal-300 rounded-full opacity-60 animate-pulse ${
            i % 2 === 0 ? 'animate-ping' : ''
          }`}
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  );

  const ModularCube = ({ size = 'w-32 h-32' }) => (
    <div className={`${size} perspective-1000 absolute bottom-8 right-8 z-10`}>
      <div className="w-full h-full relative transform-gpu animate-spin" style={{ transformStyle: 'preserve-3d', animationDuration: '12s' }}>
        <div className="absolute w-full h-full border-2 border-teal-300 bg-blue-500 bg-opacity-5 backdrop-blur-sm"></div>
        <div className="absolute w-full h-full border-2 border-teal-300 bg-blue-500 bg-opacity-5 backdrop-blur-sm transform rotateY-90"></div>
        <div className="absolute w-full h-full border-2 border-teal-300 bg-blue-500 bg-opacity-5 backdrop-blur-sm transform rotateX-90"></div>
      </div>
    </div>
  );

  const LumiGlow = ({ position = 'top-1/2 left-1/4' }) => (
    <div className={`absolute ${position} w-96 h-96 bg-gradient-radial from-teal-300/20 to-transparent rounded-full animate-pulse blur-3xl z-0`}></div>
  );

  const BlueprintGrid = () => (
    <div className="absolute inset-0 opacity-5">
      <div className="w-full h-full" style={{
        backgroundImage: `
          linear-gradient(rgba(167, 255, 235, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(167, 255, 235, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
    </div>
  );

  const ProgressArc = ({ className = '' }) => (
    <div className={`w-16 h-16 ${className}`}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(167, 255, 235, 0.2)" strokeWidth="2"/>
        <circle 
          cx="32" 
          cy="32" 
          r="28" 
          fill="none" 
          stroke="#A7FFEB" 
          strokeWidth="2"
          strokeDasharray="175"
          strokeDashoffset="50"
          className="animate-pulse"
        />
      </svg>
    </div>
  );

  const CTAButton = ({ children, variant = 'primary', size = 'large' }) => (
    <button className={`
      ${size === 'large' ? 'px-10 py-4 text-xl' : 'px-6 py-3 text-lg'} 
      rounded-xl font-bold transition-all duration-300 relative overflow-hidden group
      ${variant === 'primary' 
        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:-translate-y-1' 
        : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1'
      }
    `}>
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:left-full transition-all duration-700"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );

  const BrandLogo = ({ className = '' }) => (
    <div className={`${className}`}>
      <div className="text-5xl font-black  text-white bg-clip-text ">
        LMNAs
      </div>
      <div className="text-teal-300 font-mono text-lg opacity-80">
        Modern ERP. Modular Intelligence.
      </div>
    </div>
  );

  // Visual Placeholder Component
  const VisualPlaceholder = ({ type = 'default' }) => {
    const visuals = {
      default: (
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-teal-300/20 rounded-2xl border-2 border-dashed border-teal-300/30 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <div className="text-teal-300 font-mono text-lg">Visual Space</div>
            <div className="text-gray-400 text-sm mt-2">Charts, Graphics, or Media</div>
          </div>
        </div>
      ),
      dashboard: (
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-teal-300/20">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg p-4 border border-blue-500/30">
              <div className="text-blue-400 text-sm mb-2">Performance</div>
              <div className="text-white text-2xl font-bold">94%</div>
              <div className="w-full bg-blue-500/20 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-300/20 to-transparent rounded-lg p-4 border border-teal-300/30">
              <div className="text-teal-300 text-sm mb-2">Efficiency</div>
              <div className="text-white text-2xl font-bold">87%</div>
              <div className="w-full bg-teal-300/20 rounded-full h-2 mt-2">
                <div className="bg-teal-300 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg p-4 border border-orange-500/30">
              <div className="text-orange-400 text-sm mb-2">Growth</div>
              <div className="text-white text-2xl font-bold">+23%</div>
              <div className="flex items-end h-8 mt-2 space-x-1">
                {[40, 60, 80, 100, 85].map((height, i) => (
                  <div key={i} className="bg-orange-500 w-2 rounded-t" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg p-4 border border-purple-500/30">
              <div className="text-purple-400 text-sm mb-2">AI Score</div>
              <div className="text-white text-2xl font-bold">9.2</div>
              <div className="text-purple-300 text-xs mt-1">LUMI Intelligence</div>
            </div>
          </div>
        </div>
      ),
      product: (
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-teal-300/20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-300/5"></div>
          <div className="text-center relative z-10">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-teal-300 rounded-2xl flex items-center justify-center relative">
              <div className="text-white text-4xl font-black">AI</div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="text-white text-xs font-bold">2.0</div>
              </div>
            </div>
            <div className="text-white text-xl font-bold mb-2">LUMI Intelligence</div>
            <div className="text-gray-400 text-sm">Next-Gen AI Assistant</div>
          </div>
        </div>
      )
    };
    
    return visuals[type] || visuals.default;
  };

  // Poster Variants
  const ModularSolutionsPoster = () => (
    <div className="w-full aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      <BrandStrip />
      <BlueprintGrid />
      <DotsPattern />
      <ModularCube />
      <LumiGlow position="top-1/3 left-1/4" />
      
      <div className="flex h-full relative z-10">
        {/* Visual Space - Left Side */}
        <div className="w-2/5 p-8 flex items-center">
          <VisualPlaceholder type="dashboard" />
        </div>
        
        {/* Content - Right Side */}
        <div className="w-3/5 p-8 flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="text-teal-300 font-mono text-sm mb-4 uppercase tracking-wider">
              🔧 Modular Solutions
            </div>
            
            <h1 className="text-6xl font-black text-white leading-tight mb-6">
              Build Your Perfect ERP System
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Mix and match intelligent modules that grow with your business. 
              From manufacturing to finance, create the exact solution you need.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-300 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🧩</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Plug & Play</div>
                  <div className="text-gray-400 text-sm">Easy integration</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-300 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Scale Fast</div>
                  <div className="text-gray-400 text-sm">Grows with you</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <CTAButton>Start Building</CTAButton>
              <CTAButton variant="secondary">Watch Demo</CTAButton>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brand Logo - Bottom Right */}
      <div className="absolute bottom-8 right-8">
        <BrandLogo />
      </div>
      
      {/* Progress Arc - Bottom Left */}
      <ProgressArc className="absolute bottom-8 left-8" />
    </div>
  );

  const ProductLaunchPoster = () => (
    <div className="w-full aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      <BrandStrip />
      <BlueprintGrid />
      <DotsPattern />
      <LumiGlow position="top-1/2 left-1/3" />
      
      <div className="flex h-full relative z-10">
        {/* Visual Space - Left Side */}
        <div className="w-2/5 p-8 flex items-center">
          <VisualPlaceholder type="product" />
        </div>
        
        {/* Content - Right Side */}
        <div className="w-3/5 p-8 flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="text-orange-500 font-mono text-sm mb-4 uppercase tracking-wider flex items-center">
              🚀 Product Launch
              <div className="ml-3 px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">NEW</div>
            </div>
            
            <h1 className="text-6xl font-black text-white leading-tight mb-6">
              Meet LUMI 2.0
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The most advanced AI manufacturing assistant ever built. 
              Predictive insights, automated workflows, and intelligent optimization—all in one platform.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-4xl font-black text-teal-300 mb-2">3x</div>
                <div className="text-gray-400">Faster Quotes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-2">95%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">50%</div>
                <div className="text-gray-400">Cost Reduction</div>
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <CTAButton>Try LUMI 2.0</CTAButton>
              <CTAButton variant="secondary">Learn More</CTAButton>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brand Logo - Bottom Right */}
      <div className="absolute bottom-8 right-8">
        <BrandLogo />
      </div>
      
      {/* Progress Arc - Bottom Left */}
      <ProgressArc className="absolute bottom-8 left-8" />
    </div>
  );

  const CaseStudyPoster = () => (
    <div className="w-full aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      <BrandStrip />
      <BlueprintGrid />
      <DotsPattern />
      <LumiGlow position="top-1/2 left-1/4" />
      
{/* <div className="p-12 relative z-10">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

    <div className="w-full lg:w-1/3">
      <div className="text-teal-300 font-mono text-sm mb-4 uppercase tracking-wider">
      </div>

      <h1 className="text-4xl font-black text-white leading-tight">
        Do generic tools fit your 
        <span className="bg-gradient-to-r from-blue-500 via-teal-300 to-orange-500 bg-clip-text text-transparent"> engineered-to-order </span> 
        workflow?
      </h1>
    </div>

    <div className="w-full lg:w-2/3">
      <img 
        src="/shape.png" 
        alt="TechCorp success" 
        className="rounded-xl w-full object-cover"
      />
    </div>

  </div>
</div> */}
  <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-12 h-12 border border-blue-400 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/3 w-10 h-10 border border-orange-400 rounded-lg transform rotate-45"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-transparent to-teal-300/15"></div>

      {/* Main Content Container */}
    {/* Main Content Container */}
<div className="relative z-10 flex flex-col lg:flex-row items-center h-full px-6 py-6 gap-8">

  {/* Left Side - 1/3 Text */}
  <div className="w-full lg:w-6/12 flex flex-col justify-center">
  
     {/* <div className="absolute -top-16 left-0 z-20">
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 px-2.5 py-1 rounded-full">
            <span className="text-white text-xs font-medium">Thought Leadership</span>
          </div>
        </div>
    <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
      <div className="">
            <span className="text-white text-xs font-medium">Thought Leadership</span>
          </div>
      Do Generic Tools Truly Fit {' '}
      <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
      Engineer-to-Order Workflow?
      </span>
    </h1> */}
    
       
        {/* Left Side - Title Section */}
        <div className="">
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 px-3 py-1.5 rounded-full inline-block">
              <span className="text-white text-sm font-medium">Thought Leadership</span>
            </div>
          </div>
            {/* <span className="text-white text-5xl font-medium">Thought Leadership</span> */}
          <h1 className="text-6xl lg:text-6xl font-bold text-white leading-tight mb-20">
            How to Design CPQ Rules {' '}
            <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
              Your Team Will Actually Use?
            </span>
          </h1>

          {/* Subtitle with diamond accent */}
          {/* <div className="flex items-center space-x-3 mt-3">
            <div className=""></div>
            <p className="text-white font-medium text-2xl">
              Story: The Sales Manager Who Come Home Late
            </p>
          </div> */}
        </div>
  </div>

  {/* Right Side - 2/3 Image */}
  <div className="w-full lg:w-6/12 flex justify-center items-end mb-20">
    <div className="w-full">
      <img 
      src="/board.png" 
      alt="TechCorp success" 
      className="rounded-xl w-full object-cover transform scale-75 pr-10"/>
    </div>
  </div>
</div>

<div className="absolute bottom-10 left-8 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">AG</span>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <span className="text-white font-medium text-2xl">Arunkumar Ganesan</span>
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="text-teal-300 text-lg font-medium">5 min read</div>
          </div>
        </div>
      </div>

      {/* Floating Particles - repositioned to avoid overlaps */}
      <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-4/5 left-2/3 w-1 h-1 bg-teal-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/5 left-1/6 w-0.5 h-0.5 bg-orange-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotateX-12 {
          transform: rotateX(12deg);
        }

        .rotateY-0 {
          transform: rotateY(0deg);
        }

        .rotateY-180 {
          transform: rotateY(180deg);
        }

        .rotateY-90 {
          transform: rotateY(90deg);
        }

        .rotateY-neg-90 {
          transform: rotateY(-90deg);
        }

        .translateZ-5 {
          transform: translateZ(5px);
        }
      `}</style>


      
      {/* Brand Logo - Bottom Right */}
      <div className=" absolute bottom-8 right-8">
        <BrandLogo />
      </div>
      
      {/* Progress Arc - Bottom Left */}
      <ProgressArc className="absolute bottom-8 left-1/2 transform -translate-x-1/2 " />
    </div>
  );

  const variants = {
    modular: { component: ModularSolutionsPoster, title: 'Modular Solutions' },
    product: { component: ProductLaunchPoster, title: 'Product Launch' },
    case: { component: CaseStudyPoster, title: 'Case Study' }
  };

  const ActivePosterComponent = variants[activeVariant].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-white mb-4">
            LMNAs Landscape Poster Collection
          </h1>
          <p className="text-gray-400 text-lg">
            16:9 ratio posters with dedicated visual space and full-width layout
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {Object.entries(variants).map(([key, variant]) => (
            <button
              key={key}
              onClick={() => setActiveVariant(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeVariant === key
                  ? 'bg-gradient-to-r from-blue-500 to-teal-300 text-black'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {variant.title}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <ActivePosterComponent />
        </div>

        <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4">✨ Design Features:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">📐</span>
              16:9 Aspect Ratio
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">🖼️</span>
              Dedicated Visual Space
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">📱</span>
              Responsive Layout
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">🎨</span>
              Brand Elements
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">✨</span>
              Animated Effects
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">🔸</span>
              Signature Colors
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">⚡</span>
              Enhanced CTAs
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">🏢</span>
              Professional Look
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMNAsLandscapePoster;