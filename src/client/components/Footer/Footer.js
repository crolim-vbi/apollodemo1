import React from 'react';

import './styles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <span className="username">A </span>
        <a href="https://vbirealestate.com/" target="_blank"><img src="https://vbirealestate.com/images/logo_vbi.png" height="28px" /></a>
        {/* <img src="https://vbirealestate.com/images/logo_vbi.png" height="28px" /> */}
        <span className="username"> system.</span>
        {/* <iframe
          src="https://vbirealestate.com/images/logo_vbi.png"
          frameBorder="0"
          scrolling="0"
          width="10px"
          height="10px"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Footer;
