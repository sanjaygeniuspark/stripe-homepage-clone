import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Trigger when user scrolls down 50px
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'scrolled-navbar' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="/">Stripe</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Solution</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Developer
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <a className="btn btn-fill-white" href="#">
              Contact sales
              <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                <g fill-rule="evenodd">
                  
                    <path className="Arrow_linePath" d="M0 5h7"></path>
                    <path className="Arrow_tipPath" d="M1 1l4 4-4 4"></path>
                  
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Add logo text",
};
