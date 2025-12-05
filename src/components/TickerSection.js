import React, { useEffect, useRef } from 'react';

function TickerSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const speedRef = useRef(50); // default speed
  const positionRef = useRef(0);
  const lastTimeRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    // Clone track for infinite loop
    const clone = track.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    container.appendChild(clone);

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;

      positionRef.current -= speedRef.current * delta;

      const trackWidth = track.offsetWidth;

      if (Math.abs(positionRef.current) >= trackWidth) {
        positionRef.current = 0;
      }

      container.style.transform = `translateX(${positionRef.current}px)`;
      lastTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      speedRef.current = 30; // Slow speed
    };
    const handleMouseLeave = () => {
      speedRef.current = 40; // Original speed
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="ticker-section">
      <div className="tickerArea">
        <div className="ticker_ctn" ref={containerRef}>
          <div className="ticker_track" ref={trackRef}>
            {content.map((item, i) => (
              <TickerItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TickerItem({ type, title }) {
  return (
    <a href="#">
      <div className="ticker_inner">
        <div className="ticker_type">{type}</div>
        <div className="ticker_title">{title}</div>
        <div className="ticker_arrow">
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="ArrowPath initialArrow" d="M11 5L7 9M11 5L7 1M11 5L0 5" stroke="white" stroke-width="1.75" stroke-linecap="square"></path>
            <path className="ArrowPath hoverArrow" d="M11 5L7 9M11 5L7 1M11 5L0 5" stroke="white" stroke-width="1.75" stroke-linecap="square"></path>
          </svg>
        </div>
      </div>
    </a>
  );
}

const content = [
  { type: 'Panel', title: 'AI enhancements to Adaptive Acceptance' },
  { type: 'Event', title: 'Payment Innovations 2025' },
  { type: 'Update', title: 'New API tools for merchants' },
  { type: 'Launch', title: 'Stripe Issuing goes global' },
  { type: 'Insight', title: 'How data shapes fraud detection' },
];

export default TickerSection;
