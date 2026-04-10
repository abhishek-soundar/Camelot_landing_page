import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 px-4 md:px-8 lg:px-[7.6923%] border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-6 md:mb-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Camelot</h3>
            <p className="text-sm md:text-base text-[rgba(255,255,255,0.6)] mb-4 md:mb-6">
              One interface to control your entire business with natural language AI.
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              <a href="#" className="text-[rgba(255,255,255,0.6)] hover:text-orange-500 transition-colors">
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-[rgba(255,255,255,0.6)] hover:text-orange-500 transition-colors">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-[rgba(255,255,255,0.6)] hover:text-orange-500 transition-colors">
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-[rgba(255,255,255,0.6)] hover:text-orange-500 transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Product</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#features" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#security" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] text-center md:text-left">
            © {currentYear} Camelot. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] text-center md:text-right">
            Built with ❤️ for the future of work
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
