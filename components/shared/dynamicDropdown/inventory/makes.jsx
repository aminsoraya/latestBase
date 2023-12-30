import { GetSpecificField, useField } from "@/hooks/actions/useInventoryUrl";
import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const Models = (props) => {
  const {
    allObjects: { make },
    advancedSearchData: { vehicleMake_full },
  } = useAppStore();

  let urlMake = GetSpecificField("make");

  const { SetBaseField } = useField();
  let baseField = GetSpecificField("Base");
  const makes = useMemo(() => {
    if (baseField && baseField != "" && baseField == "make") {
      return Object.keys(vehicleMake_full);
    } else if (urlMake) {
      return vehicleMake_full[urlMake].make;
    } else if (make) {
      return make;
    } else if (vehicleMake_full) {
      return Object.keys(vehicleMake_full);
    }
    return [];
  }, [make, vehicleMake_full]);

  return makes.map((value, index) => (
    <span
      key={index}
      className={styles.item}
      onClick={() => {
        SetBaseField("Base", "make");
        props.callback({ key: value, alias: value });
      }}
    >
      {value}
    </span>
  ));
};

export default Models;
