import React from 'react';
import { Clock, AlertTriangle, Bell, Calendar } from 'lucide-react';

const AutonomousSection = () => {
  const capabilities = [
    {
      icon: Clock,
      title: 'Scheduled Workflows',
      description: 'Runs tasks automatically at specified times or intervals',
      examples: ['Daily sales reports', 'Weekly client check-ins', 'Monthly invoicing']
    },
    {
      icon: AlertTriangle,
      title: 'Issue Detection',
      description: 'Monitors systems and detects problems instantly',
      examples: ['Payment failures', 'Low inventory alerts', 'Customer complaints']
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Sends notifications when action is needed',
      examples: ['Approval requests', 'Deadline reminders', 'Performance insights']
    },
    {
      icon: Calendar,
      title: 'Proactive Execution',
      description: 'Takes action on your behalf based on predefined rules',
      examples: ['Auto-follow-ups', 'Priority escalation', 'Data synchronization']
    }
  ];

  return (
    <section className="py-20 px-[7.6923%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-12">
          <div className="text-center mb-16">
            <h2 className="display-large mb-4">Autonomous Execution</h2>
            <p className="body-medium text-[rgba(255,255,255,0.7)] max-w-[700px] mx-auto">
              Camelot doesn't just respond to commands—it works continuously in the background, 
              monitoring and executing tasks without manual intervention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div 
                  key={index}
                  className="glass-container-strong p-8 group hover:border-orange-500/30 transition-all duration-400"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 border-radius-0 group-hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] transition-all duration-400">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="heading-3 mb-3">{capability.title}</h3>
                      <p className="body-medium text-[rgba(255,255,255,0.7)] mb-4">
                        {capability.description}
                      </p>
                      
                      <div className="space-y-2">
                        {capability.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span className="text-sm text-[rgba(255,255,255,0.6)]">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSection;
