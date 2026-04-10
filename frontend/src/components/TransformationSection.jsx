import React from 'react';
import { X, ArrowRight } from 'lucide-react';

const TransformationSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-container p-6 md:p-10 lg:p-12">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
              The Transformation
            </h2>
            <p className="text-base sm:text-lg text-white/70">
              From complexity to simplicity
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Old Way */}
            <div className="glass-container-strong p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <X className="w-6 h-6 text-red-500" />
                <h3 className="text-xl md:text-2xl font-semibold text-red-500">
                  Old Way
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Manual clicks through multiple dashboards",
                  "Constant app switching and context loss",
                  "Rigid automation requiring technical setup",
                  "Hours wasted on repetitive tasks"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm sm:text-base text-white/70">
                    <span className="text-red-500">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-full">
                <ArrowRight className="w-6 h-6 text-orange-500 rotate-90 lg:rotate-0" />
              </div>
            </div>

            {/* New Way */}
            <div className="glass-container-strong p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-orange-500">
                  With Camelot
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Natural language commands",
                  "Unified execution across all systems",
                  "Intelligent, adaptive workflows",
                  "Tasks completed in seconds, not hours"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm sm:text-base text-white font-medium">
                    <span className="text-orange-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;