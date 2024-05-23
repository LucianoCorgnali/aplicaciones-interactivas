import React from 'react'
import ICONO from  "../../assets/HEADER.jpg";


export const HEADER = () => {
  return (
    <header>
        
      <a href="#">
        <div className="logo">
          <img src={ICONO} alt="logo" />
        </div>
      </a>
      
      <ul>
        <li>
          <a href="">INICIO</a>
        </li>
        <li>
          <a href="">PRODUCTOS</a>
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
