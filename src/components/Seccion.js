import React from 'react';
import proyecf from "../assests/img/PORTADA-PROYECTO-FINAL.jpg";
import homenaje from "../assests/img/Homenaje Debora Arango.png";
import gato from "../assests/img/Gato negro.png";

export const Seccion = () => {
  return (
    <div className="section-2">
    <div className="container w-container">
      <div className="columns-2 w-row">
        <h1 id="practicas">.</h1>
        <div className="column-18 w-col w-col-4">
          <div className="location-image">
            <a href="prc">
              <img width="300"height="169" src={proyecf} alt="Revista Interactiva" />
            </a>
          </div>
          <h2 className="heading-2">Revista Interactiva The Zape's</h2>
          <p className="paragraph-2">
            Proyecto final para mi Técnica en Pre-prensa Digital para medios
            impresos fue hacer una revista interactica fisica y digital, el
            contenido de ella es sobre diversos cuadernillos de dibujo con sus
            respectivas actividades que van subiendo su nivel de dificultad.
          </p>
          <a href="https://zaperevistainterac.wixsite.com/zape" className="button w-button">Ver más</a>
        </div>
        <div className="column-2 w-col w-col-4">
          <div className="location-image">
            <a href="prc">
              <img width="300" height="169" src={homenaje} alt="homenaje debora"/>
            </a>
          </div>
          <h2 className="heading-2">Homenaje Débora Arango</h2>
          <p className="paragraph-2">
            Proyecto de práctica donde en el hice un homenaje para una artista
            Colombiana donde además de hablar de su trayectoria, hago alución
            a sus tan habladas y señaladas obras; es mi primer trabajo
            utilizando HTML y CSS.<br />
          </p>
          <a href="https://codepen.io/niyirf/full/qBPXOpW" className="button w-button">Ver más</a>
        </div>
        <div className="column w-col w-col-4">
          <div className="location-image">
            <a href="prc">
              <img width="300" height="169" src={gato} alt="Gato negro"/>
            </a>
          </div>
          <h2 className="heading-2">Venta de producto Gato Negro</h2>
          <p className="paragraph-2">
            Proyecto de práctica en el cuál utilice un emprendimiento familiar
            para mediante HTML y CSS crear una página donde promocionar y dar
            a conocer los productos que ofrece la marca Gato Negro. <br/>
          </p>
          <a href="https://codepen.io/terrarfn/full/dyVzxVN" className="button deactive w-button">Ver más</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Seccion;
