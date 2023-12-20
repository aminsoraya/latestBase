"use client";
import Container from "@/components/shared/container";
import styles from "@/styles/appraiseMyTrade.module.scss";
import Image from "next/image";
import Slider from "@/components/home/latestProduct/slider";
import { useEffect } from "react";
import { useAppStore } from "@/hooks/store";
import PersonalInformationForm from "../../components/finance-application/form";
import image from "@/public/img/Depositphotos_146421435_s-2019.jpg";

const AppraiseMyTrade = () => {
  const { setCurrentMenu, baseImageUrl, baseUrl, domain } = useAppStore();

  //set current menu(active menu)
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/finance-application" });
  }, []);

  return (
    <div className={`${styles.main} pt-[100px]`}>
      <Container>
        <div className="container">
          <div className="row">
            <div className={`${styles.head} col-lg-6 col-md-12`}>
              <h2>Finance Application</h2>
              <p>
                It’s finally time to purchase that car you’ve been eyeing, but
                how can you secure financing at the dealership? We’ll go over
                everything you’ll need.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.img}>
                <Image
                  fill
                  src={image}
                  placeholder="blur"
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
