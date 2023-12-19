import React from "react";
import styles from "@/styles/latestProduct.module.scss";
import Container from "@/components/shared/container";
import Slider from "./slider";

export default function Index() {
  return (
    <div className={styles.main}>
      <Container>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 col-xl-4 ${styles.title}`}>
              <h2>The Latest Products</h2>
              <span>New and popular items at competitive prices</span>
            </div>
            <div className="col-xs-12 col-xl-8">
              <Slider />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
