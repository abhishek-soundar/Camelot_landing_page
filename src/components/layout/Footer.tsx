import React from "react";
import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = [
  {
    title: "Developers",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "GitHub", href: "https://github.com/camelot-ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "/security-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.brand}>CAMELOT</span>
            </Link>
            <p className={styles.tagline}>
              Your entire SaaS stack. One conversation.
            </p>
            <div className={styles.socials}>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></Link>
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
                </svg>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></Link>
            </div>
          </div>

          <div className={styles.linksGrid}>
            {footerLinks.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <div className={styles.links}>
                  {group.links.map((link) => (
                    <Link key={link.name} href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Camelot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
