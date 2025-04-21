"use client"; // Pro práci s formulářem

import React, { useState } from 'react';
import styles from './Newsletter.module.css';

interface NewsletterProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  title,
  subtitle,
  description,
  buttonText
}) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Jednoduchá validace emailu
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Prosím zadejte platný e-mail');
      return;
    }
    
    // Zde by byla logika pro odeslání emailu na server
    // Simulujeme úspěšné odeslání
    setSuccess(true);
    setError('');
    // Reset stavu po 5 sekundách
    setTimeout(() => {
      setSuccess(false);
      setEmail('');
    }, 5000);
  };

  return (
    <section className={`${styles.newsletter} sectionBackground`}>
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.subtitle}>{subtitle}</div>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <div className={styles.emailWrapper}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={styles.emailIcon}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Váš e-mail" 
                  className={styles.emailInput} 
                  required 
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                {buttonText}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={styles.buttonIcon}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            
            {error && <p className={styles.errorMessage}>{error}</p>}
            {success && <p className={styles.successMessage}>Děkujeme za přihlášení k odběru!</p>}
            
            <div className={styles.privacyText}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" required className={styles.checkbox} />
                <span className={styles.checkmark}></span>
                <span>Souhlasím se <a href="/gdpr" className={styles.link}>zpracováním osobních údajů</a> a zasíláním novinek</span>
              </label>
            </div>
          </form>
        </div>
        
        <div className={styles.featuresSection}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={styles.featureIcon}
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Žádný spam</span>
            </div>
            <div className={styles.feature}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={styles.featureIcon}
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Bezpečné odhlášení</span>
            </div>
            <div className={styles.feature}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={styles.featureIcon}
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              <span>Exkluzivní obsah</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};