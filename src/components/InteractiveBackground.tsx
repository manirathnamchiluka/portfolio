import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Star {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  colorType: 'cyan' | 'blue' | 'neutral';
  pulseSpeed: number;
  pulseOffset: number;
}

interface ClickRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

const InteractiveBackground: React.FC = () => {
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({
    x: -2000,
    y: -2000,
    radius: 175, // Enhanced repulsion radius
    active: false,
  });

  const starsRef = useRef<Star[]>([]);
  const ripplesRef = useRef<ClickRipple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -2000;
      mouseRef.current.y = -2000;
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.x = -2000;
      mouseRef.current.y = -2000;
      mouseRef.current.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 220,
        alpha: 0.6,
      });
      if (ripplesRef.current.length > 5) ripplesRef.current.shift();
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const stars: Star[] = [];
      // Richer dust density: ~260 particles on desktop
      const starDensity = Math.min(280, Math.max(140, Math.floor((canvas.width * canvas.height) / 5000)));

      for (let i = 0; i < starDensity; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const typeRoll = Math.random();
        
        stars.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.35, // Smooth organic drift
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 2.6 + 0.7,
          baseAlpha: Math.random() * 0.5 + 0.3,
          colorType: typeRoll < 0.5 ? 'cyan' : typeRoll < 0.8 ? 'blue' : 'neutral',
          pulseSpeed: Math.random() * 1.8 + 0.8,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousedown', handleClick);

    resizeCanvas();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = themeRef.current === 'dark';
      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;
      const stars = starsRef.current;

      // 1. Render Interactive Click Energy Ripples
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 5.5;
        r.alpha *= 0.95;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(34, 211, 238, ${r.alpha * 0.75})`
          : `rgba(2, 132, 199, ${r.alpha * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (r.alpha < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // 2. Dynamic Constellation Mesh Lines
      const CONNECT_DIST = 105;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const s1 = stars[i];
          const s2 = stars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const lineAlpha = (1 - dist / CONNECT_DIST) * (isDark ? 0.16 : 0.11);
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = isDark
              ? `rgba(34, 211, 238, ${lineAlpha})`
              : `rgba(2, 132, 199, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      // 3. Update & Draw Dust Particles
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Organic slow ambient float
        star.originX += star.vx;
        star.originY += star.vy;

        // Wrap viewport edges
        if (star.originX < 0) star.originX = canvas.width;
        if (star.originX > canvas.width) star.originX = 0;
        if (star.originY < 0) star.originY = canvas.height;
        if (star.originY > canvas.height) star.originY = 0;

        // Mouse Repulsion & Ripple Displacement
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let pushX = 0;
        let pushY = 0;

        // Cursor Repulsion
        if (dist < mouse.radius && mouse.active) {
          const force = (1 - dist / mouse.radius) * 8.5;
          const angle = Math.atan2(dy, dx);
          pushX += Math.cos(angle) * force;
          pushY += Math.sin(angle) * force;
        }

        // Ripple Displacement
        for (let j = 0; j < ripples.length; j++) {
          const rip = ripples[j];
          const rdx = star.x - rip.x;
          const rdy = star.y - rip.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          const rippleRingDist = Math.abs(rdist - rip.radius);

          if (rippleRingDist < 30) {
            const waveForce = (1 - rippleRingDist / 30) * rip.alpha * 6;
            const waveAngle = Math.atan2(rdy, rdx);
            pushX += Math.cos(waveAngle) * waveForce;
            pushY += Math.sin(waveAngle) * waveForce;
          }
        }

        if (pushX !== 0 || pushY !== 0) {
          star.x += pushX;
          star.y += pushY;
        } else {
          // Smooth return spring
          star.x += (star.originX - star.x) * 0.055;
          star.y += (star.originY - star.y) * 0.055;
        }

        // Periodic Shimmer & Twinkle
        const pulse = Math.sin(time * star.pulseSpeed + star.pulseOffset) * 0.22;
        const alpha = Math.max(0.1, Math.min(1, star.baseAlpha + pulse));

        // Theme-Adaptive Colors
        let fillColor: string;
        if (isDark) {
          if (star.colorType === 'cyan') {
            fillColor = `rgba(34, 211, 238, ${alpha})`;
          } else if (star.colorType === 'blue') {
            fillColor = `rgba(129, 140, 248, ${alpha * 0.95})`;
          } else {
            fillColor = `rgba(248, 250, 252, ${alpha * 0.85})`;
          }
        } else {
          if (star.colorType === 'cyan') {
            fillColor = `rgba(2, 132, 199, ${alpha * 0.85})`;
          } else if (star.colorType === 'blue') {
            fillColor = `rgba(79, 70, 229, ${alpha * 0.75})`;
          } else {
            fillColor = `rgba(51, 65, 85, ${alpha * 0.6})`;
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = fillColor;
        ctx.fill();

        // Delicate luminous halo on larger particles
        if (star.size > 2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(34, 211, 238, ${alpha * 0.18})`
            : `rgba(2, 132, 199, ${alpha * 0.12})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousedown', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
    />
  );
};

export default InteractiveBackground;
