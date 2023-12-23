"use client";
import styles from "@/styles/usedInventory.module.scss";
import React, { useEffect } from "react";
import { useAppStore } from "@/hooks/store";
import Container from "@/components/shared/container";
import DynamicDropdown from "@/components/shared/dynamicDropdown";
import useSWR from "swr";
import { useVehicles } from "@/hooks/actions/api/vehicles";
import Loading from "@/components/shared/loading";

const UsedInventory = () => {
  const { setCurrentMenu, baseUrl, domain } = useAppStore();

  let { data: dealerData, isLoading } = useSWR(
    `${baseUrl}/api/dealership/advance/search/vehicles/get/${domain}`,
    useVehicles
  );

  //set current menu(active menu)
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/used-inventory" });
  }, []);

  return (
    <div className={styles.main}>
      <Container>
        <div className="row w-100">
          <div className="col-lg-6" style={{ background: "red" }}>
            1{isLoading && <Loading />}
            {/* <p>{JSON.stringify(dealerData)}</p> */}
          </div>
          <div className="col-lg-6" style={{ background: "blue" }}> 
            2
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UsedInventory;
