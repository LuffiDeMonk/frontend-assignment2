import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { clearModalProduct, togglePortal } from "../../features/ModalSlice";
import ProductDetail from "../ProductDetail/ProductDetail";

const Portal = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.modal.modalProduct);
  const bodyStyles = document.body.style;

  const handleModalClose = () => {
    dispatch(togglePortal());
    dispatch(clearModalProduct());
  };
  return createPortal(
    <div
      onClick={handleModalClose}
      className="fixed top-0 left-0 w-screen h-screen hidden lg:flex items-center justify-center z-20 bg-black/50 backdrop-blur-lg"
    >
      <div
        className="w-[50rem] h-[35rem] bg-white flex gap-3 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ProductDetail singleProductData={data} />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Portal;
