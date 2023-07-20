import Axios from "axios";

export const RootApi = Axios.create({
  baseURL: "https://fakestoreapi.com",
});

//fetcher function
export const fetchAllProducts = async () => {
  const { data } = await RootApi.get("/products");
  return data;
};
