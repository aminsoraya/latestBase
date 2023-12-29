import { GetSpecificField } from "@/hooks/actions/useInventoryUrl";
import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const Models = (props) => {
  const {
    advancedSearchData: { vehicleModel_full },
    allObjects: { model },
  } = useAppStore();

  let urlModel = GetSpecificField("model");
  const models = useMemo(() => {
    if (urlModel) {
      return vehicleModel_full[urlModel].model;
    } else if (model) {
      return model;
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
