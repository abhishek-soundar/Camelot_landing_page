import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-[7.6923%] py-4">
      <div className="glass-container px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 border-radius-0">
            <Sparkles className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-bold text-white">Camelot</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-[18px] font-normal text-[#4D4D4D] hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-[18px] font-normal text-[#4D4D4D] hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('security')}
            className="text-[18px] font-normal text-[#4D4D4D] hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none"
          >
            Security
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-[18px] font-normal text-[#4D4D4D] hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none"
          >
            Pricing
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
