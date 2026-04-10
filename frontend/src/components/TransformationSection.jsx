import React from 'react';
import { X, ArrowRight } from 'lucide-react';

const TransformationSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-[7.6923%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-6 md:p-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-3 md:mb-4">The Transformation</h2>
            <p className="text-base md:text-lg text-[rgba(255,255,255,0.7)]">
              From complexity to simplicity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Old Way */}
            <div className="glass-container-strong p-6 md:p-10 border-red-500/20">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <X className="w-6 h-6 md:w-8 md:h-8 text-red-500 flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-semibold text-red-500">Old Way</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-500 mt-1 flex-shrink-0">×</span>
                  <span className="text-sm md:text-base lg:text-lg text-[rgba(255,255,255,0.7)]">
                    Manual clicks through multiple dashboards
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-500 mt-1 flex-shrink-0">×</span>
                  <span className="text-sm md:text-base lg:text-lg text-[rgba(255,255,255,0.7)]">
                    Constant app switching and context loss
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-500 mt-1 flex-shrink-0">×</span>
                  <span className="text-sm md:text-base lg:text-lg text-[rgba(255,255,255,0.7)]">
                    Rigid automation requiring technical setup
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-500 mt-1 flex-shrink-0">×</span>
                  <span className="text-sm md:text-base lg:text-lg text-[rgba(255,255,255,0.7)]">
                    Hours wasted on repetitive tasks
                  </span>
                </li>
              </ul>
            </div>

            {/* New Way */}
            <div className="glass-container-strong p-6 md:p-10 border-orange-500/30 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-auto lg:top-1/2 lg:-left-4 lg:-translate-y-1/2 lg:translate-x-0">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-orange-500 rotate-90 lg:rotate-0" />
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-orange-500">With Camelot</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-orange-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base lg:text-lg text-white font-medium">
                    Natural language commands
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-orange-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base lg:text-lg text-white font-medium">
                    Unified execution across all systems
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-orange-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base lg:text-lg text-white font-medium">
                    Intelligent, adaptive workflows
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-orange-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base lg:text-lg text-white font-medium">
                    Tasks completed in seconds, not hours
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
