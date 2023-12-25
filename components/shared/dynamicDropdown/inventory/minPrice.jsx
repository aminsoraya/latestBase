import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useState } from "react";

const MinPrice = (props) => {
  const { advancedSearchData } = useAppStore();

  const [prices] = useState(advancedSearchData?.priceRange);

  return prices
    .sort((a, b) => a - b)
    .map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() => props.callback({ key: value, alias: value })}
      >
        {value.toLocaleString()}
      </span>
    ));
};

export default MinPrice;
