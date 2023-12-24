"use client";
import styles from "@/styles/usedInventory.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import { useAppStore } from "@/hooks/store";
import Container from "@/components/shared/container";
import { mutate } from "swr";
import { initialValues } from "@/components/used-inventory/form";
import {
  SkeletonCardHorizontalLoading,
  SkeletonLoading,
} from "@/components/shared/loading";
import { useContactUs } from "@/hooks/actions/api/contactUs";
import { PiSquareSplitVerticalFill } from "react-icons/pi";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";
import dynamic from "next/dynamic";
import Form from "@/components/used-inventory/form";
import { IoMdTrash } from "react-icons/io";

const VerticalCard = dynamic(() =>
  import("@/components/used-inventory/verticalCard")
);

const HorzontalCard = dynamic(() =>
  import("@/components/used-inventory/horizontalCard")
);

const cardDisplayType = {
  Horizontal: "Horizontal",
  Vertical: "Vertical",
};
const UsedInventory = () => {
  const [loading, setLoading] = useState(true);
  const [displayType, setDisplayType] = useState(cardDisplayType.Horizontal);
  const [cars, setCars] = useState([]);
  const [carsId, setCarsId] = useState([]);

  //base data
  const { setCurrentMenu, baseUrl, domain } = useAppStore();

  let mounted = true;
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/used-inventory" });
    mounted &&
      (async () => {
        setLoading(true);
        await mutate(
          "advanceSearch",
          useContactUs(
            initialValues,
            `${baseUrl}/api/dealership/advance/search/vehicles/${domain}?page=1&limit=10`
          )
        )
          .then((data) => setCars(data))
          .finally(() => setLoading(false));
      })();

    return () => {
      mounted = false;
    };
  }, [baseUrl, domain]);

  const handleCarId = (id) => {
    const findedCarId = carsId.find((item) => item == id);

    if (findedCarId) {
      let cars = carsId.filter((s) => s != id);
      setCarsId(cars);
    } else {
      setCarsId((state) => [...state, id]);
    }
  };

  return (
    <div className={styles.main}>
      <Container>
        <Form
          setCars={(cars) => {
            setCars(cars);
          }}
          setLoading={(loading) => setLoading(loading)}
        />
        {!loading && (
          <>
            {carsId.length > 0 && (
              <div className="row mt-5" style={{ color: "white" }}>
                {carsId.map((id, index) => {
                  let car = cars.find((c) => c.id == id);
                  return (
                    <div
                      className={`col-4 ${styles.compare} mt-2 mr-1`}
                      key={index}
                    >
                      <div className={styles.compareContainer}>
                        <div>
                          <span> {car?.Vehicle?.model_year}</span>
                          <span> {car?.Vehicle?.make}</span>
                          <span> {car?.Vehicle?.model}</span>
                          <span>{car?.Vehicle?.drive_type}</span>
                        </div>
                        <IoMdTrash
                          className="mr-2"
                          onClick={() => handleCarId(id)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="row">
              <div className={`col-12 mt-5 mb-2 ${styles.headerResponse}`}>
                <span>
                  {cars.length > 0 && (
                    <h2>{cars[0].fullSearchCount} Vehicles</h2>
                  )}
                </span>
              </div>
              <div className={`col-12  mb-2 ${styles.headerResponse} w-full`}>
                <span className={styles.sortItems}>
                  Sort: <button>Year</button>
                  <span>|</span>
                  <button>Make</button>
                  <span>|</span>
                  <button>Model</button>
                  <span>|</span>
                  <button>Body Style</button>
                  <span>|</span>
                  <button>Price</button>
                </span>
                <span className={styles.sortIcons}>
                  <div
                    onClick={() => setDisplayType(cardDisplayType.Horizontal)}
                  >
                    <PiSquareSplitHorizontalFill />
                  </div>
                  <div onClick={() => setDisplayType(cardDisplayType.Vertical)}>
                    <PiSquareSplitVerticalFill />
                  </div>
                </span>
              </div>
            </div>
          </>
        )}
        {displayType == cardDisplayType.Horizontal && (
          <div className={`row w-100 mb-5 `}>
            {loading && (
              <>
                <div className="col-6 mt-5" style={{ minHeight: "40px" }}>
                  <SkeletonLoading />
                </div>
                <div className="col-12 mt-2" style={{ minHeight: "40px" }}>
                  <SkeletonLoading />
                </div>
                {Array.from({ length: 6 }).map((_, index) => {
                  return (
                    <div className="col-4 mt-5" key={index}>
                      <SkeletonCardHorizontalLoading />
                    </div>
                  );
                })}
              </>
            )}
            {cars.length > 0 && (
              <>
                {cars?.map((car, index) => {
                  return (
                    <HorzontalCard
                      carsId={carsId}
                      key={index}
                      car={car}
                      callback={handleCarId}
                    />
                  );
                })}
              </>
            )}
          </div>
        )}
        {displayType == cardDisplayType.Vertical && (
          <div className={`row w-100 mb-5 `}>
            {cars.length > 0 && (
              <>
                {cars?.map((car, index) => {
                  return (
                    <VerticalCard
                      carIds={carsId}
                      key={index}
                      car={car}
                      callback={handleCarId}
                    />
                  );
                })}
              </>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default UsedInventory;
