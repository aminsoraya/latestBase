import Button from "@/components/shared/button";
import { IoSearch } from "react-icons/io5";
import DynamicDropdown from "@/components/shared/dynamicDropdown";
import { DropDownTypes } from "@/components/shared/dynamicDropdown/enumerations";
import { useFormik } from "formik";
import styles from "@/styles/usedInventory.module.scss";
import { SkeletonLoading } from "@/components/shared/loading";
import { useAppStore } from "@/hooks/store";
import useSWR from "swr";
import { useVehicles } from "@/hooks/actions/api/vehicles";
import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const initialValues = {
  fuel_type: "",
  body_style: "",
  engine_cylinders: "",
  year_start: "",
  price_low: "",
  price_high: "",
  odometer_type: "",
  make: "",
  model: "",
  transmission: "",
  // drive_train: "",
  doors: "",
  Exterior_color: "",
  // sold: "",
  // is_coming_soon: "",
  // is_it_special: "",
  year_end: "",
  odometer_low: "",
  odometer_high: "",
};

const Form = (props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  //base data
  const { baseUrl, domain, setAdvancedSearchData, setAllObjects, allObjects } =
    useAppStore();

  //dropdowns data
  let { data: advancedSearchData, isLoading } = useSWR(
    `${baseUrl}/api/dealership/advance/search/vehicles/get/${domain}`,
    useVehicles
  );

  //pass to main store(zustand)
  useEffect(() => {
    setAdvancedSearchData({ advancedSearchData });
  }, [advancedSearchData]);

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      let _keys = Object.keys(values);
      let _values = Object.values(values);
      const params = new URLSearchParams(searchParams);

      _keys.forEach((item, index) => {
        params.set(item, _values[index]);
        router.replace(`${pathName}?${params.toString()}`, { scroll: false });
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={`row w-100 ${styles.dropDown}`}>
        <div className="col-lg-3 col-12 mt-3">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <DynamicDropdown
              placeholder="Any Make"
              type={DropDownTypes.inventory_makes}
              callback={(val) => formik.setFieldValue("make", val)}
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
              callback={(val) => formik.setFieldValue("year_start", val)}
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
              callback={(val) => formik.setFieldValue("year_end", val)}
            />
          )}
        </div>
        <div className="col-lg-3 col-12 mt-3">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <DynamicDropdown
              placeholder="Any Model"
              type={DropDownTypes.inventory_model}
              callback={(val) => formik.setFieldValue("model", val)}
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
              callback={(val) => formik.setFieldValue("body_style", val)}
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
              callback={(val) => formik.setFieldValue("Exterior_color", val)}
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
              callback={(val) => formik.setFieldValue("price_low", val)}
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
              callback={(val) => formik.setFieldValue("price_high", val)}
            />
          )}
        </div>
        <div className="col-lg-3 col-12 mt-3">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <DynamicDropdown
              placeholder="Any Transmission"
              type={DropDownTypes.inventory_Transmission}
              callback={(val) => formik.setFieldValue("transmission", val)}
            />
          )}
        </div>
        <div className="col-lg-2 col-12 mt-3" style={{ minHeight: "40px" }}>
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
              callback={(val) => formik.setFieldValue("fuel_type", val)}
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
              callback={(val) => formik.setFieldValue("odometer_low", val)}
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
              callback={(val) => formik.setFieldValue("odometer_high", val)}
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
              callback={(val) => formik.setFieldValue("engine_cylinders", val)}
            />
          )}
        </div>
        <div className="col-lg-2 col-12 mt-3" style={{ minHeight: "40px" }}>
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <Button
              onClick={() => setAllObjects({ allObjects: { make: undefined } })}
            >
              Reset
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
