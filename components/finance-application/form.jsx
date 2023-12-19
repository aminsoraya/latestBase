import Button from "@/components/shared/button";
import DynamicDropdown, {
  DropDownType,
} from "@/components/shared/dynamicDropdown";
import Input from "@/components/shared/input";
import TextArea from "@/components/shared/textArea";
import { useFormik } from "formik";
import { mutate } from "swr";
import { useContactUs } from "@/hooks/actions/contactUs";
import { toast } from "react-toastify";
import { useAppStore } from "@/hooks/store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const FinanceApplicationForm = () => {
  const [rules, setRules] = useState(false);
  const initialValues = {};
  const { baseUrl, domain } = useAppStore();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      let { status, message } = await mutate(
        "appraiseMyTrade",
        useContactUs(
          values,
          `${baseUrl}/api/dealerweb/valueyourtrade/add/${domain}`
        )
      );

      if (status != "fail") {
        toast.success(message);
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-6 mt-2">
          <Input
            placeholder="First Name"
            name="firstName"
            required={true}
            onChange={formik.handleChange}
            className="input-trasparent"
            value={formik.values.firstName}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            required={true}
            placeholder="Last Name"
            className="input-trasparent"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            required={true}
            placeholder="Email"
            type="email"
            className="input-trasparent"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Phone"
            type="tel"
            required={true}
            className="input-trasparent"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="SIN"
            type="text"
            required={true}
            className="input-trasparent"
            name="user_sin_number"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div className="col-6 mt-2">
          <DatePicker
            selected={formik.values.birthDate}
            onChange={(date) => formik.setFieldValue("birthDate", date)}
            placeholderText="mm/dd/yyyy"
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Salutation"
            type={DropDownType.salutations}
            callback={(val) => formik.setFieldValue("user_salutation", val)}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Marital Status"
            type={DropDownType.marital}
            callback={(val) => formik.setFieldValue("user_marital_status", val)}
          />
        </div>
        <div className="col-12 pt-2 pb-2">
          <h2>Current Address</h2>
        </div>
        <div className="col-12 mt-2 ">
          <TextArea
            placeholder="address"
            className="input-trasparent"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Postal Code"
            className="input-trasparent"
            name="postal-code"
            onChange={formik.handleChange}
            value={formik.values.postal_code}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="City"
            className="input-trasparent"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Province"
            className="input-trasparent"
            name="province"
            onChange={formik.handleChange}
            value={formik.values.province}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Country"
            className="input-trasparent"
            name="province"
            onChange={formik.handleChange}
            value={formik.values.province}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Duration Year"
            className="input-trasparent"
            name="duration_year"
            onChange={formik.handleChange}
            value={formik.values.province}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Duration Month"
            className="input-trasparent"
            name="duration_month"
            onChange={formik.handleChange}
            value={formik.values.duration_month}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Home Status"
            type={DropDownType.marital}
            callback={(val) => formik.setFieldValue("user_marital_status", val)}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Monthly Payment"
            type="text"
            className="input-trasparent"
            name="temp_odometer"
            onChange={formik.handleChange}
            value={formik.values.temp_odometer}
          />
        </div>
        <div className="col-12 mt-2 pb-2">
          <h2>Current Employment</h2>
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Type"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Employer"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Occupation"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Phone"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Gross income"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Duration Year"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Duration Month"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-12 mt-2 ">
          <TextArea
            placeholder="address"
            className="input-trasparent"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Postal Code"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="City"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Province"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Country"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-12 mt-2 pb-2">
          <h2>Previous Employment</h2>
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Previous Employer"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Phone"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Duration Year"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Duration Month"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-12 mt-2 pb-2">
          <h2>Other Infromation</h2>
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Rate Your Credit"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Employer"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Bankruptcy"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Is Co-singer Available"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-12 mt-2 ">
          <TextArea
            placeholder="Comment"
            className="input-trasparent"
            name="comment"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </div>
        <div className="col-4 mt-2 ">
          <Button isTransparent={true}>Advance Search</Button>
        </div>
        <div className="col-4 mt-2 ">
          <Button isTransparent={true}>Value Trade</Button>
        </div>
        <div className="col-4 mt-2 ">
          <Button isTransparent={true}>Car Finder</Button>
        </div>
        <div
          className="col-12 mt-2 pb-2"
          style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
        >
          <input type="checkbox" checked={rules} />
          <p onClick={() => setRules((state) => !state)}>
            I agree that by submitting this application, I authorize and give
            this dealership, as well as any potential financing source this
            dealership presents this application to, my consent to obtain my
            credit report from any credit reporting agency used to complete an
            investigation of my credit.{" "}
          </p>
        </div>
        <div className="col-12 mt-2" style={{ height: "40px" }}>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default FinanceApplicationForm;
