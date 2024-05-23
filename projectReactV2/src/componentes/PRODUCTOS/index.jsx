import React from 'react'
import IMG from "../../assets/img01.jpg"

const PRODUCTOSLISTA = () => {
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          <img src={IMG} alt="" />
        </div>
      </div>
    </>
  )
}

export default PRODUCTOSLISTA
