import Container from "../components/Container/Container";

import { getAllProductsData } from "../utils/getProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel";
import Portal from "../components/Portal/Portal";
import { useSelector } from "react-redux";
import { useFilterHook } from "../hooks/useFilterHook";
import Loading from "../components/Loading/Loading";

//view component which shows the data
const View = ({ data }) => {
  return (
    <Container className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.map((item) => (
        <ProductCard data={item} key={item.id} />
      ))}
    </Container>
  );
};

const Home = () => {
  const searchTerm = useSelector((state) => state.filter.search);
  const { data, isLoading } = getAllProductsData(searchTerm);
  const showPortal = useSelector((state) => state.modal.isModalOpen);
  const category = useSelector((state) => state.filter.category);
  const { filteredData } = useFilterHook(category, data);

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
