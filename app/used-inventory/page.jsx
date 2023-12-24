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

  return (
    <div className={styles.main}>
      <Container>
        <Form />
        {!loading && (
          <div className="row">
            <div className={`col-12 mt-5 mb-2 ${styles.headerResponse}`}>
              <span>
                {cars.length > 0 && <h2>{cars[0].fullSearchCount} Vehicles</h2>}
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
                <div onClick={() => setDisplayType(cardDisplayType.Horizontal)}>
                  <PiSquareSplitHorizontalFill />
                </div>
                <div onClick={() => setDisplayType(cardDisplayType.Vertical)}>
                  <PiSquareSplitVerticalFill />
                </div>
              </span>
            </div>
          </div>
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
                  return <HorzontalCard key={index} car={car} />;
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
                  return <VerticalCard key={index} car={car} />;
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
