import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const Models = (props) => {
  const {
    advancedSearchData: { vehicleModel_full },
    allObjects: { model },
  } = useAppStore();

  const models = useMemo(() => {
    if (model) {
      return Object.keys(model);
    } else if (vehicleModel_full) {
      return Object.keys(vehicleModel_full);
    }
    return [];
  }, [model, vehicleModel_full]);

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
