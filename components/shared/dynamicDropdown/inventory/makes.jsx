import { GetSpecificField } from "@/hooks/actions/useInventoryUrl";
import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const Models = (props) => {
  const {
    allObjects: { make },
    advancedSearchData: { vehicleMake_full },
  } = useAppStore();
  let urlMake = GetSpecificField("make");

  const makes = useMemo(() => {
    if (urlMake) {
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
      onClick={() => props.callback({ key: value, alias: value })}
    >
      {value}
    </span>
  ));
};

export default Models;
