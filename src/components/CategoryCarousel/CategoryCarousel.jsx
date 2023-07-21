import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { selectFilter } from "../../features/FilterSlice";
import Container from "../Container/Container";
import { getAllCategories } from "../../utils/getCategory";

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const { categories } = getAllCategories();
  const [select, setSelect] = useState(categories ? categories[0] : "all");
  const handleSelect = (category) => {
    setSelect(category);
    dispatch(selectFilter(category));
  };
  return (
    <Container className="mt-20">
      <Swiper
        className="w-full"
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          500: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5.5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {categories?.map((item) => (
          <SwiperSlide key={item}>
            <div
              onClick={() => handleSelect(item)}
              className={`min-w-fit w-full h-8 border border-orange-400 rounded-full text-[10px] sm:text-xs font-semibold flex items-center justify-center cursor-pointer capitalize hover:bg-orange-400 hover:text-white transition-colors duration-150 ${
                select === item ? "bg-orange-400 text-white" : ""
              }`}
            >
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CategoryCarousel;
