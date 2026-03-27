import { ContentPage } from "@/components/layout/ContentPage";

export default function Privacy() {
  return (
    <ContentPage title="Privacy Policy">
      <p className="mb-6 text-xl">Last Updated: March 27, 2026</p>
      <h2 className="text-2xl text-white mb-4">1. Data Collection</h2>
      <p className="mb-6">
        We collect only the minimum data required to provide our orchestration services. This includes connection metadata and temporary session information necessary for routing MCP requests.
      </p>
      <h2 className="text-2xl text-white mb-4">2. Zero-Retention Policy</h2>
      <p className="mb-6">
        Camelot does not store the content of your conversations or the data returned from your connected tools unless explicitly configured for logging by your organization.
      </p>
      <h2 className="text-2xl text-white mb-4">3. Security Standards</h2>
      <p>
        All data in transit is encrypted using TLS 1.3, and all credentials are stored in enterprise-grade hardware security modules (HSM).
      </p>
    </ContentPage>
  );
}
