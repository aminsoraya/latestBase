import React from "react";
import styles from "@/styles/button.module.scss";

export default function Button(props) {
  const { children,isTransparent, ...otherProps } = props;
  return (
    <button
      className={`${styles.button} ${
       isTransparent && styles.transparent
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
