import { useQuery } from "react-query";
import { fetchAllCategories } from "../api/Api";

export const getAllCategories = () => {
  const { data: categories } = useQuery(
    ["categories"],
    () => fetchAllCategories(),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        let temp = data?.map((item) => item);
        temp.unshift("all");
        return temp;
      },
    }
  );
  return { categories };
};
