import React from 'react';
import logo from "../assests/img/Logo-Nrf.png"

export const Redes = () => {
  return (
    <div className="section-5">
    <div className="container-6 w-container">
      <div className="footer-wrap">
        <div>
          <a href="file:///C:/Users/niyir/Documents/Proyecto-0-Portfolio%20Niyireth%20RF/index.html" target="_blank" className="webflow-link w-inline-block">
            <div className="paragraph-tiny">📍 Made in Madrid</div>
          </a>
        </div>
        <div className="logo">
          <img src={logo} loading="lazy" height="64" width="64" sizes="64px" alt="" className="logo"/>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/niyireth-ruiz-fern%C3%A1ndez/" target="_blank" className="button-footer">LinkedIn</a>
          <a href="https://www.behance.net/niyiruizfe" target="_blank" className="button-footer">Behance</a> 
          <a href="https://www.instagram.com/nullius_terram_/" target="_blank" className="button-footer">Instagram</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Redes;
