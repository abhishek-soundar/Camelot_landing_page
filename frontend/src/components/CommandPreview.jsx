import React from 'react';
import { Terminal, Zap, CheckCircle2 } from 'lucide-react';

const CommandPreview = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-[7.6923%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-6 md:p-12 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-3 md:mb-4">See It In Action</h2>
            <p className="text-base md:text-lg text-[rgba(255,255,255,0.7)]">
              Natural language commands that get things done
            </p>
          </div>

          {/* Command Input Preview */}
          <div className="glass-container-strong p-6 md:p-8 mb-6 md:mb-8">
            <div className="flex items-start gap-3 md:gap-4">
              <Terminal className="w-5 h-5 md:w-6 md:h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-lg md:text-xl text-white mb-4 md:mb-6">
                  "Follow up with leads who haven't responded in 5 days"
                </p>
                
                {/* Processing Steps */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-[rgba(255,255,255,0.7)]">
                      AI analyzing request...
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-[rgba(255,255,255,0.7)]">
                      Connecting to CRM (Salesforce)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-[rgba(255,255,255,0.7)]">
                      Filtering 127 leads by response date
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-[rgba(255,255,255,0.7)]">
                      Generating personalized emails (18 leads)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-semibold">
                      ✓ Complete - 18 follow-up emails sent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Output Result */}
          <div className="bg-[rgba(255,122,0,0.05)] border border-[rgba(255,122,0,0.2)] rounded-lg p-4 md:p-6">
            <p className="text-sm md:text-base lg:text-lg text-white">
              <span className="text-orange-500 font-semibold">Result:</span> Successfully sent 18 follow-up emails. 
              Average engagement score: 8.4/10. Next check scheduled for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandPreview;
