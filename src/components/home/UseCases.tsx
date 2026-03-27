"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import styles from "./UseCases.module.css";

const useCases = [
  {
    id: "sales",
    tabTitle: "Sales Operations",
    badge: "Sales Operations",
    scenario: "Instant contact creation across CRM and sales tools from a simple chat command.",
    command: "Create a contact: Mithun Raj, mithun@acme.com, +91 9999 999999, source: Inbound LinkedIn",
    response: "Contact created in Zoho CRM and HubSpot simultaneously. LinkedIn profile linked. ✓"
  },
  {
    id: "support",
    tabTitle: "Customer Support",
    badge: "Customer Support",
    scenario: "Update ticket priorities and find historical context without leaving the helpdesk queue.",
    command: "Find ticket #18542 and update priority to High — customer has been waiting 3 days",
    response: "Ticket #18542 updated. SLA alert cleared. Support lead notified in Slack. ✓"
  },
  {
    id: "engineering",
    tabTitle: "Engineering Teams",
    badge: "Engineering Teams",
    scenario: "Automate workspace provisioning and administrative tasks across your infra stack.",
    command: "Provision a new workspace for Acme Corp on the Pro plan and send the admin invite to cto@acme.com",
    response: "Workspace 'acme-corp' created. Pro plan assigned. Invite sent. Logs written to Notion. ✓"
  }
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  const activeData = useCases.find(uc => uc.id === activeTab)!;

  return (
    <Section id="use-cases" variant="dark" className={styles.useCases}>
      <h2 className={styles.headline}>See what your team can do</h2>
      
      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          {useCases.map((uc) => (
            <button
              key={uc.id}
              className={cn(styles.tabButton, activeTab === uc.id && styles.activeTab)}
              onClick={() => setActiveTab(uc.id)}
            >
              {uc.tabTitle}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          <div className={styles.caseCard}>
            <Badge variant="accent" className={styles.badge}>{activeData.badge}</Badge>
            <p className={styles.scenario}>{activeData.scenario}</p>
            
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span>TERMINAL</span>
              </div>
              <code>{activeData.command}</code>
            </div>

            <div className={styles.chatPreview}>
              <div className={styles.chatAvatar}>C</div>
              <div className={styles.chatBubble}>
                {activeData.response}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
