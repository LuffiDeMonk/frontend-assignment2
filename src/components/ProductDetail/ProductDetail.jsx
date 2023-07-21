import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { BiCart } from "react-icons/bi";
import { addToCart } from "../../features/CartSlice";
import { useDispatch } from "react-redux";

const ProductDetail = ({ singleProductData }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleCart = () => {
    let cart = {
      id: singleProductData?.id,
      title: singleProductData?.title,
      image: singleProductData?.image,
      quantity: quantity,
      price: singleProductData?.price * quantity,
      unitPrice: singleProductData?.price,
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
  const handleIncrement = () => {
    return setQuantity((prevQty) => prevQty + 1);
  };
  const handleDecrement = () => {
    if (quantity <= 1) {
      return setQuantity(1);
    } else {
      return setQuantity((prevQty) => prevQty - 1);
    }
  };
  return (
    <>
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
      <div className="basis-[35%] shrink-0">
        <img
          src={singleProductData?.image}
          alt=""
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold">{singleProductData?.title}</h1>
        <p className="text-sm text-gray-500 font-light text-justify">
          {singleProductData?.description}
        </p>

        <h2 className="text-3xl text-orange-400 font-semibold">{`$${singleProductData?.price}`}</h2>
        <div className="flex w-40 h-10">
          {/* to increment the quantity of item */}
          <button
            className="basis-1/3 bg-orange-400 text-white text-xl outline-none focus:outline-none"
            onClick={handleIncrement}
          >
            +
          </button>
          <input
            readOnly={true}
            type="text"
            className="basis-1/3 w-full text-center border border-orange-400 outline-none focus:outline-none"
            value={quantity}
          />
          {/* to decrease the quantity of the item */}
          <button
            className="basis-1/3 bg-orange-400 text-white text-xl outline-none focus:outline-none"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <button
          onClick={handleCart}
          className="w-40 h-12 outline-none focus:outline-none text-orange-400 hover:text-white hover:bg-orange-400 border border-orange-400 flex items-center justify-center gap-1 transition-colors duration-200"
        >
          <BiCart size={25} />
          <span className="text-md font-semibold">Add to cart</span>
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
