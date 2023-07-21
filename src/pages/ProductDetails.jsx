import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { getSingleProduct } from "../utils/getSingleProduct";
import Container from "../components/Container/Container";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Loading from "../components/Loading/Loading";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const { singleProductData, singleProductLoading } = getSingleProduct(id);
  return (
    <>
      {singleProductLoading && <Loading />}
      <Container>
        <div className="mt-20 mb-4 text-xs font-semibold capitalize whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="text-xs font-semibold capitalize">Home</span> /
          <span className="text-xs font-semibold capitalize mx-1">
            {singleProductData?.category}
          </span>
          /
          <span className="text-xs font-semibold capitalize mx-1">
            {singleProductData?.title}
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <ProductDetail singleProductData={singleProductData} />
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
