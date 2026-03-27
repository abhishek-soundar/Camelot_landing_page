import { ContentPage } from "@/components/layout/ContentPage";

export default function SecurityPolicy() {
  return (
    <ContentPage title="Security & Compliance">
      <p className="mb-8 text-xl">Enterprise-grade security is baked into every layer of Camelot.</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-white text-xl mb-4">Data Protection</h3>
          <p>We use AES-256 encryption at rest and TLS 1.3 in transit. Our architecture ensures that customer data is never used for model training.</p>
        </div>
        <div>
          <h3 className="text-white text-xl mb-4">Compliance</h3>
          <p>Camelot is SOC2 Type II compliant and maintains HIPAA and GDPR readiness for enterprise customers.</p>
        </div>
      </div>
    </ContentPage>
  );
}
