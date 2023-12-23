import Button from "@/components/shared/button";
import DynamicDropdown, {
  DropDownType,
} from "@/components/shared/dynamicDropdown";
import Input from "@/components/shared/input";
import TextArea from "@/components/shared/textArea";
import Vehicle from "@/components/shared/vehicle";
import { useFormik } from "formik";
import { mutate } from "swr";
import { useContactUs } from "@/hooks/actions/api/contactUs";
import { toast } from "react-toastify";
import { useAppStore } from "@/hooks/store";

const PersonalInformationForm = () => {
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
        <div className="col-12 pt-2 pb-2">
          <h2>Vehicle Information</h2>
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Vin"
            className="input-trasparent"
            name="vin_number"
            onChange={formik.handleChange}
            value={formik.values.vin_number}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Year"
            type={DropDownType.years}
            callback={(val) => formik.setFieldValue("year", val)}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Make"
            className="input-trasparent"
            name="make"
            onChange={formik.handleChange}
            value={formik.values.make}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Model"
            className="input-trasparent"
            name="model"
            onChange={formik.handleChange}
            value={formik.values.model}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Trim"
            className="input-trasparent"
            name="trim"
            onChange={formik.handleChange}
            value={formik.values.trim}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Body Style"
            type={DropDownType.bodyStyle}
            callback={(val) => formik.setFieldValue("bodyStyle", val)}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Transmission"
            type={DropDownType.transmission}
            callback={(val) => formik.setFieldValue("transmission", val)}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Drive Line"
            type={DropDownType.driveTrain}
            callback={(val) => formik.setFieldValue("driveLine", val)}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Kilometers"
            type="text"
            className="input-trasparent"
            name="temp_odometer"
            onChange={formik.handleChange}
            value={formik.values.temp_odometer}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Fuel Type"
            type="text"
            className="input-trasparent"
            name="fuel_type"
            onChange={formik.handleChange}
            value={formik.values.fuel_type}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Exterior Colors"
            type={DropDownType.exteriorColors}
            callback={(val) => formik.setFieldValue("frk_exterior_color", val)}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Condition"
            type={DropDownType.conditions}
            callback={(val) => formik.setFieldValue("condition", val)}
          />
        </div>
        <div className="col-6 mt-2">
          <Vehicle
            isTransparent={true}
            callback={(val) => formik.setFieldValue("frk_midv_id", val)}
          />
        </div>
        <div className="col-12 mt-2">
          <TextArea
            placeholder="Additional Info"
            className="input-trasparent pr-2"
            name="additional_info"
            onChange={formik.handleChange}
            value={formik.values.additional_info}
          />
        </div>
        <div className="col-6 mt-2" style={{ height: "40px" }}>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default PersonalInformationForm;
