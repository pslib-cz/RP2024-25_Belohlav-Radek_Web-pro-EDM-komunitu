"use client";

import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

interface AnimatedBackgroundProps {
  blurAmount?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  blurAmount = 40,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(Math.floor(window.innerWidth / 15), 100);
    
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = '';
      alpha: number = 0.3;
      
      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = this.getRandomColor();
      }
      
      getRandomColor() {
        const colors = [
          'rgba(147, 51, 234, alpha)', // Purple
          'rgba(45, 212, 191, alpha)', // Teal
          'rgba(139, 92, 246, alpha)', // Purple lighter
          'rgba(245, 208, 254, alpha)', // Pink
        ];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        return color.replace('alpha', this.alpha ? this.alpha.toString() : '0.3');
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    const init = () => {
      setCanvasDimensions();
      
      // Add gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5
      );
      
      gradient.addColorStop(0, '#1a0033'); // Deep purple
      gradient.addColorStop(0.5, '#0f001a'); // Dark purple
      gradient.addColorStop(1, '#000000'); // Black
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create particles
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 0.6 - (distance / 100);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Recreate gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5
      );
      
      gradient.addColorStop(0, '#1a0033'); // Deep purple
      gradient.addColorStop(0.5, '#0f001a'); // Dark purple
      gradient.addColorStop(1, '#000000'); // Black
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    init();
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
      setCanvasDimensions();
    });
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  // Apply blur amount via CSS custom property
  const blurStyle = {
    '--blur-amount': `${blurAmount}px`
  } as React.CSSProperties;

  return (
    <div className={styles.backgroundContainer} style={blurStyle}>
      <canvas ref={canvasRef} className={styles.backgroundCanvas}></canvas>
    </div>
  );
};