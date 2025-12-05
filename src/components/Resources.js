import React from 'react';


const BootsRevenue = ({ icon, icontext, title, description, linkText, linkUrl }) => {
  return (
    <div className="col-12 col-sm-4 iconListArea">
      <div
        className="iconArea style2"
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

const Resources = () => {
  const contentItems = [
    {
      icon: `<svg className="BasicIcon BasicIcon--video Badge__basicIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM11.2111 8.89443C11.4047 8.79766 11.5616 8.64074 11.6584 8.44721C11.9053 7.95323 11.7051 7.35256 11.2111 7.10557L6.44721 4.72361C6.30836 4.65418 6.15525 4.61803 6 4.61803C5.44772 4.61803 5 5.06575 5 5.61803V10.382C5 10.5372 5.03615 10.6903 5.10557 10.8292C5.35256 11.3232 5.95323 11.5234 6.44721 11.2764L11.2111 8.89443Z" fill="#4f5b76"></path>
  </svg> <span className="icon-label">Online event</span>`,
    icontext: '',
      title: 'How Zoom and Wix build exceptional customer experiences in a fast-paced market',
      description: (
        <>
          Hear how enterprise executives are overcoming institutional risk aversion, brittle systems, and a bias toward the status quo to foster an innovative culture.
        </>
      ),
      linkText: 'Watch the talk',
      linkUrl: '#',
    },
    {
      icon: `<svg className="BasicIcon BasicIcon--report Badge__basicIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9.5H3C3.55228 9.5 4 9.05229 4 8.5C4 7.94772 3.55228 7.5 3 7.5H2V5.5H3C3.55228 5.5 4 5.05228 4 4.5C4 3.94772 3.55228 3.5 3 3.5H2V2.5C2 1.39543 2.89543 0.5 4 0.5H14C15.1046 0.5 16 1.39543 16 2.5V14.5C16 15.6046 15.1046 16.5 14 16.5H4C2.89543 16.5 2 15.6046 2 14.5V13.5H3C3.55228 13.5 4 13.0523 4 12.5C4 11.9477 3.55228 11.5 3 11.5H2V9.5ZM0 12.5C0 11.9477 0.447715 11.5 1 11.5H2V13.5H1C0.447715 13.5 0 13.0523 0 12.5ZM0 8.5C0 7.94772 0.447715 7.5 1 7.5H2V9.5H1C0.447715 9.5 0 9.05229 0 8.5ZM0 4.5C0 3.94772 0.447715 3.5 1 3.5H2V5.5H1C0.447715 5.5 0 5.05228 0 4.5Z" fill="#4F5B76"></path>
  </svg> <span className="icon-label">Report</span>`,
      title: 'Four ways modern payment systems drive growth',
      description: 'Learn how brands like Toyota, Alaska Airlines, and River Island are transforming their payments strategy to stay competitive.',
      linkText: 'Read the report',
      linkUrl: '#',
    },


    {
      icon: `<svg className="BasicIcon BasicIcon--document Badge__basicIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5V0H4C2.89543 0 2 0.89543 2 2V14C2 15.1046 2.89543 16 4 16H12C13.1046 16 14 15.1046 14 14V7H9C7.89543 7 7 6.10457 7 5Z" fill="#4f5b76"></path>
    <path d="M14 5L9 0V5H14Z" fill="#4f5b76"></path>
  </svg> <span className="icon-label">Guide</span>`,
      title: 'Guide to payments provider RFPs',
      description: 'Evaluate payment providers, including overlooked capabilities and important questions to ask, and get a downloadable RFP template.',
      linkText: 'Download the guide',
      linkUrl: '#',
    },

    {
      icon: `<svg className="BasicIcon BasicIcon--report Badge__basicIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9.5H3C3.55228 9.5 4 9.05229 4 8.5C4 7.94772 3.55228 7.5 3 7.5H2V5.5H3C3.55228 5.5 4 5.05228 4 4.5C4 3.94772 3.55228 3.5 3 3.5H2V2.5C2 1.39543 2.89543 0.5 4 0.5H14C15.1046 0.5 16 1.39543 16 2.5V14.5C16 15.6046 15.1046 16.5 14 16.5H4C2.89543 16.5 2 15.6046 2 14.5V13.5H3C3.55228 13.5 4 13.0523 4 12.5C4 11.9477 3.55228 11.5 3 11.5H2V9.5ZM0 12.5C0 11.9477 0.447715 11.5 1 11.5H2V13.5H1C0.447715 13.5 0 13.0523 0 12.5ZM0 8.5C0 7.94772 0.447715 7.5 1 7.5H2V9.5H1C0.447715 9.5 0 9.05229 0 8.5ZM0 4.5C0 3.94772 0.447715 3.5 1 3.5H2V5.5H1C0.447715 5.5 0 5.05228 0 4.5Z" fill="#4F5B76"></path>
  </svg> <span className="icon-label">Report</span>`,
      title: 'How to increase revenue with an optimised checkout',
      description: 'Read about how businesses using Stripe’s Optimized Checkout Suite achieved 11.9% more revenue on average.',
      linkText: 'Read the report',
      linkUrl: '#',
    },

    {
      icon: `<svg className="BasicIcon BasicIcon--report Badge__basicIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9.5H3C3.55228 9.5 4 9.05229 4 8.5C4 7.94772 3.55228 7.5 3 7.5H2V5.5H3C3.55228 5.5 4 5.05228 4 4.5C4 3.94772 3.55228 3.5 3 3.5H2V2.5C2 1.39543 2.89543 0.5 4 0.5H14C15.1046 0.5 16 1.39543 16 2.5V14.5C16 15.6046 15.1046 16.5 14 16.5H4C2.89543 16.5 2 15.6046 2 14.5V13.5H3C3.55228 13.5 4 13.0523 4 12.5C4 11.9477 3.55228 11.5 3 11.5H2V9.5ZM0 12.5C0 11.9477 0.447715 11.5 1 11.5H2V13.5H1C0.447715 13.5 0 13.0523 0 12.5ZM0 8.5C0 7.94772 0.447715 7.5 1 7.5H2V9.5H1C0.447715 9.5 0 9.05229 0 8.5ZM0 4.5C0 3.94772 0.447715 3.5 1 3.5H2V5.5H1C0.447715 5.5 0 5.05228 0 4.5Z" fill="#4F5B76"></path>
  </svg> <span className="icon-label">Report</span>`,
      title: 'Stripe named a Leader in Payments',
      description: 'According to the IDC MarketScape evaluation, “merchants of all sizes can benefit from Stripe’s wide range of products and services.”',
      linkText: 'Read the report',
      linkUrl: '#',
    },


    {
      icon: `<svg className="BasicIcon BasicIcon--report Badge__basicIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9.5H3C3.55228 9.5 4 9.05229 4 8.5C4 7.94772 3.55228 7.5 3 7.5H2V5.5H3C3.55228 5.5 4 5.05228 4 4.5C4 3.94772 3.55228 3.5 3 3.5H2V2.5C2 1.39543 2.89543 0.5 4 0.5H14C15.1046 0.5 16 1.39543 16 2.5V14.5C16 15.6046 15.1046 16.5 14 16.5H4C2.89543 16.5 2 15.6046 2 14.5V13.5H3C3.55228 13.5 4 13.0523 4 12.5C4 11.9477 3.55228 11.5 3 11.5H2V9.5ZM0 12.5C0 11.9477 0.447715 11.5 1 11.5H2V13.5H1C0.447715 13.5 0 13.0523 0 12.5ZM0 8.5C0 7.94772 0.447715 7.5 1 7.5H2V9.5H1C0.447715 9.5 0 9.05229 0 8.5ZM0 4.5C0 3.94772 0.447715 3.5 1 3.5H2V5.5H1C0.447715 5.5 0 5.05228 0 4.5Z" fill="#4F5B76"></path>
  </svg> <span className="icon-label">Report</span>`,
      title: 'Stripe named a Leader in Billing',
      description: 'According to The Forrester Wave™, “Along with Stripe Payments’ synergies, Stripe Billing’s architecture and reliability are its key strengths.”',
      linkText: 'Read the report',
      linkUrl: '#',
    },
   
  ];

  return (
    <section className="bg-light">
      <div className="container row-layout">

        <div className="row">
          <div className="col-12 col-sm-8 section_heading">
            <h2>Recommended resources</h2>
            <p>Market insights, trends, and reports to keep you on the cutting edge of financial technology.</p>
          </div>
        </div>

        <div className="row row-gap">
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

export default Resources;


