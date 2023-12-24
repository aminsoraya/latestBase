import React from "react";
import Link from "next/link";
import styles from "@/styles/linkButton.module.scss";

export default function CustomLink({ href, children }) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}
