import { ContentPage } from "@/components/layout/ContentPage";

export default function Terms() {
  return (
    <ContentPage title="Terms of Service">
      <p className="mb-6">By using Camelot, you agree to these terms. Please read them carefully.</p>
      <h2 className="text-2xl text-white mb-4">1. Use of Service</h2>
      <p className="mb-6">You are responsible for all activity that occurs under your account and for maintaining the security of your MCP credentials.</p>
      <h2 className="text-2xl text-white mb-4">2. Acceptable Use</h2>
      <p>You may not use Camelot to perform unauthorized actions on third-party SaaS platforms or to scrape private data.</p>
    </ContentPage>
  );
}
