import React,{useState,useEffect, createContext} from "react";
import Data from "../Data.jsx"


export const DataContext = createContext();

export const DataProvider= (props) =>{
    const[productos, setProductos] = useState([])

    useEffect(() =>{
      const producto = Data
      setProductos(producto)  
    },[])

    const value= {
        productos : [productos]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}