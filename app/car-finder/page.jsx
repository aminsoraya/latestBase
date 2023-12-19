"use client";
import Container from "@/components/shared/container";
import styles from "@/styles/appraiseMyTrade.module.scss";
import Image from "next/image";
import Slider from "@/components/home/latestProduct/slider";
import { useEffect } from "react";
import { useAppStore } from "@/hooks/store";
import PersonalInformationForm from "../../components/carFinder/form";

const AppraiseMyTrade = () => {
  const { setCurrentMenu, baseImageUrl, baseUrl, domain } = useAppStore();

  //set current menu(active menu)
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/car-finder" });
  }, []);

  return (
    <div className={`${styles.main} pt-[100px]`}>
      <Container>
        <div className="container">
          <div className="row">
            <div className={`${styles.head} col-lg-6 col-md-12`}>
              <h2>Car Finder</h2>
              <p>
                With our car finder division, we devote the time and resources
                necessary to locate the ideal quality vehicle that you would
                seek out on your own. This is a fantastic service for busy
                individuals, families, or corporations who are looking for a
                specific make and model or type of vehicle but don’t have the
                time to go from car to car looking for it. When you’re shopping
                for a vehicle, we also have a huge selection of high-quality
                used vehicles at the dealership for you to consider.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.img}>
                <Image
                  fill
                  src="/img/ford_mustang_mach_1_2021_4k-HD-1-1024x576.jpg"
                  sizes="(max-width: 780px) 100vw, 780px"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5">
              <Container>
                <div className={styles.form}>
                  <h2>Personal Information</h2>
                  <PersonalInformationForm />
                </div>
              </Container>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 pt-5">
              <h2>The Latest Products</h2>
            </div>
            <div className="col-lg-12 pt-3">
              <Slider slidesPerView={3} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppraiseMyTrade;
