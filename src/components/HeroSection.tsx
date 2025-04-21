"use client"; // Add this directive for client-side hooks

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  videoSrc?: string;
  imageSrc?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "The WorldWide Ticket Sale for<br>Tomorrowland Brasil is now open",
  subtitle = "Prepare for 'LIFE', a story set in the mythical realm of Silvyra.",
  description,
  buttonText = "TICKETS",
  buttonLink = "/tickets",
  videoSrc,
  imageSrc = "/hero.jpg",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className={styles.heroSection}>
      {videoSrc ? (
        <div className={styles.backgroundVideo}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline // Important for mobile playback
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      ) : imageSrc ? (
        <div className={styles.backgroundImageContainer}>
          <Image
            src={imageSrc}
            alt="Hero Background"
            width={1920}
            height={1080}
            priority
            className={styles.backgroundImage}
          />
        </div>
      ) : (
        <div className={styles.gradientBackground} />
      )}

      <div className={styles.overlay}>
        {/* Dekorativní prvky - napodobuje konfety a stužky z Tomorrowlandu */}
        <div className={styles.confetti}>
          <span className={`${styles.confettiPiece} ${styles.confetti1}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti2}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti3}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti4}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti5}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti6}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti7}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti8}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti9}`}></span>
          <span className={`${styles.confettiPiece} ${styles.confetti10}`}></span>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <p className={styles.subtitle}>
          {subtitle}
        </p>
        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}
        <div className={styles.buttonContainer}>
          <Link href={buttonLink} className={styles.ticketButton}>
            {buttonText}
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </div>
  );
};