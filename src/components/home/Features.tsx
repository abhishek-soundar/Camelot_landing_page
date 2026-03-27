import React from "react";
import { Code2, ListTodo, ShieldAlert, Users, History, Lock } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import styles from "./Features.module.css";

const features = [
  {
    icon: <Code2 size={24} />,
    title: "Native Function Calling",
    body: "Camelot uses structured tool_call objects — no text parsing, no prompt injection. Every tool selection is type-safe and produces an auditable JSON record."
  },
  {
    icon: <ListTodo size={24} />,
    title: "Live Tool Catalogue",
    body: "All tools across all your MCP connections unified in one list. Enable or disable any individual tool instantly — disabled tools are excluded from the agent automatically."
  },
  {
    icon: <ShieldAlert size={24} />,
    title: "Policy Engine",
    body: "Set tool blocks, role restrictions, and rate limits. The policy engine runs before every MCP call and cannot be bypassed — even direct API calls go through it."
  },
  {
    icon: <Users size={24} />,
    title: "Role-Based Access",
    body: "Admin and member roles ship on day one. Create custom roles — 'Sales Lead', 'Support Agent' — with any combination of the 10 permission keys."
  },
  {
    icon: <History size={24} />,
    title: "Full Audit Trail",
    body: "Every execution, policy trigger, member change, and admin action writes an immutable record. Filter by actor, tool, date, or outcome."
  },
  {
    icon: <Lock size={24} />,
    title: "Multi-Tenant Architecture",
    body: "Each tenant&apos;s data, tools, and conversations are isolated at the database query layer — by design, not by convention."
  }
];

export function Features() {
  return (
    <Section id="features" variant="light" className={styles.features}>
      <h2 className={styles.headline}>
        Everything your team needs.<br />
        <span className="accent-text">Nothing they don&apos;t.</span>
      </h2>
      
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <Card 
            key={index} 
            variant="light" 
            className={styles.card}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.body}>{feature.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
