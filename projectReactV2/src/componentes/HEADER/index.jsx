import React from 'react'
import ICONO from  "../../assets/HEADER.jpg";
import { useNavigate } from 'react-router-dom';

export const HEADER = () => {

  // para ir a distintas rutas
  
  const navigate = useNavigate()

  const viajarVistaInicio = ()=>{
    navigate("/")

  }

  const viajarVistaProductos = ()=>{
    navigate("/productos")

  }





  return (
    <header>
        
      <a href="#">
        <div className="logo">
          <img src={ICONO} alt="logo"  onClick={viajarVistaInicio}/>
        </div>
      </a>
      
      <ul>
        <li>
          <a href="" onClick={viajarVistaInicio}>INICIO</a>
        </li>
        <li>
          <a href="" onClick={viajarVistaProductos}>PRODUCTOS</a>
        </li>
      </ul>

      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className='item_total'>0</span>
      </div>

      
    </header>
  )
}

export default HEADER
