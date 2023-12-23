import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useEffect } from "react";

const FuelType = () => {
  const {
    advancedSearchData: { vehicleFuel_type_full },
  } = useAppStore();

  const typeFuel = Object.keys(vehicleFuel_type_full);

  const fuelsortfirst = typeFuel
    .sort()
    .map((value) => ({ label: value, value }));

  const getOtherfuelfirst = fuelsortfirst?.filter((a) => a.label === "Other");
  const fueltypesortfirst = fuelsortfirst?.filter((a) => a.label !== "Other");

  useEffect(() => {
    if (fuelsortfirst?.length && getOtherfuelfirst?.length)
      fueltypesortfirst.push(getOtherfuelfirst[0]);
  }, [getOtherfuelfirst, fuelsortfirst]);

  return fueltypesortfirst?.map((value, index) => (
    <span key={index} className={styles.item}>
      {value}
    </span>
  ));
};

export default FuelType;
