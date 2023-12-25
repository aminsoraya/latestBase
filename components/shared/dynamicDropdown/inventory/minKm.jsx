import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useState } from "react";

const InventoryMaxKm = (props) => {
  const {
    advancedSearchData: { odometerKMRange, odometerMIRange },
  } = useAppStore();

  const [odometerType, setOdometerType] = useState(2);

  return (odometerType == 2 ? odometerKMRange : odometerMIRange)
    ?.sort((a, b) => a - b)
    ?.map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() => props.callback({ key: value, alias: value })}
      >
        {value.toLocaleString()}
      </span>
    ));
};

export default InventoryMaxKm;
