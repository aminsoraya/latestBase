import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const Models = (props) => {
  const {
    advancedSearchData: { vehicleYear_full },
  } = useAppStore();

  const makes = vehicleYear_full ? Object.keys(vehicleYear_full) : [];

  return makes
    .sort((a, b) => b - a)
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

export default Models;
