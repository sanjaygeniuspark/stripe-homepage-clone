import React, { useState, useEffect } from 'react';

const cards = [
  {
    title: 'Global payments',
    image: 'https://images.stripeassets.com/fzn2n1nzq965/2E3UeirctRmWaQqWvk4M75/1f5578e77cc04b6b918faaafb8eb1ab8/global-payments.png?q=80&w=1032',
    content: 'Enterprises from Airbnb to Unilever optimise payments with a single integration that works across 47 countries, 50+ payment methods, and 135 currencies.',
    link: 'https://motion.dev/docs',
  },
  {
    title: 'Platform payments',
    image: 'https://images.stripeassets.com/fzn2n1nzq965/jVhFpodASABouDOS4Ydu4/cb83f1b974c6b0e97bb4de4fbad8469c/platform-payments.png?q=80&w=1032',
    content: 'Every type of enterprise, from Hertz to H&M, can use Stripe to route funds, make payouts, and offer financial services.',
    link: 'https://stripe.com/in/enterprise',
  },
  {
    title: 'Finance automation',
    image: 'https://images.stripeassets.com/fzn2n1nzq965/5fe3Tu61i63FfRqbr2RyaM/8479fc9e281f08b9c4e6cff90c02edb9/finance-automation.png?q=80&w=1032',
    content: 'Companies like NVIDIA use Stripe to recover more revenue, minimise development time, and improve efficiency across their existing ERP systems.',
    link: 'https://chatgpt.com/',
  },
];

const rawPositions = [
  'translateX(650px) translateY(-477.7px) rotateZ(0deg) scale(1)',
  'translateX(764.667px) translateY(-413.48px) rotateZ(8.33333deg) scale(0.833333)',
  'translateX(879.333px) translateY(-349.26px) rotateZ(16.6667deg) scale(0.666667)',
];



const CardDeck = () => {
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);
  const [showClone, setShowClone] = useState(false);
  const [cloneKey, setCloneKey] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScrolled]);


    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (scrolled || hovering || isMobile) return;

    const interval = setInterval(() => {
      setCloneKey((prev) => prev + 1);
      setShowClone(true);

      setTimeout(() => {
        setShowClone(false);
        setCardOrder(([first, ...rest]) => [...rest, first]);
      }, 400); // Must match animation time
    }, 2000);

    return () => clearInterval(interval);
  }, [scrolled, hovering, isMobile]);




  const topCardIndex = cardOrder[0];

  return (
    <section className={`bg-light bannerFlipSection ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="bannerFlipCard">
          <div className="bannerFlipCardList position-absolute">
            {/* Clone Card */}
            {showClone && !scrolled && (
              <div
                key={`clone-${cloneKey}`}
                className="card position-absolute shadow card-deck-wrapper clone-card"
                style={{
                  width: '344px',
                  transform: rawPositions[0],
                  zIndex: 4,
                }}
              >
                <img src={cards[topCardIndex].image} className="card-img-top" alt="" />
                <div className="card-body bg-white">
                  <h4>{cards[topCardIndex].title}</h4>
                  <p>{cards[topCardIndex].content}</p>
                  <div className='link'>
                    <a href={cards[topCardIndex].link}>
                      Explore
                      <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="28" rx="14" className="IconRect" fill-opacity=".1"></rect>
                        <path d="m14 19 4-4m-4 4-4-4m4 4V8" className="IconArrow IconArrow--a" stroke-width="1.75"></path>
                        <path d="m14 19 4-4m-4 4-4-4m4 4V8" className="IconArrow IconArrow--b" stroke-width="1.75"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Real Cards */}
            {cardOrder.map((cardIndex, i) => {
              const transform = scrolled ? 'translateX(0px) translateY(0px) rotateZ(0deg) scale(1)' : rawPositions[i];
              const isTopCard = i === 0;
              const isSecondCard = i === 1;
              const shouldHide = isTopCard && showClone;
              const shouldDelayShow = isSecondCard && showClone;
              const shouldDelay = i === 1 && showClone;

              return (
                <div
                  key={`card-${cardIndex}`}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className={`card position-absolute shadow card-deck-wrapper
                  ${shouldHide ? 'invisible-card' : ''}
                  ${shouldDelayShow ? 'delayed-show-card' : ''}`}
                  style={{
                    width: '344px',
                    zIndex: 3 - i,
                    transform,
                    transition: 'transform 0.8s ease, opacity 0.8s ease',
                    opacity: shouldHide ? 0 : 1,
                  }}
                >
                  <img src={cards[cardIndex].image} className="card-img-top" alt={cards[cardIndex].title} />
                  <div className="card-body bg-white">
                    <h4>{cards[cardIndex].title}</h4>
                    <p>{cards[cardIndex].content}</p>
                    <div className='link'>
                      <a href={cards[cardIndex].link}>Explore 
                        <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="28" height="28" rx="14" className="IconRect" fill-opacity=".1"></rect>
                          <path d="m14 19 4-4m-4 4-4-4m4 4V8" className="IconArrow IconArrow--a" stroke-width="1.75"></path>
                          <path d="m14 19 4-4m-4 4-4-4m4 4V8" className="IconArrow IconArrow--b" stroke-width="1.75"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default CardDeck;
