import React from "react";
import { toast, ToastContainer } from "react-toastify";

import Container from "../components/Container/Container";
import CartCard from "../components/CartCard/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleClearCart = () => {
    toast.success("Cart Cleared Successfully", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(clearCart());
  };
  return (
    <Container className="mt-20 space-y-3">
      <h2 className="text-2xl font-semibold">My cart</h2>
      {cartItems.length !== 0 ? (
        <div className="flex flex-col md:flex-row gap-4 bg-gray-100 p-4">
          <div className="h-96 overflow-y-auto flex flex-col gap-4 basis-[65%] shrink-0">
            {cartItems?.map((item) => (
              <CartCard data={item} key={item.id} />
            ))}
          </div>
          <div className="w-full bg-white h-60 md:h-80 rounded-lg shadow-lg md:pt-14 px-10 py-2 space-y-4">
            <div className="flex items-center justify-between">
              <span className="basis-[85%] shrink-0 text-sm font-light">
                Subtotal
              </span>
              <span className="w-full text-sm font-light">{`$${totalPrice.toFixed(
                2
              )}`}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="basis-[85%] shrink-0 text-sm font-light">
                Delivery Charges
              </span>
              <span className="w-full text-sm font-light">$0.00</span>
            </div>
            <div className="h-[1px] bg-black" />
            <div className="flex items-center justify-between">
              <span className="basis-[85%] shrink-0 text-md font-bold">
                Grand Total
              </span>
              <span className="w-full text-sm text-orange-400 font-semibold">{`$${totalPrice.toFixed(
                2
              )}`}</span>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleClearCart}
                className="border border-orange-400 text-orange-400 hover:text-white font-semibold p-2 hover:bg-orange-400 w-full rounded-md transition-colors duration-200"
              >
                Clear Cart
              </button>
              <button className="bg-green-400 text-white font-semibold p-2 w-full rounded-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[30rem] md:h-96 bg-gray-100 flex items-center justify-center flex-col gap-4">
          <h1 className="text-gray-600 text-xl font-bold">
            Oops!! No Items in the Cart
          </h1>
          <Link
            to="/"
            className="text-white w-fit p-2 bg-orange-400 rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Cart;
