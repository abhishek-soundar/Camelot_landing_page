import { ContentPage } from "@/components/layout/ContentPage";

export default function ProPricing() {
  return (
    <ContentPage title="Camelot Pro">
      <p className="mb-8 text-xl text-white">
        The ultimate toolkit for growing teams orchestrating complex SaaS workflows.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl text-white mb-4">Unlimited Power</h2>
          <p className="mb-6">Connect as many MCP servers as you need. No artificial limits on your automation potential.</p>
          
          <h2 className="text-2xl text-white mb-4">Advanced Governance</h2>
          <p>Create custom roles and granular permission sets to ensure your agents only do exactly what they&apos;re supposed to.</p>
        </div>
        <div className="bg-[#111] p-8 rounded-2xl border border-[#222]">
          <h3 className="text-accent font-bold mb-4 uppercase tracking-widest text-sm">Pro Features</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">✓ 10,000 executions per month</li>
            <li className="flex items-center gap-2">✓ Priority email & Slack support</li>
            <li className="flex items-center gap-2">✓ Advanced analytics dashboard</li>
            <li className="flex items-center gap-2">✓ Custom tool discovery</li>
          </ul>
        </div>
      </div>

      <p className="text-muted italic">
        * Pro plan is currently in early access. By joining the waitlist through this tier, you&apos;ll be prioritized for our next rollout.
      </p>
    </ContentPage>
  );
}
