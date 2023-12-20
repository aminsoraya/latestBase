"use client";
import Container from "@/components/shared/container";
import styles from "@/styles/appraiseMyTrade.module.scss";
import Image from "next/image";
import Slider from "@/components/home/latestProduct/slider";
import { useEffect } from "react";
import { useAppStore } from "@/hooks/store";
import PersonalInformationForm from "../../components/appraiseMyTrade/form";
import image from "@/public/img/how-to-trade-in-a-car-3-780x443-1.jpg";

const AppraiseMyTrade = () => {
  const { setCurrentMenu, baseImageUrl, baseUrl, domain } = useAppStore();

  //set current menu(active menu)
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/appraise-my-trade" });
  }, []);

  return (
    <div className={`${styles.main} pt-[100px]`}>
      <Container>
        <div className="container">
          <div className="row">
            <div className={`${styles.head} col-lg-6 col-md-12`}>
              <h2>Appraise My Trade</h2>
              <p>
                Are you trading in a car ? Perhaps you are just looking to sell
                a car in Langley? Either way, the team at United Auto Sales Ltd
                can help and you can get started right now by filling out the
                form that we have provided for you below. We just want to hear a
                little bit about yourself and the car you are looking to sell
                and be sure to get the most precise value for your car.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.img}>
                <Image
                  fill
                  placeholder="blur"
                  src={image}
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
