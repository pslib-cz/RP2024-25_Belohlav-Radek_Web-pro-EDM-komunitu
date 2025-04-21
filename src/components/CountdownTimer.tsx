"use client"; // Add this directive for client-side hooks

import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css'; // Import CSS Module

interface CountdownTimerProps {
  targetDate: Date;
  title: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, title }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className={styles.countdownSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.timerContainer}>
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className={styles.timeUnit}
            >
              <div className={styles.timeValue}>
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className={styles.timeLabel}>{unit.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.ticketsButton}>
            Buy Tickets Now
          </button>
        </div>
      </div>
    </section>
  );
};
