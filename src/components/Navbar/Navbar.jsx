import React from "react";
import { Link } from "react-router-dom";

//icons import
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

//import container component
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white fixed top-0 left-0 border-b border-stone-300">
      <Container className="h-full flex items-center justify-between">
        {/* logo */}
        <Link
          to="/"
          className="h-full text-xl font-bold flex items-center justify-center"
        >
          <BiSolidShoppingBags size={30} />
          Online<span className="text-orange-500">Store</span>
        </Link>
        <div className="flex items-center justify-center gap-4 h-full">
          <form>
            <input type="text" />
          </form>
          <div className="relative h-full flex items-center justify-center">
            <AiOutlineShoppingCart size={25} />
            <div className="w-4 h-4 bg-orange-500 text-white text-xs absolute top-3 -right-2 flex items-center justify-center rounded-full">
              1
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
