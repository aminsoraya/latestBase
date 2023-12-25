import { useAppStore } from "@/hooks/store";
import styles from "@/styles/inventoryItems.module.scss";

const Colors = (props) => {
  const {
    advancedSearchData: { color },
  } = useAppStore();

  return color.map((value, index) => (
    <span
      key={index}
      className={styles.item}
      onClick={() => props.callback({ key: value.name, alias: value.name })}
    >
      {value.name}
    </span>
  ));
};

export default Colors;
