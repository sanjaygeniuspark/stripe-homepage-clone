import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  {
    number: "250M+",
    description: "API requests per day processed by Stripe",
  },
  {
    number: "99.999",
    sup: '%',
    description: "Uptime SLA for enterprise reliability",
  },
  {
    number: "$1T+",
    description: "Annual payment volume handled globally",
  },
];

const transitionDuration = 0.85;

function CounterDigit({ digit, direction }) {
  return (
    <div className="digit-wrapper">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={digit}
          initial={{ y: direction === 1 ? "100%" : "-50%" }}
          animate={{ y: "0%" }}
          exit={{ y: direction === 1 ? "-50%" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="digit-inner"
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function StatsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isManual, setIsManual] = useState(false);
  const [positionY, setPositionY] = useState(0);
  const timeoutRef = useRef();

  const handleNext = (manual = false) => {
    setDirection(1);
    setIsManual(manual);
    setActiveIndex((prev) => (prev + 1) % stats.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIsManual(true);
    setActiveIndex((prev) => (prev - 1 + stats.length) % stats.length);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(() => handleNext(false), 5000);
    return () => clearInterval(timeoutRef.current);
  }, [activeIndex]);

  // Reset manual flag after animation completes
  useEffect(() => {
    if (isManual) {
      const timeout = setTimeout(() => setIsManual(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, isManual]);

  // Animate background position
  useEffect(() => {
    const interval = setInterval(() => {
      setPositionY((prev) => prev + 11);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction * 80,
      rotateY: direction * 10,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: -direction * 80,
      rotateY: -direction * 10,
      scale: 0.95,
    }),
  };


  return (
    <div className="carousel-wrapper number-slider-wrapper">
      <div className="slide-count">
        {String(activeIndex + 1)
          .padStart(2, "0")
          .split("")
          .map((digit, i) => (
            <CounterDigit key={i} digit={digit} direction={direction} />
          ))}
        <span>/{stats.length.toString().padStart(2, "0")}</span>
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={activeIndex}
          className="slide contentArea"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: isManual ? 0.25 : 0.6,
            ease: "easeInOut",
          }}

        >
          <motion.div className="numberValue">
            <span
              className="KnockoutText"
              style={{
                backgroundImage:
                  'url("https://images.stripeassets.com/fzn2n1nzq965/3hhclkrT5ioDDsH9PT2htk/772cd3c33f3279aefe33bea377b6acf4/knockout.png")',
                padding: "0px 10px 6px 0px",
                animationDuration: "5s",
                maskPosition: "20% center",
                WebkitMaskPosition: "20% center",
                backgroundPositionY: `${positionY}%`,
                transition: "background-position-y 0.5s ease",
              }}
            >
              {stats[activeIndex].number}{" "}
              <span className="sup">{stats[activeIndex].sup}</span>
            </span>
          </motion.div>
          <motion.h3>{stats[activeIndex].description}</motion.h3>
        </motion.div>
      </AnimatePresence>

      <div className="arrows">
        <button onClick={() => handlePrev()} className="arrow left">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
            <path d="M2 6L13 6" stroke="white" strokeWidth="1.75" />
            <path
              d="M6 10L2 6L6 2"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="square"
            />
          </svg>
        </button>
        <button onClick={() => handleNext(true)} className="arrow right">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
            <path d="M12 6H1" stroke="white" strokeWidth="1.75" />
            <path
              d="M8 2L12 6L8 10"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>

      <div className="dots">
        {stats.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => {
              setIsManual(true);
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
              clearInterval(timeoutRef.current);
            }}
          />
        ))}
      </div>
    </div>
  );
}
