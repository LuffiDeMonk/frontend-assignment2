import React from "react";
import { Link } from "react-router-dom";

//icons import
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

//import container component
import Container from "../Container/Container";
import Search from "../Search/Search";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.totalItems);
  return (
    <div className="w-full h-16 bg-white fixed top-0 left-0 border-b border-stone-300 z-10 px-3 md:px-0">
      <Container className="h-full flex items-center justify-between">
        {/* logo */}
        <Link
          to="/"
          className="h-full text-sm md:text-xl font-bold flex items-center justify-center"
        >
          <BiSolidShoppingBags size={30} />
          Online<span className="text-orange-500">Store</span>
        </Link>
        <div className="flex items-center justify-center gap-2 h-full">
          <Search />
          <Link
            to="/cart"
            className="relative h-full flex items-center justify-center"
          >
            <AiOutlineShoppingCart size={30} />
            <div className="w-6 h-6 bg-orange-500 text-white text-[10px] absolute top-1.5 -right-2 flex items-center justify-center rounded-full">
              {cartQuantity}
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
