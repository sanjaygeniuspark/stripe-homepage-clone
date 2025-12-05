import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ExploreStripe() {

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={className}>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
          <path d="M12 6H1" stroke="white" strokeWidth="1.75" />
          <path d="M8 2L12 6L8 10" stroke="white" strokeWidth="1.75" strokeLinecap="square" />
        </svg>
      </div>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={className}>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
          <path d="M2 6L13 6" stroke="white" strokeWidth="1.75" />
          <path d="M6 10L2 6L6 2" stroke="white" strokeWidth="1.75" strokeLinecap="square" />
        </svg>
      </div>
    );
  };


  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    easing: 'linear',
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section 
      className="bg-white sliderBoxArea">
      <div className="container row-layout">
        <div className='section_heading maxWidth'>
          <h2>Explore Stripe for enterprise businesses like yours</h2>
        </div>
      
        <Slider {...settings}>

          <div className="col-12 col-sm-6">
            <div className="WorkingCardItems boxStyleTwo">
              <div className="contentAreaOuter">
                <a href="#" className="CardLink" rel="noopener noreferrer">
                  <div className="contentArea">
                    <h4>Global businesses</h4>
                    <p>Enter new markets, optimise payments infrastructure, and easily add new business models and revenue streams.</p>
                  </div>
                  <div className="linkBtn">
                    <a href="#" className="btn btn-text-link me-2">Learn more
                    <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path className="Arrow_linePath" d="M0 5h7"></path><path className="Arrow_tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                  </div>
                </a>

                <div className="brandLogo">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                </div>
              </div>
              {/* <a href="#" className="WorkingCardLink"></a> */}
              <div className="WorkingCardItems__shadow"></div>
              <div className="WorkingCardItems__shadow--hovered"></div>
            </div>
          </div>


          <div className="col-12 col-sm-6">
            <div className="WorkingCardItems boxStyleTwo">
              <div className="contentAreaOuter">
                <a href="#" className="CardLink">
                  <div className="contentArea">
                    <h4>SaaS</h4>
                    <p>Improve your customer experience, grow recurring revenue, and reduce costs with a single platform for payments, subscriptions, invoicing, accounting, and tax.</p>
                  </div>
                  <div className="linkBtn">
                    <a href="#" className="btn btn-text-link me-2">Learn more
                    <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path className="Arrow_linePath" d="M0 5h7"></path><path className="Arrow_tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                  </div>
                </a>

                <div className="brandLogo">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                </div>
              </div>
              {/* <a href="#" className="WorkingCardLink"></a> */}
              <div className="WorkingCardItems__shadow"></div>
              <div className="WorkingCardItems__shadow--hovered"></div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="WorkingCardItems boxStyleTwo">
              <div className="contentAreaOuter">
                <a href="#" className="CardLink">
                  <div className="contentArea">
                    <h4>Platforms</h4>
                    <p>Facilitate multi-party payments and payouts, support customers with any business model, and offer tailored financial services to accelerate growth and revenue.</p>
                  </div>
                  <div className="linkBtn">
                    <a href="#" className="btn btn-text-link me-2">Learn more
                    <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path className="Arrow_linePath" d="M0 5h7"></path><path className="Arrow_tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                  </div>
                </a>

                <div className="brandLogo">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                </div>
              </div>
              {/* <a href="#" className="WorkingCardLink"></a> */}
              <div className="WorkingCardItems__shadow"></div>
              <div className="WorkingCardItems__shadow--hovered"></div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="WorkingCardItems boxStyleTwo">
              <div className="contentAreaOuter">
                <a href="#" className="CardLink">
                  <div className="contentArea">
                    <h4>Marketplaces</h4>
                    <p>Join 75% of the world’s top marketplaces, who onboard service providers, manage payments, and send payouts with Stripe Connect.</p>
                  </div>
                  <div className="linkBtn">
                    <a href="#" className="btn btn-text-link me-2">Learn more
                    <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path className="Arrow_linePath" d="M0 5h7"></path><path className="Arrow_tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                  </div>
                </a>

                <div className="brandLogo">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                </div>
              </div>
              {/* <a href="#" className="WorkingCardLink"></a> */}
              <div className="WorkingCardItems__shadow"></div>
              <div className="WorkingCardItems__shadow--hovered"></div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="WorkingCardItems boxStyleTwo">
              <div className="contentAreaOuter">
                <a href="#" className="CardLink">
                  <div className="contentArea">
                    <h4>Retail and e-commerce</h4>
                    <p>Get all the tools you need to accept payments online and in-person from customers around the world.</p>
                  </div>
                  <div className="linkBtn">
                    <a href="#" className="btn btn-text-link me-2">Learn more
                    <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path className="Arrow_linePath" d="M0 5h7"></path><path className="Arrow_tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                  </div>
                </a>

                <div className="brandLogo">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" className="UserLogo variant-- AccentedCardCarouselItemUserLogo" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet"><path fill="var(--userLogoColor, #873EFF)" d="M134.278 24.631c-2.582 0-4.304-1.928-4.304-4.614s1.756-4.648 4.304-4.648c2.549 0 4.374 1.962 4.374 4.648s-1.791 4.614-4.374 4.614zm0 7.369c6.853 0 12.087-5.096 12.087-11.983 0-6.886-5.234-12.017-12.087-12.017-6.852 0-12.051 5.096-12.051 12.017 0 6.921 5.234 11.983 12.051 11.983zm-25.824-7.369c-2.583 0-4.339-1.928-4.339-4.614s1.756-4.648 4.339-4.648c2.582 0 4.338 1.962 4.338 4.648s-1.722 4.614-4.338 4.614zm0 7.369c6.817 0 12.051-5.096 12.086-11.983 0-6.92-5.269-12.017-12.086-12.017-6.818 0-12.086 5.096-12.086 12.017 0 6.921 5.268 11.983 12.086 11.983zm-42.973 0c2.686 0 4.89-1.308 6.508-4.407l3.65-6.818v5.785c0 3.408 2.203 5.44 5.612 5.44 2.686 0 4.649-1.17 6.543-4.407l8.401-14.152C98.02 10.306 96.712 8 92.683 8c-2.17 0-3.581.689-4.855 3.065L82.043 21.91v-9.64c0-2.893-1.377-4.27-3.89-4.27-2.032 0-3.616.86-4.856 3.271l-5.44 10.64v-9.538C67.857 9.274 66.583 8 63.518 8h-6.301c-2.376 0-3.581 1.102-3.581 3.133 0 2.032 1.274 3.203 3.58 3.203H59.8v12.19c0 3.442 2.307 5.474 5.682 5.474z"></path><title>WooCommerce logo</title></svg>
                  </a>
                </div>
              </div>
              {/* <a href="#" className="WorkingCardLink"></a> */}
              <div className="WorkingCardItems__shadow"></div>
              <div className="WorkingCardItems__shadow--hovered"></div>
            </div>
          </div>

        </Slider>


        



      </div>
    </section>
  );
}

export default ExploreStripe;
