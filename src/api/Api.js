import Axios from "axios";

export const RootApi = Axios.create({
  baseURL: "https://fakestoreapi.com",
});

//fetcher function
export const fetchAllProducts = async () => {
  const { data } = await RootApi.get("/products");
  return data;
};

//category fetcher function
export const fetchAllCategories = async () => {
  const { data } = await RootApi.get("/products/categories");
  return data;
};

// single product fetcher function
export const fetchSingleProduct = async (id) => {
  const { data } = await RootApi.get(`/products/${id}`);
  return data;
};
