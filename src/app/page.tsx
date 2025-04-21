import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { NewsSection } from '../components/NewsSection';
import { DjsSection } from '../components/DjSection';
import { FeaturedEvent } from '../components/FeaturedEvent';
import { EventsSlider } from '../components/EventSlider';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import React from 'react';

// Mock data pro novinky
const news = [
  {
    id: 1,
    title: "David Guetta oznámil nové evropské turné pro rok 2025",
    excerpt: "Světoznámý DJ David Guetta představil plány na rozsáhlé evropské turné, které se uskuteční v létě 2025 a zahrne i zastávku v České republice.",
    image: "/hero.jpg",
    date: "15. 4. 2025",
    category: "Turné",
    slug: "david-guetta-evropske-turne-2025"
  },
  {
    id: 2,
    title: "Armin van Buuren vydává nové album 'Intensity'",
    excerpt: "Legendární trance producent přichází s novým albem plným energických tracků, které posouvají hranice žánru. Album vyjde na všech streamovacích platformách příští měsíc.",
    image: "/hero.jpg",
    date: "10. 4. 2025",
    category: "Nová hudba",
    slug: "armin-van-buuren-nove-album-intensity"
  },
  {
    id: 3,
    title: "Tomorrowland odhalil první hvězdy pro letní festival",
    excerpt: "Jeden z největších EDM festivalů světa začíná odhalovat svůj lineup pro rok 2025. Mezi potvrzenými jmény nechybí Martin Garrix, Charlotte de Witte a další.",
    image: "/hero.jpg",
    date: "8. 4. 2025",
    category: "Festivaly",
    slug: "tomorrowland-prvni-hvezdy-2025"
  }
];

// Banner pro reklamu
const banner = {
  title: "Propagujte svoji událost",
  description: "Hledáte způsob, jak oslovit fanoušky elektronické hudby? Nabízíme reklamní prostor pro vaše eventy, kluby nebo značky.",
  buttonText: "Zjistit více",
  buttonLink: "/reklama"
};

// Mock data pro země a DJs
const countries = [
  { id: "nl", name: "Nizozemsko", flag: "🇳🇱", count: 38 },
  { id: "be", name: "Belgie", flag: "🇧🇪", count: 21 },
  { id: "de", name: "Německo", flag: "🇩🇪", count: 45 },
  { id: "us", name: "USA", flag: "🇺🇸", count: 76 },
  { id: "uk", name: "Velká Británie", flag: "🇬🇧", count: 52 },
  { id: "se", name: "Švédsko", flag: "🇸🇪", count: 29 },
  { id: "fr", name: "Francie", flag: "🇫🇷", count: 31 },
  { id: "cz", name: "Česká republika", flag: "🇨🇿", count: 18 }
];

// Mock data pro events - upravené události pro swiper
const upcomingEvents = [
  {
    id: 1,
    title: "TOMORROWLAND",
    subtitle: "BELGIUM",
    dates: "July 18-20 & July 25-27, 2025",
    location: "Boom, Belgium",
    image: "/hero.jpg",
    infoLink: "/events/tomorrowland-belgium",
    ticketsLink: ""
  },
  {
    id: 2,
    title: "LOVE TOMORROW",
    subtitle: "SUMMIT",
    dates: "July 24, 2025",
    location: "Boom, Belgium",
    image: "/hero.jpg",
    infoLink: "/events/love-tomorrow",
    ticketsLink: "/tickets/love-tomorrow"
  },
  {
    id: 3,
    title: "TOMORROWLAND X",
    subtitle: "INSOMNIA: UNITY",
    dates: "August 29-30-31 September 19-20-26-27 October 17-18, 2025",
    location: "Sphere, Las Vegas, USA",
    image: "/hero.jpg",
    infoLink: "/events/tomorrowland-unity",
    ticketsLink: "/tickets/tomorrowland-unity"
  },
  {
    id: 4,
    title: "TOMORROWLAND",
    subtitle: "BRASIL",
    dates: "October 10-12, 2025",
    location: "Itu (São Paulo), Brazil",
    image: "/hero.jpg",
    infoLink: "/events/tomorrowland-brasil",
    ticketsLink: "/tickets/tomorrowland-brasil"
  },
  {
    id: 5,
    title: "CORE",
    subtitle: "TULUM",
    dates: "January 10-12, 2026",
    location: "Tulum, Mexico",
    image: "/hero.jpg",
    infoLink: "/events/core-tulum",
    ticketsLink: "/tickets/core-tulum"
  }
];

// Data pro newsletter
const newsletter = {
  title: "Buďte v obraze",
  subtitle: "EDM Newsletter",
  description: "Přihlaste se k odběru našeho newsletteru a získejte přístup k exkluzivním informacím o nadcházejících festivalech, novinkách od vašich oblíbených DJs a speciálním nabídkám na vstupenky.",
  buttonText: "Přihlásit se"
};

// Social links s ikonami
const FacebookIcon = () => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
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
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
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
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const YouTubeIcon = () => (
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
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const socialLinks = [
  {
    platform: 'Facebook',
    href: 'https://facebook.com',
    icon: <FacebookIcon />,
  },
  {
    platform: 'Instagram',
    href: 'https://instagram.com',
    icon: <InstagramIcon />,
  },
  {
    platform: 'Twitter',
    href: 'https://twitter.com',
    icon: <TwitterIcon />,
  },
  {
    platform: 'YouTube',
    href: 'https://youtube.com',
    icon: <YouTubeIcon />,
  },
];

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

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection
          title="The WorldWide Ticket Sale for<br>EDM World Festival is now open"
          subtitle="Prepare for the most magical festival experience of 2025!"
          buttonText="TICKETS"
          buttonLink="/tickets"
          imageSrc="/hero.jpg"
        />
  <EventsSlider 
          title="Upcoming Festivals & Events" 
          events={upcomingEvents}
        />
        
      

        <DjsSection 
          title="DJs podle zemí" 
          subtitle="Prozkoumejte talenty elektronické hudby z celého světa"
          countries={countries} 
        />

        <FeaturedEvent
          title="Transmission Festival 2025"
          date="18. 10. 2025"
          location="O2 arena, Praha"
          description="Největší trance událost roku přichází zpět do Prahy! Transmission Festival přináší ohromující laser show, pyrotechnické efekty a světová jména trance scény. Připravte se na nezapomenutelný hudební zážitek v unikátní atmosféře pražské O2 areny."
          image="/hero.jpg"
          artists={["Armin van Buuren", "Paul van Dyk", "Aly & Fila", "Ferry Corsten", "Markus Schulz"]}
          ticketLink="https://www.transmission.events/tickets"
          infoLink="/events/transmission-2025"
        />
        
        <NewsSection 
          title="Nejnovější zprávy" 
          news={news} 
          banner={banner} 
        />
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
