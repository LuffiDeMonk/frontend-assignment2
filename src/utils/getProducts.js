import { useQuery } from "react-query";
import { RootApi, fetchAllProducts } from "../api/Api";

export const getAllProductsData = (term) => {
  const { data, isLoading } = useQuery(["products"], () => fetchAllProducts(), {
    refetchOnWindowFocus: false,
    select: (data) => {
      let temp = data?.filter((item) =>
        item.title.toLowerCase().includes(term)
      );
      return temp;
    },
  });
  return { data, isLoading };
};
