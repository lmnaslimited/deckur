
"use client";
import React, { useState } from 'react';

const LMNAsCPQBanner = () => {
  // Signature Components from LMNAsPostVariations - repositioned
  const BrandStrip = () => (
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-teal-300 to-orange-500 z-10"></div>
  );

  const DotsPattern = () => (
    <div className="absolute top-6 right-6 grid grid-cols-5 gap-2 z-5">
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 bg-teal-300 rounded-full opacity-40 animate-pulse ${
            i % 3 === 0 ? 'animate-ping' : ''
          }`}
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  );

  const ModularCube = () => null; // Moved inline above platform

  const LumiGlow = () => (
    <div className="absolute top-1/4 -left-6 w-16 h-16 bg-teal-300 opacity-8 rounded-full animate-pulse blur-2xl"></div>
  );

  const BlueprintOverlay = () => (
    <div className="absolute top-1/2 right-1 w-12 h-12 border border-blue-500 rounded-full opacity-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-teal-300 opacity-30">
        <div className="absolute top-1/2 left-0 w-full h-px bg-teal-300 opacity-20"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-teal-300 opacity-20"></div>
      </div>
    </div>
  );

  const ProgressArc = () => (
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(167, 255, 235, 0.1)" strokeWidth="2"/>
        <circle cx="20" cy="20" r="15" fill="none" stroke="#A7FFEB" strokeWidth="2" strokeDasharray="94" strokeDashoffset="28" className="animate-pulse" />
      </svg>
    </div>
  );

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden" style={{aspectRatio: '1920/1080'}}>
      
      {/* LMNAs Signature Components - repositioned and resized */}
      <BrandStrip />
      <DotsPattern />
      <ModularCube />
      <LumiGlow />
      <BlueprintOverlay />
      <ProgressArc />

      {/* Background Pattern - Minimal */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-12 h-12 border border-blue-400 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/3 w-10 h-10 border border-orange-400 rounded-lg transform rotate-45"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-transparent to-teal-300/15"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center h-full px-6 py-6">
        
        {/* Category Tag */}
        <div className="absolute -top-16 left-0 z-20">
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 px-2.5 py-1 rounded-full">
            <span className="text-white text-xs font-medium">Thought Leadership</span>
          </div>
        </div>
        
        {/* Left Side - Title Section */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            What Is CPQ{' '}
            <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
              and Why Manufacturing
              Should Care?
            </span>
          </h1>
          
          {/* Subtitle with diamond accent */}
          <div className="flex items-center space-x-3 mt-3">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-300 transform rotate-45"></div>
            <p className="text-teal-300 font-medium text-2xl">
              Configure. Price. Quote. Reimagined.
            </p>
          </div>
        </div>

        {/* Right Side - Visual Elements */}
        <div className="flex-1 flex justify-center items-end mb-12">
          
          {/* Central Platform */}
          <div className="relative">
            {/* ModularCube above platform */}
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-20 h-20 perspective-1000">
              <div
                className="w-full h-full relative transform-gpu animate-spin"
                style={{ 
                  transformStyle: 'preserve-3d', 
                  animationDuration: '10s' 
                }}
              >
                <div className="absolute w-20 h-20 border-2 border-teal-300 bg-blue-500 bg-opacity-5 backdrop-blur-sm transform rotateY-0 translateZ-6"></div>
                <div className="absolute w-20 h-20 border-2 border-teal-300 bg-blue-500 bg-opacity-5 backdrop-blur-sm transform rotateY-180 translateZ-6"></div>
                <div className="absolute w-20 h-20 border-2 border-teal-300 bg-blue-500 bg-opacity-5 backdrop-blur-sm transform rotateY-90 translateZ-6"></div>
                <div className="absolute w-20 h-20 border-2 border-teal-300 bg-blue-500 bg-opacity-5 backdrop-blur-sm transform rotateY-neg-90 translateZ-6"></div>
              </div>
            </div>

            {/* Base Platform */}
            <div className="w-64 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg shadow-2xl transform perspective-1000 rotateX-12">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>

            {/* Modular Blocks */}
            <div className="absolute -top-8 left-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-white/10 rounded-lg"></div>
              <div className="absolute inset-3 border border-white/20 rounded-md"></div>
            </div>

            <div className="absolute -top-6 right-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-white/10 rounded-lg"></div>
              <div className="absolute inset-3 border border-white/20 rounded-md"></div>
            </div>

            {/* Quote Document */}
            <div className="absolute -top-2 -right-10 w-12 h-16 bg-gradient-to-b from-gray-100 to-gray-200 rounded-sm shadow-lg transform rotate-6">
              <div className="absolute inset-0 bg-white/90 rounded-sm"></div>
              <div className="absolute top-2 left-2 right-2 h-1 bg-gray-400 rounded"></div>
              <div className="absolute top-4 left-2 right-2 h-1 bg-gray-300 rounded"></div>
              <div className="absolute top-6 left-2 right-2 h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Author Info - Bottom left with proper spacing */}
      <div className="absolute bottom-6 left-8 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-base">AG</span>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <span className="text-white font-medium text-lg">Arunkumar Ganesan</span>
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="text-teal-300 text-base font-medium">5 min read</div>
          </div>
        </div>
      </div>

      {/* Brand Mark - Bottom right with proper spacing */}
      <div className="absolute bottom-6 right-8">
        <div className="text-3xl font-bold text-white opacity-90 tracking-wider">
          LMNAs
        </div>
        <div className="text-lg text-teal-300 font-medium mt-1 tracking-wide">
          Modern ERP. Modular Intelligence.
        </div>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-teal-300 mt-2"></div>
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
    </div>
  );
};

export default LMNAsCPQBanner;