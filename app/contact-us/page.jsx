"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/dealershipContactUs.module.scss";
import { useAppStore } from "@/hooks/store";
import Container from "@/components/shared/container";
import Button from "@/components/shared/button";
import Timeworks from "@/components/shared/footer/bussniessHours";
import Address from "@/components/shared/footer/address";
import image from "@/public/img/Contactus.jpg";

export default function Page() {
  const { setCurrentMenu } = useAppStore();

  useEffect(() => {
    setCurrentMenu({ currentMenu: "/about-us" });
  }, []);

  return (
    <div className={styles.main}>
      <Container>
        <div className="row p-0 w-100">
          <div
            className={`col-lg-4 col-md-6 col-xs-12 ${styles.img} `}
          >
            <h2>Contact Us</h2>
            <Image src={image} placeholder="blur" objectFit="contain" fill />
          </div>
          <div className={`col-lg-4 col-md-6 col-xs-12 ${styles.timeWorks}`}>
            <Timeworks />
          </div>
          <div className={`col-lg-4 col-md-6 col-xs-12`}>
            <div className={styles.address}>
              <Address />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
