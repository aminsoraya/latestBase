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
import Image from "next/image";
import staticImg from "@/public/img/default-inventory-image-car-med.png";
import Link from "next/link";

const UsedInventory = () => {
  //base data
  const {
    setCurrentMenu,
    baseUrl,
    domain,
    setAdvancedSearchData,
    baseSpecialImageUrl,
  } = useAppStore();

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
              {isLoading ? <SkeletonLoading /> : <Button>Reset</Button>}
            </div>
          </div>
        </form>
        <div className="row w-100 mb-5" style={{ color: "black" }}>
          {loading &&
            Array.from({ length: 6 }).map((item, index) => {
              return (
                <div className="col-4 mt-5">
                  <SkeletonCardHorizontalLoading />
                </div>
              );
            })}
          {cars?.map((car, index) => {
            return (
              <div
                key={index}
                className="col-lg-4 mt-4"
                style={{
                  position: "relative",
                  paddingRight: 5,
                  paddingLeft: 5,
                  background: "white",
                }}
              >
                <div style={{ position: "relative", height: "250px" }}>
                  {car?.cover_image ? (
                    <Image
                      fill
                      sizes="(min-width:740px) 674px, calc(95.48vw-18px)"
                      src={`${baseSpecialImageUrl}${car?.cover_image}`}
                      loading="lazy"
                    />
                  ) : (
                    <Image
                      layout="fill"
                      src={staticImg}
                      placeholder="blur"
                      loading="lazy"
                    />
                  )}
                </div>
                <div>
                  <div className="row pt-2">
                    <div
                      className="col-12"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        justifyContent: "space-between",
                      }}
                    >
                      <input type="checkbox" />
                      <span>Select For Compare</span>
                      <Button
                        isTransparent={true}
                        style={{
                          color: "black",
                          width: "150px",
                          height: "30px",
                        }}
                      >
                        Select For Compare
                      </Button>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-12" style={{ color: "black" }}>
                      <Link
                        href={`/cars/used/${car?.model_year}-${car?.make}-${car?.model}-${car?.id}`}
                      >
                        {car?.Vehicle?.model_year} {car?.Vehicle?.make}
                        {car?.Vehicle?.model}
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <span>Exterior Color</span>
                    </div>
                    <div className="col-6">White</div>
                    <div className="col-6">
                      <span>Stock #</span>
                    </div>
                    <div className="col-6">White</div>
                    <div className="col-6">
                      <span>Stock #</span>
                    </div>
                    <div className="col-6">1111</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default UsedInventory;
