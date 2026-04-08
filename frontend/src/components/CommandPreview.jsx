import React from 'react';
import { Terminal, Zap, CheckCircle2 } from 'lucide-react';

const CommandPreview = () => {
  return (
    <section className="py-20 px-[7.6923%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-container p-12 relative">
          <div className="text-center mb-12">
            <h2 className="display-medium mb-4">See It In Action</h2>
            <p className="body-medium text-[rgba(255,255,255,0.7)]">
              Natural language commands that get things done
            </p>
          </div>

          {/* Command Input Preview */}
          <div className="glass-container-strong p-8 mb-8">
            <div className="flex items-start gap-4">
              <Terminal className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="body-large text-white mb-6">
                  "Follow up with leads who haven't responded in 5 days"
                </p>
                
                {/* Processing Steps */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-orange-500" />
                    <span className="body-small text-[rgba(255,255,255,0.7)]">
                      AI analyzing request...
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="body-small text-[rgba(255,255,255,0.7)]">
                      Connecting to CRM (Salesforce)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="body-small text-[rgba(255,255,255,0.7)]">
                      Filtering 127 leads by response date
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="body-small text-[rgba(255,255,255,0.7)]">
                      Generating personalized emails (18 leads)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="body-small text-white font-semibold">
                      ✓ Complete - 18 follow-up emails sent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Output Result */}
          <div className="bg-[rgba(255,122,0,0.05)] border border-[rgba(255,122,0,0.2)] rounded-lg p-6">
            <p className="body-medium text-white">
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
