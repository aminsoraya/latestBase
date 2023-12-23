import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const BodyStyle = () => {
  const {
    advancedSearchData: { vehicleBodyStyle_full },
  } = useAppStore();

  const bodyStyle = vehicleBodyStyle_full ? Object.keys(vehicleBodyStyle_full) : [];

  return bodyStyle
    .sort((a, b) => a - b)
    .map((value, index) => (
      <span key={index} className={styles.item}>
        {value}
      </span>
    ));
};

export default BodyStyle;
