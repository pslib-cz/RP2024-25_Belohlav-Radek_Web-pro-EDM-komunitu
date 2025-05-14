import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedBackground } from '../../components/AnimatedBackground';
import { Newsletter } from '../../components/Newsletter';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

// Kontaktní osoby pro média
const mediaContacts = [
  {
    name: "Jana Nováková",
    position: "Tisková mluvčí",
    email: "jana.novakova@edmworld.cz",
    phone: "+420 123 456 780",
    photo: "/hero.jpg"
  },
  {
    name: "Petr Svoboda",
    position: "PR manažer",
    email: "petr.svoboda@edmworld.cz",
    phone: "+420 123 456 781",
    photo: "/hero.jpg"
  }
];

// Tiskové zprávy
const pressReleases = [
  {
    id: 1,
    title: "EDM World spouští nový webový portál pro fanoušky elektronické hudby",
    date: "15. 3. 2025",
    excerpt: "Největší český portál o elektronické taneční hudbě přichází v novém kabátě s rozšířeným obsahem a službami.",
    file: "/press/press-release-1.pdf",
  },
  {
    id: 2,
    title: "Prague Electronic Festival 2025 odhaluje první jména line-upu",
    date: "1. 3. 2025",
    excerpt: "Pátý ročník největšího českého festivalu elektronické hudby oznámil první headlinery včetně Boris Brejcha a Paula Kalkbrennera.",
    file: "/press/press-release-2.pdf",
  },
  {
    id: 3,
    title: "EDM World navazuje strategické partnerství s Tomorrowland",
    date: "15. 2. 2025",
    excerpt: "Česká platforma EDM World se stává oficiálním mediálním partnerem světoznámého belgického festivalu Tomorrowland pro region střední Evropy.",
    file: "/press/press-release-3.pdf",
  },
  {
    id: 4,
    title: "Nový podcast 'Electronic Talks' startuje v dubnu 2025",
    date: "1. 2. 2025",
    excerpt: "EDM World spouští nový podcastový formát, ve kterém budou hosty světové i domácí hvězdy elektronické hudební scény.",
    file: "/press/press-release-4.pdf",
  },
];

// Loga a grafika ke stažení
const logoAssets = [
  {
    id: 1,
    title: "EDM World Logo - barevné",
    description: "Oficiální barevné logo EDM World ve formátech PNG a SVG s průhledným pozadím.",
    image: "/hero.jpg",
    formats: ["PNG", "SVG", "EPS"],
    file: "/assets/edmworld-logo-color.zip",
  },
  {
    id: 2,
    title: "EDM World Logo - bílé",
    description: "Oficiální bílé logo EDM World ve formátech PNG a SVG s průhledným pozadím.",
    image: "/hero.jpg",
    formats: ["PNG", "SVG", "EPS"],
    file: "/assets/edmworld-logo-white.zip",
  },
  {
    id: 3,
    title: "EDM World Logo - černé",
    description: "Oficiální černé logo EDM World ve formátech PNG a SVG s průhledným pozadím.",
    image: "/hero.jpg",
    formats: ["PNG", "SVG", "EPS"],
    file: "/assets/edmworld-logo-black.zip",
  },
  {
    id: 4,
    title: "EDM World Brand Guidelines",
    description: "Kompletní brand manuál s pravidly pro použití loga, barev a typografie.",
    image: "/hero.jpg",
    formats: ["PDF"],
    file: "/assets/edmworld-brand-guidelines.pdf",
  },
];

export default function ProMedia() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Pro média</h1>
            <p className={styles.heroSubtitle}>Tiskové zprávy, grafické materiály a kontakty pro novináře</p>
          </div>
          <AnimatedBackground />
        </section>
        
        <section className={styles.contactsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Kontakty pro média</h2>
            <p className={styles.sectionDescription}>
              Pro novinářské dotazy, rozhovory nebo akreditace na události kontaktujte naše PR oddělení.
              Rádi vám poskytneme více informací o našich aktivitách a projektech.
            </p>
            
            <div className={styles.contactsGrid}>
              {mediaContacts.map((contact) => (
                <div key={contact.name} className={styles.contactCard}>
                  <div className={styles.contactPhoto}>
                    <Image
                      src={contact.photo}
                      alt={contact.name}
                      width={150}
                      height={150}
                      className={styles.photo}
                    />
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactName}>{contact.name}</h3>
                    <p className={styles.contactPosition}>{contact.position}</p>
                    <a href={`mailto:${contact.email}`} className={styles.contactEmail}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      {contact.email}
                    </a>
                    <a href={`tel:${contact.phone}`} className={styles.contactPhone}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.generalInfo}>
              <h3 className={styles.generalTitle}>Obecné mediální dotazy</h3>
              <p className={styles.generalText}>
                Pro obecné mediální dotazy nás můžete kontaktovat na:
              </p>
              <a href="mailto:media@edmworld.cz" className={styles.generalEmail}>
                media@edmworld.cz
              </a>
            </div>
          </div>
        </section>
        
        <section className={styles.pressReleasesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Tiskové zprávy</h2>
            <p className={styles.sectionDescription}>
              Zde najdete naše nejnovější tiskové zprávy. Všechny materiály jsou volně k použití 
              při dodržení uvedení zdroje "EDM World".
            </p>
            
            <div className={styles.pressReleasesList}>
              {pressReleases.map((pressRelease) => (
                <div key={pressRelease.id} className={styles.pressReleaseItem}>
                  <div className={styles.pressReleaseContent}>
                    <span className={styles.pressReleaseDate}>{pressRelease.date}</span>
                    <h3 className={styles.pressReleaseTitle}>{pressRelease.title}</h3>
                    <p className={styles.pressReleaseExcerpt}>{pressRelease.excerpt}</p>
                  </div>
                  <a href={pressRelease.file} download className={styles.downloadButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.downloadIcon}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Stáhnout PDF
                  </a>
                </div>
              ))}
            </div>
            
            <div className={styles.archiveLink}>
              <Link href="/pro-media/tiskove-zpravy" className={styles.viewAllButton}>
                Zobrazit všechny tiskové zprávy
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        <section className={styles.mediaAssetsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Loga a grafika ke stažení</h2>
            <p className={styles.sectionDescription}>
              V této sekci najdete oficiální loga a grafické materiály společnosti EDM World. 
              Všechny materiály jsou volně k použití při dodržení našich 
              <Link href="/brand-guidelines" className={styles.inlineLink}> brand guidelines</Link>.
            </p>
            
            <div className={styles.assetsGrid}>
              {logoAssets.map((asset) => (
                <div key={asset.id} className={styles.assetCard}>
                  <div className={styles.assetImageContainer}>
                    <Image
                      src={asset.image}
                      alt={asset.title}
                      width={400}
                      height={250}
                      className={styles.assetImage}
                    />
                  </div>
                  <div className={styles.assetContent}>
                    <h3 className={styles.assetTitle}>{asset.title}</h3>
                    <p className={styles.assetDescription}>{asset.description}</p>
                    <div className={styles.assetFormats}>
                      {asset.formats.map((format, index) => (
                        <span key={index} className={styles.formatBadge}>{format}</span>
                      ))}
                    </div>
                    <a href={asset.file} download className={styles.assetDownloadButton}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.downloadIcon}>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Stáhnout
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className={styles.accreditationSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Akreditace na události</h2>
            <p className={styles.sectionDescription}>
              Žádosti o novinářské akreditace na námi pořádané události zasílejte minimálně 14 dní před 
              konáním dané akce na e-mail <a href="mailto:akreditace@edmworld.cz" className={styles.inlineLink}>akreditace@edmworld.cz</a>. 
              Do e-mailu uveďte média, které zastupujete, jméno a příjmení osob, pro které žádáte akreditaci, 
              a plánovaný výstup z dané akce.
            </p>
            
            <div className={styles.actionButton}>
              <Link href="/pro-media/akreditace" className={styles.accreditationButton}>
                Žádost o akreditaci
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
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