import React from 'react';

export const Contact = () => {
    return (
        <>
        <div className="section-6">
            <div className="container-5 w-container">
                <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="form" />
                        <h1 className="heading-3" id="contacto">Ponte en contacto</h1>
                        <p className="paragraph-5">Y envia los detalles de tu propuesta</p>
                        <label htmlFor="name" className="body">Nombre</label> 
                        <input type="text" className="text-field w-input" placeholder="Ingrese su nombre y apellido" maxLength="256" name="name" data-name="Name" id="inputName" />
                        <label htmlFor="phone" className="body">Teléfono</label>
                         <input type="number" className="text-field w-input" placeholder="Ingrese su número de contacto"/>
                            <label htmlFor="email" className="field-label">Correo Electrónico</label>
                            <input type="email" className="text-field-2 w-input" placeholder="Ingrese su Correo Electrónico" maxLength="256"
                                name="email" data-name="Email" id="inputEmail"
                                required="" />
                            <label htmlFor="email-2" className="field-label-2">Comentarios</label>
                            <textarea name="field" id="inputField" maxLength="5000" className="textarea w-input" placeholder="Ingresa tus comentarios"></textarea>
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" placeholder='Recuerdame' name="remember"/> 
                            </label>
                            <input type="submit" value="Enviar 📬" name="send" data-wait="Por favor espera..." className="button w-button"></input>
                            <div className="w-form-fail">
                                <div>¡UPS! Se produjo un error al enviar el htmlFormulario.</div>
                            </div>
                        </div>
                    </div>
            </div>
        
            </>
            
            );
};
export default Contact;

            
