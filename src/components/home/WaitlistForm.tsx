"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import styles from "./WaitlistForm.module.css";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#3B4CCA", "#10B981", "#ffffff"]
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to join waitlist. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <Section id="waitlist" variant="dark" className={styles.waitlist}>
        <div className={styles.successState}>
          <h2 className={styles.headline}>You&apos;re on the list!</h2>
          <p className={styles.subheadline}>We&apos;ll be in touch as soon as a spot opens up for your team.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="waitlist" variant="dark" className={styles.waitlist}>
      <div className={styles.formContainer}>
        <h2 className={styles.headline}>Be among the first to use Camelot</h2>
        <p className={styles.subheadline}>
          We&apos;re onboarding teams in batches. Join the list and we&apos;ll reach out when your spot is ready.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input
              type="email"
              placeholder="your@company.com"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
            />
          </div>
          
          <div className={styles.field}>
            <select
              className={styles.select}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={status === "loading"}
            >
              <option value="" disabled>I&apos;m a...</option>
              <option value="Operations Lead">Operations Lead</option>
              <option value="Developer">Developer</option>
              <option value="CTO">CTO</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            size="xl" 
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Joining..." : "Join the Waitlist"}
          </Button>

          {status === "error" && (
            <p className={styles.errorMessage}>{message}</p>
          )}
        </form>

        <p className={styles.footerNote}>
          Want a guided tour instead? <a href="#" className={styles.link}>Book a 30-min demo →</a>
        </p>
      </div>
    </Section>
  );
}
