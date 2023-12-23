import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const Transmissions = () => {
  const {
    advancedSearchData: { vehicleTransmission_full },
  } = useAppStore();

  return vehicleTransmission_full.map((value, index) => (
    <span key={index} className={styles.item}>
      {value}
    </span>
  ));
};

export default Transmissions;
