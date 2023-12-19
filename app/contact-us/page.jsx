"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/dealershipContactUs.module.scss";
import { useAppStore } from "@/hooks/store";
import Container from "@/components/shared/container";
import Button from "@/components/shared/button";

export default function Page() {
  const { setCurrentMenu } = useAppStore();

  useEffect(() => {
    setCurrentMenu({ currentMenu: "/about-us" });
  }, []);

  return (
    <div className={styles.main}>
      <Container>
        <div className="row p-0 w-100">
          <div className={`col-lg-5 ${styles.img} d-none d-xl-block`}>
            <h2>Contact Us</h2>
            <Image src="/img/Contactus.jpg" objectFit="contain" fill />
          </div>
          <div className={`col-lg-4`}>

          </div>
        </div>
      </Container>
    </div>
  );
}
