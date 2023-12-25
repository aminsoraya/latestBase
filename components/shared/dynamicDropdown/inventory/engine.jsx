import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const InventoryEngines = (props) => {
  const {
    advancedSearchData: { vehicleEngine_cylinders_full },
  } = useAppStore();

  let engines = Object.keys(vehicleEngine_cylinders_full);

  return engines
    ?.sort((a, b) => b - a)
    ?.map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() => props.callback({ key: value, alias: value })}
      >
        {value}
      </span>
    ));
};

export default InventoryEngines;
