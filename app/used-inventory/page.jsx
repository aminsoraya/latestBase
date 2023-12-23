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
import Button from "@/components/shared/button";

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
       <div className="row w-100" style={{ minHeight: "40px" }}>
          <div className="col-lg-3 col-12 mt-3">
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
          <div className="col-lg-2 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Min Year"
                type={DropDownTypes.inventory_minYear}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-2 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Max Year"
                type={DropDownTypes.inventory_maxYear}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-3 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Any Model"
                type={DropDownTypes.inventory_maxYear}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-2 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Any Body Style"
                type={DropDownTypes.inventory_bodyStyle}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
        </div>
        <div className="row w-100 " style={{ minHeight: "40px" }}>
          <div className="col-lg-3 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Any Color"
                type={DropDownTypes.inventory_Color}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-2 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Min Price"
                type={DropDownTypes.inventory_MinPrice}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-2 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Max Price"
                type={DropDownTypes.inventory_MaxPrice}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-3 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Any Transmission"
                type={DropDownTypes.transmission}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-2 col-12 mt-3">
            <Button>Search</Button>
          </div>
        </div>
        <div className="row w-100 " style={{ minHeight: "40px" }}>
          <div className="col-lg-3 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Any Fuel Type"
                type={DropDownTypes.inventory_FuelType}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-2 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Min Km"
                type={DropDownTypes.inventory_MinKm}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-2 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Max Km"
                type={DropDownTypes.inventory_MaxKm}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-3 col-12 mt-3">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              <DynamicDropdown
                placeholder="Any Engine"
                type={DropDownTypes.inventory_Engine}
                callback={(val) => formik.setFieldValue("loanTerm", val)}
              />
            )}
          </div>
          <div className="col-lg-2 col-12 mt-3">
            <Button>Reset</Button>
          </div>
        </div> 
      </Container>
    </div>
  );
};

export default UsedInventory;
