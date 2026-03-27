import React from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import styles from "./Integrations.module.css";

const integrations = [
  {
    name: "Zoho CRM",
    category: "CRM & Sales",
    tools: "47+ tools available",
    status: "active"
  },
  {
    name: "Zoho Desk",
    category: "Customer Support",
    tools: "32+ tools available",
    status: "active"
  },
  {
    name: "HubSpot",
    category: "Marketing & CRM",
    tools: "Coming soon",
    status: "pending"
  },
  {
    name: "Notion",
    category: "Knowledge Base",
    tools: "Coming soon",
    status: "pending"
  },
  {
    name: "Custom MCP Server",
    category: "Bring your own",
    tools: "Connect in under 5 min",
    status: "custom"
  }
];

export function Integrations() {
  return (
    <Section id="integrations" variant="dark" className={styles.integrations}>
      <h2 className={styles.headline}>Connect the tools you already use.<br />Add anything else with MCP.</h2>
      
      <div className={styles.grid}>
        {integrations.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.logoPlaceholder}>
                {item.name[0]}
              </div>
              <div>
                <h3 className={styles.name}>{item.name}</h3>
                <span className={styles.category}>{item.category}</span>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <Badge variant={item.status === 'active' ? 'accent' : 'outline'}>
                {item.tools}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.callout}>
        <p>Any MCP-compatible server connects in under 5 minutes. Paste your URL — we validate and discover your tools automatically.</p>
        <Link href="/docs/integrations" className={styles.link}>See the docs →</Link>
      </div>
    </Section>
  );
}
