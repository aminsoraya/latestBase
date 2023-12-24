"use client";
import styles from "@/styles/usedInventory.module.scss";
import React, { useEffect, useState } from "react";
import { useAppStore } from "@/hooks/store";
import Container from "@/components/shared/container";
import DynamicDropdown from "@/components/shared/dynamicDropdown";
import useSWR, { mutate } from "swr";
import { useVehicles } from "@/hooks/actions/api/vehicles";
import {
  SkeletonCardHorizontalLoading,
  SkeletonLoading,
} from "@/components/shared/loading";
import { DropDownTypes } from "@/components/shared/dynamicDropdown/enumerations";
import { useFormik } from "formik";
import Button from "@/components/shared/button";
import { IoSearch } from "react-icons/io5";
import { useContactUs } from "@/hooks/actions/api/contactUs";
import Card from "@/components/used-inventory/card";

const UsedInventory = () => {
  //base data
  const { setCurrentMenu, baseUrl, domain, setAdvancedSearchData } =
    useAppStore();

  //dropdowns data
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

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const formik = useFormik({
    initialValues: {},
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      let response = await mutate(
        "advanceSearch",
        useContactUs(
          {
            fuel_type: "",
            body_style: "",
            engine_cylinders: "",
            year_end: 2024,
            price_low: -1,
            price_high: 3006401,
            odometer_type: 2,
            make: "",
            model: "",
            transmission: "",
            drive_train: "",
            doors: "",
            interior_color: "",
            Exterior_color: "",
            sortKind: { kind: "", type: null, order: 0 },
            sold: "",
            is_coming_soon: "",
            is_it_special: null,
            year_start: 0,
            odometer_low: 0,
            odometer_high: 431000,
          },
          `${baseUrl}/api/dealership/advance/search/vehicles/${domain}?page=1&limit=10`
        )
      );
      console.log(response);
      if (response) {
        setLoading(false);
        setCars(response);
      }
    },
  });

  return (
    <div className={styles.main}>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <div className={`row w-100 ${styles.dropDown}`}>
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
          <div className={`row w-100 ${styles.dropDown}`}>
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
              {isLoading ? (
                <SkeletonLoading />
              ) : (
                <Button type="submit">
                  <IoSearch />
                  Search
                </Button>
              )}
            </div>
          </div>
          <div className={`row w-100 ${styles.dropDown}`}>
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
              {isLoading ? <SkeletonLoading /> : <Button>Reset</Button>}
            </div>
          </div>
        </form>
        <div className="row w-100 mb-5">
          {loading &&
            Array.from({ length: 6 }).map((_, index) => {
              return (
                <div className="col-4 mt-5" key={index}>
                  <SkeletonCardHorizontalLoading />
                </div>
              );
            })}
          {cars?.map((car, index) => {
            return <Card key={index} car={car} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default UsedInventory;
