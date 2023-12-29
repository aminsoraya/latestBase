import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const MaxYear = (props) => {
  const {
    allObjects: { year },
    advancedSearchData: { vehicleYear_full },
  } = useAppStore();

  const years = useMemo(() => {
    if (year) {
      return year;
    } else if (vehicleYear_full) {
      return Object.keys(vehicleYear_full);
    }
    return [];
  }, [year, vehicleYear_full]);

  return years
    .sort((a, b) => b - a)
    .map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() =>
          props.callback({ key: value, alias: value, type: "YEAR" })
        }
      >
        {value}
      </span>
    ));
};

export default MaxYear;
