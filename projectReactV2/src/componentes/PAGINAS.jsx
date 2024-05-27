import React from 'react';
import {Routes, Route} from "react-router-dom";
import INICIO from "./inicio/index";
import Productos from "./PRODUCTOS/index";

const PAGINAS = () => {
  return (
    <>
    <section>
      <Routes>
        <Route path='/' element={<INICIO/>} />
        <Route path= "/productos" element={<Productos/>}  />
      </Routes>
    </section>
      
    </>
  )
}

export default PAGINAS;
