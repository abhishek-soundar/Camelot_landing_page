import React from 'react';
import { Shield, Lock, FileCheck, Server } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Role-Based Access',
      description: 'Granular permissions ensure team members only access what they need',
      highlights: ['Custom user roles', 'Permission hierarchies', 'Activity logs']
    },
    {
      icon: FileCheck,
      title: 'Audit Trails',
      description: 'Complete visibility into every action taken by the system',
      highlights: ['Full command history', 'Execution logs', 'Compliance reports']
    },
    {
      icon: Lock,
      title: 'Secure Integrations',
      description: 'Bank-level encryption for all connected services and data',
      highlights: ['OAuth 2.0', 'Encrypted credentials', 'Zero-knowledge architecture']
    },
    {
      icon: Server,
      title: 'Self-Hosted AI',
      description: 'Option to run AI models on your own infrastructure',
      highlights: ['Data sovereignty', 'Private processing', 'Air-gapped deployment']
    }
  ];

  return (
    <section id="security" className="py-12 md:py-20 px-4 md:px-8 lg:px-[7.6923%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-6 md:p-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-3 md:mb-4">Enterprise-Grade Security</h2>
            <p className="text-base md:text-lg text-[rgba(255,255,255,0.7)] max-w-[700px] mx-auto">
              Your data and workflows are protected with industry-leading security standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="glass-container-strong p-6 md:p-8 group hover:border-orange-500/30 transition-all duration-400"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 border-radius-0 group-hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] transition-all duration-400">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-black" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base lg:text-lg text-[rgba(255,255,255,0.7)] mb-4 md:mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs md:text-sm text-[rgba(255,255,255,0.8)]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Security Badge */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 bg-[rgba(255,122,0,0.1)] border border-[rgba(255,122,0,0.2)] px-4 md:px-8 py-3 md:py-4 rounded-lg">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-orange-500 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg text-white font-semibold text-center">
                SOC 2 Type II Certified • GDPR Compliant • ISO 27001
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
