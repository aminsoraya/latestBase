import React,{useMemo} from "react";
import { useAppStore } from "@/hooks/store";
import styles from "@/styles/timeWroks.module.scss"

export default function BussniessHours({ showLogo = false }) {
  let { dealerData } = useAppStore();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeWorks = useMemo(() => {
    return dealerData?.timeWork
      ?.filter((s) => s.startAt != "")
      .map((item, index) => {
        return {
          ...item,
          dayName: days[index],
        };
      });
  }, [dealerData?.timeWork]);
  return (
    <div className={styles.main}>
      <h2>Business Hours</h2>
      {timeWorks?.map((item, index) => {
        return (
          <div className={styles.row}>
            <span className={styles.day}>{item.dayName}</span>
            <span key={index}>
              {item.startAt} - {item.endAt}{" "}
            </span>
          </div>
        );
      })}
      {showLogo && (
        <h5 className={styles.logo}>
          United Auto Sales Ltd
        </h5>
      )}
    </div>
  );
}
