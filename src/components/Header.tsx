"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Novinky', href: '/novinky' },
  { label: 'DJs', href: '/djs' },
  { label: 'Events', href: '/events' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Pro média', href: '/pro-media' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Přidáme detekci prohlížeče
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detekce Safari prohlížeče
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);

    const handleScroll = () => {
      // Snížíme práh, od kterého se header považuje za scrolled
      const isScrolled = window.scrollY > 5;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Snížíme maximální scroll pro plný efekt
      const maxScrollForEffect = 100;
      const progress = Math.min(window.scrollY / maxScrollForEffect, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Vytvoříme class pro blurnutý header s explicitní kontrolou
  const headerClasses = `${styles.header} ${scrolled ? styles.headerScrolled : ''}`;

  // Používáme blur efekt s velmi lehkým tmavým tónem
  const dynamicHeaderStyle = {
    backdropFilter: `blur(4px)`,
    WebkitBackdropFilter: `blur(4px)`,
    backgroundColor: `rgba(0, 0, 10, ${scrolled ? 0.2 : 0})`,
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
  };

  return (
    <header className={headerClasses} style={dynamicHeaderStyle}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>EDM WORLD</span>
          </div>
        </Link>

        <nav className={styles.navDesktop}>
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
          <button className={styles.searchButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <div className={styles.languageSelector}>
            <button className={styles.languageButton}>
              CZ
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div className={styles.languageDropdown}>
              <a href="#" className={styles.languageOption}>Čeština</a>
              <a href="#" className={styles.languageOption}>English</a>
              <a href="#" className={styles.languageOption}>Deutsch</a>
            </div>
          </div>
        </nav>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.mobileMenuIcon}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <nav className={styles.navMobile}>
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className={styles.navLinkMobile}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className={styles.mobileActions}>
              <button className={styles.searchButtonMobile}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Hledat
              </button>
              <div className={styles.mobileLanguage}>
                <span>Jazyk: </span>
                <select className={styles.mobileLanguageSelect}>
                  <option>Čeština</option>
                  <option>English</option>
                  <option>Deutsch</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
