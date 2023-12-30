import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";
import { GetSpecificField, useField } from "@/hooks/actions/useInventoryUrl";

const EngineCylinder = (props) => {
  const {
    allObjects: { engine_cylinders },
    advancedSearchData: { vehicleEngine_cylinders_full },
  } = useAppStore();

  let urlEngineCylinder = GetSpecificField("EngineCylinder");
  const { SetBaseField } = useField();
  let baseField = GetSpecificField("Base");

  const engine = useMemo(() => {
    if (baseField && baseField != "" && baseField == "engine") {
      return Object.keys(vehicleEngine_cylinders_full);
    } else if (urlEngineCylinder) {
      return vehicleEngine_cylinders_full[urlEngineCylinder].engine_cylinders;
    } else if (engine_cylinders) {
      return engine_cylinders;
    } else if (vehicleEngine_cylinders_full) {
      return Object.keys(vehicleEngine_cylinders_full);
    }
    return [];
  }, [engine_cylinders, vehicleEngine_cylinders_full]);

  return engine
    .sort((a, b) => a - b)
    .map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() => {
          SetBaseField("Base", "engine");
          props.callback({ key: value, alias: value });
        }}
      >
        {value}
      </span>
    ));
};

export default EngineCylinder;
