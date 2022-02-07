import React from 'react';

 const Header = () => {
  return (
    <nav id="navbar__header" className="navbar navbar-expand-lg navbar-light bg-light no__sticky ">
    <div className="container-fluid">
       <a className="navbar-brand" href="nav"></a>
       <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="text-center">   
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
           <li className="nav-item  d-flex aling-self-center">
             <a className="nav-link active" aria-current="page" href="nav">Inicio</a>
           </li>
           <li className="nav-item dropdown d-flex aling-self-center">
             <a className="nav-link dropdown-toggle" href="nav" id="navbarDropdown" role="button" data-bs-toggle="dropdown"aria-expanded="false">
               Porfolio
             </a>
             <ul className="dropdown-menu " aria-labelledby="navbarDropdown" id="dropdown">
               <li><a className="dropdown-item " href="#proyectos">Proyectos</a></li>
               <li><a className="dropdown-item" href="#practicas">Practicas</a></li>
               <li>
                 <hr className="dropdown-divider"/>
               </li>
             </ul>
           </li>
           <li className="nav-item d-flex aling-self-center">
             <a className="nav-link" href="#experiencia">Experiencia</a>
           </li>
           <li className="nav-item d-flex aling-self-center">
             <a className="nav-link" href="#contacto">Contacto</a>
           </li>
         </ul>
         </div>

       </div>
     </div>
   </nav>

  );
};

export default Header;
