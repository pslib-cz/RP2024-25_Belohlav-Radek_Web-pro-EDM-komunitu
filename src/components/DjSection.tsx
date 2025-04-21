"use client"; // For client-side interactivity

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './DjsSection.module.css';

interface DJ {
  id: number;
  name: string;
  country: string;
  image?: string;
}

interface Country {
  id: string;
  name: string;
  flag: string;
  count: number;
  djs?: DJ[];
}

interface DjsSectionProps {
  title: string;
  subtitle: string;
  countries: Country[];
}

export const DjsSection: React.FC<DjsSectionProps> = ({ title, subtitle, countries }) => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const toggleCountry = (countryId: string) => {
    if (activeCountry === countryId) {
      setActiveCountry(null);
    } else {
      setActiveCountry(countryId);
    }
  };

  // Combine the local module class with the global background class
  const sectionClasses = `${styles.djsSection} sectionBackground`;

  return (
    <section className={sectionClasses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.countriesGrid}>
          {countries.map((country) => (
            <div key={country.id} className={styles.countryWrapper}>
              <button 
                className={`${styles.countryCard} ${activeCountry === country.id ? styles.activeCountry : ''}`}
                onClick={() => toggleCountry(country.id)}
                aria-expanded={activeCountry === country.id}
              >
                <span className={styles.countryFlag}>{country.flag}</span>
                <div className={styles.countryInfo}>
                  <h3 className={styles.countryName}>{country.name}</h3>
                  <span className={styles.djCount}>{country.count} DJs</span>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`${styles.expandIcon} ${activeCountry === country.id ? styles.expandIconActive : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {activeCountry === country.id && (
                <div className={styles.djsList}>
                  {country.djs && country.djs.length > 0 ? (
                    <ul className={styles.djGrid}>
                      {country.djs.slice(0, 4).map((dj) => (
                        <li key={dj.id} className={styles.djItem}>
                          <Link href={`/djs/${dj.id}`} className={styles.djLink}>
                            {dj.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.emptyState}>Seznam DJs se načítá...</p>
                  )}
                  <Link href={`/djs/country/${country.id}`} className={styles.viewAllDjs}>
                    Zobrazit všechny z {country.name}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={styles.viewAllIcon}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.allDjsContainer}>
          <Link href="/djs" className={styles.allDjsButton}>
            Zobrazit všechny DJs
          </Link>
        </div>
      </div>
    </section>
  );
};
