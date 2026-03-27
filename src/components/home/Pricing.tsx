import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import styles from "./Pricing.module.css";

const tiers = [
  {
    name: "Starter",
    target: "Small teams / evaluation",
    price: "Free",
    features: ["1 MCP connection", "2 members", "500 executions/mo"],
    cta: "Join Waitlist",
    variant: "light" as const
  },
  {
    name: "Pro",
    target: "Growing teams",
    price: "$49/mo",
    features: ["Unlimited connections", "25 members", "10k executions/mo", "Custom roles", "Priority support"],
    cta: "Join Waitlist",
    popular: true,
    variant: "light" as const
  },
  {
    name: "Enterprise",
    target: "Large orgs / compliance",
    price: "Custom",
    features: ["Unlimited everything", "SSO & SAML", "99.9% SLA", "Geo-routing", "Custom contract"],
    cta: "Contact Sales",
    variant: "dark" as const
  }
];

export function Pricing() {
  return (
    <Section id="pricing" variant="light" className={styles.pricing}>
      <h2 className={styles.headline}>Simple pricing. No per-seat surprises.</h2>
      
      <div className={styles.grid}>
        {tiers.map((tier, index) => (
          <Card 
            key={index} 
            variant={tier.variant}
            hover={true}
            className={tier.popular ? styles.popularCard : styles.card}
          >
            {tier.popular && (
              <Badge variant="accent" className={styles.popularBadge}>Most Popular</Badge>
            )}
            <div className={styles.tierHeader}>
              <h3 className={styles.name}>{tier.name}</h3>
              <p className={styles.target}>{tier.target}</p>
            </div>
            <div className={styles.price}>{tier.price}</div>
            <ul className={styles.features}>
              {tier.features.map((feature, i) => (
                <li key={i} className={styles.feature}>
                  <Check size={16} className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={index === 0 ? "#waitlist" : index === 1 ? "/pricing/pro" : "/contact-sales"}>
              <Button 
                variant={index === 1 ? "primary" : "outline"} 
                size="lg" 
                light={index !== 1}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
