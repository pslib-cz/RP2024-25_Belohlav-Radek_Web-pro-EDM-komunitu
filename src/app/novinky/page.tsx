import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Newsletter } from '../../components/Newsletter';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const news = [
  {
    id: 1,
    title: "David Guetta oznámil nové evropské turné pro rok 2025",
    excerpt: "Světoznámý DJ David Guetta představil plány na rozsáhlé evropské turné, které se uskuteční v létě 2025 a zahrne i zastávku v České republice.",
    content: "Světoznámý DJ a producent David Guetta dnes oznámil plány na své nadcházející evropské turné s názvem 'United World Tour 2025', které se uskuteční v létě příštího roku. Turné odstartuje v červnu 2025 v Londýně a zahrne více než 20 zemí po celé Evropě.\n\nFanoušci elektronické hudby v České republice se mohou těšit na vystoupení 15. července 2025 v O2 areně v Praze. Guetta slibuje zcela novou show s propracovanou světelnou produkcí a speciálními efekty.\n\n'Nemůžu se dočkat, až se vrátím do Prahy. Čeští fanoušci jsou neuvěřitelní a vždy cítím jejich energii. Připravuji speciální show plnou nové hudby a překvapení,' uvedl Guetta v tiskové zprávě.\n\nPředprodej vstupenek začne 1. listopadu 2024 v 10:00 prostřednictvím oficiálních prodejních kanálů. Očekává se velký zájem, proto organizátoři doporučují být připraveni na začátek předprodeje.",
    image: "/hero.jpg",
    date: "15. 4. 2025",
    category: "Turné",
    slug: "david-guetta-evropske-turne-2025"
  },
  {
    id: 2,
    title: "Armin van Buuren vydává nové album 'Intensity'",
    excerpt: "Legendární trance producent přichází s novým albem plným energických tracků, které posouvají hranice žánru. Album vyjde na všech streamovacích platformách příští měsíc.",
    content: "Legendární nizozemský DJ a producent Armin van Buuren oznámil vydání svého nového studiového alba s názvem 'Intensity'. Album, které bude již jeho osmým studiovým počinem, vyjde na všech hlavních streamovacích platformách 20. května 2025.\n\n'Intensity je album, na kterém jsem pracoval více než dva roky. Chtěl jsem vytvořit něco, co posouvá hranice trance hudby, ale zároveň zůstává věrné mým kořenům,' uvedl van Buuren v rozhovoru pro EDM World.\n\nAlbum bude obsahovat 16 skladeb, včetně již vydaných singlů 'Resurrection' a 'Ethereal Journey'. Fanoušci se mohou těšit na spolupráce s předními vokalisty a producenty, včetně Sarah Reeves, Above & Beyond a Gareth Emery.\n\nU příležitosti vydání alba Armin van Buuren také oznámil světové turné, které odstartuje v červnu 2025 a zahrne více než 40 zastávek po celém světě, včetně festivalů Tomorrowland a Ultra Music Festival.",
    image: "/hero.jpg",
    date: "10. 4. 2025",
    category: "Nová hudba",
    slug: "armin-van-buuren-nove-album-intensity"
  },
  {
    id: 3,
    title: "Tomorrowland odhalil první hvězdy pro letní festival",
    excerpt: "Jeden z největších EDM festivalů světa začíná odhalovat svůj lineup pro rok 2025. Mezi potvrzenými jmény nechybí Martin Garrix, Charlotte de Witte a další.",
    content: "Organizátoři legendárního belgického festivalu Tomorrowland začali odhalovat lineup pro nadcházející ročník, který se uskuteční ve dnech 18.-20. a 25.-27. července 2025 v Boomu. První oznámená jména naznačují, že se fanoušci elektronické hudby mohou těšit na výjimečný ročník.\n\nMezi prvními potvrzenými headlinery jsou Martin Garrix, Charlotte de Witte, Amelie Lens, Swedish House Mafia, Carl Cox a Eric Prydz. Organizátoři slibují, že celkový počet vystupujících přesáhne 400 umělců na více než 15 pódiích.\n\n'Pro rok 2025 jsme připravili zcela nový hlavní pódium s futuristickým designem, které bude nejvyšší v historii festivalu,' prozradil mluvčí festivalu. 'Téma tohoto ročníku bude \"The New Dimension\", což se odrazí ve všech aspektech festivalu.'\n\nRegistrace pro předprodej vstupenek začne 1. prosince 2024, samotný předprodej pak odstartuje 15. ledna 2025. Vzhledem k mimořádnému zájmu o minulé ročníky organizátoři doporučují zájemcům, aby se zaregistrovali co nejdříve.",
    image: "/hero.jpg",
    date: "8. 4. 2025",
    category: "Festivaly",
    slug: "tomorrowland-prvni-hvezdy-2025"
  },
  {
    id: 4,
    title: "Prague Electronic Festival oznámil datum pro rok 2025",
    excerpt: "Největší český festival elektronické hudby se v příštím roce uskuteční na novém místě s vylepšenou produkcí a mezinárodním line-upem.",
    content: "Organizátoři Prague Electronic Festivalu (PEF) dnes oznámili datum a místo konání pro ročník 2025. Festival se uskuteční ve dnech 5.-7. září 2025 v nové lokalitě - v Betonárce Praha, která nabídne více prostoru pro rozšířenou produkci.\n\n'Po úspěšném ročníku 2024 jsme se rozhodli festival posunout na další úroveň. Nová lokace nám umožní vybudovat větší pódia, lepší zázemí pro návštěvníky a celkově zvýšit kapacitu festivalu,' uvedl Petr Novák, ředitel festivalu.\n\nOrganizátoři prozatím neodhalili žádná jména z připravovaného line-upu, ale slibují, že PEF 2025 nabídne kombinaci světových hvězd a lokálních talentů ze všech žánrů elektronické hudby. Festival bude rozdělen do pěti hudebních zón, každá zaměřená na jiný styl - od house a techno až po drum and bass a trance.\n\nVstupenky na PEF 2025 budou v prodeji od 1. prosince 2024, přičemž omezený počet Early Bird vstupenek bude k dispozici za zvýhodněnou cenu.",
    image: "/hero.jpg",
    date: "5. 4. 2025",
    category: "Festivaly",
    slug: "prague-electronic-festival-2025"
  },
  {
    id: 5,
    title: "Hardwell oznamuje návrat na pódia po dvouletém odpočinku",
    excerpt: "Nizozemský DJ a producent ukončuje svou druhou přestávku v kariéře a připravuje světové turné včetně zastávky v Praze.",
    content: "Nizozemská EDM superstar Hardwell (Robbert van de Corput) oznámil svůj návrat na hudební scénu po dvouletém odpočinku. DJ a producent, který přerušil svou kariéru v roce 2023, aby se soustředil na osobní život a zdraví, se vrací s novým světovým turné a připravovaným albem.\n\n'Čas strávený mimo pódia mi dal příležitost přehodnotit svůj kreativní směr a najít novou inspiraci,' uvedl Hardwell v prohlášení na sociálních sítích. 'Nemůžu se dočkat, až se svými fanoušky budu sdílet novou hudbu a energii.'\n\nSoučástí jeho comebackového turné 'Rebels Never Die 2025' bude i zastávka v pražské O2 areně 12. listopadu 2025. Předprodej vstupenek začne 15. května 2024.\n\nPodrobnosti o novém albu zatím zůstávají tajemstvím, Hardwell pouze naznačil, že půjde o 'dospělejší zvuk s prvky techna a progressivního house'.",
    image: "/hero.jpg",
    date: "1. 4. 2025",
    category: "Turné",
    slug: "hardwell-navrat-na-podia"
  },
  {
    id: 6,
    title: "Ultra Music Festival 2025 vyprodán za rekordních 10 minut",
    excerpt: "Vstupenky na příští ročník slavného miamského festivalu se vyprodaly v rekordním čase i přes navýšení kapacity.",
    content: "Organizátoři Ultra Music Festivalu oznámili, že vstupenky na ročník 2025 byly vyprodány za pouhých 10 minut od zahájení prodeje, což představuje nový rekord v historii festivalu. Přestože byla kapacita akce oproti minulému roku navýšena o 15 %, poptávka dalece převýšila nabídku.\n\n'Jsme ohromeni vášní a oddaností naší globální komunity fanoušků,' uvedl Russell Faibisch, zakladatel a výkonný ředitel Ultra Music Festivalu. 'Jejich neuvěřitelná podpora nás zavazuje připravit nejlepší ročník v historii.'\n\nUltra Music Festival 2025 se uskuteční ve dnech 28.-30. března v Bayfront Parku v Miami. Organizátoři zatím neodhalili lineup, ale slíbili, že bude obsahovat exkluzivní vystoupení a premiéry od největších jmen elektronické hudby.\n\nPro ty, kteří neměli štěstí získat vstupenky v řádném prodeji, organizátoři připravují oficiální sekundární prodejní platformu, která bude spuštěna v lednu 2025, aby se zabránilo přemrštěným cenám na neoficiálních prodejních kanálech.",
    image: "/hero.jpg",
    date: "29. 3. 2025",
    category: "Festivaly",
    slug: "ultra-music-festival-vyprodano"
  }
];

const newsletter = {
  title: "Buďte v obraze",
  subtitle: "EDM Newsletter",
  description: "Přihlaste se k odběru našeho newsletteru a získejte přístup k exkluzivním informacím o nadcházejících festivalech, novinkách od vašich oblíbených DJs a speciálním nabídkám na vstupenky.",
  buttonText: "Přihlásit se"
};

const footerLinks = {
  main: [
    { label: 'Novinky', href: '/novinky' },
    { label: 'DJs', href: '/djs' },
    { label: 'Events', href: '/events' },
    { label: 'Kontakt', href: '/kontakt' },
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

export default function Novinky() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Novinky ze světa elektronické hudby</h1>
            <p className={styles.heroSubtitle}>Nejnovější informace o festivalech, releasech a umělcích</p>
          </div>
        </section>
        
        <section className={styles.newsSection}>
          <div className={styles.container}>
            <div className={styles.categories}>
              <button className={`${styles.categoryButton} ${styles.active}`}>Vše</button>
              <button className={styles.categoryButton}>Festivaly</button>
              <button className={styles.categoryButton}>Nová hudba</button>
              <button className={styles.categoryButton}>Turné</button>
              <button className={styles.categoryButton}>Rozhovory</button>
            </div>
            
            <div className={styles.newsGrid}>
              {news.map((item) => (
                <article key={item.id} className={styles.newsCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className={styles.image}
                    />
                    <div className={styles.category}>{item.category}</div>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.date}>{item.date}</div>
                    <h2 className={styles.newsTitle}>
                      <Link href={`/novinky/${item.slug}`} className={styles.titleLink}>
                        {item.title}
                      </Link>
                    </h2>
                    <p className={styles.excerpt}>{item.excerpt}</p>
                    <Link href={`/novinky/${item.slug}`} className={styles.readMore}>
                      Číst více
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
                        className={styles.readMoreIcon}
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