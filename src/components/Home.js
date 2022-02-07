import React from 'react';
import niyi from "../../src/assests/img/NIYI.jpg";

export const Home = () => {
  return (
    <>
     <div id="noti" className="notification wrapper">
      <p>¡Gracias! ¡Su solicitud ha sido recibida!</p>
      <span id="noti__close">&times;</span>
      <span id="slide"></span>
    </div>
    
    <div className="section-12">
    <div className="container w-container">
      <img src={niyi} loading="lazy" height="64" width="64" 
        sizes="64px" alt="" className="image"/>
      <h1 className="heading">Bienvenidos a mi Portfolio ✨</h1>
      <p className="paragraph">
        ¡Hola! soy Niyireth Ruiz Fernández y soy una aspirante a
        desarrolladora web front-end actualmete estudiante en Tomillo.org,
        cuento con estudios en Pre-prensa Digital para medios impresos y
        Marketing Digital; Mis intereses principales van dirigidos al
        desarrollo y diseño de páginas web. Algunos de mis diseños fueron
        hechos para mis proyectos estudiantiles y están vinculados en mi
        Porfolio.
        <br />
        Mis competencias incluyen: HTML, CSS, Javascript, Adobe illustrator,
        Photoshop, InDesign, Premiere Pro.
      </p>
      <a href="#email-form" className="button w-button">Contactáme ↓</a>
    </div>
  </div>
</>
  );
};

export default Home;