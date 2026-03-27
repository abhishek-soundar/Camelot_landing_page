import React from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";

interface ContentPageProps {
  title: string;
  children: React.ReactNode;
}

export function ContentPage({ title, children }: ContentPageProps) {
  return (
    <main>
      <Section variant="dark" className="min-h-screen py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-accent mb-12 hover:underline">
            ← Back to Home
          </Link>
          <h1 className="mb-12 text-5xl">{title}</h1>
          <div className="prose prose-invert max-w-none text-muted leading-relaxed">
            {children}
          </div>
        </div>
      </Section>
    </main>
  );
}
