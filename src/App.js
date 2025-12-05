import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import GlobalPayments from './components/GlobalPayments';
import LogoSection from './components/LogoSection';
import TickerSection from './components/TickerSection';
import BannerFlipCard from './components/BannerFilpCard';
import FlipSlideshow from './components/FlipSlideshow';
import BootsRevenueSection  from './components/BootsRevenue ';
import Demo from './components/Demo';
import WorkingWithStrip from './components/WorkingWithStrip';
import NumberInfo from './components/NumberInfo';
import ExploreStripe from './components/ExploreStripe';
import Resources from './components/Resources';
import BoxSection from './components/BoxSection';
import Customised from './components/Customised';
import ScrollProgressBar from './components/common/ScrollProgressBar';



import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
    });
  }, []);

   return (
    <>
      <Navbar />
      <ScrollProgressBar />
      <div className="mainTopSection">
        <TickerSection />
        <BannerSection />
      </div>
      
      <FlipSlideshow />
      <LogoSection />
      
      {/* <Demo /> */}
      <div className="mainContentStart">
        {/* <BannerFlipCard /> */}
        <GlobalPayments />
        <BootsRevenueSection />
        <WorkingWithStrip />
        <NumberInfo />
        <ExploreStripe />
        <Resources />
        <BoxSection />
        <Customised />
      </div>
      
      
    </>
  );
}

export default App;
