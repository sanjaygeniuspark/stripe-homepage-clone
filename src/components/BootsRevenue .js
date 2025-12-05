import React from 'react';


const BootsRevenue = ({ icon, title, description, linkText, linkUrl }) => {
  return (
    <div className="col-12 col-sm-6 iconListArea">
      <div
        className="iconArea"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <h5>{title}</h5>
      <p>{description}</p>
      <div className="linkBtn">
        <a href={linkUrl} className="btn btn-text-link me-2">
          {linkText}
          <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <g fillRule="evenodd">
              <path className="Arrow_linePath" d="M0 5h7" />
              <path className="Arrow_tipPath" d="M1 1l4 4-4 4" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

const BootsRevenueSection = () => {
  const contentItems = [
    {
      icon: `<svg className="Icon " width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="CardWithCheckmarkIconClipPath-">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6C1.79086 6 0 7.79086 0 10V24C0 26.2091 1.79086 28 4 28H28C30.2091 28 32 26.2091 32 24V10C32 7.79086 30.2091 6 28 6H4ZM3.75 10C3.33579 10 3 10.3358 3 10.75V12.25C3 12.6642 3.33579 13 3.75 13H28.25C28.6642 13 29 12.6642 29 12.25V10.75C29 10.3358 28.6642 10 28.25 10H3.75Z"
              className="Icon__blendBackground"
              style={{fill: #80e9ff}}"
            />
          </clipPath>
        </defs>
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" d="M4 6C1.79086 6 0 7.79086 0 10V24C0 26.2091 1.79086 28 4 28H28C30.2091 28 32 26.2091 32 24V10C32 7.79086 30.2091 6 28 6H4ZM3.75 10C3.33579 10 3 10.3358 3 10.75V12.25C3 12.6642 3.33579 13 3.75 13H28.25C28.6642 13 29 12.6642 29 12.25V10.75C29 10.3358 28.6642 10 28.25 10H3.75Z" 
          className="Icon__blendBackground" 
          style={{fill: #80e9ff}} />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 16C34.9706 16 39 20.0294 39 25C39 29.9706 34.9706 34 30 34C25.0294 34 21 29.9706 21 25C21 20.0294 25.0294 16 30 16ZM33.94 20.73L28 26.78L26.43 25C26.1336 24.7182 25.6762 24.6943 25.352 24.9436C25.0279 25.193 24.9337 25.6413 25.13 26L27 29.2C27.1823 29.4942 27.5039 29.6732 27.85 29.6732C28.1961 29.6732 28.5177 29.4942 28.7 29.2C29 28.79 34.7 21.63 34.7 21.63C35.45 20.83 34.54 20.12 33.94 20.73Z" className="Icon__blendForeground" style={{fill:#7a73ff}}></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16.223C31.3568 16.0771 30.6874 16 30 16C25.0294 16 21 20.0294 21 25C21 26.0519 21.1805 27.0617 21.5121 28H26.2987L25.13 26C24.9337 25.6413 25.0279 25.193 25.352 24.9436C25.6762 24.6943 26.1336 24.7182 26.43 25L28 26.78L32 22.7059V16.223ZM30.123 27.3907C30.6247 26.7574 31.2075 26.023 31.7857 25.2949C31.4866 26.1696 30.893 26.9076 30.123 27.3907Z" className="Icon__blendForeground" style={{fill: #7a73ff}}></path>
        <g clip-path="url(#CardWithCheckmarkIconClipPath-)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16.223C31.3568 16.0771 30.6874 16 30 16C25.0294 16 21 20.0294 21 25C21 26.0519 21.1805 27.0617 21.5121 28H26.2987L25.13 26C24.9337 25.6413 25.0279 25.193 25.352 24.9436C25.6762 24.6943 26.1336 24.7182 26.43 25L28 26.78L32 22.7059V16.223ZM30.123 27.3907C30.6247 26.7574 31.2075 26.023 31.7857 25.2949C31.4866 26.1696 30.893 26.9076 30.123 27.3907Z" className="Icon__blendForeground" style={{fill:#0048e5}}></path></g></svg>`,
      title: 'Lifecycle management',
      description: (
        <>
          Generate additional revenue with <a href="#">network tokens</a> and card account updater which help increase authorisation rates and reduce churn.
        </>
      ),
      linkText: 'Learn more',
      linkUrl: '#',
    },
    {
      icon: `<svg className="Icon " width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="ArrowsRoutingIconClipPath-"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 9.00006H17.5335C16.9094 9.00006 16.5583 8.28225 16.9415 7.78961L22.408 0.761224C22.7083 0.375164 23.2917 0.375165 23.592 0.761224L29.0585 7.78961C29.4417 8.28225 29.0906 9.00006 28.4665 9.00006H25V10C25 15.7102 21.0117 20.4888 15.6687 21.7022C17.7322 23.8573 19 26.7806 19 30V31.0001H22.4665C23.0906 31.0001 23.4417 31.7179 23.0585 32.2105L17.592 39.2389C17.2917 39.625 16.7083 39.625 16.408 39.2389L10.9415 32.2105C10.5583 31.7179 10.9094 31.0001 11.5335 31.0001H15V30C15 25.5817 11.4183 22 7 22H2C0.89543 22 0 21.1046 0 20C0 18.8954 0.89543 18 2 18H7H13C17.4183 18 21 14.4183 21 10V9.00006Z" className="Icon__blendBackground" style={{fill: #80e9ff;}}></path></clipPath></defs><path fill-rule="evenodd" clip-rule="evenodd" d="M21 9.00006H17.5335C16.9094 9.00006 16.5583 8.28225 16.9415 7.78961L22.408 0.761224C22.7083 0.375164 23.2917 0.375165 23.592 0.761224L29.0585 7.78961C29.4417 8.28225 29.0906 9.00006 28.4665 9.00006H25V10C25 15.7102 21.0117 20.4888 15.6687 21.7022C17.7322 23.8573 19 26.7806 19 30V31.0001H22.4665C23.0906 31.0001 23.4417 31.7179 23.0585 32.2105L17.592 39.2389C17.2917 39.625 16.7083 39.625 16.408 39.2389L10.9415 32.2105C10.5583 31.7179 10.9094 31.0001 11.5335 31.0001H15V30C15 25.5817 11.4183 22 7 22H2C0.89543 22 0 21.1046 0 20C0 18.8954 0.89543 18 2 18H7H13C17.4183 18 21 14.4183 21 10V9.00006Z" className="Icon__blendBackground" style={{fill: #80e9ff;}}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31 18.0001V14.5336C31 13.9095 31.7178 13.5584 32.2105 13.9416L39.2388 19.4081C39.6249 19.7084 39.6249 20.2919 39.2388 20.5922L32.2105 26.0587C31.7178 26.4418 31 26.0908 31 25.4667V22.0001H1.99741C0.892845 22.0001 0 21.1047 0 20.0001C0 18.8956 0.892846 18.0001 1.99741 18.0001H31Z" className="Icon__blendForeground" style={{fill: #7a73ff;}}></path><g clip-path="url(#ArrowsRoutingIconClipPath-)"><path fill-rule="evenodd" clip-rule="evenodd" d="M31 18.0001V14.5336C31 13.9095 31.7178 13.5584 32.2105 13.9416L39.2388 19.4081C39.6249 19.7084 39.6249 20.2919 39.2388 20.5922L32.2105 26.0587C31.7178 26.4418 31 26.0908 31 25.4667V22.0001H1.99741C0.892845 22.0001 0 21.1047 0 20.0001C0 18.8956 0.892846 18.0001 1.99741 18.0001H31Z" className="Icon__blendForeground" style={{fill: #0048e5;}}></path></g></svg>`,
      title: 'Smart routing and revenue recovery',
      description: 'Mitigate revenue loss and increase auth rates by 50-70 bps on average with Adaptive Acceptance, which automatically identifies and executes optimal retry messaging and smart routing combinations for card payments.',
      linkText: 'See how',
      linkUrl: '#',
    },
    {
      icon:`<svg className="AnimatedIcon__icon" width="96" height="96" preserveAspectRatio="xMinYMin" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" data-js-controller="NodesIcon">
      <defs>
      <path id="nodesIconSegment" d="M20 41.15l9.7 5.55a1.5 1.5 0 0 1 0 2.6L20 54.85v-13.7z"></path>
      <circle id="nodesIconDot" cx="34" cy="48" r="6"></circle>
      <clipPath id="nodesIconClipPath">
        <use className="NodesIcon__dot" href="#nodesIconDot" x="0" y="-24" data-js-target-list="NodesIcon.clipPathDots"></use>
        <use className="NodesIcon__dot" href="#nodesIconDot" x="21" y="-12" data-js-target-list="NodesIcon.clipPathDots"></use>
        <use className="NodesIcon__dot" href="#nodesIconDot" x="21" y="12" data-js-target-list="NodesIcon.clipPathDots"></use>
        <use className="NodesIcon__dot" href="#nodesIconDot" x="0" y="24" data-js-target-list="NodesIcon.clipPathDots"></use>
        <use className="NodesIcon__dot" href="#nodesIconDot" x="-21" y="12" data-js-target-list="NodesIcon.clipPathDots"></use>
        <use className="NodesIcon__dot" href="#nodesIconDot" x="-21" y="-12" data-js-target-list="NodesIcon.clipPathDots"></use>
      </clipPath>
    </defs>

    <g className="NodesIcon__segments">
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(0deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#80e9ff" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(60deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#80e9ff" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(120deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#80e9ff" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(180deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#80e9ff" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(240deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#80e9ff" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(300deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#80e9ff" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
    </g>
    <g className="NodesIcon__dots">
      <use className="NodesIcon__dot" href="#nodesIconDot" x="0" y="-24" fill="#7a73ff" data-js-target-list="NodesIcon.dots"></use>
      <use className="NodesIcon__dot" href="#nodesIconDot" x="21" y="-12" fill="#7a73ff" data-js-target-list="NodesIcon.dots"></use>
      <use className="NodesIcon__dot" href="#nodesIconDot" x="21" y="12" fill="#7a73ff" data-js-target-list="NodesIcon.dots"></use>
      <use className="NodesIcon__dot" href="#nodesIconDot" x="0" y="24" fill="#7a73ff" data-js-target-list="NodesIcon.dots"></use>
      <use className="NodesIcon__dot" href="#nodesIconDot" x="-21" y="12" fill="#7a73ff" data-js-target-list="NodesIcon.dots"></use>
      <use className="NodesIcon__dot" href="#nodesIconDot" x="-21" y="-12" fill="#7a73ff" data-js-target-list="NodesIcon.dots"></use>
    </g>
    <g clip-path="url(#nodesIconClipPath)">
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(0deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#0048e5" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(60deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#0048e5" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(120deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#0048e5" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(180deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#0048e5" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(240deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#0048e5" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
        <g className="NodesIcon__segmentRotator" style={{transform: rotate(300deg);}} data-js-target-list="NodesIcon.segmentRotators">
          <use className="NodesIcon__segment" href="#nodesIconSegment" fill="#0048e5" data-js-target-list="NodesIcon.segments"></use>
        </g>
      
    </g>
    </svg>`,
      title: 'Issuer and network partnerships',
      description: 'Businesses see an up to 8% reduction in fraud and 1-2% authorisation rate uplift on eligible volume via our Enhanced Issuer Network.',
      linkText: 'See regions',
      linkUrl: '#',
    },
    {
      icon:`<svg className="Icon " width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="PersonWithCheckmarkIconClipPath-"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 8C25.8366 8 33 15.1634 33 24C33 29.087 30.626 33.6195 26.9256 36.5501C26.0383 33.2393 21.9317 30.7368 17 30.7368C12.0683 30.7368 7.96174 33.2392 7.07298 36.5493C3.37396 33.6195 1 29.087 1 24C1 15.1634 8.16344 8 17 8ZM17 18C14.2386 18 12 20.2386 12 23C12 25.7614 14.2386 28 17 28C19.7614 28 22 25.7614 22 23C22 20.2386 19.7614 18 17 18Z" className="Icon__blendBackground" style={{fill: #80e9ff;}}></path></clipPath></defs><path fill-rule="evenodd" clip-rule="evenodd" d="M17 8C25.8366 8 33 15.1634 33 24C33 29.087 30.626 33.6195 26.9256 36.5501C26.0383 33.2393 21.9317 30.7368 17 30.7368C12.0683 30.7368 7.96174 33.2392 7.07298 36.5493C3.37396 33.6195 1 29.087 1 24C1 15.1634 8.16344 8 17 8ZM17 18C14.2386 18 12 20.2386 12 23C12 25.7614 14.2386 28 17 28C19.7614 28 22 25.7614 22 23C22 20.2386 19.7614 18 17 18Z" className="Icon__blendBackground" style={{fill: #80e9ff;}}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30 3C34.9706 3 39 7.02944 39 12C39 16.9706 34.9706 21 30 21C25.0294 21 21 16.9706 21 12C21 7.02944 25.0294 3 30 3ZM33.94 7.73L28 13.78L26.43 12C26.1336 11.7182 25.6762 11.6943 25.352 11.9436C25.0279 12.193 24.9337 12.6413 25.13 13L27 16.2C27.1823 16.4942 27.5039 16.6732 27.85 16.6732C28.1961 16.6732 28.5177 16.4942 28.7 16.2C29 15.79 34.7 8.63 34.7 8.63C35.45 7.83 34.54 7.12 33.94 7.73Z" className="Icon__blendForeground" style={{fill: #7a73ff;}}></path><g clip-path="url(#PersonWithCheckmarkIconClipPath-)"><path fill-rule="evenodd" clip-rule="evenodd" d="M30 3C34.9706 3 39 7.02944 39 12C39 16.9706 34.9706 21 30 21C25.0294 21 21 16.9706 21 12C21 7.02944 25.0294 3 30 3ZM33.94 7.73L28 13.78L26.43 12C26.1336 11.7182 25.6762 11.6943 25.352 11.9436C25.0279 12.193 24.9337 12.6413 25.13 13L27 16.2C27.1823 16.4942 27.5039 16.6732 27.85 16.6732C28.1961 16.6732 28.5177 16.4942 28.7 16.2C29 15.79 34.7 8.63 34.7 8.63C35.45 7.83 34.54 7.12 33.94 7.73Z" className="Icon__blendForeground" style={{fill: #0048e5;}}></path></g></svg>`,
      title: 'Optimised authentication',
      description: 'Speed up checkout with customisable solutions to help you meet SCA requirements and delegated authentication that dynamically adapts 2FA methods to suit customers preferences.',
      linkText: 'View docs',
      linkUrl: '#',
    },
  ];

  return (
    <section className="bg-light">
      <div className="container row-layout">

        <div className="row">
          <div className="col-12 col-sm-8 section_heading" data-aos="fade-up">
            <h2>Boost revenue with advanced authorisation optimisation</h2>
            <p>Access leading authorisation rates powered by direct integrations with global card networks and issuing banks, an extensive understanding of issuer preferences, and machine learning-based products informed by billions of transactions.</p>
          </div>
        </div>

        <div className="row row-gap" data-aos="fade-up"S>
          {contentItems.map((item, index) => (
            <BootsRevenue
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              linkText={item.linkText}
              linkUrl={item.linkUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BootsRevenueSection;


