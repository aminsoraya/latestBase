"use client";
import Image from "next/image";

import LatestProduct from "@/components/home/latestProduct/index";
import BookApply from "@/components/home/bookApply";
import AboutUs from "@/components/home/aboutUs";
import GoogleReview from "@/components/home/googleReview";
import { useEffect } from "react";
import { useAppStore } from "@/hooks/store/index.js";
import Slider from "../components/home/slider";

export default function Home() {
  const { setCurrentMenu } = useAppStore();
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/" });
  }, []);

  return (
    <>
      <Slider />
      <LatestProduct />
      <BookApply />
      <AboutUs />
      <GoogleReview />
    </>
  );
}
