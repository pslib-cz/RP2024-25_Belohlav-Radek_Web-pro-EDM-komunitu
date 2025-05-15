import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedEvent.module.css';

interface FeaturedEventProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  artists: string[];
  ticketLink: string;
  infoLink: string;
}

export const FeaturedEvent: React.FC<FeaturedEventProps> = ({
  title,
  date,
  location,
  description,
  image,
  artists,
  ticketLink,
  infoLink,
}) => {
  const sectionClasses = `${styles.featuredEvent} sectionBackground`;

  return (
    <section className={sectionClasses}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Vybraná událost</h2>
        
        <div className={styles.eventCard}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBorder}>
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            
            <div className={styles.dateTag}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={styles.calendarIcon}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{date}</span>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className={styles.content}>
            <div className={styles.tags}>
              <span className={styles.tag}>FEATURED</span>
              <span className={styles.locationTag}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {location}
              </span>
            </div>
            
            <h3 className={styles.title}>{title}</h3>
            
            <p className={styles.description}>{description}</p>
            
            <div className={styles.artistsContainer}>
              <h4 className={styles.artistsTitle}>Vystupující:</h4>
              <div className={styles.artists}>
                {artists.map((artist, index) => (
                  <span key={index} className={styles.artist}>
                    {artist}{index < artists.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={styles.actions}>
              <a href={ticketLink} className={styles.ticketsButton}>
                Vstupenky
              </a>
              <Link href={infoLink} className={styles.moreInfoButton}>
                Více informací
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
