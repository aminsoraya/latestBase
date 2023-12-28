import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const Models = (props) => {
  const {
    advancedSearchData: { vehicleModel_full },
    advancedSearchData,
  } = useAppStore();
console.log("advancedSearchData ", advancedSearchData);

  const models = vehicleModel_full ? Object.keys(vehicleModel_full) : [];

  return models
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
