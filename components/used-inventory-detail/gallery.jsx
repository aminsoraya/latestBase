import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useAppStore } from "@/hooks/store";
import "./styles.css";
import Image from "next/image";

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
              <Image
                fill
                objectFit="responsive"
                sizes="(min-width:740px) 674px, calc(95.48vw - 18px)"
                src={`${baseSpecialImageUrl}${item.media_src}`}
                key={index}
                priority={true}
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
              <Image
                width={200}
                height={50}
                priority={true}
                quality={50}
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
