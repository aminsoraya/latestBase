import Button from "@/components/shared/button";
import DynamicDropdown from "@/components/shared/dynamicDropdown";
import Input from "@/components/shared/input";
import { useFormik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { DropDownTypes } from "../shared/dynamicDropdown/enumerations";

const FinanceApplicationForm = () => {
  const [results, setResults] = useState();
  const initialValues = {};
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const dowPay = isNaN(parseInt(values?.downPayment))
        ? 0
        : parseInt(values?.downPayment);
      const trdeVal = isNaN(parseInt(values?.tradeValue))
        ? 0
        : parseInt(values?.tradeValue);
      const totalDown = dowPay + trdeVal;
      let data = (
        (parseFloat(values?.intRate) / 1200 +
          parseFloat(values?.intRate) /
            1200 /
            (Math.pow(
              1 + parseFloat(values?.intRate) / 1200,
              parseInt(values?.loanTerm)
            ) -
              1)) *
        (parseInt(values?.vehiclePrice) - (totalDown || 0))
      ).toFixed(2);
      setResults(data);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-6  mt-2">
          <label>Vehicle Price($)</label>
          <Input
            name="vehiclePrice"
            required={true}
            onChange={formik.handleChange}
            className="input-trasparent"
            value={formik.values.vehiclePrice}
          />
        </div>
        <div className="col-6  mt-2">
          <label htmlFor="">Down Payment($)</label>
          <Input
            required={true}
            className="input-trasparent"
            name="downPayment"
            onChange={formik.handleChange}
            value={formik.values.downPayment}
          />
        </div>
        <div className="col-6  mt-2">
          <label htmlFor="">Your Trade($)</label>
          <Input
            required={true}
            className="input-trasparent"
            name="tradeValue"
            onChange={formik.handleChange}
            value={formik.values.tradeValue}
          />
        </div>
        <div className="col-6  mt-2">
          <label htmlFor="">Month Term</label>
          <DynamicDropdown
            placeholder="loanTerm"
            type={DropDownTypes.months}
            callback={(val) => formik.setFieldValue("loanTerm", val)}
          />
        </div>
        <div className="col-6  mt-2">
          <label htmlFor="">Interest Rate(%)</label>
          <Input
            type="text"
            required={true}
            className="input-trasparent"
            name="intRate"
            onChange={formik.handleChange}
            value={formik.values.intRate}
          />
        </div>
        <div className="col-6 mt-2">
          <label htmlFor="">Monthly Payment</label>
          <div>
            <Input
              type="text"
              readOnly={true}
              className="input-trasparent"
              onChange={formik.handleChange}
              value={
                "$" +
                `${new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(results ?? 0)}`
              }
            />
          </div>
        </div>
        <div className="col-6  mt-2">
          <Button isTransparent={true} type="submit">
            Calculate
          </Button>
        </div>
        <div className="col-6  mt-2">
          <Button>Reset</Button>
        </div>
      </div>
    </form>
  );
};

export default FinanceApplicationForm;
