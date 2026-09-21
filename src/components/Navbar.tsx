"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>SAKTHIVELPANDIAN P</Link>
        
        {/* Navigation Links (Responsive) */}
        <div className={styles.navLinksWrapper}>
          <div className={styles.navLinks}>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/experience" className={styles.navLink}>Experience</Link>
            <Link href="/projects" className={styles.navLink}>Projects</Link>
            <Link href="/skills" className={styles.navLink}>Skills & Edu</Link>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <a href="mailto:imsakthidev@gmail.com" className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>Email</a>
            <a href="tel:+919585992141" className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>Call</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
