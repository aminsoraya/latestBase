"use client";
import styles from "@/styles/usedInventory.module.scss";
import React, { useEffect } from "react";
import { useAppStore } from "@/hooks/store";
import Container from "@/components/shared/container";
import DynamicDropdown from "@/components/shared/dynamicDropdown";
import useSWR from "swr";
import { useVehicles } from "@/hooks/actions/api/vehicles";
import { SkeletonLoading } from "@/components/shared/loading";
import { DropDownTypes } from "@/components/shared/dynamicDropdown/enumerations";
import { useFormik } from "formik";

const UsedInventory = () => {
  const { setCurrentMenu, baseUrl, domain, setAdvancedSearchData } =
    useAppStore();

  let { data: advancedSearchData, isLoading } = useSWR(
    `${baseUrl}/api/dealership/advance/search/vehicles/get/${domain}`,
    useVehicles
  );

  //set current menu(active menu)
  useEffect(() => {
    setCurrentMenu({ currentMenu: "/used-inventory" });
  }, []);

  //pass to main store(zustand)
  useEffect(() => {
    setAdvancedSearchData({ advancedSearchData });
  }, [advancedSearchData]);

  const formik = useFormik({
    initialValues: {},
    onSubmit: async (values, { resetForm }) => {},
  });

  return (
    <div className={styles.main}>
      <Container>
        <div className="row w-100" style={{ height: "40px" }}>
          <div className="col-lg-3 col-12 ">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Any Make"
                type={DropDownTypes.inventory_makes}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-3 col-12 ">
            <SkeletonLoading />
          </div>
          <div className="col-lg-3 col-12 ">
            <SkeletonLoading />
          </div>
          <div className="col-lg-3 col-12 ">
            <SkeletonLoading />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UsedInventory;
