import { GetSpecificField, useField } from "@/hooks/actions/useInventoryUrl";
import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";

const MaxYear = (props) => {
  const {
    allObjects: { year },
    advancedSearchData: { vehicleYear_full },
  } = useAppStore();

  let urlYear = GetSpecificField("Maxyear");
  const { SetBaseField } = useField();
  let baseField = GetSpecificField("Base");

  const years = useMemo(() => {
    if (
      baseField &&
      baseField != "" &&
      (baseField == "Minyear" || baseField == "Maxyear")
    ) {
      return Object.keys(vehicleYear_full);
    } else if (urlYear) {
      return vehicleYear_full[urlYear].year;
    } else if (year) {
      return year;
    } else if (vehicleYear_full) {
      return Object.keys(vehicleYear_full);
    }
    return [];
  }, [year, vehicleYear_full]);

  return years
    .sort((a, b) => b - a)
    .map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() => {
          SetBaseField("Base", "Maxyear");
          props.callback({ key: value, alias: value, type: "YEAR" });
        }}
      >
        {value}
      </span>
    ));
};

export default MaxYear;
