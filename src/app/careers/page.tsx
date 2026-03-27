import { ContentPage } from "@/components/layout/ContentPage";

export default function Careers() {
  return (
    <ContentPage title="Careers at Camelot">
      <p className="mb-8">Help us build the connective tissue for the next generation of AI.</p>
      <div className="space-y-6">
        <div className="p-6 bg-[#111] border border-[#222] rounded-lg">
          <h3 className="text-white text-xl mb-1">Senior Protocol Engineer</h3>
          <p className="text-sm">Remote / Full-time</p>
        </div>
        <div className="p-6 bg-[#111] border border-[#222] rounded-lg">
          <h3 className="text-white text-xl mb-1">Product Designer</h3>
          <p className="text-sm">San Francisco / Hybrid</p>
        </div>
      </div>
    </ContentPage>
  );
}
