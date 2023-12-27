"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useAppStore } from "@/hooks/store";
import useSWR, { mutate } from "swr";
import { usePostMethod } from "@/hooks/actions/api/post";
import axios from "axios";
import styles from "@/styles/compare.module.scss";
import { useVehicles } from "@/hooks/actions/api/vehicles";

const Compare = ({ params: { ids } }) => {
  const { baseUrl, domain } = useAppStore();

  useEffect(() => {
    let data = ids.replace("%2C", ",").split(",");

    if (baseUrl && domain)
      (async () => {
        await useVehicles(`${baseUrl}/cars/compare/${domain}`, data).then(
          (data) => console.log("data compare ", data)
        );
      })();
  }, [baseUrl, domain]);

  return <div className={styles.main}>compare</div>;
};

export default Compare;
