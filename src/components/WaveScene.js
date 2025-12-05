import React, { useRef, useEffect } from 'react';

const Wave3DCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const fov = 100;
    const dist = 100;
    const opacity = 0.5;
    const particleSize = 2;
    const maxAmplitude = 1500;
    const sideLength = 50;
    const spacing = 200;

    let rotX = 0;
    let rotY = 0;
    let counter = 0;
    const points = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Vector3(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.color = '#0D0';
    }

    Vector3.prototype.rotateX = function (angle) {
      const z = this.z * Math.cos(angle) - this.x * Math.sin(angle);
      const x = this.z * Math.sin(angle) + this.x * Math.cos(angle);
      return new Vector3(x, this.y, z);
    };

    Vector3.prototype.rotateY = function (angle) {
      const y = this.y * Math.cos(angle) - this.z * Math.sin(angle);
      const z = this.y * Math.sin(angle) + this.z * Math.cos(angle);
      return new Vector3(this.x, y, z);
    };

    Vector3.prototype.perspective = function (fov, dist) {
      const factor = fov / (dist + this.z);
      const x = this.x * factor + canvas.width / 2;
      const y = this.y * factor + canvas.height / 2;
      return new Vector3(x, y, this.z);
    };

    Vector3.prototype.draw = function () {
      const frac = this.y / maxAmplitude;
      const r = Math.floor(frac * 100);
      const g = 20;
      const b = Math.floor(255 - frac * 100);
      const vec = this.rotateX(rotX).rotateY(rotY).perspective(fov, dist);

      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(vec.x, vec.y, particleSize, particleSize);
    };

    // Create points grid
    for (let z = 0; z < sideLength; z++) {
      for (let x = 0; x < sideLength; x++) {
        const xStart = -(sideLength * spacing) / 2;
        points.push(new Vector3(xStart + x * spacing, 0, xStart + z * spacing));
      }
    }

    pointsRef.current = points;

    function loop() {
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i++) {
        const x = i % sideLength;
        const z = Math.floor(i / sideLength);
        const xFinal = Math.sin((x / sideLength) * 4 * Math.PI + counter);
        const zFinal = Math.cos((z / sideLength) * 4 * Math.PI + counter);
        const gap = maxAmplitude * 0.3;
        const amp = maxAmplitude - gap;

        points[z * sideLength + x].y = maxAmplitude + xFinal * zFinal * amp;

        points[i].draw();
      }

      counter += 0.03;
      rotX += 0.005;
      rotY += 0.005;

      animationRef.current = requestAnimationFrame(loop);
    }

    loop();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};

export default Wave3DCanvas;
