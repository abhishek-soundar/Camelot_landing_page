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
    <section id="features" className="py-20 px-[7.6923%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-12">
          <div className="text-center mb-16">
            <h2 className="display-large mb-4">Powerful Features</h2>
            <p className="body-medium text-[rgba(255,255,255,0.7)] max-w-[600px] mx-auto">
              Everything you need to streamline your business operations in one intelligent platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="glass-container-strong p-8 hover:border-orange-500/30 transition-all duration-400 group cursor-pointer"
                >
                  <div className="w-14 h-14 mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 border-radius-0 group-hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] transition-all duration-400">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="heading-2 mb-3">{feature.title}</h3>
                  <p className="body-medium text-[rgba(255,255,255,0.7)]">
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
