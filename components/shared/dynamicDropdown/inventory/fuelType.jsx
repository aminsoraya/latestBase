import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";
import { GetSpecificField } from "@/hooks/actions/useInventoryUrl";

const FuelType = (props) => {
  const {
    allObjects: { Fuel_type },
    advancedSearchData: { vehicleFuel_type_full },
  } = useAppStore();
  let urlFuelType = GetSpecificField("Fueltype");

  const fuelType = useMemo(() => {
    if (urlFuelType) {
      return vehicleFuel_type_full[urlFuelType].Fuel_type;
    } else if (Fuel_type) {
      return Fuel_type;
    } else if (vehicleFuel_type_full) {
      return Object.keys(vehicleFuel_type_full);
    }
    return [];
  }, [Fuel_type, vehicleFuel_type_full]);

  return fuelType
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

export default FuelType;
