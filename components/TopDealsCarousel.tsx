"use client";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide from "./Slide";
type Props = {};

const TopDealsCarousel = (props: Props) => {
  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  };
  return (
    <div className="mt-10 mx-auto flex items-center justify-center ">
      <Swiper
        breakpoints={breakpoints}
        className="mySwiper transition-all flex items-center justify-center"
        loop={true}
        direction="horizontal"
        speed={5000}
        effect="fade"
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Slide />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopDealsCarousel;
