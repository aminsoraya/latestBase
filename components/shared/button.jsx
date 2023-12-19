import React from "react";
import styles from "@/styles/button.module.scss";

export default function Button(props) {
  const { children, ...otherProps } = props;
  return (
    <button
      className={`${styles.button} ${
        props.isTransparent && styles.transparent
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
