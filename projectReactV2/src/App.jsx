
import React from "react";
import HEADER from "./componentes/HEADER"
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import PAGINAS from "./componentes/PAGINAS"
function App() {

  return (
    <>
      <div className="App">
      <Router>
        <HEADER/>

        <PAGINAS/>
      </Router>
      </div>
    </>
  )
}

export default App
