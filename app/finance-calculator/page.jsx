"use client";
import Container from "@/components/shared/container";
import styles from "@/styles/appraiseMyTrade.module.scss";
import Image from "next/image";
import Slider from "@/components/home/latestProduct/slider";
import { useEffect } from "react";
import { useAppStore } from "@/hooks/store";
import FinanceCalculator from "../../components/finance-calculator/form";

const AppraiseMyTrade = () => {
  const { setCurrentMenu } = useAppStore();

  //set current menu(active menu)
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/finance-calculator" });
  }, []);

  return (
    <div className={`${styles.main} pt-[100px]`}>
      <Container>
        <div className="container">
          <div className="row">
            <div className={`${styles.head} col-lg-6 col-md-12`}>
              <h2>Finance Calculator</h2>
              <p>
                This Finance calculator will assist you in estimating the cost
                of borrowing if you want to buy a new automobile and are
                considering taking out a loan. Furthermore, you will be able to
                determine whether you can afford to take out that particular
                loan using this car loan payment calculator.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.img}>
                <Image
                  fill
                  src="/img/Finance-calcoulator.jpg"
                  sizes="(max-width: 780px) 100vw, 780px"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5">
              <Container>
                <div className={styles.form}>
                  <h2>Calculate Your Auto Loan Payment</h2>
                  <FinanceCalculator />
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
