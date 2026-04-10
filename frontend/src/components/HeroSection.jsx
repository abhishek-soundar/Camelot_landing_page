import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Add highlight animation
      setTimeout(() => {
        pricingSection.classList.add('pricing-highlight');
        setTimeout(() => {
          pricingSection.classList.remove('pricing-highlight');
        }, 6000);
      }, 800);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-[7.6923%] relative">
      {/* Orange Glow Arc */}
      <div className="orange-arc"></div>
      
      <div className="glass-container-strong max-w-[1400px] w-full p-6 md:p-12 lg:p-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Content */}
          <div className="max-w-[900px]">
            <h1 className="text-4xl md:text-5xl lg:text-[66px] font-semibold leading-tight mb-4 md:mb-6">
              One interface to control your entire business
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-[rgba(255,255,255,0.85)] max-w-[700px] mx-auto">
              Execute workflows across CRM, accounting, and support using plain language
            </p>
            <button onClick={scrollToPricing} className="btn-primary">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
