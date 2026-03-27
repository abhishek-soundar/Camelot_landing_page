import { ContentPage } from "@/components/layout/ContentPage";

export default function ApiRef() {
  return (
    <ContentPage title="API Reference">
      <p className="mb-6">The Camelot API is organized around REST. All requests are made over HTTPS.</p>
      <h2 className="text-2xl text-white mb-4">Authentication</h2>
      <code className="block bg-[#111] p-4 rounded border border-[#222] mb-6">Authorization: Bearer YOUR_API_KEY</code>
      <h2 className="text-2xl text-white mb-4">Orchestrate Endpoint</h2>
      <p className="mb-4">POST /v1/orchestrate</p>
      <p>Trigger a multi-step tool sequence across your connected MCP servers.</p>
    </ContentPage>
  );
}
