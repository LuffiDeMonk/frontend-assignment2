import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
//icons import
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import { addModalProduct, togglePortal } from "../../features/ModalSlice";
import { addToCart } from "../../features/CartSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    let cart = {
      id: data?.id,
      title: data?.title,
      image: data?.image,
      quantity: 1,
      price: data?.price,
      unitPrice: data?.price,
    };
    dispatch(addToCart(cart));
    toast.success("Item Added to Cart", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handlePortal = (data) => {
    dispatch(togglePortal());
    dispatch(addModalProduct(data));
  };
  return (
    <div className="w-full h-[20rem] max-h-[22rem] rounded-sm border border-stone-300 p-1">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full h-[14rem] group transition-all overflow-hidden relative border border-gray-300">
        <img
          src={data?.image}
          alt=""
          className="w-full h-full object-cover lg:group-hover:scale-105 transition-all duration-200"
        />
        {/* overlay for hover effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 hidden lg:group-hover:block transition-all duration-200" />
        {/* buttons for product card*/}
        <div className="w-10 h-1/2 absolute top-1/2 -right-12 group-hover:right-2 -translate-y-1/2 hidden lg:flex flex-col justify-center items-center gap-3 transition-all duration-200">
          <div className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-md text-white cursor-pointer">
            <AiOutlineHeart />
          </div>
          <div
            onClick={handleCart}
            className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-md text-white cursor-pointer"
          >
            <AiOutlineShoppingCart />
          </div>
          <div
            onClick={() => handlePortal(data)}
            className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-md text-white cursor-pointer"
          >
            <AiOutlineEye />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 w-full">
        <Link
          to={`/product/${data?.id}`}
          className="cursor-pointer text-md w-full overflow-hidden font-semibold whitespace-nowrap text-ellipsis"
        >
          {data?.title}
        </Link>
        <p className="text-sm text-gray-500 font-light capitalize">
          {data?.category}
        </p>
        <div className="flex gap-1 items-center">
          <h2 className="text-xl text-orange-400 font-bold">
            ${data?.price.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
