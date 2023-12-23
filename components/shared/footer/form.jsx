import { useFormik } from "formik";
import { mutate } from "swr";
import { useContactUs } from "@/hooks/actions/api/contactUs";
import { useAppStore } from "@/hooks/store";
import { toast } from "react-toastify";
import Input from "../input";
import TextArea from "../textArea";
import Button from "@/components/shared/button";
import Vehicle from "../vehicle";
import { useState } from "react";
import styles from "@/styles/footer.module.scss";

const SubmitForm = (props) => {
  let [frk_midv_id, setFrk_midv_id] = useState(undefined);
  let { domain, baseUrl } = useAppStore();

  const formit = useFormik({
    initialValues: {
      f_name: "",
      l_name: "",
      email: "",
      phone: "",
      message: "",
      frk_midv_id: "",
    },
    onSubmit: async (values, { resetForm }) => {
      let data = { ...values, frk_midv_id };
      let { textus } = await mutate(
        "contactUs",
        useContactUs(data, `${baseUrl}/api/dealerweb/textus/add/${domain}`)
      );
      if (textus) {
        toast.success("Successfully Done");
        resetForm();
      }
    },
  });

  return (
    <div className={styles.form}>
      {!props.hideGetInTouch && <h3>Get In Touch</h3>}

      {!props.hideGetInTouch ? (
        <h5>Personal Information</h5>
      ) : (
        <h3>Personal Information</h3>
      )}

      <form onSubmit={formit.handleSubmit}>
        <div className="row ">
          <div className="col-lg-6  mt-2">
            <Input
              required
              name="f_name"
              value={formit.values.f_name}
              type="text"
              className="w-100"
              placeholder="First Name"
              onChange={formit.handleChange}
            />
          </div>
          <div className="col-lg-6  mt-2">
            <Input
              value={formit.values.l_name}
              required
              name="l_name"
              type="text"
              placeholder="Last Name"
              className="w-100"
              onChange={formit.handleChange}
            />
          </div>
          <div className="col-lg-6 mt-2">
            <Input
              required
              name="email"
              type="email"
              value={formit.values.email}
              className="w-full"
              placeholder="Email"
              onChange={formit.handleChange}
            />
          </div>
          <div className="col-lg-6 mt-2">
            <Input
              required
              name="phone"
              value={formit.values.phone}
              type="tel"
              className="w-full"
              placeholder="Phone"
              onChange={formit.handleChange}
            />
          </div>
          <div className="col-lg-12 mt-2">
            <Vehicle
              callback={(id) => setFrk_midv_id(id)}
              reset={formit.values.frk_midv_id}
              name="frk_midv_id"
            />
          </div>
          <div className="col-lg-12 mt-2">
            <TextArea
              value={formit.values.message}
              required
              name="message"
              className="w-100"
              placeholder="Message"
              onChange={formit.handleChange}
            />
          </div>
          <div className="col-lg-12 mh-100" style={{ height: "40px" }}>
            <Button className="w-32 font-bold">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
