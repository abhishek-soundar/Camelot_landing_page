import React from "react";
import styles from "./SocialProof.module.css";

const logos = [
  "Zoho CRM", "Zoho Desk", "HubSpot", "Notion", "Slack", "MCP Server"
];

export function SocialProof() {
  return (
    <div className={styles.socialProof}>
      <div className="container">
        <p className={styles.label}>Works with the tools your team already uses</p>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
