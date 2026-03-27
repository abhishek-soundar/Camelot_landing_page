import React from "react";
import { Timer, AlertTriangle, Cpu } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import styles from "./Problem.module.css";

const problems = [
  {
    icon: <Timer size={32} />,
    title: "Context switching kills productivity",
    body: "Your team switches between CRM, helpdesk, project tools, and comms apps dozens of times a day. Every switch costs time and focus."
  },
  {
    icon: <AlertTriangle size={32} />,
    title: "Actions fall through the cracks",
    body: "No single record of what was actioned, by whom, and when. Accountability and compliance both suffer."
  },
  {
    icon: <Cpu size={32} />,
    title: "Integrations are expensive to build",
    body: "Custom automations require engineering time, break with API changes, and still can&apos;t handle nuanced, contextual decisions."
  }
];

export function Problem() {
  return (
    <Section id="problem" variant="light" className={styles.problem}>
      <h2 className={styles.headline}>
        Your team lives in 12 different tabs.<br />
        <span className="accent-text">Camelot closes them.</span>
      </h2>
      
      <div className={styles.grid}>
        {problems.map((problem, index) => (
          <Card 
            key={index} 
            variant="light" 
            className={styles.card}
          >
            <div className={styles.icon}>{problem.icon}</div>
            <h3 className={styles.title}>{problem.title}</h3>
            <p className={styles.body}>{problem.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
