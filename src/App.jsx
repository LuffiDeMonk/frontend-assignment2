//import for routers
import { Routes, Route, useLocation } from "react-router-dom";

//components import
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
