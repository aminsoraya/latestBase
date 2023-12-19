import React from "react";
import styles from "@/styles/button.module.scss";

export default function Button({children}) {
  return <button className={styles.button}>{children}</button>;
}
