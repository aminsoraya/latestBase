"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useSliderData } from "@/hooks/actions/api/sliders";
import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
// import Skeleton from "@/components/shared/skeleton";
import Welcome from "./welcom";

export default function Slider() {
  let { baseImageUrl, baseUrl, domain } = useAppStore();

  let { data, isLoading } = useSWR(
    `${baseUrl}/api/dealerweb/websliders/${domain}`,
    useSliderData
  );
 
  return (
    <>
      {/* {isLoading && <Skeleton height={500} />} */}
      {data && (
        <div style={{ position: "relative" }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {data?.rows?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="relative "
                    style={{ height: "700px", position: "relative" }}
                  >
                    <Image
                      src={`${baseImageUrl}${item.image_name}`}
                      alt=""
                      fill
                      objectFit="cover"
                      loading="lazy"
                      placeholder="empty"
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 80vw, 80vw"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Welcome />
        </div>
      )}
    </>
  );
}
