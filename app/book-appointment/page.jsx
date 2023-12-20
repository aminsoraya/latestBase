"use client";
import Container from "@/components/shared/container";
import styles from "@/styles/appraiseMyTrade.module.scss";
import image from "@/public/img/book-appointment.jpg";
import Image from "next/image";
import { useEffect } from "react";
import { useAppStore } from "@/hooks/store";
import Slider from "@/components/home/latestProduct/slider";
import Form from "@/components/book-appointment/form";

const BookAppointment = () => {
  const { setCurrentMenu } = useAppStore();

  //set current menu(active menu)
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/book-appointment" });
  }, []);
  return (
    <div className={styles.main}>
      <Container>
        <div className="row w-100">
          <div className={`col-md-6 ${styles.content}`}>
            <h2>Book Appointment</h2>
            <p>
              The majority of customers now prefer to be able to book
              appointments quickly and easily online , So we here at United Auto
              Sales Ltd have decided to provide you with the tools needed for
              booking an appointment at the time of your convenience .
            </p>
          </div>
          <div
            className="col-md-6"
            style={{ height: "300px", position: "relative" }}
          >
            <Image placeholder="blur" src={image} fill />
          </div>
        </div>
        <div className="row w-100">
          <Form />
        </div>
        <div className="row w-100">
          <Slider />
        </div>
      </Container>
    </div>
  );
};

export default BookAppointment;
