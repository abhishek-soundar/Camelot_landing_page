import React from 'react';
import { Layers, MessageSquare, Zap, GitMerge } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Layers,
      title: 'Unified Interface',
      description: 'One place to control all your business tools without switching apps'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language',
      description: 'Just type your intent in plain English - no complex workflows needed'
    },
    {
      icon: Zap,
      title: 'AI Execution',
      description: 'Automates complex workflows across multiple systems intelligently'
    },
    {
      icon: GitMerge,
      title: 'Cross-System Context',
      description: 'Works seamlessly across CRM, accounting, support, and more'
    }
  ];

  return (
    <section id="features" className="py-12 md:py-20 px-4 md:px-8 lg:px-[7.6923%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-6 md:p-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-3 md:mb-4">Powerful Features</h2>
            <p className="text-base md:text-lg text-[rgba(255,255,255,0.7)] max-w-[600px] mx-auto">
              Everything you need to streamline your business operations in one intelligent platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="glass-container-strong p-6 md:p-8 hover:border-orange-500/30 transition-all duration-400 group cursor-pointer"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 border-radius-0 group-hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] transition-all duration-400">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-black" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-base md:text-lg text-[rgba(255,255,255,0.7)]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
