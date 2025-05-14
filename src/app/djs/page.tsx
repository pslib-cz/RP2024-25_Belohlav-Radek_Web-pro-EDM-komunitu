import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedBackground } from '../../components/AnimatedBackground';
import { Newsletter } from '../../components/Newsletter';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Mock data pro DJs
const djs = [
  {
    id: 1,
    name: "Martin Garrix",
    country: "Nizozemsko",
    countryCode: "nl",
    image: "/hero.jpg",
    genres: ["Progressive House", "Future Bass", "Big Room"],
    bio: "Martin Garrix, vlastním jménem Martijn Gerard Garritsen, je nizozemský DJ a producent. Ve svých 17 letech se proslavil singlem 'Animals', který se stal globálním hitem. Od té doby spolupracoval s umělci jako Dua Lipa, Bono a The Edge z U2, a stal se jednou z největších hvězd taneční scény.",
    socialLinks: {
      instagram: "https://instagram.com/martingarrix",
      facebook: "https://facebook.com/martingarrix",
      spotify: "https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ",
      website: "https://martingarrix.com"
    },
    slug: "martin-garrix"
  },
  {
    id: 2,
    name: "Charlotte de Witte",
    country: "Belgie",
    countryCode: "be",
    image: "/hero.jpg",
    genres: ["Techno", "Acid Techno", "Hard Techno"],
    bio: "Charlotte de Witte je belgická DJ a producentka, která se stala jednou z nejrespektovanějších osobností technoscény. Proslavila se svým temným, čistým a energickým zvukem. Je zakladatelkou labelu KNTXT a pravidelně vystupuje na největších festivalech světa.",
    socialLinks: {
      instagram: "https://instagram.com/charlottedewittemusic",
      facebook: "https://facebook.com/charlottedewittemusic",
      spotify: "https://open.spotify.com/artist/2gblb7qJnfWQZfXcJS3jYZ",
      website: "https://charlottedewittemusic.com"
    },
    slug: "charlotte-de-witte"
  },
  {
    id: 3,
    name: "Armin van Buuren",
    country: "Nizozemsko",
    countryCode: "nl",
    image: "/hero.jpg",
    genres: ["Trance", "Progressive Trance", "Uplifting Trance"],
    bio: "Armin van Buuren je nizozemský DJ a producent, který je považován za jednoho z průkopníků trance hudby. Jeho radiová show 'A State of Trance' má miliony posluchačů po celém světě. Za svou kariéru získal pět ocenění DJ Mag Top 100 DJs a jeho Armin Only show patří k nejpropracovanějším DJ vystoupením.",
    socialLinks: {
      instagram: "https://instagram.com/arminvanbuuren",
      facebook: "https://facebook.com/arminvanbuuren",
      spotify: "https://open.spotify.com/artist/0SfSnNL5DqcqhA7tgQnMsd",
      website: "https://arminvanbuuren.com"
    },
    slug: "armin-van-buuren"
  },
  {
    id: 4,
    name: "Nina Kraviz",
    country: "Rusko",
    countryCode: "ru",
    image: "/hero.jpg",
    genres: ["Techno", "Acid", "Experimental"],
    bio: "Nina Kraviz je ruská DJ, producentka a zakladatelka labelů трип (Trip) a GALAXIID. Je známá svým eklektickým výběrem hudby, který zahrnuje acid house, techno a experimentální elektronickou hudbu. Její energické DJ sety a charismatické vystupování z ní udělaly jednu z nejžádanějších umělkyň na světě.",
    socialLinks: {
      instagram: "https://instagram.com/ninakraviz",
      facebook: "https://facebook.com/ninakravizofficial",
      spotify: "https://open.spotify.com/artist/1yiEV6hBFn8YNfm4XwCCB6",
      website: "https://ninakraviz.com"
    },
    slug: "nina-kraviz"
  },
  {
    id: 5,
    name: "Carl Cox",
    country: "Velká Británie",
    countryCode: "uk",
    image: "/hero.jpg",
    genres: ["Techno", "House", "Tech House"],
    bio: "Carl Cox je britský DJ a producent, který je legendou taneční scény. Začínal v éře acid house a stal se jednou z nejvlivnějších postav technoscény. Jeho 15letá rezidence v klubu Space na Ibize je považována za jednu z nejúspěšnějších v historii elektronické hudby.",
    socialLinks: {
      instagram: "https://instagram.com/carlcoxofficial",
      facebook: "https://facebook.com/carlcox247",
      spotify: "https://open.spotify.com/artist/5gKGxUoWJV0WNRfYJEDYNr",
      website: "https://carlcox.com"
    },
    slug: "carl-cox"
  },
  {
    id: 6,
    name: "David Guetta",
    country: "Francie",
    countryCode: "fr",
    image: "/hero.jpg",
    genres: ["EDM", "House", "Pop"],
    bio: "David Guetta je francouzský DJ a producent, který se stal jedním z nejúspěšnějších umělců v historii elektronické hudby. Jeho schopnost propojit taneční hudbu s popem mu přinesla celosvětovou slávu. Spolupracoval s umělci jako Sia, Nicki Minaj, či Black Eyed Peas a jeho hity jako 'Titanium' a 'When Love Takes Over' se staly globálními fenomémy.",
    socialLinks: {
      instagram: "https://instagram.com/davidguetta",
      facebook: "https://facebook.com/davidguetta",
      spotify: "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai",
      website: "https://davidguetta.com"
    },
    slug: "david-guetta"
  },
  {
    id: 7,
    name: "Peggy Gou",
    country: "Jižní Korea",
    countryCode: "kr",
    image: "/hero.jpg",
    genres: ["House", "Techno", "Electro"],
    bio: "Peggy Gou je jihokorejská DJ a producentka, která se v posledních letech stala jednou z nejvýraznějších osobností elektronické scény. Její eklektický styl kombinující house, techno a electro s asijskými vlivy si získal fanoušky po celém světě. Je také módní ikonou a zakladatelkou vlastního labelu Gudu Records.",
    socialLinks: {
      instagram: "https://instagram.com/peggygou_",
      facebook: "https://facebook.com/peggygousidemuse",
      spotify: "https://open.spotify.com/artist/3HCpwNmFp2rvjkdjTs4uxs",
      website: "https://peggygou.com"
    },
    slug: "peggy-gou"
  },
  {
    id: 8,
    name: "Amelie Lens",
    country: "Belgie",
    countryCode: "be",
    image: "/hero.jpg",
    genres: ["Techno", "Hard Techno", "Acid"],
    bio: "Amelie Lens je belgická DJ a producentka, která se za posledních několik let stala jednou z vůdčích osobností globální techno scény. Její energetické DJ sety a skladby se staly synonymem pro moderní, drsné a hypnotické techno. Je zakladatelkou labelu LENSKE a pravidelně vystupuje na největších festivalech a v nejprestižnějších klubech po celém světě.",
    socialLinks: {
      instagram: "https://instagram.com/amelie_lens",
      facebook: "https://facebook.com/amelielensofficial",
      spotify: "https://open.spotify.com/artist/1EKA5365p1yYeAJD6xg0Cy",
      website: "https://amelielens.com"
    },
    slug: "amelie-lens"
  }
];

// Data pro filtrování podle zemí
const countries = [
  { id: "nl", name: "Nizozemsko", flag: "🇳🇱", count: 38 },
  { id: "be", name: "Belgie", flag: "🇧🇪", count: 21 },
  { id: "de", name: "Německo", flag: "🇩🇪", count: 45 },
  { id: "us", name: "USA", flag: "🇺🇸", count: 76 },
  { id: "uk", name: "Velká Británie", flag: "🇬🇧", count: 52 },
  { id: "se", name: "Švédsko", flag: "🇸🇪", count: 29 },
  { id: "fr", name: "Francie", flag: "🇫🇷", count: 31 },
  { id: "cz", name: "Česká republika", flag: "🇨🇿", count: 18 },
  { id: "ru", name: "Rusko", flag: "��🇺", count: 23 },
  { id: "kr", name: "Jižní Korea", flag: "🇰🇷", count: 8 },
];

// Data pro filtrování podle žánrů
const genres = [
  { id: "techno", name: "Techno", count: 145 },
  { id: "house", name: "House", count: 178 },
  { id: "trance", name: "Trance", count: 89 },
  { id: "drum-and-bass", name: "Drum and Bass", count: 67 },
  { id: "dubstep", name: "Dubstep", count: 54 },
  { id: "progressive", name: "Progressive", count: 92 },
  { id: "edm", name: "EDM", count: 103 },
  { id: "hardstyle", name: "Hardstyle", count: 41 },
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

export default function DJs() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Objevte svět DJs</h1>
            <p className={styles.heroSubtitle}>Profily nejlepších světových producentů a DJs elektronické hudby</p>
          </div>
          <AnimatedBackground />
        </section>
        
        <section className={styles.filterSection}>
          <div className={styles.container}>
            <div className={styles.filterWrapper}>
              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Země</h3>
                <div className={styles.filterOptions}>
                  {countries.map(country => (
                    <button key={country.id} className={styles.filterButton}>
                      <span className={styles.countryFlag}>{country.flag}</span>
                      {country.name}
                      <span className={styles.countBadge}>{country.count}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Žánry</h3>
                <div className={styles.filterOptions}>
                  {genres.map(genre => (
                    <button key={genre.id} className={styles.filterButton}>
                      {genre.name}
                      <span className={styles.countBadge}>{genre.count}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className={styles.searchContainer}>
                <input type="text" placeholder="Hledat DJs..." className={styles.searchInput} />
                <button className={styles.searchButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className={styles.djsGrid}>
              {djs.map((dj) => (
                <article key={dj.id} className={styles.djCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={dj.image}
                      alt={dj.name}
                      width={400}
                      height={500}
                      className={styles.image}
                    />
                    <div className={styles.countryBadge}>
                      <span className={styles.flag}>{countries.find(c => c.id === dj.countryCode)?.flag}</span>
                      {dj.country}
                    </div>
                  </div>
                  <div className={styles.content}>
                    <h2 className={styles.djName}>
                      <Link href={`/djs/${dj.slug}`} className={styles.djLink}>
                        {dj.name}
                      </Link>
                    </h2>
                    <div className={styles.genres}>
                      {dj.genres.map((genre, index) => (
                        <span key={index} className={styles.genreTag}>{genre}</span>
                      ))}
                    </div>
                    <p className={styles.bioBrief}>{dj.bio.substring(0, 150)}...</p>
                    <div className={styles.socialLinks}>
                      <a href={dj.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href={dj.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href={dj.socialLinks.spotify} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14.5c2.5-1 5.5-1 8 0"></path>
                          <path d="M6.5 12c3.5-1 7.5-1 11 0"></path>
                          <path d="M5 9.5c4.5-1 9.5-1 14 0"></path>
                        </svg>
                      </a>
                    </div>
                    <Link href={`/djs/${dj.slug}`} className={styles.profileLink}>
                      Zobrazit profil
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
                        className={styles.arrowIcon}
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className={styles.pagination}>
              <button className={`${styles.pageButton} ${styles.active}`}>1</button>
              <button className={styles.pageButton}>2</button>
              <button className={styles.pageButton}>3</button>
              <button className={styles.pageButton}>
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
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
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