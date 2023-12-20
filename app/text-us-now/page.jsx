"use client";
import Container from "@/components/shared/container";
import styles from "@/styles/textUsNow.module.scss";
import image from "@/public/img/Text-us-now.jpg";
import Image from "next/image";
import { useEffect } from "react";
import { useAppStore } from "@/hooks/store";
import Slider from "@/components/home/latestProduct/slider";
import Form from "@/components/text-us-now/form";

const BookAppointment = () => {
  const { setCurrentMenu } = useAppStore();

  //set current menu(active menu)
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/text-us-now" });
  }, []);
  return (
    <div className={styles.main}>
      <Container>
        <div className="row w-100">
          <div className={`col-md-6 ${styles.content}`}>
            <h2>Text Us Now</h2>
            <p>
              Send us a quick note using the form below. We will get back to you
              very shortly.Your comments, suggestions, and feedback is very
              important to us. It is our mission to accommodate, and serve you
              as best as we possibly can.
            </p>
          </div>
          <div
            className="col-md-6"
            style={{ height: "300px", position: "relative" }}
          >
            <Image placeholder="blur" src={image} fill />
          </div>
        </div>
        <div className="row w-100 mt-5 mb-5">
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
