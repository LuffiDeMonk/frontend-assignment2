import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalProduct: "",
};

const modalSlice = createSlice({
  name: "portal",
  initialState,

  reducers: {
    togglePortal: (state) => {
      return { ...state, isModalOpen: !state.isModalOpen };
    },
    addModalProduct: (state, action) => {
      state.modalProduct = action.payload;
    },
    clearModalProduct: (state) => {
      state.modalProduct = [];
    },
  },
});

export const { togglePortal, addModalProduct, clearModalProduct } =
  modalSlice.actions;
export default modalSlice.reducer;
