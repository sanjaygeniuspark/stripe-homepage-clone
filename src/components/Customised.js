import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import unifyImg from '../assets/images/terminal.png';

function Customised() {

  return (
    <section className="bg-light">
      <div className="container">
      
        <div className="row align-items-center">
          <div className="col-12 col-sm-6">
            <div className="commonContentArea elementGap">
              <h3>Get customised recommendations and pricing</h3>
              <p className="descriptionLarge">Speak to an expert for tailored solutions and custom pricing for your business.</p>
              <div className="linkBtn">
                <a className="btn btn-primary" href="#">
                  Contact sales
                  <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path className="Arrow_linePath" d="M0 5h7"></path><path className="Arrow_tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                  </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <ul className="tickUl twoLayout">
              <li>
                <svg className="itemIcon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg>
                <p>Interchange plus pricing</p>
              </li>
              <li>
                <svg className="itemIcon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg>
                <p>Volume discounts</p>
              </li>

              <li>
                <svg className="itemIcon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg>
                <p>Country-specific rates</p>
              </li>

              <li>
                <svg className="itemIcon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg>
                <p>Multi-product discounts</p>
              </li>

              <li>
                <svg className="itemIcon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg>
                <p>Deployment services</p>
              </li>

              <li>
                <svg className="itemIcon" width="16" height="16" viewBox="0 0 16 16"><g fill="var(--accentColor)" fill-rule="evenodd"><circle opacity=".15" cx="8" cy="8" r="8"></circle><path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path></g></svg>
                <p>Technical account management</p>
              </li>
            </ul>
          </div>

    

        </div>

      </div>



    </section>
  );
}

export default Customised;
