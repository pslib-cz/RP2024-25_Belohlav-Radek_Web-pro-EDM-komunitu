import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedBackground } from '../../components/AnimatedBackground';
import { Newsletter } from '../../components/Newsletter';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// Data pro newsletter
const newsletter = {
  title: "Buďte v obraze",
  subtitle: "EDM Newsletter",
  description: "Přihlaste se k odběru našeho newsletteru a získejte přístup k exkluzivním informacím o nadcházejících festivalech, novinkách od vašich oblíbených DJs a speciálním nabídkám na vstupenky.",
  buttonText: "Přihlásit se"
};

// Footer odkazy
const footerLinks = {
  main: [
    { label: 'Novinky', href: '/novinky' },
    { label: 'DJs', href: '/djs' },
    { label: 'Events', href: '/events' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Pro média', href: '/pro-media' },
  ],
  info: [
    { label: 'O nás', href: '/o-nas' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kariéra', href: '/kariera' },
  ],
  connect: [
    { label: 'Kontaktní formulář', href: '/kontakt' },
    { label: 'Spolupráce', href: '/spoluprace' },
    { label: 'Podpora', href: '/podpora' },
    { label: 'Reklama', href: '/reklama' },
  ],
};

// Social media odkazy
const socialLinks = [
  {
    platform: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
  {
    platform: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    platform: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
  },
  {
    platform: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
  },
];

// Kontaktní údaje
const contactInfo = {
  address: {
    company: "EDM World s.r.o.",
    street: "Elektronická 123",
    city: "Praha 7",
    zip: "170 00",
    country: "Česká republika"
  },
  email: "info@edmworld.cz",
  phone: "+420 123 456 789",
  hours: "Po-Pá: 9:00 - 17:00"
};

// Oddělení
const departments = [
  {
    name: "Redakce",
    email: "redakce@edmworld.cz",
    phone: "+420 123 456 780"
  },
  {
    name: "Marketing a PR",
    email: "marketing@edmworld.cz",
    phone: "+420 123 456 781"
  },
  {
    name: "Obchodní oddělení",
    email: "sales@edmworld.cz",
    phone: "+420 123 456 782"
  },
  {
    name: "Technická podpora",
    email: "podpora@edmworld.cz",
    phone: "+420 123 456 783"
  }
];

export default function Kontakt() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Kontaktujte nás</h1>
            <p className={styles.heroSubtitle}>Jsme zde pro všechny vaše dotazy, návrhy a spolupráce</p>
          </div>
          <AnimatedBackground />
        </section>
        
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div className={styles.formWrapper}>
                <h2 className={styles.sectionTitle}>Napište nám</h2>
                <p className={styles.sectionDescription}>
                  Máte dotaz, zpětnou vazbu nebo byste s námi chtěli spolupracovat? 
                  Vyplňte následující formulář a my se vám co nejdříve ozveme.
                </p>
                
                <form className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Jméno a příjmení *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className={styles.input}
                      placeholder="Vaše jméno a příjmení" 
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>E-mail *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={styles.input}
                      placeholder="váš@email.cz" 
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className={styles.input}
                      placeholder="+420 123 456 789" 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Předmět *</label>
                    <select 
                      id="subject" 
                      className={styles.select}
                      required
                    >
                      <option value="">Vyberte předmět...</option>
                      <option value="general">Obecný dotaz</option>
                      <option value="support">Technická podpora</option>
                      <option value="partnership">Nabídka spolupráce</option>
                      <option value="press">Tisková zpráva/Média</option>
                      <option value="other">Jiné</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Zpráva *</label>
                    <textarea 
                      id="message" 
                      className={styles.textarea}
                      placeholder="Napište nám, co máte na srdci..." 
                      rows={5}
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <div className={styles.checkbox}>
                      <input 
                        type="checkbox" 
                        id="consent" 
                        required 
                      />
                      <label htmlFor="consent" className={styles.checkboxLabel}>
                        Souhlasím se zpracováním osobních údajů v souladu s 
                        <Link href="/ochrana-soukromi" className={styles.link}> ochranou soukromí</Link>.
                      </label>
                    </div>
                  </div>
                  
                  <button type="submit" className={styles.submitButton}>
                    Odeslat zprávu
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
                      className={styles.submitIcon}
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              </div>
              
              <div className={styles.infoWrapper}>
                <div className={styles.contactInfo}>
                  <h2 className={styles.sectionTitle}>Kontaktní údaje</h2>
                  
                  <div className={styles.infoGroup}>
                    <h3 className={styles.infoTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.infoIcon}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Adresa
                    </h3>
                    <address className={styles.infoText}>
                      {contactInfo.address.company}<br />
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.zip}<br />
                      {contactInfo.address.country}
                    </address>
                  </div>
                  
                  <div className={styles.infoGroup}>
                    <h3 className={styles.infoTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.infoIcon}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Email
                    </h3>
                    <a href={`mailto:${contactInfo.email}`} className={styles.infoLink}>
                      {contactInfo.email}
                    </a>
                  </div>
                  
                  <div className={styles.infoGroup}>
                    <h3 className={styles.infoTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.infoIcon}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Telefon
                    </h3>
                    <a href={`tel:${contactInfo.phone}`} className={styles.infoLink}>
                      {contactInfo.phone}
                    </a>
                  </div>
                  
                  <div className={styles.infoGroup}>
                    <h3 className={styles.infoTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.infoIcon}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      Otevírací doba
                    </h3>
                    <p className={styles.infoText}>
                      {contactInfo.hours}
                    </p>
                  </div>
                  
                  <div className={styles.socialLinks}>
                    {socialLinks.map((link) => (
                      <a 
                        key={link.platform} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label={link.platform}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className={styles.departments}>
                  <h2 className={styles.departmentsTitle}>Oddělení</h2>
                  
                  {departments.map((dept) => (
                    <div key={dept.name} className={styles.department}>
                      <h3 className={styles.departmentName}>{dept.name}</h3>
                      <a href={`mailto:${dept.email}`} className={styles.departmentEmail}>
                        {dept.email}
                      </a>
                      <a href={`tel:${dept.phone}`} className={styles.departmentPhone}>
                        {dept.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.mapWrapper}>
              <h2 className={styles.mapTitle}>Kde nás najdete</h2>
              <div className={styles.map}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.906410112335!2d14.436699415463504!3d50.09819371946686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94c2a3b9b8ef%3A0x7b0a755983d7a7fb!2sHolesovice%2C%20Prague%207%2C%20Czechia!5e0!3m2!1sen!2scz!4v1627305212345!5m2!1sen!2scz" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <Newsletter 
          title={newsletter.title}
          subtitle={newsletter.subtitle}
          description={newsletter.description}
          buttonText={newsletter.buttonText}
        />
      </main>
      <Footer links={footerLinks} socialLinks={socialLinks} />
    </>
  );
} 