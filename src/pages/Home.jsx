import React from "react";

import Container from "../components/Container/Container";

import { getAllProductsData } from "../utils/getProducts";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  const { data, isLoading } = getAllProductsData();
  console.log(data);
  return (
    <Container className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.map((item) => (
        <ProductCard data={item} />
      ))}
    </Container>
  );
};

export default Home;
