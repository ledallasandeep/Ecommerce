import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./Coponents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Coponents/Project";
import ServicesList from "./Coponents/Trending";
import Shop from "./Coponents/Shop";
import ProductDetails from "./Coponents/ProductDetails";
import Jeevana from "./Coponents/Trending";
import items from "./Coponents/Data";
import Searchitem from "./Coponents/Searchitem";
import CartComponent from "./Coponents/CartComponent";

function App() {
  const [data, setData] = useState([...items]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Shop items={data} />} />
          <Route path="/Productpage/:id" exact element={<ProductDetails />} />
          <Route path="/electronics/:id" exact element={<Jeevana />} />
          <Route path="/search/:item" exact element={<Searchitem />} />
          <Route path="/cart" exact element={<CartComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
