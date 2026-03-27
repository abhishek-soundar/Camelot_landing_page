import { ContentPage } from "@/components/layout/ContentPage";

export default function Docs() {
  return (
    <ContentPage title="Documentation">
      <p className="mb-8 text-xl">
        Everything you need to build and orchestrate with Camelot.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl text-white mb-4">Getting Started</h2>
          <p className="mb-4">Install the Camelot CLI and connect your first MCP server in under 5 minutes.</p>
          <code className="block bg-[#111] p-4 rounded border border-[#222]">npm install -g @camelot/cli</code>
        </div>
        <div>
          <h2 className="text-2xl text-white mb-4">Core Concepts</h2>
          <p>Learn about tool discovery, context injection, and agent permission sets.</p>
        </div>
      </div>
    </ContentPage>
  );
}
