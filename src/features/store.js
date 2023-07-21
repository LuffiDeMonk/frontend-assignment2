import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "./FilterSlice";
import CartReducer from "./CartSlice";
import ModalProduct from "./ModalSlice";
export const store = configureStore({
  reducer: {
    filter: FilterReducer,
    cart: CartReducer,
    modal: ModalProduct,
  },
});
