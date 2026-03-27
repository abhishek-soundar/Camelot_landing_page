import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { Problem } from "@/components/home/Problem";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { Architecture } from "@/components/home/Architecture";
import { UseCases } from "@/components/home/UseCases";
import { Security } from "@/components/home/Security";
import { Integrations } from "@/components/home/Integrations";
import { Pricing } from "@/components/home/Pricing";
import { WaitlistForm } from "@/components/home/WaitlistForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <HowItWorks />
        <Features />
        <Architecture />
        <UseCases />
        <Security />
        <Integrations />
        <Pricing />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
