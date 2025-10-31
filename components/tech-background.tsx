"use client";

import { useEffect, useRef } from "react";

interface Doodle {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  speed: number;
  type: number;
  opacity: number;
}

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const doodles: Doodle[] = [];
    const doodleCount = 40; // Increased count

    // Initialize doodles
    for (let i = 0; i < doodleCount; i++) {
      doodles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        rotation: Math.random() * Math.PI * 2,
        scale: 0.5 + Math.random() * 0.8,
        speed: 0.15 + Math.random() * 0.3,
        type: Math.floor(Math.random() * 14), // More pattern types
        opacity: 0.4 + Math.random() * 0.4
      });
    }

    let time = 0;

    // Drawing functions for different doodle shapes
    const drawCirclePattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Simple circle with inner detail
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawSquarePattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.strokeRect(-size/2, -size/2, size, size);
      
      ctx.restore();
    };

    const drawTrianglePattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      ctx.moveTo(0, -size/2);
      ctx.lineTo(size/2, size/2);
      ctx.lineTo(-size/2, size/2);
      ctx.closePath();
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawWavePattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      for (let i = -size; i <= size; i += 5) {
        const y = Math.sin(i / 10 + time) * 8;
        if (i === -size) {
          ctx.moveTo(i, y);
        } else {
          ctx.lineTo(i, y);
        }
      }
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawStarPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const radius = i % 2 === 0 ? size : size / 2;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawHeartPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      ctx.moveTo(0, size / 4);
      ctx.bezierCurveTo(-size / 2, -size / 4, -size, size / 8, 0, size);
      ctx.moveTo(0, size / 4);
      ctx.bezierCurveTo(size / 2, -size / 4, size, size / 8, 0, size);
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawPlusPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      
      // Vertical line
      ctx.beginPath();
      ctx.moveTo(0, -size/2);
      ctx.lineTo(0, size/2);
      ctx.stroke();
      
      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(-size/2, 0);
      ctx.lineTo(size/2, 0);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawDiamondPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      ctx.moveTo(0, -size/2);
      ctx.lineTo(size/2, 0);
      ctx.lineTo(0, size/2);
      ctx.lineTo(-size/2, 0);
      ctx.closePath();
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawSpiralPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation + time * 0.5);
      
      ctx.beginPath();
      for (let i = 0; i < 360; i += 5) {
        const angle = (i * Math.PI) / 180;
        const radius = (i / 360) * size;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawDotsPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      const dotCount = 5;
      const radius = size / 2;
      for (let i = 0; i < dotCount; i++) {
        const angle = (i * 2 * Math.PI) / dotCount;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.fill();
      }
      
      ctx.restore();
    };

    const drawZigzagPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      const points = 6;
      for (let i = 0; i < points; i++) {
        const px = (i / points) * size - size / 2;
        const py = (i % 2 === 0 ? -1 : 1) * (size / 4);
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawHexPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawCrescentPattern = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation + time * 0.3);
      
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(size / 3, 0, size * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = '#24db7d';
      ctx.fill();
      
      ctx.restore();
    };

    const drawPatterns = [
      drawCirclePattern,
      drawSquarePattern,
      drawTrianglePattern,
      drawWavePattern,
      drawStarPattern,
      drawHeartPattern,
      drawPlusPattern,
      drawDiamondPattern,
      drawSpiralPattern,
      drawDotsPattern,
      drawZigzagPattern,
      drawHexPattern,
      drawCrescentPattern,
      drawCirclePattern // Duplicate circle for more frequency
    ];

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Draw doodles
      doodles.forEach((doodle) => {
        // Slow floating animation
        doodle.y -= doodle.speed;
        doodle.rotation += 0.002;

        // Mouse interaction - gentle push away
        const dx = doodle.x - mouseRef.current.x;
        const dy = doodle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          doodle.x += (dx / distance) * force * 1.5;
          doodle.y += (dy / distance) * force * 1.5;
        }

        // Wrap around screen
        if (doodle.y < -100) {
          doodle.y = canvas.height + 100;
          doodle.x = Math.random() * canvas.width;
        }

        // Keep within bounds horizontally
        if (doodle.x < -100) doodle.x = canvas.width + 100;
        if (doodle.x > canvas.width + 100) doodle.x = -100;

        // Draw the doodle
        ctx.globalAlpha = doodle.opacity;
        const size = 30 * doodle.scale; // Smaller shapes
        drawPatterns[doodle.type](doodle.x, doodle.y, size, doodle.rotation);
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
    />
  );
}
