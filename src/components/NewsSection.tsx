import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsSection.module.css';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

interface BannerAd {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface NewsSectionProps {
  title: string;
  news: NewsItem[];
  banner?: BannerAd;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ title, news, banner }) => {
  const sectionClasses = `${styles.newsSection} sectionBackground`;

  return (
    <section className={sectionClasses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <Link href="/novinky" className={styles.viewAllLink}>
            Všechny novinky
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

        <div className={styles.newsGrid}>
          {news.map((item) => (
            <article key={item.id} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
                <div className={styles.category}>{item.category}</div>
              </div>
              <div className={styles.content}>
                <div className={styles.date}>{item.date}</div>
                <h3 className={styles.newsTitle}>
                  <Link href={`/novinky/${item.slug}`} className={styles.titleLink}>
                    {item.title}
                  </Link>
                </h3>
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

        {banner && (
          <div className={styles.bannerContainer}>
            <div className={styles.banner}>
              <div className={styles.bannerContent}>
                <h3 className={styles.bannerTitle}>{banner.title}</h3>
                <p className={styles.bannerDescription}>{banner.description}</p>
              </div>
              <Link href={banner.buttonLink} className={styles.bannerButton}>
                {banner.buttonText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
