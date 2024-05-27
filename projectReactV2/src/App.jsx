
import React from "react";
import HEADER from "./componentes/HEADER"
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import PAGINAS from "./componentes/PAGINAS"
import { DataProvider } from "./context/DataProvider";
function App() {

  return (
    <>
      <DataProvider>
      <div className="App">
      <Router>
        <HEADER/>
        
        <PAGINAS/>
      </Router>
      </div>
      </DataProvider>
    </>
  )
}

export default App
