import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import sliderImg from "../assets/slider-image.jpg";
import sliderImgTwo from "../assets/slider-image-two.jpg";
import sliderImgThree from "../assets/slider-image-three.jpg";

const Slider = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper w-full h-[64vh] cursor-grab"
    >
      <SwiperSlide>
        <img
          className="w-full object-cover h-[850px] md:h-[500px]"
          src={sliderImgThree}
          alt="slider-img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-[850px]  md:h-[500px]"
          src={sliderImg}
          alt="slider-img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-[850px]  md:h-[500px]"
          src={sliderImgTwo}
          alt="slider-img"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
