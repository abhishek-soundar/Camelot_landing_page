import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="px-4 md:px-[7.6923%] py-4">
      <div className="glass-container px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 border-radius-0">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-white">Camelot</span>
        </div>

        {/* Desktop Navigation Links */}
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
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-container px-6 py-6">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-left text-[18px] font-normal text-[#4D4D4D] hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-left text-[18px] font-normal text-[#4D4D4D] hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none py-2"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('security')}
              className="text-left text-[18px] font-normal text-[#4D4D4D] hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none py-2"
            >
              Security
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-left text-[18px] font-normal text-[#4D4D4D] hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none py-2"
            >
              Pricing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
