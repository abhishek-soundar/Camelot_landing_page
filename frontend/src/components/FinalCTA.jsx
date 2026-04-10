import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
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
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-[7.6923%]">
      <div className="max-w-[1000px] mx-auto">
        <div className="glass-container-strong p-8 md:p-16 text-center relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-4 md:mb-6">
              Ready to simplify your workflow?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-[rgba(255,255,255,0.85)] max-w-[700px] mx-auto">
              Join thousands of businesses using Camelot to automate their operations 
              and focus on what truly matters—growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <button onClick={scrollToPricing} className="btn-primary w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary w-full sm:w-auto">
                Schedule a Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[rgba(255,255,255,0.1)]">
              <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] mb-3 md:mb-4">Trusted by innovative companies</p>
              <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                <span className="text-[rgba(255,255,255,0.4)] font-semibold text-base md:text-lg">TechCorp</span>
                <span className="text-[rgba(255,255,255,0.4)] font-semibold text-base md:text-lg">InnovateAI</span>
                <span className="text-[rgba(255,255,255,0.4)] font-semibold text-base md:text-lg">GrowthLabs</span>
                <span className="text-[rgba(255,255,255,0.4)] font-semibold text-base md:text-lg">FutureStack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
