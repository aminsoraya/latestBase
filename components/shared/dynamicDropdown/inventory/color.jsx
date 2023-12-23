import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const Colors = () => {
  const {
    advancedSearchData: { color },
  } = useAppStore();

  return color.map((value, index) => (
    <span key={index} className={styles.item}>
      {value.name}
    </span>
  ));
};

export default Colors;
