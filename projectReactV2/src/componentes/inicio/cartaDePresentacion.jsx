import React from 'react';
import INFO from "../../assets/INFO.jpg";


const cartaDePresentacion = () => {
  return (
    <>
   
   <h1 className="title"></h1>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" >
        <div className="col-md-5 p-lg-12 mx-auto my-5">
          <h1 className="display-4">¿Qué es CSM?</h1>
          <p className="lead font-weight-normal">CSM busca repensar el contexto de la imagen de marca, aspiracional e inspiracional, CSM es un concepto de diseño que busca extenderse a todas las industrias.</p>
          <div className="container">
            <img src={INFO} className="img-fluid" alt="Logo" />
          </div>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
  </div>
    
    
    
    </>
  );
};

export default cartaDePresentacion;
