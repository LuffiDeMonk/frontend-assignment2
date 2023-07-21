import { useQuery } from "react-query";
import { fetchSingleProduct } from "../api/Api";

export const getSingleProduct = (id) => {
  const { data: singleProductData, isLoading: singleProductLoading } = useQuery(
    ["product", id],
    () => fetchSingleProduct(id),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { singleProductData, singleProductLoading };
};
