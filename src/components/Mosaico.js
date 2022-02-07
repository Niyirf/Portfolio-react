import React from 'react';
import pagtz from "../assests/img/Pag-TZ.png";
import portfolio from "../assests/img/porfolio-2.jpg";
import pagdg from "../assests/img/Pag-DG.png";
import encuesta from "../assests/img/Encuesta.png";
import pagda from "../assests/img/Pag-DA.png"
import paggt from "../assests/img/Pag-GT.png";


export const Mosaico = () => {
    return (
        <>
            <div>
                <div className="container-4 w-container">
                    <div className="columns-5 w-row">
                        <h1 id="proyectos">.</h1>
                        <div className="text-align-center">PORFOLIO</div>
                        <br />
                        <div className="column-11 w-col w-col-4">
                            <article id="3685" className="location-listing">
                                <a className="location-title" href="https://zaperevistainterac.wixsite.com/zape">Página The Zape's</a>

                                <div className="location-image">
                                    <a href="fts">
                                        <img width="300" height="169" src={pagtz} alt="revista interactiva" />
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="column-10 w-col w-col-4">
                            <article id="3685" className="location-listing">
                                <a className="location-title" href="fts">Diseños</a>

                                <div className="location-image">
                                    <a href="fts">
                                        <img width="300" height="169" src={portfolio} alt="diseño-grafico" />
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="column-12 w-col w-col-4">
                            <article id="3685" className="location-listing">
                                <a className="location-title" href="fts">Página para Diseñador Gráfico</a>

                                <div className="location-image">
                                    <a href="https://niyifernandez5.wixsite.com/pagina-dg">
                                        <img width="300" height="169" src={pagdg} alt="Diseñador Gráfico" />
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3">
                <div className="container-2 w-container">
                    <div className="columns-3 w-row">
                        <div className="column-15 w-col w-col-4">
                            <article id="3685" className="location-listing">
                                <a className="location-title" href="fts">Homenaje a Debora Árango</a>

                                <div className="location-image">
                                    <a href="https://codepen.io/niyirf/full/qBPXOpW">
                                        <img width="300" height="169" src={pagda} alt="homenaje-da"  />
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="column-14 w-col w-col-4">
                            <article id="3685" className="location-listing">
                                <a className="location-title" href="fts">Encuesta para NiNis</a>

                                <div className="location-image">
                                    <a href="https://codepen.io/niyirf/pen/qBPXrJj">
                                        <img width="300" height="169" src={encuesta} alt="encuesta" />
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="column-13 w-col w-col-4">
                            <article id="3685" className="location-listing">
                                <a className="location-title" href="fts">Página productos tejidos</a>

                                <div className="location-image">
                                    <a href="https://codepen.io/terrarfn/full/dyVzxVN">
                                        <img width="300" height="169" src={paggt} alt="pag-gato-negro" />
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mosaico;


