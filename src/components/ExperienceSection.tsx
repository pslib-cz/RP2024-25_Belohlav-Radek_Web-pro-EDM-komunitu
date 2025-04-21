import React from 'react';
import Image from 'next/image';
import styles from './ExperienceSection.module.css'; // Import CSS Module

interface ExperienceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ items }) => {
  // Combine the local module class with the global background class
  const sectionClasses = `${styles.experienceSection} sectionBackground`;

  return (
    <section className={sectionClasses}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Experience
        </h2>
        <p className={styles.subtitle}>
          Enter a world of wonder, where music and magic collide to create unforgettable moments
        </p>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}> {/* Group hover handled by CSS */}
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover" // Handled by CSS, but keep for clarity
                />
                <div className={styles.imageOverlay} />
              </div>
              <h3 className={styles.itemTitle}>
                {item.title}
              </h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.discoverButtonContainer}>
          <button className={styles.discoverButton}>
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};
