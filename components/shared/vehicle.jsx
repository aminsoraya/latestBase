"use client";
import { useVehicles } from "@/hooks/actions/vehicles";
import { useAppStore } from "@/hooks/store";
import useSWR from "swr";
import Input from "./input";
import { useEffect, useMemo, useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "@/styles/vehicle.module.scss";

// interface IVehicle {
//   id: number;
//   make: string;
//   model: string;
//   model_year: number;
//   vin_number: string;
// }
// interface IData {
//   id: number;
//   stock_NO: string;
//   Vehicle: IVehicle;
// }

// interface IProps {
//   callback: (id: number) => void;
//   name: string;
//   reset: number;
// }
const Vehicle = (props) => {
  let { domain, baseUrl } = useAppStore();
  let [inputSerach, setInputSearch] = useState(undefined);
  let [selectedVehicle, setSelectedVehicle] = useState(undefined);

  let { data, isLoading } = useSWR(
    `${baseUrl}/dealership/vehicles/all/${domain}`,
    useVehicles
  );

  useEffect(() => {
    setSelectedVehicle(undefined);
  }, [props.reset]);

  let filters = useMemo(() => {
    if (data && inputSerach) {
      let convertedData = data?.data;

      return convertedData.filter(
        (d) =>
          d?.Vehicle?.model_year?.toString().includes(inputSerach) ||
          d?.Vehicle?.make
            ?.toString()
            .toLocaleLowerCase()
            .trim()
            .includes(inputSerach.trim().toLocaleLowerCase()) ||
          d?.Vehicle?.model
            ?.toString()
            .toLocaleLowerCase()
            .trim()
            .includes(inputSerach.trim().toLocaleLowerCase())
      );
    }
    return [];
  }, [inputSerach]);

  const getSelectedVehicle = data
    ? (data?.data).find((s) => s.Vehicle.id == selectedVehicle)
    : null;

  return (
    <div className={styles.main}>
      <Input
        autoComplete="off"
        onChange={(e) => setInputSearch(e.currentTarget.value)}
        placeholder="Search (Year Make Model)"
        value={inputSerach}
        name={props.name}
        className={`${props.isTransparent && "input-trasparent"}`}
      />
      {filters.length ? (
        <div className={styles.filter_container}>
          {filters.map((item, index) => {
            return (
              <div className={styles.filter}>
                <input
                  autoComplete="false"
                  type="checkbox"
                  onClick={() => {
                    setSelectedVehicle(item.Vehicle.id);
                    setInputSearch(undefined);
                    props.callback(item.id);
                  }}
                  name=""
                  id=""
                />
                <span>{item.Vehicle.model_year}</span>
                <span>{item.Vehicle.make}</span>
                <span>{item.Vehicle.model}</span>
                <span>{item.Vehicle.id}</span>
              </div>
            );
          })}
        </div>
      ) : null}
      {getSelectedVehicle && (
        <div className={styles.selected}>
          <span>{getSelectedVehicle.Vehicle.model_year}</span>
          <span>{getSelectedVehicle.Vehicle.make}</span>
          <span>{getSelectedVehicle.Vehicle.model}</span>
          <span>{getSelectedVehicle.Vehicle.id}</span>
          <span
            onClick={() => setSelectedVehicle(undefined)}
            className={styles.trash}
          >
            <FaTrash />
          </span>
        </div>
      )}
    </div>
  );
};

export default Vehicle;
