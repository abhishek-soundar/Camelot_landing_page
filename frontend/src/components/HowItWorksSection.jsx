import React from 'react';
import { MessageSquare, Brain, Wrench, Zap, CheckCircle2 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Input Request',
      description: 'Type your business task in plain language',
      example: '"Send invoice to all clients with overdue payments"'
    },
    {
      icon: Brain,
      title: 'AI Understands',
      description: 'Advanced AI interprets your intent and context',
      example: 'Identifies: clients, payment status, invoice generation'
    },
    {
      icon: Wrench,
      title: 'Selects Tools',
      description: 'Automatically chooses the right systems to use',
      example: 'Connects: Accounting software + Email + CRM'
    },
    {
      icon: Zap,
      title: 'Executes',
      description: 'Performs the workflow across all necessary platforms',
      example: 'Generates invoices, personalizes emails, updates records'
    },
    {
      icon: CheckCircle2,
      title: 'Returns Results',
      description: 'Provides clear confirmation and next steps',
      example: '✓ Sent 23 invoices. Average amount: $1,247'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-[7.6923%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-12">
          <div className="text-center mb-16">
            <h2 className="display-large mb-4">How It Works</h2>
            <p className="body-medium text-[rgba(255,255,255,0.7)] max-w-[600px] mx-auto">
              Five simple steps from command to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="glass-container-strong p-6 relative group hover:border-orange-500/30 transition-all duration-400"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 text-black font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[rgba(255,122,0,0.1)] border-radius-0 group-hover:bg-[rgba(255,122,0,0.2)] transition-all duration-400">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>

                  {/* Content */}
                  <h3 className="heading-3 mb-2">{step.title}</h3>
                  <p className="body-small text-[rgba(255,255,255,0.7)] mb-3">
                    {step.description}
                  </p>
                  <p className="text-xs text-[rgba(255,122,0,0.8)] italic">
                    {step.example}
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

export default HowItWorksSection;
