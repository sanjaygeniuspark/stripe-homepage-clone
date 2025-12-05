import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import WaveScene from './WaveScene';

function BannerSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [positionY, setPositionY] = useState(0); // Initial value

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionY(prev => prev + 11);
    }, 2000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Scroll-based transform and opacity
  const maxScroll = 300; // Limit the effect
  const scrollProgress = Math.min(scrollY / maxScroll, 1); // 0 to 1
  const translateY = -scrollProgress * 20; // From 0 to -60px
  const opacity = 1 - scrollProgress * 0.8; // From 1 to 0.3

  return (
    <section className="bg-light banner-section">
      
      <div className="bannerWave">
        <WaveScene />
      </div>
        
      <div className="container">
        <div className="row align-items-center bannerInnerLayout">
          <motion.div
            className="col-lg-6 bannerContent"
            style={{
              transform: `translateY(${translateY}px)`,
              opacity: opacity,
              transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
            }}
          >
            <motion.h1
              className="display-2 fw-bold"
              initial={{ y: "50%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Build the next era of your <br />
              <span
                className="KnockoutText"
                style={{
                  backgroundImage: 'url("https://images.stripeassets.com/fzn2n1nzq965/3hhclkrT5ioDDsH9PT2htk/772cd3c33f3279aefe33bea377b6acf4/knockout.png")',
                  padding: '0px 3px 6px 0px',
                  animationDuration: '5s',
                  maskPosition: '20% center',
                  WebkitMaskPosition: '20% center',
                  backgroundPositionY: `${positionY}%`,
                  transition: 'background-position-y 0.5s ease',

                }}
              >
                enterprise
              </span>
            </motion.h1>

            <motion.p
              className="lead mt-2"
              initial={{ y: "50%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Leading enterprises use Stripe to revolutionise their business – from Amazon’s rapid expansion into global markets to BMW’s re-imagination of the customer experience.
            </motion.p>

            <motion.div
              className="mt-3"
              initial={{ y: "50%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <a href="#" className="btn btn-fill-white me-2">
                Contact sales
                <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                  <g fillRule="evenodd">
                    <path className="Arrow_linePath" d="M0 5h7" />
                    <path className="Arrow_tipPath" d="M1 1l4 4-4 4" />
                  </g>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <div className="col-lg-5 d-none d-lg-block">
            {/* Optional image block */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
