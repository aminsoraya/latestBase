import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useAppStore } from "@/hooks/store";
import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function App(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { baseSpecialImageUrl } = useAppStore();

  const images = Object.values(props);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((item, index) => {
          return (
            <SwiperSlide>
              <img
                src={`${baseSpecialImageUrl}${item.media_src}`}
                key={index}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images?.map((item, index) => {
          return (
            <SwiperSlide>
              <img
                src={`${baseSpecialImageUrl}${item.media_src}`}
                key={index}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
