"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './VideoSection.module.css';

interface VideoSectionProps {
  title: string;
  subtitle?: string;
  videoSrc: string;
  posterSrc?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  subtitle,
  videoSrc,
  posterSrc = "/images/video-poster.jpg",
  buttonText = "EXPLORE",
  buttonLink = "/experience",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.videoSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          
          <Link href={buttonLink} className={styles.button}>
            {buttonText}
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
              className={styles.buttonIcon}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
        
        <div className={styles.videoContainer}>
          <div className={styles.videoBorder}>
            <div className={styles.videoWrapper}>
              <video 
                ref={videoRef}
                poster={posterSrc}
                className={styles.video}
                loop
                muted
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              
              <button 
                className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
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
                    <line x1="10" y1="6" x2="10" y2="18"></line>
                    <line x1="14" y1="6" x2="14" y2="18"></line>
                  </svg>
                ) : (
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
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
              
              <div className={styles.videoOverlay}></div>
            </div>
          </div>
          
          <div className={styles.glowEffect}></div>
        </div>
      </div>
    </section>
  );
};