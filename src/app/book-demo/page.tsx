import React from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function BookDemo() {
  return (
    <main>
      <Section id="book-demo" variant="dark" className="min-h-screen flex items-center justify-center text-center">
        <div className="max-w-2xl mx-auto py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-accent mb-12 hover:underline">
            ← Back to Home
          </Link>
          <h1 className="mb-6">Book a Demo</h1>
          <p className="text-xl text-muted mb-10">
            See Camelot in action. We&apos;ll show you how to connect your specific MCP servers and automate your unique workflows.
          </p>
          <div className="bg-[#111] p-8 rounded-2xl border border-[#222] mb-10">
            <p className="mb-6">Our team will reach out within 24 hours to schedule a 30-minute session.</p>
            <Button size="lg" variant="primary">Schedule via Calendly (Mock)</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
