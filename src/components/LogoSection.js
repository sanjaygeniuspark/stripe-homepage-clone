import React, { useEffect, useRef } from 'react';

function LogoSection() {
  const containerRef = useRef(null);
  const speedRef = useRef(60); // default speed
  const positionRef = useRef(0);
  const lastTimestampRef = useRef(null);
  const requestRef = useRef(null);
  const isAnimatingRef = useRef(false); // animation state

  const animate = (timestamp) => {
    if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
    const delta = (timestamp - lastTimestampRef.current) / 1000;
    positionRef.current += speedRef.current * delta;

    const track = containerRef.current.querySelector('.marquee__track');
    const trackWidth = track.getBoundingClientRect().width;

    if (positionRef.current >= trackWidth) {
      positionRef.current = 0;
    }

    containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
    lastTimestampRef.current = timestamp;
    requestRef.current = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true;
      lastTimestampRef.current = null;
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  const stopAnimation = () => {
    if (isAnimatingRef.current) {
      isAnimatingRef.current = false;
      cancelAnimationFrame(requestRef.current);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseEnter = () => (speedRef.current = 20); // slow on hover
    const handleMouseLeave = () => (speedRef.current = 60); // normal speed

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    const handleScroll = () => {
      const y = window.scrollY;
      if (y >= 50) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case already scrolled
    handleScroll();

    return () => {
      cancelAnimationFrame(requestRef.current);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='logo-section pb-3 pt-3 bg-light'>
      <div className="container">
        <div className="marquee">
          <div className="marquee__ctn" ref={containerRef}>
            <div className="marquee__track">
              {logos.map((logo, i) => (
                <div className="marquee__item" key={i}>
                  <a href={logo.url} target="_blank" rel="noopener noreferrer">
                    <img src={logo.src} alt="LOGO" />
                  </a>
                </div>
              ))}
            </div>

            <div className="marquee__track" aria-hidden="true">
              {logos.map((logo, i) => (
                <div className="marquee__item" key={`dup-${i}`}>
                  <a href={logo.url} target="_blank" rel="noopener noreferrer">
                    <img src={logo.src} alt="LOGO" />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const logos = [
  {
    src: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0eeeb860f66063130cc_Amsterdam-colored.svg",
    url: "https://example.com/amsterdam",
  },
  {
    src: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09591135411dbf1f686_colorado-colored.svg",
    url: "https://example.com/colorado",
  },
  {
    src: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65609f775edfd6ba4a3c3af7_Nairobi-colored.svg",
    url: "https://example.com/nairobi",
  },
  {
    src: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/656093f6591bba4a6757b985_Hudon-colored.svg",
    url: "https://example.com/hudon",
  },
  {
    src: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560817610fbd2b58993793c_Aura-colored.svg",
    url: "https://example.com/aura",
  },
  {
    src: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65607df9d46a61fcef7c719f_Aiken-colored.svg",
    url: "https://example.com/aiken",
  },
];


export default LogoSection;
