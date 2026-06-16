import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  z: number; // For parallax depth
}

interface DataStream {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
}

interface CursorTracker {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  active: boolean;
}

interface DigitalRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollYRef = useRef<number>(0);
  const targetScrollYRef = useRef<number>(0);
  const mouseRef = useRef<CursorTracker>({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });
  const ripplesRef = useRef<DigitalRipple[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const streamsRef = useRef<DataStream[]>([]);

  const PARTICLE_COUNT = 110;
  const STREAM_COUNT = 8;
  const CONNECTION_DISTANCE = 160;
  const GRID_SIZE = 60;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Capture user interactive triggers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current.targetX = touch.clientX;
        mouseRef.current.targetY = touch.clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        createRipple(touch.clientX, touch.clientY);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      targetScrollYRef.current = window.scrollY;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initSystem();
    };

    const initSystem = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 0.5,
        baseAlpha: Math.random() * 0.5 + 0.1,
        z: Math.random() * 1.0, // Expanded Depth factor
      }));

      streamsRef.current = Array.from({ length: STREAM_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 8 + 4,
        length: Math.random() * 150 + 80,
        opacity: Math.random() * 0.2 + 0.05,
      }));
    };

    const createRipple = (x: number, y: number) => {
      ripplesRef.current.push({
        x, y,
        radius: 0,
        maxRadius: 200,
        alpha: 0.5
      });
      if (ripplesRef.current.length > 5) ripplesRef.current.shift();
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('scroll', handleScroll, { passive: true });

    resizeCanvas();
    
    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;
      
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Render Subtle Blueprint Grid
      ctx.strokeStyle = 'rgba(8, 145, 178, 0.02)';
      ctx.lineWidth = 1;
      const gridOffset = (targetScrollYRef.current * 0.05) % GRID_SIZE;
      
      for (let x = 0; x < canvas.width; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = -gridOffset; y < canvas.height; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update Ripples
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const rip = ripplesRef.current[i];
        rip.radius += 4;
        rip.alpha *= 0.95;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(8, 145, 178, ${rip.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        if (rip.alpha < 0.01) ripplesRef.current.splice(i, 1);
      }

      // Update Particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Movement with Velocity
        p.x += p.vx * (0.5 + p.z);
        p.y += p.vy * (0.5 + p.z);

        // Apply Parallax based on Mouse and Depth (z)
        const parallaxX = (mouse.x - canvas.width / 2) * p.z * 0.08;
        const parallaxY = (mouse.y - canvas.height / 2) * p.z * 0.08;
        
        const drawX = p.x + parallaxX;
        const drawY = p.y + parallaxY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Calculate distance from mouse once per particle for performance
        const mouseDist = Math.hypot(mouse.x - drawX, mouse.y - drawY);
        const isNearMouse = mouseDist < 160;

        // Pulse particle opacity
        const pulse = Math.sin(time * 2 + i) * 0.1;
        
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(8, 145, 178, ${p.baseAlpha + pulse + (isNearMouse ? 0.3 : 0)})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2ParallaxX = (mouse.x - canvas.width / 2) * p2.z * 0.08;
          const p2ParallaxY = (mouse.y - canvas.height / 2) * p2.z * 0.08;
          
          const dx = drawX - (p2.x + p2ParallaxX);
          const dy = drawY - (p2.y + p2ParallaxY);
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(p2.x + p2ParallaxX, p2.y + p2ParallaxY);
            
            // Create "Flowing" data animation using line dashes
            ctx.setLineDash([4, 12]);
            ctx.lineDashOffset = -time * 30;
            
            const opacity = (1 - dist / CONNECTION_DISTANCE) * (isNearMouse ? 0.3 : 0.12);
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = isNearMouse ? 1 : 0.6;
            ctx.stroke();
            ctx.setLineDash([]); // Reset after each connection
          }
        }
      }

      // Render Cursor Highlight (after particles so it's on top)
      if (mouse.active) {
        ctx.fillStyle = `rgba(14, 165, 233, 0.4)`; // Intense cyan glow
        ctx.fillRect(mouse.x - 3, mouse.y - 3, 6, 6); // Small square highlight
      }

      // Update Data Streams
      const streams = streamsRef.current;
      for (const s of streams) {
        s.x -= s.speed;
        if (s.x + s.length < 0) {
          s.x = canvas.width + 50;
          s.y = Math.random() * canvas.height;
        }
        ctx.beginPath();
        const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.length, s.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, `rgba(14, 165, 233, ${s.opacity})`);
        ctx.strokeStyle = grad;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.length, s.y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default InteractiveBackground;
