import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
  container?: boolean;
}

export function Section({ 
  id, 
  children, 
  className, 
  variant = "dark",
  container = true 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(styles.section, styles[variant], className)}
    >
      <div className={cn(container && "container")}>
        {children}
      </div>
    </section>
  );
}
