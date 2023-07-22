import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { resetCategory } from "../features/FilterSlice";
import { getAllProductsData } from "../utils/getProducts";
import { useFilterHook } from "../hooks/useFilterHook";

import Container from "../components/Container/Container";
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel";
import Portal from "../components/Portal/Portal";
import Loading from "../components/Loading/Loading";

//no data found component
const Error = () => {
  return (
    <Container>
      <div className="flex items-center justify-center bg-gray-100 text-gray-400 rounded-sm w-full h-[30rem] text-xl mt-5">
        No Result found
      </div>
    </Container>
  );
};

//view component which shows the data
const View = ({ data }) => {
  return (
    <>
      {data?.length === 0 && <Error />}
      <Container className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchTerm = useSelector((state) => state.filter.search);
  const { data, isLoading } = getAllProductsData(searchTerm);
  const showPortal = useSelector((state) => state.modal.isModalOpen);
  const category = useSelector((state) => state.filter.category);
  const { filteredData } = useFilterHook(category, data);

  useEffect(() => {
    dispatch(resetCategory());
  }, [location.pathName]);
  return (
    <>
      <CategoryCarousel />
      <View data={filteredData} />
      {showPortal && <Portal />}
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
