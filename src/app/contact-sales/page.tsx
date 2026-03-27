import React from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function ContactSales() {
  return (
    <main>
      <Section id="contact-sales" variant="dark" className="min-h-screen flex items-center justify-center text-center">
        <div className="max-w-2xl mx-auto py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-accent mb-12 hover:underline">
            ← Back to Home
          </Link>
          <h1 className="mb-6">Contact Sales</h1>
          <p className="text-xl text-muted mb-10">
            Camelot Enterpise offers SSO, SAML, 99.9% uptime SLAs, and custom data residency options.
          </p>
          <div className="bg-[#111] p-8 rounded-2xl border border-[#222] mb-10">
            <p className="mb-6">Tell us about your organization&apos;s needs and compliance requirements.</p>
            <Button size="lg" variant="primary">Talk to an Enterprise Specialist</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
