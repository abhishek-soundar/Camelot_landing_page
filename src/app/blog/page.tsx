import { ContentPage } from "@/components/layout/ContentPage";

export default function Blog() {
  return (
    <ContentPage title="Camelot Blog">
      <div className="space-y-12">
        <article>
          <span className="text-accent text-sm font-mono uppercase tracking-widest">March 20, 2026</span>
          <h2 className="text-3xl text-white mt-2 mb-4">Announcing our $12M Series A</h2>
          <p>We&apos;re thrilled to partner with leading investors to accelerate the adoption of the Model Context Protocol.</p>
        </article>
        <article>
          <span className="text-accent text-sm font-mono uppercase tracking-widest">March 05, 2026</span>
          <h2 className="text-3xl text-white mt-2 mb-4">The Future of Agent Orchestration</h2>
          <p>Why the &quot;one tool per agent&quot; model is breaking, and how we&apos;re fixing it with dynamic discovery.</p>
        </article>
      </div>
    </ContentPage>
  );
}
