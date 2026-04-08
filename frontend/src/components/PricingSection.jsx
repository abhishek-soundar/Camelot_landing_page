import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free Plan',
      price: '$0',
      period: 'forever',
      description: 'For individuals and small projects',
      features: [
        { text: 'Up to 50 API calls', included: true },
        { text: 'Basic integrations', included: true },
        { text: 'Community support', included: true },
        { text: '7 days history', included: true },
        { text: 'Advanced workflows', included: false },
        { text: 'Priority support', included: false }
      ],
      cta: 'Start Your Free Trial',
      highlight: false
    },
    {
      name: 'Pro Plan',
      badge: '+ Teams',
      price: '$249',
      period: 'per user/month',
      description: 'For ambitious individuals',
      features: [
        { text: 'Unlimited API calls', included: true, highlight: true },
        { text: 'Advanced integrations', included: true, highlight: true },
        { text: 'Priority onboarding', included: true, highlight: true },
        { text: 'Unlimited history', included: true, highlight: true },
        { text: 'AI-1 plus support', included: true, highlight: true },
        { text: 'Custom workflows', included: true, highlight: true }
      ],
      cta: 'Get Started Now',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'for unlimited needs',
      description: 'For enterprise-level access',
      features: [
        { text: 'All Pro features', included: true },
        { text: 'Unlimited licensing and SSO', included: true },
        { text: 'Advanced admin & dedicated team', included: true },
        { text: 'Self-hosted option', included: true },
        { text: 'Custom SLA', included: true },
        { text: 'Training & consultation (10hr)', included: true }
      ],
      cta: 'Start Your Free Trial',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-[7.6923%] relative">
      {/* Orange Arc Above Pricing */}
      <div className="orange-arc" style={{ top: '-150px' }}></div>
      
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-12 relative z-10">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-[rgba(255,122,0,0.1)] border border-[rgba(255,122,0,0.2)] rounded-full text-orange-500 text-sm font-semibold mb-6">
              Pricing Table
            </span>
            <h2 className="display-large mb-4">Affordable plans with no hidden fees</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="body-medium text-[rgba(255,255,255,0.7)]">Monthly</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="body-medium text-white font-semibold">Yearly (Save 20%)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative ${
                  plan.highlight 
                    ? 'glass-container-strong border-orange-500/40 shadow-[0_0_60px_rgba(255,122,0,0.3)]' 
                    : 'glass-container-strong'
                } p-8 transition-all duration-400 hover:border-orange-500/30`}
              >
                {/* Badge for Pro Plan */}
                {plan.badge && (
                  <div className="absolute -top-3 right-8 px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-black text-sm font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="heading-3 text-[rgba(255,255,255,0.7)] mb-6">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-sm text-[rgba(255,255,255,0.6)] mb-4">{plan.period}</p>
                  <p className="body-small text-[rgba(255,255,255,0.7)]">{plan.description}</p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-white mb-4">What's included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <span className="w-5 h-5 flex-shrink-0 text-[rgba(255,255,255,0.3)] mt-0.5">—</span>
                        )}
                        <span className={`body-small ${
                          feature.included 
                            ? feature.highlight 
                              ? 'text-white font-medium' 
                              : 'text-[rgba(255,255,255,0.85)]'
                            : 'text-[rgba(255,255,255,0.4)]'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  className={plan.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
