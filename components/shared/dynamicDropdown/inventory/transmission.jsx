import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const Transmission = (props) => {
  const {
    allObjects: { transmission: dynamicTransmission },
    advancedSearchData: { vehicleTransmission_full },
  } = useAppStore();

  const transmission = useMemo(() => {
    if (dynamicTransmission) {
      return dynamicTransmission;
    } else if (vehicleTransmission_full) {
      return vehicleTransmission_full;
    }
    return [];
  }, [dynamicTransmission, vehicleTransmission_full]);

  return transmission
    .sort((a, b) => a - b)
    .map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() => props.callback({ key: value, alias: value })}
      >
        {value}
      </span>
    ));
};

export default Transmission;
