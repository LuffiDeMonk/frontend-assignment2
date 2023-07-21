import { useEffect, useState } from "react";

export const useFilterHook = (category, data) => {
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    if (category === "") {
      setFilteredData(data);
    } else if (category) {
      let temp = data?.filter(
        (item) => item.category.toLowerCase() === category
      );
      setFilteredData(temp);
    }
  }, [data, category]);

  return { filteredData };
};
