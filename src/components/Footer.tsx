import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  links: {
    main: FooterLink[];
    info: FooterLink[];
    connect: FooterLink[];
  };
  socialLinks: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ links, socialLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo, Description, Social Links */}
          <div className={styles.branding}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoText}>EDM WORLD</div>
            </Link>
            <p className={styles.description}>
              Váš průvodce světem elektronické taneční hudby. Objevujte nejlepší DJs, aktuální novinky a nadcházející akce z celého světa.
            </p>
            <div className={styles.socialLinksContainer}>
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Main Links */}
          <div>
            <h3 className={styles.columnTitle}>Navigace</h3>
            <ul className={styles.linkList}>
              {links.main.map((link) => (
                <li key={link.label} className={styles.linkItem}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information Links */}
          <div>
            <h3 className={styles.columnTitle}>Informace</h3>
            <ul className={styles.linkList}>
              {links.info.map((link) => (
                <li key={link.label} className={styles.linkItem}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect Links */}
          <div>
            <h3 className={styles.columnTitle}>Kontaktujte nás</h3>
            <ul className={styles.linkList}>
              {links.connect.map((link) => (
                <li key={link.label} className={styles.linkItem}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} EDM World. Všechna práva vyhrazena.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/ochrana-soukromi" className={styles.legalLink}>
              Ochrana soukromí
            </Link>
            <Link href="/podminky-pouziti" className={styles.legalLink}>
              Podmínky použití
            </Link>
            <Link href="/cookies" className={styles.legalLink}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};