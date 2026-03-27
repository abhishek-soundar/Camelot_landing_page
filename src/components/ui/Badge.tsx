import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "accent" | "outline";
}

export function Badge({ children, className, variant = "accent" }: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[variant], className)}>
      {children}
    </span>
  );
}
