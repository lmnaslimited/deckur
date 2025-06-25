'use client';
import React, { useState } from 'react';

const LMNAsPostVariations = () => {
  const [activePost, setActivePost] = useState('modular');

  // Signature Components
  const BrandStrip = () => (
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-teal-300 to-orange-500 z-10"></div>
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

  const ModularCube = () => (
    <div className="absolute top-32 right-16 w-24 h-24 perspective-1000">
      <div className="w-full h-full relative transform-gpu animate-spin" style={{ transformStyle: 'preserve-3d', animationDuration: '8s' }}>
        <div className="absolute w-24 h-24 border-2 border-teal-300 bg-blue-500 bg-opacity-10 backdrop-blur-sm transform rotateY-0 translateZ-12"></div>
        <div className="absolute w-24 h-24 border-2 border-teal-300 bg-blue-500 bg-opacity-10 backdrop-blur-sm transform rotateY-180 translateZ-12"></div>
        <div className="absolute w-24 h-24 border-2 border-teal-300 bg-blue-500 bg-opacity-10 backdrop-blur-sm transform rotateY-90 translateZ-12"></div>
        <div className="absolute w-24 h-24 border-2 border-teal-300 bg-blue-500 bg-opacity-10 backdrop-blur-sm transform rotateY-neg-90 translateZ-12"></div>
      </div>
    </div>
  );

  const LumiGlow = () => (
    <div className="absolute top-72 -left-12 w-36 h-36 bg-teal-300 opacity-10 rounded-full animate-pulse blur-xl"></div>
  );

  const BlueprintOverlay = () => (
    <div className="absolute bottom-16 right-10 w-28 h-28 border-2 border-blue-500 rounded-full opacity-15">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-teal-300">
        <div className="absolute top-1/2 left-0 w-full h-px bg-teal-300 opacity-30"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-teal-300 opacity-30"></div>
      </div>
    </div>
  );

  const ProgressArc = () => (
    <div className="absolute bottom-10 right-44 w-14 h-14">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(167, 255, 235, 0.2)" strokeWidth="3"/>
        <circle 
          cx="30" 
          cy="30" 
          r="25" 
          fill="none" 
          stroke="#A7FFEB" 
          strokeWidth="3"
          strokeDasharray="157"
          strokeDashoffset="47"
          className="animate-pulse"
        />
      </svg>
    </div>
  );

  const FeatureIcon = ({ children, delay = 0 }) => (
    <div className="w-10 h-10 mr-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-300 relative overflow-hidden group">
      <div 
        className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:left-full transition-all duration-500"
        style={{ animationDelay: `${delay}s` }}
      ></div>
      <div className="text-gray-900 relative z-10">{children}</div>
    </div>
  );

  const CTAButton = ({ children, variant = 'primary' }) => (
    <button className={`
      px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group
      ${variant === 'primary' 
        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1' 
        : 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1'
      }
    `}>
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:left-full transition-all duration-500"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );

  const PostContainer = ({ children, className = '' }) => (
    <div className={`w-full max-w-2xl mx-auto bg-gradient-to-br from-slate-900 to-black rounded-3xl overflow-hidden relative shadow-2xl ${className}`}>
      <BrandStrip />
      <DotsPattern />
      <LumiGlow />
      <BlueprintOverlay />
      <ProgressArc />
      {children}
    </div>
  );

  const BrandFooter = () => (
    <div className="mt-12 pt-8 border-t border-teal-300 border-opacity-20">
      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 mb-2">
        LMNAs
      </div>
      <div className="text-teal-300 font-mono text-sm">
        Modern ERP. Modular Intelligence.
      </div>
    </div>
  );

  // Post Variations
  const ModularSolutionsPost = () => (
    <PostContainer>
      <ModularCube />
      <div className="p-12 relative z-10">
        <h1 className="text-5xl font-black text-white leading-tight mb-6 max-w-96">
          We’ve entered a new era
        </h1>
        <h1 className="text-white leading-tight mb-8 max-w-96">
          What are you looking forward to in this new chapter?
        </h1>
        
        <ul className="space-y-6 mb-10">
          <li className="flex items-center text-white text-lg font-medium">
            <FeatureIcon delay={0}>💡</FeatureIcon>
            Thought Leadership on real-world digital transformation?
          </li>
          <li className="flex items-center text-white text-lg font-medium">
            <FeatureIcon delay={0.5}>🤖 </FeatureIcon>
            Our no-fluff approach to the AI conversation?
          </li>
          <li className="flex items-center text-white text-lg font-medium">
            <FeatureIcon delay={1}>🎯</FeatureIcon>
            Our expertise for the benefit of the world?
          </li>
        </ul>

        <CTAButton>👉 Drop your thoughts and follow us.</CTAButton>
        <BrandFooter />
      </div>
    </PostContainer>
  );

  const ThoughtLeadershipPost = () => (
    <PostContainer>
      <div className="p-12 relative z-10">
        <div className="text-teal-300 font-mono text-sm mb-4 uppercase tracking-wider">
          💭 Thought Leadership
        </div>
        
        <h1 className="text-4xl font-black text-white leading-tight mb-8">
          AI doesn't replace manufacturing expertise—it amplifies it
        </h1>
        
        <div className="bg-gradient-to-r from-blue-500/10 to-teal-300/10 p-6 rounded-2xl mb-8 border border-teal-300/20">
          <p className="text-gray-300 text-lg leading-relaxed">
            "The future belongs to manufacturers who can seamlessly blend human intuition with AI precision. 
            LMNAs bridges this gap, making complex decisions feel effortless."
          </p>
          <div className="text-teal-300 text-sm mt-4 font-mono">— Engineering Intelligence Report 2025</div>
        </div>

        <ul className="space-y-4 mb-10 text-gray-300">
          <li className="flex items-start">
            <span className="text-teal-300 mr-3 text-xl">🔹</span>
            <span>LUMI learns your processes and suggests optimizations in real-time</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-300 mr-3 text-xl">🔹</span>
            <span>Modular ERP grows with your business, not against it</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-300 mr-3 text-xl">🔹</span>
            <span>From engineer to offer in minutes, not weeks</span>
          </li>
        </ul>

        <CTAButton>Join the Conversation</CTAButton>
        <BrandFooter />
      </div>
    </PostContainer>
  );

  const ProductAnnouncementPost = () => (
    <PostContainer>
      <div className="p-12 relative z-10">
        <div className="text-orange-500 font-mono text-sm mb-4 uppercase tracking-wider flex items-center">
          🚀 Product Launch
          <div className="ml-3 px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">NEW</div>
        </div>
        
        <h1 className="text-4xl font-black text-white leading-tight mb-6">
          Introducing LUMI 2.0
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Your AI manufacturing companion just got smarter. Predictive insights, automated workflows, 
          and seamless ERP integration—all in one intelligent platform.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-4 rounded-xl border border-blue-500/30">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-white font-semibold mb-1">3x Faster</div>
            <div className="text-gray-400 text-sm">Quote generation</div>
          </div>
          <div className="bg-gradient-to-br from-teal-300/20 to-transparent p-4 rounded-xl border border-teal-300/30">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-white font-semibold mb-1">95% Accuracy</div>
            <div className="text-gray-400 text-sm">Demand forecasting</div>
          </div>
        </div>

        <div className="flex space-x-4">
          <CTAButton>Try LUMI 2.0</CTAButton>
          <CTAButton variant="secondary">Watch Demo</CTAButton>
        </div>
        <BrandFooter />
      </div>
    </PostContainer>
  );

  const CaseStudyPost = () => (
    <PostContainer>
      <div className="p-12 relative z-10">
        <div className="text-blue-400 font-mono text-sm mb-4 uppercase tracking-wider">
          📈 Success Story
        </div>
        
        <h1 className="text-4xl font-black text-white leading-tight mb-6">
          TechCorp reduces quote time from weeks to hours
        </h1>
        
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 rounded-2xl mb-8 border border-slate-600">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-300 rounded-lg flex items-center justify-content mr-4">
              <span className="text-white font-bold text-lg">TC</span>
            </div>
            <div>
              <div className="text-white font-semibold">TechCorp Manufacturing</div>
              <div className="text-gray-400 text-sm">Industrial Equipment • 500+ employees</div>
            </div>
          </div>
          <p className="text-gray-300 italic">
            "LMNAs transformed our quoting process. What used to take our team 2-3 weeks now happens in 4 hours. 
            Our customers are amazed by our responsiveness."
          </p>
          <div className="text-teal-300 text-sm mt-2">— Sarah Chen, Operations Director</div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="text-center">
            <div className="text-3xl font-black text-teal-300 mb-2">87%</div>
            <div className="text-gray-400 text-sm">Time Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-orange-500 mb-2">$2M</div>
            <div className="text-gray-400 text-sm">Revenue Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-400 mb-2">99%</div>
            <div className="text-gray-400 text-sm">Quote Accuracy</div>
          </div>
        </div>

        <CTAButton>Read Full Case Study</CTAButton>
        <BrandFooter />
      </div>
    </PostContainer>
  );

  const posts = {
    modular: { component: ModularSolutionsPost, title: 'Modular Solutions' },
    thought: { component: ThoughtLeadershipPost, title: 'Thought Leadership' },
    product: { component: ProductAnnouncementPost, title: 'Product Launch' },
    case: { component: CaseStudyPost, title: 'Case Study' }
  };

  const ActivePostComponent = posts[activePost].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4">
            LMNAs React Post Variations
          </h1>
          <p className="text-gray-400 text-lg">
            Choose a post type to see the signature elements in action
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(posts).map(([key, post]) => (
            <button
              key={key}
              onClick={() => setActivePost(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activePost === key
                  ? 'bg-gradient-to-r from-blue-500 to-teal-300 text-black'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {post.title}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <ActivePostComponent />
        </div>

        <div className="mt-16 p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">🎯 Signature Elements Included:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">🔸</span>
              Brand Strip
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">✨</span>
              Floating Dots
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">🧊</span>
              3D Modular Cube
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">💫</span>
              LUMI Glow
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">📐</span>
              Blueprint Grid
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">📊</span>
              Progress Arc
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">⚡</span>
              Enhanced CTA
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-teal-300 mr-2">🎨</span>
              Color Gradients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMNAsPostVariations;