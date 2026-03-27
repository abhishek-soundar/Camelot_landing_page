"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";
import { useTypingEffect } from "@/lib/hooks";
import styles from "./Hero.module.css";

const MOCK_COMMAND = "Create a contact: Mithun Raj, mithun@acme.com, +91 9999 999999";

export function Hero() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loopKey, setLoopKey] = useState(0);
  
  const { displayedText, isComplete } = useTypingEffect(MOCK_COMMAND, 40, 1000);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => setShowConfirmation(true), 500);
      const resetTimer = setTimeout(() => {
        setShowConfirmation(false);
        setLoopKey(prev => prev + 1);
      }, 7000);
      return () => {
        clearTimeout(timer);
        clearTimeout(resetTimer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete, loopKey]);

  return (
    <Section id="hero" className={styles.hero} variant="dark">
      <div className={styles.grid}>
        <div className={styles.content}>
          <Badge className="stagger-1 animate-fade-in">NOW IN EARLY ACCESS</Badge>
          <h1 className={styles.title}>
            Your entire SaaS stack.<br />
            <span className="accent-text">One conversation.</span>
          </h1>
          <p className={styles.description}>
            Camelot connects your tools through the Model Context Protocol — so your team can create contacts, update tickets, and manage pipelines without leaving a single chat interface.
          </p>
          <div className={styles.actions}>
            <Link href="#waitlist">
              <Button size="xl">Join the Waitlist <ArrowRight size={20} /></Button>
            </Link>
            <Link href="/book-demo">
              <Button variant="outline" size="xl">Book a Demo</Button>
            </Link>
          </div>
          <p className={styles.socialProof}>
            Join 200+ teams on the waitlist
          </p>
        </div>

        <div className={styles.visual}>
          <div className={styles.mockupContainer}>
            <div className={styles.browserHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.url}>app.camelot.ai</div>
            </div>
            <div className={styles.browserBody}>
              <div className={styles.sidebar}>
                <div className={styles.sidebarGroup}>
                  <label>ZOHO CRM</label>
                  <div className={styles.sidebarItem}>Contacts <span>12</span></div>
                  <div className={styles.sidebarItem}>Deals <span>4</span></div>
                </div>
                <div className={styles.sidebarGroup}>
                  <label>ZOHO DESK</label>
                  <div className={styles.sidebarItem}>Tickets <span>8</span></div>
                </div>
                <div className={styles.sidebarGroup}>
                  <label>NOTION</label>
                  <div className={styles.sidebarItem}>Tasks <span>24</span></div>
                </div>
              </div>
              <div className={styles.chatArea}>
                <div className={styles.chatMessages}>
                  <div className={styles.userMessage}>
                    <div className={styles.avatar}>U</div>
                    <div className={styles.text}>{displayedText}</div>
                  </div>
                  {showConfirmation && (
                    <div className={styles.agentMessage}>
                      <div className={styles.avatar}>C</div>
                      <div className={styles.successCard}>
                        <CheckCircle2 size={16} className={styles.successIcon} />
                        <div>
                          <strong>Contact created in Zoho CRM</strong>
                          <p>Mithun Raj has been added to your CRM.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.radialGlow}></div>
        </div>
      </div>
      <div className={styles.gridPattern}></div>
    </Section>
  );
}
