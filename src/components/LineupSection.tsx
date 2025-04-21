"use client"; // Add this directive for client-side hooks

import React from 'react';
import Image from 'next/image';
import styles from './LineupSection.module.css'; // Import CSS Module

interface Artist {
  id: number;
  name: string;
  image: string;
  day: string;
  stage: string;
}

interface LineupSectionProps {
  artists: Artist[];
}

export const LineupSection: React.FC<LineupSectionProps> = ({ artists }) => {
  const days = [...new Set(artists.map((artist) => artist.day))];

  const [activeDay, setActiveDay] = React.useState(days[0]);
  const [activeStage, setActiveStage] = React.useState('all');

  const stages = ['all', ...new Set(artists.map((artist) => artist.stage))];

  const filteredArtists = artists.filter(
    (artist) => artist.day === activeDay && (activeStage === 'all' || artist.stage === activeStage)
  );

  // Combine the local module class with the global background class
  const sectionClasses = `${styles.lineupSection} sectionBackground`;

  return (
    <section className={sectionClasses}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Lineup
        </h2>

        <div className={styles.filterContainer}>
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`${styles.dayButton} ${activeDay === day ? styles.dayButtonActive : ''}`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className={styles.stageFilterContainer}>
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`${styles.stageButton} ${activeStage === stage ? styles.stageButtonActive : ''}`}
            >
              {stage === 'all' ? 'All Stages' : stage}
            </button>
          ))}
        </div>

        <div className={styles.artistGrid}>
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className={styles.artistCard} // Group hover is handled via CSS parent selector
            >
              <div className={styles.imageContainer}>
                 <Image
                  src={artist.image}
                  alt={artist.name}
                  layout="fill"
                  objectFit="cover" // Handled by CSS, but keep for clarity
                 />
              </div>
              <div className={styles.artistOverlay} />
              <div className={styles.artistInfo}>
                <h3 className={styles.artistName}>{artist.name}</h3>
                <p className={styles.artistStage}>{artist.stage}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.fullLineupButtonContainer}>
          <button className={styles.fullLineupButton}>
            Full Lineup
          </button>
        </div>
      </div>
    </section>
  );
};
