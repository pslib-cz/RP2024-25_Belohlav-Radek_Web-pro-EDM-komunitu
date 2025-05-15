"use client"; // Required for Swiper hooks

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules'; // Import necessary modules
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './EventsSection.module.css';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  slug: string;
  infoLink?: string; // Added optional info link
  ticketLink?: string; // Added optional ticket link
}

interface Newsletter {
  title: string;
  description: string;
  buttonText: string;
}

interface EventsSectionProps {
  title: string;
  events: Event[];
  newsletter?: Newsletter;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ 
  title, 
  events,
  newsletter 
}) => {
  const sectionClasses = `${styles.eventsSection} sectionBackground`;
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={sectionClasses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <Link href="/events" className={styles.viewAllLink}>
            Všechny události
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

        <div 
          className={`${styles.navArrow} ${styles.navArrowPrev}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={styles.navArrowIcon}
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        
        <div 
          className={`${styles.navArrow} ${styles.navArrowNext}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={styles.navArrowIcon}
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]} // Add modules
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default slides per view
          navigation={false} // Disable default navigation arrows
          pagination={{ clickable: true }} // Enable clickable pagination dots
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
             1280: {
               slidesPerView: 4,
               spaceBetween: 30,
             },
          }}
          className={styles.swiperContainer} // Add a class for potential custom styling
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className={styles.swiperSlide}>              <div className={styles.eventCard}> 
                <div className={styles.imageContainer}>
                {event.infoLink ? (
                  <Link href={event.infoLink} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer"> 
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={600}
                        height={400}
                        className={styles.image}
                      />
                    </a>
                  </Link>
                ) : (
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                )}
                <div className={styles.overlay} />
              </div>
              <div className={styles.eventContent}>
                {event.infoLink ? (
                   <Link href={event.infoLink} passHref legacyBehavior>
                     <a target="_blank" rel="noopener noreferrer" className={styles.eventTitleLink}>
                       <h3 className={styles.eventTitle}>{event.title}</h3>
                     </a>
                   </Link>
                ) : (
                   <h3 className={styles.eventTitle}>{event.title}</h3>
                )}
                 <div className={styles.eventDetail}> {/* Wrap date and location */}
                   <span className={styles.date}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                     {event.date}
                   </span>
                   <div className={styles.location}>
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
                       className={styles.locationIcon}
                     >
                       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                       <circle cx="12" cy="10" r="3"></circle>
                     </svg>
                     <span>{event.location}</span>
                   </div>
                 </div>
                 <div className={styles.buttonContainer}>
                   {event.infoLink && (
                     <Link href={event.infoLink} passHref legacyBehavior>
                       <a className={`${styles.eventButton} ${styles.infoButton}`} target="_blank" rel="noopener noreferrer">INFO</a>
                     </Link>
                   )}
                   {event.ticketLink && (
                     <Link href={event.ticketLink} passHref legacyBehavior>
                       <a className={`${styles.eventButton} ${styles.ticketButton}`} target="_blank" rel="noopener noreferrer">TICKETS</a>
                     </Link>
                   )}
                 </div>
                </div>
              </div> 
            </SwiperSlide>
          ))}
        </Swiper>

        {newsletter && (
          <div className={styles.newsletterContainer}>
            <div className={styles.newsletter}>
              <h3 className={styles.newsletterTitle}>{newsletter.title}</h3>
              <p className={styles.newsletterDescription}>{newsletter.description}</p>
              
              <form className={styles.newsletterForm}>
                <div className={styles.inputWrapper}>
                  <input 
                    type="email" 
                    placeholder="Váš e-mail" 
                    className={styles.emailInput} 
                    required 
                  />
                  <button type="submit" className={styles.submitButton}>
                    {newsletter.buttonText}
                  </button>
                </div>
                <label className={styles.consentLabel}>
                  <input type="checkbox" className={styles.consentCheckbox} required />
                  <span>Souhlasím se zpracováním osobních údajů pro marketingové účely</span>
                </label>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
