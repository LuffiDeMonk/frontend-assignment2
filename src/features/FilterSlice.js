import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "",
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    selectFilter: (state, { payload }) => {
      if (payload === "all") {
        state.category = "";
      } else {
        state.category = payload;
      }
    },
    resetCategory: (state) => {
      return { ...state, category: "" };
    },
  },
});

export const { setSearch, selectFilter, resetCategory } = FilterSlice.actions;
export default FilterSlice.reducer;
