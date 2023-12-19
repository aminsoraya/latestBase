import React from "react";
import styles from "@/styles/address.module.scss";
import { GoTriangleRight } from "react-icons/go";
import { useAppStore } from "@/hooks/store";

export default function Address() {
  let { dealerData } = useAppStore();
  return (
    <>
      <div className={styles.address}>
        <span>
          <GoTriangleRight />
        </span>
        <span>Address:</span>
        <span>
          {dealerData?.business_street}
          {", "}
          {dealerData?.business_city?.city}
          {", "}
          {dealerData?.business_city?.Province?.province === "Alberta"
            ? "Ab"
            : dealerData?.business_city?.Province?.province}
          {", "}
          {dealerData?.business_postal}
        </span>
      </div>
      <div className={styles.address}>
        <span>
          <GoTriangleRight />
        </span>
        <span>Phone Number:</span>
        <span>{dealerData?.business_phone}</span>
      </div>
    </>
  );
}
