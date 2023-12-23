import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useState } from "react";

const MinPrice = () => {
  const { advancedSearchData } = useAppStore();

  const [prices] = useState(advancedSearchData?.priceRange);

  return prices
    .sort((a, b) => a - b)
    .map((value, index) => (
      <span key={index} className={styles.item}>
        {value.toLocaleString()}
      </span>
    ));
};

export default MinPrice;
