import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";
import { GetSpecificField, useField } from "@/hooks/actions/useInventoryUrl";

const BodyStyle = (props) => {
  const {
    allObjects: { bodyStyle },
    advancedSearchData: { vehicleBodyStyle_full },
  } = useAppStore();

  let urlBodyStyle = GetSpecificField("Bodystyle");

  const { SetBaseField } = useField();

  let baseField = GetSpecificField("Base");
  const style = useMemo(() => {
    if (baseField && baseField != "" && baseField == "bodyStyle") {
      return Object.keys(vehicleBodyStyle_full);
    } else if (urlBodyStyle) {
      return vehicleBodyStyle_full[urlBodyStyle].bodyStyle;
    } else if (bodyStyle) {
      return bodyStyle;
    } else if (vehicleBodyStyle_full) {
      return Object.keys(vehicleBodyStyle_full);
    }
    return [];
  }, [bodyStyle, vehicleBodyStyle_full]);

  return style
    .sort((a, b) => a - b)
    .map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() => {
          SetBaseField("Base", "bodyStyle");
          props.callback({ key: value, alias: value });
        }}
      >
        {value}
      </span>
    ));
};

export default BodyStyle;
