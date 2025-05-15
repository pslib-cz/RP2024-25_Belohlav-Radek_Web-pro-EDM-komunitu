import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Newsletter } from '../../components/Newsletter';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Mock data pro eventy
const events = [
  {
    id: 1,
    title: "TOMORROWLAND",
    subtitle: "BELGIUM",
    dates: "July 18-20 & July 25-27, 2025",
    location: "Boom, Belgium",
    image: "/hero.jpg",
    infoLink: "/events/tomorrowland-belgium",
    ticketsLink: "/tickets/tomorrowland-belgium",
    description: "Tomorrowland je jeden z největších světových festivalů elektronické hudby, který se koná každoročně v belgickém Boomu. Festival je známý svou propracovanou produkcí, tematickými pódii a vystoupeními největších světových DJs. V roce 2025 se festival bude konat opět po dva víkendy a očekává se účast více než 400,000 návštěvníků.",
    lineup: ["Martin Garrix", "Amelie Lens", "Charlotte de Witte", "Hardwell", "Armin van Buuren", "Carl Cox"],
    category: "Festival"
  },
  {
    id: 2,
    title: "TOMORROWLAND X",
    subtitle: "INSOMNIA: UNITY",
    dates: "August 29-30-31 September 19-20-26-27 October 17-18, 2025",
    location: "Sphere, Las Vegas, USA",
    image: "/hero.jpg",
    infoLink: "/events/tomorrowland-unity",
    ticketsLink: "/tickets/tomorrowland-unity",
    description: "Ultra Music Festival v Miami je jedním z nejznámějších festivalů elektronické hudby na světě. Koná se každoročně v březnu a představuje nejlepší světové DJs a producenty z různých žánrů elektronické hudby, od house a techno až po trance a drum and bass. Festival je známý svou špičkovou produkcí, světelnými show a premiérovými sety.",
    lineup: ["David Guetta", "Swedish House Mafia", "Eric Prydz", "Nina Kraviz", "Zedd", "Afrojack"],
    category: "Concert"
  },
  {
    id: 3,
    title: "TOMORROWLAND",
    subtitle: "BRASIL",
    dates: "October 10-12, 2025",
    location: "Itu (São Paulo), Brazil",
    image: "/hero.jpg",
    infoLink: "/events/tomorrowland-brasil",
    ticketsLink: "/tickets/tomorrowland-brasil",
    description: "Transmission je jeden z největších trance festivalů v Evropě, který se koná každoročně v pražské O2 areně. Festival je známý svou unikátní laserovou show, propracovanou tematikou a příběhem, který provází celý večer. Návštěvníci si mohou užít vystoupení největších jmen trance scény a výjimečnou atmosféru.",
    lineup: ["Armin van Buuren", "Aly & Fila", "Paul van Dyk", "Ferry Corsten", "Markus Schulz", "Andrew Rayel"],
    category: "Festival"
  },
  {
    id: 4,
    title: "CORE",
    subtitle: "TULUM",
    dates: "January 10-12, 2026",
    location: "Tulum, Mexico",
    image: "/hero.jpg",
    infoLink: "/events/core-tulum",
    ticketsLink: "/tickets/core-tulum",
    description: "Awakenings Summer Festival je největší techno festival na světě, který se koná v Nizozemsku. Festival nabízí 8 pódií s více než 100 umělci během dvou dnů. Na festivalu vystupují techno legendy i vycházející hvězdy, a návštěvníci si mohou užít state-of-the-art zvukový a vizuální zážitek.",
    lineup: ["Adam Beyer", "Charlotte de Witte", "Amelie Lens", "Jeff Mills", "Richie Hawtin", "Ben Klock"],
    category: "Party"
  },
  {
    id: 5,
    title: "EDC",
    subtitle: "LAS VEGAS",
    dates: "May 16-18, 2025",
    location: "Las Vegas Motor Speedway, USA",
    image: "/hero.jpg",
    infoLink: "/events/edc-las-vegas",
    ticketsLink: "/tickets/edc-las-vegas",
    description: "Electric Daisy Carnival (EDC) v Las Vegas je jeden z největších elektronických hudebních festivalů v Severní Americe. Třídení festival nabízí osm pódií, karneval, umělecké instalace a vystoupení stovek DJů. EDC je známý svým impozantním vzhledem s velkým množstvím neonových světel, ohňostrojů a speciálních efektů.",
    lineup: ["Tiesto", "Martin Garrix", "Illenium", "Alesso", "Fisher", "Kaskade"],
    category: "Festival"
  },
  {
    id: 6,
    title: "CREAMFIELDS",
    subtitle: "FESTIVAL",
    dates: "August 21-24, 2025",
    location: "Daresbury, United Kingdom",
    image: "/hero.jpg",
    infoLink: "/events/creamfields",
    ticketsLink: "/tickets/creamfields",
    description: "Creamfields je jeden z nejvýznamnějších festivalů elektronické hudby ve Velké Británii. Koná se o víkendu státního svátku v srpnu a nabízí vystoupení největších světových DJů a producentů. Festival je známý svými velkolepými pódii, vizuálními efekty a širokou škálou elektronických hudebních žánrů.",
    lineup: ["Calvin Harris", "Carl Cox", "Eric Prydz", "Camelphat", "Above & Beyond", "Fatboy Slim"],
    category: "Festival"
  },
  {
    id: 7,
    title: "PRAGUE ELECTRONIC FESTIVAL",
    subtitle: "PEF 2025",
    dates: "September 5-7, 2025",
    location: "Betonárka Praha, Czech Republic",
    image: "/hero.jpg",
    infoLink: "/events/prague-electronic-festival",
    ticketsLink: "/tickets/prague-electronic-festival",
    description: "Prague Electronic Festival (PEF) je největší český festival elektronické hudby, který se koná v Praze. Festival nabízí pět různých pódií s různými žánry elektronické hudby - od techna a house až po drum and bass a trance. PEF představuje kombinaci světových hvězd a lokálních talentů v unikátním industriálním prostředí pražské Betonárky.",
    lineup: ["Boris Brejcha", "Paul Kalkbrenner", "Solomun", "Tale Of Us", "Artbat", "Jax Jones"],
    category: "Concert"
  },
  {
    id: 8,
    title: "TOMORROWLAND WINTER",
    subtitle: "ALPE D'HUEZ",
    dates: "March 15-22, 2025",
    location: "Alpe d'Huez, France",
    image: "/hero.jpg",
    infoLink: "/events/tomorrowland-winter",
    ticketsLink: "/tickets/tomorrowland-winter",
    description: "Tomorrowland Winter je zimní verze slavného belgického festivalu, která se koná ve francouzském lyžařském středisku Alpe d'Huez. Festival spojuje elektronickou hudbu s lyžováním a snowboardingem a nabízí unikátní zimní festivalový zážitek. Hosté si mohou užít vystoupení top světových DJů jak na horských pódiích, tak v údolí.",
    lineup: ["Dimitri Vegas & Like Mike", "Lost Frequencies", "Afrojack", "Netsky", "Claptone", "Joris Voorn"],
    category: "Festival"
  }
];

// Kategorie
const categories = [
  "Všechny",
  "Festival",
  "Concert",
  "Party",
  "Workshop",
  "Conference"
];

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

export default function Events() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Festivaly a Eventy</h1>
            <p className={styles.heroSubtitle}>Objevte ty nejlepší taneční akce po celém světě</p>
          </div>
        </section>
        
        <section className={styles.eventsSection}>
          <div className={styles.container}>
            <div className={styles.categories}>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`${styles.categoryButton} ${index === 0 ? styles.active : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className={styles.eventsGrid}>
              {events.map((event) => (
                <div key={event.id} className={styles.eventCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={300}
                      className={styles.eventImage}
                    />
                    <div className={styles.category}>{event.category}</div>
                  </div>
                  
                  <div className={styles.content}>
                    <div className={styles.date}>{event.dates}</div>
                    <h3 className={styles.newsTitle}>
                      <Link href={event.infoLink} className={styles.titleLink}>
                        {event.title}
                        {event.subtitle && ` - ${event.subtitle}`}
                      </Link>
                    </h3>
                    <p className={styles.excerpt}>{event.location}</p>
                    
                    <div className={styles.eventActions}>
                      <Link href={event.infoLink} className={styles.infoButton}>
                        INFO
                      </Link>
                      
                      <Link href={event.ticketsLink} className={styles.ticketsButton}>
                        TICKETS
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.pagination}>
              <button className={`${styles.pageButton} ${styles.active}`}>1</button>
              <button className={styles.pageButton}>2</button>
              <button className={styles.pageButton}>3</button>
              <button className={styles.pageButton}>
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
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Newsletter
        title={newsletter.title}
        subtitle={newsletter.subtitle}
        description={newsletter.description}
        buttonText={newsletter.buttonText}
      />
      <Footer links={footerLinks} socialLinks={socialLinks} />
    </>
  );
} 