"use client";

import React from "react";
import { Cpu, Globe, Database, Fingerprint } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { useIntersectionObserver } from "@/lib/hooks";
import styles from "./Architecture.module.css";

const details = [
  {
    icon: <Cpu size={24} />,
    title: "MCP Protocol",
    body: "Uses the official @modelcontextprotocol/sdk for TypeScript. SSE and HTTP transports supported. URL-embedded key auth for Zoho; Bearer token for others."
  },
  {
    icon: <Globe size={24} />,
    title: "OpenRouter — Native Function Calling",
    body: "LLM returns a tool_call JSON object — never parsed text. The tools array is populated from the live catalogue. 100+ models with automatic fallback routing."
  },
  {
    icon: <Database size={24} />,
    title: "Convex — Serverless DB",
    body: "Every query enforced with tenantId at the function layer. MCP URLs are encrypted at rest and decrypted only inside Convex server functions."
  },
  {
    icon: <Fingerprint size={24} />,
    title: "Clerk — Identity Only",
    body: "Handles login and session tokens exclusively. All roles, memberships, and permissions live in Convex. Swapping auth providers only changes the session verification step."
  }
];

export function Architecture() {
  const [diagramRef, isDiagramVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  return (
    <Section id="architecture" variant="dark" className={styles.architecture}>
      <h2 className={styles.headline}>Built on the protocol that powers enterprise AI tooling</h2>
      
      <div className={styles.grid}>
        {details.map((detail, index) => (
          <div key={index} className={styles.detailCard}>
            <div className={styles.icon}>{detail.icon}</div>
            <div className={styles.text}>
              <h3 className={styles.title}>{detail.title}</h3>
              <p className={styles.body}>{detail.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.diagramWrapper} ref={diagramRef}>
        <div className={styles.diagramHeader}>Architecture Flow</div>
        <svg className={styles.svg} viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Nodes */}
          <rect x="50" y="70" width="120" height="60" rx="8" className={styles.node} />
          <text x="110" y="105" textAnchor="middle" className={styles.nodeText}>Chat UI</text>

          <rect x="230" y="70" width="120" height="60" rx="8" className={styles.node} />
          <text x="290" y="105" textAnchor="middle" className={styles.nodeText}>Agent Layer</text>

          <rect x="410" y="70" width="120" height="60" rx="8" className={styles.node} />
          <text x="470" y="105" textAnchor="middle" className={styles.nodeText}>Policy Engine</text>

          <rect x="590" y="70" width="140" height="60" rx="8" className={styles.node} />
          <text x="660" y="105" textAnchor="middle" className={styles.nodeText}>Your Tools (MCP)</text>

          {/* Connectors */}
          <path d="M170 100 H230" className={isDiagramVisible ? styles.pathAnimate : styles.path} />
          <path d="M350 100 H410" className={isDiagramVisible ? styles.pathAnimate : styles.path} />
          <path d="M530 100 H590" className={isDiagramVisible ? styles.pathAnimate : styles.path} />
        </svg>
      </div>
    </Section>
  );
}
