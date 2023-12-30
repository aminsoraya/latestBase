import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useMemo } from "react";
import { GetSpecificField, useField } from "@/hooks/actions/useInventoryUrl";

const Color = (props) => {
  const {
    allObjects: { exterior_color },
    advancedSearchData: { vehicleexterior_color_full },
  } = useAppStore();

  let urlExteriorColor = GetSpecificField("Exteriorcolor");

  const { SetBaseField } = useField();

  let baseField = GetSpecificField("Base");
  const style = useMemo(() => {
    //when determined as a base filed
    if (baseField && baseField != "" && baseField == "Exteriorcolor") {
      return Object.keys(vehicleexterior_color_full);
    } else if (urlExteriorColor) {
      //when determined in url
      return vehicleexterior_color_full[urlExteriorColor].exterior_color;
    } else if (exterior_color) {
      //when present in all object
      return exterior_color;
    } else if (vehicleexterior_color_full) {
      //any mode
      return Object.keys(vehicleexterior_color_full);
    }
    return [];
  }, [exterior_color, vehicleexterior_color_full]);

  return style
    .sort((a, b) => a - b)
    .map((value, index) => (
      <span
        key={index}
        className={styles.item}
        onClick={() => {
          SetBaseField("Base", "Exteriorcolor");
          props.callback({ key: value, alias: value });
        }}
      >
        {value}
      </span>
    ));
};

export default Color;
