import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const EngineCylinder = (props) => {
  const {
    allObjects: { engine_cylinders },
    advancedSearchData: { vehicleEngine_cylinders_full },
  } = useAppStore();

  const engine = useMemo(() => {
    if (engine_cylinders) {
      return Object.keys(engine_cylinders);
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
        onClick={() => props.callback({ key: value, alias: value })}
      >
        {value}
      </span>
    ));
};

export default EngineCylinder;
