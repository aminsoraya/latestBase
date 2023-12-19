"use client";
import React from "react";
import styles from "@/styles/container.module.scss";

export default function Container({ children, className = "" }) {
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
