import { ContentPage } from "@/components/layout/ContentPage";

export default function About() {
  return (
    <ContentPage title="About Camelot">
      <p className="mb-6">
        Camelot is building the orchestration layer for the agentic web. We believe that AI agents should be able to interact with any software tool as easily as humans do, but with the speed and precision of machines.
      </p>
      <p className="mb-6">
        Our platform leverages the Model Context Protocol (MCP) to provide a unified interface for all your SaaS tools, enabling a future where "integrations" are as simple as a conversation.
      </p>
      <p>
        Founded in 2024, our team is distributed globally and obsessed with developer productivity.
      </p>
    </ContentPage>
  );
}
