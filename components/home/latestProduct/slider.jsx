"use client";
import React from "react";
import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import { useVehicles } from "@/hooks/actions/vehicles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from "@/styles/latestProduct.module.scss";
import Button from "@/components/shared/button";

export default function Slider({ slidesPerView = 2 }) {
  let { baseSpecialImageUrl, baseUrl, domain } = useAppStore();

  let { data: specialData, isLoading } = useSWR(
    `${baseUrl}/api/dealership/vehicles/${domain}/special`,
    useVehicles
  );
  return (
    <>
      {specialData && (
        <Swiper
          slidesPerView={slidesPerView}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            700: {
              slidesPerView,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          navigation={true}
          className={styles.slideContainer}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
        >
          {specialData?.data?.map((item, index) => {
            if (item.thumbnail_cover_image != null)
              return (
                <SwiperSlide key={index}>
                  <div className={styles.container}>
                    <div className={styles.body}>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "200px",
                        }}
                      >
                        <div className={styles.img}>
                          <div className={styles.content}>
                            <Image
                              fill
                              src={`${baseSpecialImageUrl}${item.thumbnail_cover_image}`}
                            />
                          </div>
                        </div>
                        <div className={styles.side}>
                          <span>${item.sell_price.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className={styles.button}>
                        <span>
                          {item.Vehicle.model_year}
                          {item.Vehicle.make}
                        </span>

                        <Button>View Details</Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
          })}
        </Swiper>
      )}
    </>
  );
}
