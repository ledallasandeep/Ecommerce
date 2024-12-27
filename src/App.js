import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Coponents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Coponents/Project";
import Helpus from "./Coponents/Helpus";
import ServicesList from "./Coponents/Automotiv";
import Prac from "./Coponents/Prac";
import MakeAPIcall from "./Coponents/Apicall";
import Appcall from "./Coponents/Apicall";
import Shop from "./Coponents/Shop";
import Practise from "./Coponents/Practise";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route index element={<Project/>}/>
      </Routes>
      </BrowserRouter>
       <Helpus/>
      <ServicesList/>  
       <Prac/>
      <Appcall/>
       */}
      <Shop />
      <Practise />
    </div>
  );
}

export default App;
