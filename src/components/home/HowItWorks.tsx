import React from "react";
import { Link2, MessageSquare, ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/Section";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Connect your tools",
    description: "Paste your MCP server URL. Camelot validates the connection and discovers every available tool automatically — no manual mapping.",
    icon: <Link2 size={32} />
  },
  {
    title: "Type your instruction",
    description: "Your team types what they need in plain English. The agent picks the right tool, checks your policy rules, and validates the arguments.",
    icon: <MessageSquare size={32} />
  },
  {
    title: "See it happen — audited",
    description: "The action executes in your real tool. A confirmation streams back instantly. Every execution is logged with full detail.",
    icon: <ShieldCheck size={32} />
  }
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" variant="dark" className={styles.howItWorks}>
      <h2 className={styles.headline}>Three steps from intent to action</h2>
      
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.stepNumber}>0{index + 1}</div>
            <div className={styles.iconWrapper}>{step.icon}</div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
        <div className={styles.connectingLine}></div>
      </div>
    </Section>
  );
}
