import React from 'react';
import Spline from '@splinetool/react-spline';
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
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-[7.6923%] relative">
      {/* Orange Glow Arc */}
      <div className="orange-arc"></div>
      
      <div className="glass-container-strong max-w-[1400px] w-full p-12 md:p-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="display-huge mb-6">
              One interface to control your entire business
            </h1>
            <p className="body-large mb-10 text-[rgba(255,255,255,0.85)] max-w-[600px] mx-auto lg:mx-0">
              Execute workflows across CRM, accounting, and support using plain language
            </p>
            <button onClick={scrollToPricing} className="btn-primary">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right - 3D Spline Animation */}
          <div className="flex-1 w-full relative" style={{ minHeight: '500px' }}>
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ 
                width: '100%', 
                height: '600px',
                overflow: 'visible'
              }}
            >
              <Spline 
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
