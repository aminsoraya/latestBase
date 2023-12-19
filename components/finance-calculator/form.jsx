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
        <label>Vehicle Price</label>
        <div className="col-12 mt-2">
          <Input
            name="firstName"
            required={true}
            onChange={formik.handleChange}
            className="input-trasparent"
            value={formik.values.firstName}
          />
        </div>
        <div className="col-6 mt-2">
          <label htmlFor="">Down Payment</label>
          <Input
            required={true}
            className="input-trasparent"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div className="col-6 mt-2">
          <label htmlFor="">Trade In Value</label>
          <Input
            required={true}
            type="email"
            className="input-trasparent"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="col-6 mt-2">
          <label htmlFor="">Interest Rate</label>
          <Input
            type="tel"
            required={true}
            className="input-trasparent"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div className="col-6 mt-2">
          <label htmlFor="">Loan Term</label>
          <Input
            placeholder="Loan Term (ex: 36 Months )"
            type="text"
            required={true}
            className="input-trasparent"
            name="user_sin_number"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div className="col-6 mt-2">
          <Button isTransparent={true}>Calculate</Button>
        </div>
        <div className="col-6 mt-2">
          <Button>Reset</Button>
        </div>
      </div>
    </form>
  );
};

export default FinanceApplicationForm;
