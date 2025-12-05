import React, { useRef, useEffect } from 'react';

const colorSchemes = [
  ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
  ['#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'],
  ['#ff3838', '#ff9500', '#ffdd59', '#32ff7e', '#7efff5'],
  ['#fd79a8', '#fdcb6e', '#6c5ce7', '#74b9ff', '#00b894'],
  ['#ff7675', '#fd79a8', '#fdcb6e', '#00b894', '#74b9ff']
];

const ParticleGalaxy = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const sparkles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const currentColorScheme = useRef(0);
  const speedMultiplier = useRef(1);
  const connectionDistance = 120;

  const resizeCanvas = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const getRandomColor = () => {
    const colors = colorSchemes[currentColorScheme.current];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const createParticles = (canvas) => {
    const count = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));
    particles.current = Array.from({ length: count }, () => {
      const vx = (Math.random() - 0.5) * 2;
      const vy = (Math.random() - 0.5) * 2;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx,
        vy,
        size: Math.random() * 3 + 1,
        color: getRandomColor(),
        opacity: Math.random() * 0.8 + 0.2,
        originalVx: vx,
        originalVy: vy,
        pulse: Math.random() * Math.PI * 2
      };
    });
  };

  const drawParticles = (ctx) => {
    particles.current.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.currentSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  };

  const drawConnections = (ctx) => {
    const len = particles.current.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const a = particles.current[i];
        const b = particles.current[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDistance) {
          const opacity = (connectionDistance - dist) / connectionDistance * 0.3;
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = a.color;
          ctx.shadowBlur = 5;
          ctx.shadowColor = a.color;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  };

  const drawMouseEffect = (ctx) => {
    if (mouse.current.x === -1000) return;
    const gradient = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 100);
    gradient.addColorStop(0, 'rgba(255,255,255,0.1)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(mouse.current.x, mouse.current.y, 100, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const updateParticles = (canvas) => {
    particles.current.forEach(p => {
      const dx = mouse.current.x - p.x;
      const dy = mouse.current.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 150;

      if (dist < maxDist) {
        const force = (maxDist - dist) / maxDist;
        const angle = Math.atan2(dy, dx);
        p.vx -= Math.cos(angle) * force * 0.5;
        p.vy -= Math.sin(angle) * force * 0.5;
      } else {
        p.vx += (p.originalVx - p.vx) * 0.02;
        p.vy += (p.originalVy - p.vy) * 0.02;
      }

      p.x += p.vx * speedMultiplier.current;
      p.y += p.vy * speedMultiplier.current;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      p.pulse += 0.02;
      p.currentSize = p.size + Math.sin(p.pulse) * 0.5;
    });
  };

  const updateSparkles = (ctx, canvas) => {
    sparkles.current = sparkles.current.filter(s => {
      s.opacity -= s.decay;
      if (s.opacity > 0) {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = '#fff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return true;
      }
      return false;
    });

    if (sparkles.current.length < 20) {
      sparkles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        opacity: 1,
        decay: Math.random() * 0.02 + 0.01
      });
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles(canvas);
      drawConnections(ctx);
      drawParticles(ctx);
      drawMouseEffect(ctx);
      updateSparkles(ctx, canvas);
      requestAnimationFrame(loop);
    };
    loop();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);
    createParticles(canvas);
    animate();

    const handleResize = () => {
      resizeCanvas(canvas);
      createParticles(canvas);
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouse.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas id="particleCanvas" ref={canvasRef} className="w-full h-full fixed top-0 left-0 z-[-1]" />;
};

export default ParticleGalaxy;
