import { ContentPage } from "@/components/layout/ContentPage";

export default function IntegrationsDocs() {
  return (
    <ContentPage title="Integration Guide">
      <p className="mb-8 text-xl text-white">
        Connect any SaaS tool to Camelot using the Model Context Protocol (MCP).
      </p>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl text-white mb-4">Official Connectors</h2>
          <p className="mb-4">We maintain official, high-performance connectors for the most popular B2B tools:</p>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            <li className="bg-[#111] p-4 rounded border border-[#222]">Zoho CRM & Desk</li>
            <li className="bg-[#111] p-4 rounded border border-[#222]">Salesforce</li>
            <li className="bg-[#111] p-4 rounded border border-[#222]">HubSpot</li>
            <li className="bg-[#111] p-4 rounded border border-[#222]">Slack & Discord</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-white mb-4">Building Custom Connectors</h2>
          <p className="mb-6">
            If your tool isn&apos;t listed, you can build a custom MCP server in minutes. Camelot supports any server that implements the standard MCP spec.
          </p>
          <div className="bg-[#111] p-6 rounded-lg border border-[#222]">
            <h3 className="text-white mb-2">Quick Start with Node.js</h3>
            <code className="block bg-black p-4 rounded text-accent">npx @modelcontextprotocol/sdk init my-connector</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-white mb-4">Data Mapping</h2>
          <p>
            Learn how to map complex JSON objects from your SaaS APIs into natural language contexts that any LLM can understand.
          </p>
        </section>
      </div>
    </ContentPage>
  );
}
