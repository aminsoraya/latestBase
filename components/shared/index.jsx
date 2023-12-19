"use client";
import { useLayoutEffect, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useAppStore } from "@/hooks/store";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import ComponentProgress from "@/components/shared/componentProgress";

const Layout = (props) => {
  let {
    children,
    domain,
    dealerData,
    baseUrl,
    baseImageUrl,
    baseSpecialImageUrl,
  } = props;
  const { setInitialData } = useAppStore();

  useLayoutEffect(() => {
    setInitialData({
      domain,
      dealerData,
      baseUrl,
      baseImageUrl,
      baseSpecialImageUrl,
    });
  }, [domain, dealerData, baseUrl, baseImageUrl, baseSpecialImageUrl]);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    dealerData && (
      <>
        <Header />
        <ComponentProgress />
        {children}
        <ToastContainer />
        <Footer />
      </>
    )
  );
};

export default Layout;
