"use client";
import styles from "@/styles/bookApply.module.scss";
import Image from "next/image";
import Container from "@/components/shared/container";
import Button from "@/components/shared/button";

const BookApply = () => {
  const imageUrl =
    "/img/2022_bentley_flying_spur_hybrid_5k_7-HD-1-scaled-pqj35bw2yuysg3t40p19etb8ekfo1l8dsc9w53a6q0.jpg";

  return (
    <div className={styles.main}>
      <div className="row">
        <div
          className={`${styles.divImage} col-sm-12 col-lg-4 d-none d-xl-block`}
        >
          <Image
            src={imageUrl}
            sizes="(max-width:1200px) 100vw"
            height={400}
            width={370}
            placeholder="empty"
          />
        </div>
        <div
          className={`${styles.divText} col-lg-6 col-xl-4 col-md-6 col-sm-12`}
        >
          <h2>Apply For Financing</h2>
          <p>
            The United Auto Sales Ltd financing application is dedicated to
            exceeding your expectations throughout your visit to our dealership.
            We make every effort to ensure that each customer is completely
            satisfied.
          </p>
          <div className={styles.button}>
            <Button>Apply Now</Button>
          </div>
        </div>
        <div
          className={`${styles.divText} col-lg-6 col-xl-4 col-md-6 col-sm-12`}
        >
          <h2>Book An Appointment</h2>
          <p>
            The majority of customers now prefer to be able to book appointments
            quickly and easily online , So we here at United Auto Sales Ltd have
            decided to provide you with the tools needed for booking an
            appointment at the time of your convenience .
          </p>
          <div className={styles.button}>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookApply;
