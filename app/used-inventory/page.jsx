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
import { usePostMethod } from "@/hooks/actions/api/post";
import { PiSquareSplitVerticalFill } from "react-icons/pi";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";
import dynamic from "next/dynamic";
import Form from "@/components/used-inventory/form";
import { IoMdTrash } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import useInventoryUrl from "@/hooks/actions/useInventoryUrl";

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
  //base data
  const { setCurrentMenu, baseUrl, domain } = useAppStore();
  const [displayType, setDisplayType] = useState(cardDisplayType.Horizontal);
  const [carsId, setCarsId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data } = useInventoryUrl();
  const [cars, setCars] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    cars.length > 0 && setCurrentPage((state) => state + 1);
  }, [inView]);

  useEffect(() => {
    setCurrentMenu({ currentMenu: "/used-inventory" });
  }, []);
  useEffect(() => {
    setCars(data);
  }, [data]);

  //infinite scroling
  useEffect(() => {
    (async () => {
      await mutate(
        "advanceSearch",
        usePostMethod(
          initialValues,
          `${baseUrl}/api/dealership/advance/search/vehicles/${domain}?page=${currentPage}&limit=10`
        )
      )
        .then((data) => {
          cars.length > 0
            ? setCars((state) => [...state, ...data])
            : setCars(data);
        })
        .finally(() => setLoading(false));
    })();
  }, [baseUrl, domain, currentPage]);

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
        <Form />
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
                      key={index}
                      carsId={carsId}
                      car={car}
                      callback={handleCarId}
                    />
                  );
                })}
                {Array.from({ length: 6 }).map((_, index) => {
                  return (
                    <div className="col-4 mt-5" key={index} ref={ref}>
                      <SkeletonCardHorizontalLoading />
                    </div>
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
                      key={index}
                      carsId={carsId}
                      car={car}
                      callback={handleCarId}
                    />
                  );
                })}
                {/* {Array.from({ length: 6 }).map((_, index) => {
                        return (
                          <div className="col-4 mt-5" key={index} ref={ref}>
                            <SkeletonCardHorizontalLoading />
                          </div>
                        );
                      })} */}
              </>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default UsedInventory;
