"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/dealershipAboutUs.module.scss";
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
        <div className="row p-0">
          <div className={`col-4 ${styles.img} d-none d-xl-block`}>
            <Image
              src="/img/2022_bentley_flying_spur_hybrid_odyssean_edition_4k_2-HD-1-scaled-pqj4sd5679s3mg22apoqif0firgkh8lhkjaq7pr1xk.jpg"
              fill
            />
          </div>
          <div className={`col-lg-8 col-md-12 ${styles.content}`}>
            <h2>About Us</h2>
            <p>
              United Auto Sales Ltd would be honored to have you as a friend and
              a customer. We are here to collect best cars available in the
              market and help you to choose the best one based on your needs and
              interests. You are also more than welcome to contact us for
              trading or selling your vehicle. We try our best to offer you a
              fair and rational deal. We inspect and safety check our vehicles
              carefully and offer you the inspection report as well as other
              available documents about the vehicle history professionally.
              Please, visit our website and search through different cars and
              provided information and contact us to experience our customer
              service and care. Thank You!
            </p>
            <div className={styles.button}>
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
