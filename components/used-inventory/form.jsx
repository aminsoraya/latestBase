import Button from "@/components/shared/button";
import { IoSearch } from "react-icons/io5";
import DynamicDropdown from "@/components/shared/dynamicDropdown";
import { DropDownTypes } from "@/components/shared/dynamicDropdown/enumerations";
import { useFormik } from "formik";
import styles from "@/styles/usedInventory.module.scss";
import { SkeletonLoading } from "@/components/shared/loading";
import { useAppStore } from "@/hooks/store";
import useSWR, { mutate } from "swr";
import { useVehicles } from "@/hooks/actions/api/vehicles";
import { useEffect } from "react";
import { usePostMethod } from "@/hooks/actions/api/post";
import { toast } from "react-toastify";

export const initialValues = {
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
};

const Form = (props) => {
  //base data
  const { baseUrl, domain, setAdvancedSearchData } = useAppStore();

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
    initialValues: {},
    onSubmit: async (values, { resetForm }) => {
      props.setLoading(true);

      await mutate(
        "advanceSearch",
        usePostMethod(
          initialValues,
          `${baseUrl}/api/dealership/advance/search/vehicles/${domain}?page=1&limit=10`
        )
      )
        .then((response) => props.setCars(response))
        .finally(() => props.setLoading(false))
        .catch((error) => {
          toast.error(error.message);
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
              callback={(val) =>console.log(val)}
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
              callback={(val) => formik.setFieldValue("Minyear", val)}
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
              callback={(val) => formik.setFieldValue("Maxyear", val)}
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
              callback={(val) => formik.setFieldValue("Bodystyle", val)}
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
              callback={(val) => formik.setFieldValue("Exteriorcolor", val)}
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
              callback={(val) => formik.setFieldValue("MinPrice", val)}
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
              callback={(val) => formik.setFieldValue("MaxPrice", val)}
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
              callback={(val) => formik.setFieldValue("Transmission", val)}
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
        <div className="col-lg-2 col-12 mt-3" style={{ minHeight: "40px" }}>
          {isLoading ? <SkeletonLoading /> : <Button>Reset</Button>}
        </div>
      </div>
    </form>
  );
};

export default Form;
