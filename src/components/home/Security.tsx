import React from "react";
import { Shield, Lock, EyeOff, Server, Scale, Zap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import styles from "./Security.module.css";

const securityItems = [
  {
    icon: <Shield size={24} />,
    title: "Credential Encryption at Rest",
    detail: "MCP URLs (which contain embedded auth keys) are encrypted before storage. The frontend never receives the raw URL."
  },
  {
    icon: <Lock size={24} />,
    title: "Tenant Data Isolation",
    detail: "Every database query is scoped by tenantId at the function layer. Cross-tenant data access is impossible by design."
  },
  {
    icon: <EyeOff size={24} />,
    title: "Secret Field Redaction",
    detail: "Fields named token, password, secret, key, and auth are replaced with [REDACTED] before any execution log is written."
  },
  {
    icon: <Server size={24} />,
    title: "HTTPS-Only MCP Calls",
    detail: "All calls to MCP servers are made over HTTPS. http:// URLs are rejected at connection validation — not at execution time."
  },
  {
    icon: <Scale size={24} />,
    title: "Policy-Enforced Execution",
    detail: "The policy engine runs before every MCP call. It evaluates tool blocks, role restrictions, and rate limits in order."
  },
  {
    icon: <Zap size={24} />,
    title: "LLM Provider Geo-Routing",
    detail: "OpenRouter geo-routing ensures EU tenants can be restricted to EU-hosted inference providers for data residency."
  }
];

export function Security() {
  return (
    <Section id="security" variant="light" className={styles.security}>
      <h2 className={styles.headline}>Enterprise-grade governance, by default</h2>
      
      <div className={styles.grid}>
        {securityItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.detail}>{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
