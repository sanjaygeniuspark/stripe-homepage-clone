import React from 'react';
import { motion } from 'framer-motion';

function BannerFlipCard() {
  return (
    <section 
      className="bg-light FlipCardsection"
    >
      <div className="container">
        <div className="FlipCardOuter">

          <div className="FlipCardItem">
            
            <div className='imgArea'>
                <img className="Picture__image " src="https://images.stripeassets.com/fzn2n1nzq965/2E3UeirctRmWaQqWvk4M75/1f5578e77cc04b6b918faaafb8eb1ab8/global-payments.png?q=80&w=1032"  alt="" />
            </div>
            <div className='contentArea'>
              <h4>Global payments</h4>
              <p>
                Enterprises from Airbnb to Unilever optimise payments with a single integration that works across 47 countries, 50+ payment methods, and 135 currencies.
              </p>
              <div className='link'>
                <a href='#'>
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

          <div className="FlipCardItem">
            
            <div className='imgArea'>
                <img className="Picture__image " src="https://images.stripeassets.com/fzn2n1nzq965/jVhFpodASABouDOS4Ydu4/cb83f1b974c6b0e97bb4de4fbad8469c/platform-payments.png?q=80&w=1032"  alt="" />
            </div>
            <div className='contentArea'>
              <h4>Platform payments</h4>
              <p>
                Every type of enterprise, from Hertz to H&M, can use Stripe to route funds, make payouts, and offer financial services.
              </p>
              <div className='link'>
                <a href='#'>
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

          <div className="FlipCardItem">
            
            <div className='imgArea'>
                <img className="Picture__image " src="https://images.stripeassets.com/fzn2n1nzq965/5fe3Tu61i63FfRqbr2RyaM/8479fc9e281f08b9c4e6cff90c02edb9/finance-automation.png?q=80&w=1032"  alt="" />
            </div>
            <div className='contentArea'>
              <h4>Finance automation</h4>
              <p>
                Companies like NVIDIA use Stripe to recover more revenue, minimise development time, and improve efficiency across their existing ERP systems.
              </p>
              <div className='link'>
                <a href='#'>
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
  
        </div>
      </div>



    </section>
  );
}

export default BannerFlipCard;
