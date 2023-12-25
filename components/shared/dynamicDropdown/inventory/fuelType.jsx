import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const FuelType = (props) => {
  const {
    advancedSearchData: { vehicleFuel_type_full },
  } = useAppStore();

  const typeFuel = Object.keys(vehicleFuel_type_full);

  return typeFuel?.map((value, index) => (
    <span
      key={index}
      className={styles.item}
      onClick={() => props.callback({ key: value, alias: value })}
    >
      {value}
    </span>
  ));
};

export default FuelType;
