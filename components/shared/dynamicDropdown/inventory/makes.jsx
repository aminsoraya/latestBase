import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const Models = () => {
  const {
    advancedSearchData: { vehicleMake_full },
  } = useAppStore();

  const makes = vehicleMake_full ? Object.keys(vehicleMake_full) : [];

  return makes.map((value, index) => (
    <span key={index} className={styles.item}>
      {value}
    </span>
  ));
};

export default Models;
