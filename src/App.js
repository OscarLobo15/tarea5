import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Oscar from "./components/Oscar";
import Max from "./components/Max";
import Martin from "./components/Martin";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "./CSS/style.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < NavBar />
        
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/inicio" element={<Inicio/>}/>
          <Route exact path="/oscar" element={<Oscar/>}/>
          <Route exact path="/max" element={<Max/>}/>
          <Route exact path="/martin" element={<Martin/>}/>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
