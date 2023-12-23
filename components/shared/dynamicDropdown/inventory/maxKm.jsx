import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";
import { useEffect,useState } from "react";

const InventoryMaxKm = () => {
  const {
    advancedSearchData: { odometerKMRange, odometerMIRange },
  } = useAppStore();

  const [odometerType, setOdometerType] = useState(2);
  const [kmOdometer, setKmOdometer] = useState();
  const [miOdometer, setMiOdometer] = useState();

  useEffect(() => {
    odometerType === 2
      ? setKmOdometer( odometerKMRange)
      : setMiOdometer( odometerMIRange);
  }, [odometerType]);

  return (kmOdometer || miOdometer)
    ?.sort((a, b) => b - a)
    ?.map((value, index) => (
      <span key={index} className={styles.item}>
        {value.toLocaleString()}
      </span>
    ));
};

export default InventoryMaxKm;
