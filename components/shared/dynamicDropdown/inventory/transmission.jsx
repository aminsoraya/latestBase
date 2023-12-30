import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";
import { GetSpecificField, useField } from "@/hooks/actions/useInventoryUrl";

const Transmission = (props) => {
  const {
    allObjects: { transmission: dynamicTransmission },
    advancedSearchData: { vehicleTransmission_full },
  } = useAppStore();

  let urlTransmission = GetSpecificField("Transmission");

  const { SetBaseField } = useField();
  let baseField = GetSpecificField("Base");
  const transmission = useMemo(() => {
    if (baseField && baseField != "" && baseField == "Transmission") {
      return Object.keys(vehicleTransmission_full);
    } else if (urlTransmission) {
      return vehicleTransmission_full[urlTransmission].transmission;
    } else if (dynamicTransmission) {
      return dynamicTransmission;
    } else if (vehicleTransmission_full) {
      return Object.keys(vehicleTransmission_full);
    }
    return [];
  }, [dynamicTransmission, vehicleTransmission_full]);

  return transmission.map((value, index) => (
    <span
      key={index}
      className={styles.item}
      onClick={() => {
        SetBaseField("Base", "Transmission");
        props.callback({ key: value, alias: value });
      }}
    >
      {value}
    </span>
  ));
};

export default Transmission;
