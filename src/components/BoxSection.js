import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import unifyImg from '../assets/images/terminal.png';

function BoxSection() {

  return (
    <section className="bg-white">
      <div className="container row-layout">
      
        <div className="row">
          <div className="col-12 col-sm-12 cardItemList">
            <div className='Card Card--border BucketItem boxShadow twoLayout'>
                <div className='featureGraphic' data-aos="fade-left">
                    <img className="Picture__image " src="https://images.stripeassets.com/fzn2n1nzq965/3xmymnvwtsVzOvw4N1AdHi/916b66e3afc7c1c571db4e1e1ef56b74/dashboard-regions.latin-gb.png?q=80&amp;w=1082" alt="dashboard-regions.latin-gb" heiht="420" loading="lazy" />
                </div>

                <div className='contentBox'>
                  <h3 className=''>Streamlined account management for your enterprise</h3>
                  <p className="descriptionLarge">Simplify operations and centralise reporting across business lines and geographies with Stripe Organisations.</p>

                  <div className="btnlink">
                    <a className="btn btn-primary" href="#">
                      Get started
                      <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path className="Arrow_linePath" d="M0 5h7"></path><path className="Arrow_tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                      </a>
                  </div>

                </div>
            </div>

            




          </div>

    

        </div>

      </div>



    </section>
  );
}

export default BoxSection;
