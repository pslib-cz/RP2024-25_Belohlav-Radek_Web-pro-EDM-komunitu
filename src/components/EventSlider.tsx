"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EventsSlider.module.css';

interface Event {
  id: number;
  title: string;
  subtitle?: string;
  dates: string;
  location: string;
  image: string;
  infoLink: string;
  ticketsLink?: string;
}

interface EventsSliderProps {
  title: string;
  events: Event[];
}

export const EventsSlider: React.FC<EventsSliderProps> = ({ title, events }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      setCanScrollLeft(sliderRef.current.scrollLeft > 0);
      setCanScrollRight(
        sliderRef.current.scrollLeft < 
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
      );
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 500);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 500);
    }
  };

  return (
    <section className={`${styles.eventsSection} sectionBackground`}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>{title}</h2>
          
          <div className={styles.controls}>
            <button 
              className={`${styles.navButton} ${!canScrollLeft ? styles.disabled : ''}`}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Předchozí události"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button 
              className={`${styles.navButton} ${!canScrollRight ? styles.disabled : ''}`}
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Další události"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
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
            
            <Link href="/calendar" className={styles.calendarButton}>
              CALENDAR
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
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className={styles.sliderContainer}>
          <div 
            className={styles.eventsSlider} 
            ref={sliderRef}
            onScroll={checkScrollButtons}
          >
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
                </div>
                
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  {event.subtitle && <h4 className={styles.eventSubtitle}>{event.subtitle}</h4>}
                  
                  <div className={styles.eventDetails}>
                    <div className={styles.eventDetail}>
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
                        className={styles.detailIcon}
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{event.dates}</span>
                    </div>
                    
                    <div className={styles.eventDetail}>
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
                        className={styles.detailIcon}
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className={styles.eventActions}>
                    <Link href={event.infoLink} className={styles.infoButton}>
                      INFO
                    </Link>
                    
                    {event.ticketsLink && (
                      <Link href={event.ticketsLink} className={styles.ticketsButton}>
                        TICKETS
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};