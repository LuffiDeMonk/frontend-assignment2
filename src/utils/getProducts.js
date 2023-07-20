import { useQuery } from "react-query";
import { RootApi, fetchAllProducts } from "../api/Api";

export const getAllProductsData = () => {
  const { data, isLoading } = useQuery(["products"], () => fetchAllProducts());
  return { data, isLoading };
};
