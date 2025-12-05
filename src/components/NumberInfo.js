import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundGlobe from './BackgroundGlobe';
import NumberSlider from './slider/NumberSlider';
import NumberDemo from './slider/NumberDemo';

import WaveBg from './canvas/WaveBg';

function NumberInfo() {

  return (
    <section className="numberSection">
      <div className="waveBg">
        <WaveBg />
      </div>
      
      <div className="container row-layout">
        <NumberSlider />
      </div>
    </section>
  );
}

export default NumberInfo;
