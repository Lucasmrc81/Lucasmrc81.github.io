import React, { useRef, useEffect, useCallback } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    const numParticles = 280;
    const colors = ["#3b82f6", "#60a5fa", "#93c5fd"];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        const speedMultiplier = 0.5;
        const angle = Math.random() * Math.PI * 2;
        this.velocity = {
          x: Math.cos(angle) * speedMultiplier,
          y: Math.sin(angle) * speedMultiplier,
        };
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.velocity.x = -this.velocity.x;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.velocity.y = -this.velocity.y;
        }
        this.draw();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, radius, color));
      }
    }

    let animationFrameId;
    function animateParticles() {
      animationFrameId = requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dist = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
              Math.pow(particles[i].y - particles[j].y, 2)
          );
          const maxDistance = 100;
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / maxDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    initParticles();
    animateParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    drawParticles();
  }, [drawParticles]);

  return <canvas id="particle-network" ref={canvasRef}></canvas>;
};

export default ParticlesBackground;
