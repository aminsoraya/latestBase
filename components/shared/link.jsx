import React from "react";
import Link from "next/link";
import styles from "@/styles/linkButton.module.scss";
import buttonStyles from "@/styles/button.module.scss";

export default function CustomLink({ href, children, isTransparent = false }) {
  return (
    <Link
      href={href}
      className={`${isTransparent ? buttonStyles.transparent : styles.button}`}
      style={{width:"100%",height:"100%",textAlign:"center",display:"block"}}
    >
      {children}
    </Link>
  );
}
