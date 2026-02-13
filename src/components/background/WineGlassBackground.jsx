import React, { useEffect, useRef, useState } from 'react';

const WineGlassBackground = ({children}) => {
  const canvasRef = useRef(null);
  const glassesRef = useRef([]);
  const animationRef = useRef(null);

  // Configuration
  const NUM_GLASSES = 12;
  const GLASS_SIZE = 40;
  const COLORS = {
    yellow: '#FCD34D',
    blue: '#3B82F6',
    darkBlue: '#1E3A8A'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size to viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize wine glasses
    const initGlasses = () => {
      glassesRef.current = [];
      const colorArray = [COLORS.yellow, COLORS.blue, COLORS.darkBlue];
      
      for (let i = 0; i < NUM_GLASSES; i++) {
        glassesRef.current.push({
          x: Math.random() * (canvas.width - GLASS_SIZE),
          y: Math.random() * (canvas.height - GLASS_SIZE),
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          color: colorArray[i % colorArray.length],
          radius: GLASS_SIZE / 2
        });
      }
    };
    initGlasses();

    // Draw wine glass shape
    const drawWineGlass = (ctx, x, y, color) => {
      ctx.save();
      ctx.translate(x, y);
      
      // Glass bowl (coupe)
      ctx.fillStyle = color + '40'; // Semi-transparent
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.ellipse(0, -5, 15, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Wine in glass
      ctx.fillStyle = color + '80';
      ctx.beginPath();
      ctx.ellipse(0, 0, 12, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Stem
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 13);
      ctx.lineTo(0, 25);
      ctx.stroke();
      
      // Base
      ctx.beginPath();
      ctx.moveTo(-8, 25);
      ctx.lineTo(8, 25);
      ctx.stroke();
      
      // Highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.beginPath();
      ctx.ellipse(-5, -8, 4, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Check collision between two glasses
    const checkCollision = (glass1, glass2) => {
      const dx = glass1.x - glass2.x;
      const dy = glass1.y - glass2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < glass1.radius + glass2.radius;
    };

    // Handle collision between two glasses
    const handleCollision = (glass1, glass2) => {
      const dx = glass2.x - glass1.x;
      const dy = glass2.y - glass1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Normalize collision vector
      const nx = dx / distance;
      const ny = dy / distance;
      
      // Relative velocity
      const dvx = glass1.vx - glass2.vx;
      const dvy = glass1.vy - glass2.vy;
      
      // Relative velocity in collision normal direction
      const dotProduct = dvx * nx + dvy * ny;
      
      // Update velocities (elastic collision)
      glass1.vx -= dotProduct * nx;
      glass1.vy -= dotProduct * ny;
      glass2.vx += dotProduct * nx;
      glass2.vy += dotProduct * ny;
      
      // Separate overlapping glasses
      const overlap = glass1.radius + glass2.radius - distance;
      const separationX = (overlap / 2) * nx;
      const separationY = (overlap / 2) * ny;
      
      glass1.x -= separationX;
      glass1.y -= separationY;
      glass2.x += separationX;
      glass2.y += separationY;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each glass
      glassesRef.current.forEach((glass, i) => {
        // Update position
        glass.x += glass.vx;
        glass.y += glass.vy;
        
        // Wall collision detection
        if (glass.x - glass.radius < 0 || glass.x + glass.radius > canvas.width) {
          glass.vx *= -1;
          glass.x = glass.x - glass.radius < 0 ? glass.radius : canvas.width - glass.radius;
        }
        if (glass.y - glass.radius < 0 || glass.y + glass.radius > canvas.height) {
          glass.vy *= -1;
          glass.y = glass.y - glass.radius < 0 ? glass.radius : canvas.height - glass.radius;
        }
        
        // Check collision with other glasses
        for (let j = i + 1; j < glassesRef.current.length; j++) {
          const other = glassesRef.current[j];
          if (checkCollision(glass, other)) {
            handleCollision(glass, other);
          }
        }
        
        // Draw glass
        drawWineGlass(ctx, glass.x, glass.y, glass.color);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed background canvas */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 -z-10">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />
      </div>
      
      {/* Scrollable content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default WineGlassBackground;