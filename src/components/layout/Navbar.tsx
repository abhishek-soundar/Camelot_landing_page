"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ ADD THIS
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Security", href: "#security" },
  { name: "Integrations", href: "#integrations" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(styles.navbar, isScrolled && styles.scrolled)}>
      <div className={cn("container", styles.container)}>
        
        {/* 🔥 LOGO SECTION */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Camelot logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className={styles.brand}>CAMELOT</span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={cn(styles.mobileDrawer, isMobileMenuOpen && styles.drawerOpen)}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className={styles.mobileActions}>
            <Link href="/book-demo" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}