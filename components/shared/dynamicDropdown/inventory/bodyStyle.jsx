import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const BodyStyle = (props) => {
  const {
    allObjects: { bodyStyle },
    advancedSearchData: { vehicleBodyStyle_full },
  } = useAppStore();

  const style = useMemo(() => {
    if (bodyStyle) {
      return bodyStyle;
    } else if (vehicleBodyStyle_full) {
      return Object.keys(vehicleBodyStyle_full);
    }
    return [];
  }, [bodyStyle, vehicleBodyStyle_full]);

  return bodyStyle
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

export default BodyStyle;
