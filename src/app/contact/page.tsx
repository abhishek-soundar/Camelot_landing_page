import { ContentPage } from "@/components/layout/ContentPage";

export default function Contact() {
  return (
    <ContentPage title="Contact Us">
      <p className="mb-8 text-xl">We&apos;re here to help you build the future.</p>
      <div className="space-y-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-2">General Inquiries</h3>
          <p>hello@camelot.ai</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Technical Support</h3>
          <p>support@camelot.ai</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Office</h3>
          <p>123 Agents Way, San Francisco, CA 94103</p>
        </div>
      </div>
    </ContentPage>
  );
}
