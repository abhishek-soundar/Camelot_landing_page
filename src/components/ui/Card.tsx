import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
  hover?: boolean;
}

export function Card({ children, className, variant = "dark", hover = true }: CardProps) {
  return (
    <div className={cn(styles.card, styles[variant], hover && styles.hover, className)}>
      {children}
    </div>
  );
}
