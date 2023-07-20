import React from "react";

//import for routers
import { Routes, Route } from "react-router-dom";

//components import
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
