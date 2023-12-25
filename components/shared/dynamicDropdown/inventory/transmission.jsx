import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const Transmissions = (props) => {
  const {
    advancedSearchData: { vehicleTransmission_full },
  } = useAppStore();

  return vehicleTransmission_full.map((value, index) => (
    <span
      key={index}
      className={styles.item}
      onClick={() => props.callback({ key: value, alias: value })}
    >
      {value}
    </span>
  ));
};

export default Transmissions;
