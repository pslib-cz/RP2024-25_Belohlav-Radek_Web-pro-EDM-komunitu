"use client"; // Add this directive for client-side hooks

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css'; // Import CSS Module

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GallerySectionProps {
  images: GalleryImage[];
  title: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images, title }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setActiveImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Combine the local module class with the global background class
  const sectionClasses = `${styles.gallerySection} sectionBackground`;

  return (
    <section className={sectionClasses}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.grid}>
          {images.map((image) => (
            <div
              key={image.id}
              className={styles.imageWrapper} // Group hover handled by CSS
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover" // Handled by CSS, but keep for clarity
              />
              <div className={styles.imageOverlay}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.zoomIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllButtonContainer}>
          <button className={styles.viewAllButton}>
            View All
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && activeImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
        >
          <button
            className={styles.lightboxCloseButton}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.lightboxCloseIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Clicks inside this div won't close the lightbox */}
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              layout="responsive" // Use responsive layout
              objectFit="contain" // Ensure image fits within bounds
            />
          </div>
        </div>
      )}
    </section>
  );
};
