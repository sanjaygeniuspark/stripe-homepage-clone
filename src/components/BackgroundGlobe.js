import React, { useEffect, useRef, useState } from 'react';

const createScrollObserver = (threshold = 0.001, once = true) => {
  return new Promise(resolve => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          if (entries[0].intersectionRatio >= threshold) {
            resolve(obs);
            if (once) obs.disconnect();
          }
        },
        { threshold }
      );
      resolve(observer);
    } else {
      // Polyfill fallback here if needed
      resolve(null);
    }
  });
};

const BackgroundGlobe = ({ config = {}, countryList = '' }) => {
  const containerRef = useRef(null);
  const [globeInstance, setGlobeInstance] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let globe = null;

    const loadGlobe = async () => {
      if (hasLoaded) return;

      const canvasContainer = containerRef.current?.querySelector('.js-globe');
      if (!canvasContainer) return;

      // const module = await import('./v1-Globe-3O2UZKFL.js'); // make sure this is correct path
      const { Globe } = module;

      globe = new Globe(canvasContainer, config);
      globe.load();

      if (countryList) {
        globe.setCountryList(countryList.split(','));
      }

      globe.play();
      setGlobeInstance(globe);
      setHasLoaded(true);
    };

    const setupObservers = async () => {
      const triggerObserver = await createScrollObserver(0.001, true);
      if (triggerObserver && containerRef.current) {
        triggerObserver.observe(containerRef.current);

        triggerObserver.onIntersect = () => {
          loadGlobe();
        };
      }

      const playPauseObserver = await createScrollObserver(0.001, false);
      if (playPauseObserver && containerRef.current) {
        playPauseObserver.observe(containerRef.current);

        playPauseObserver.onIntersect = () => {
          if (globe) globe.play();
        };
        playPauseObserver.onSeparate = () => {
          if (globe) globe.pause();
        };
      }
    };

    setupObservers();

    return () => {
      if (globe) globe.pause();
    };
  }, [config, countryList, hasLoaded]);

  return (
    <div className="BackgroundGlobe" ref={containerRef} data-js-globe-config={JSON.stringify(config)} data-js-country-list={countryList}>
      <div className="js-globe" />
    </div>
  );
};

export default BackgroundGlobe;
