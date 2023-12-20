import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import TextArea from "@/components/shared/textArea";
import { useFormik } from "formik";
import { mutate } from "swr";
import { useContactUs } from "@/hooks/actions/contactUs";
import { toast } from "react-toastify";
import { useAppStore } from "@/hooks/store";
import styles from "@/styles/textUsNow.module.scss";

const TextUsNowForm = () => {
  const initialValues = {};
  const { baseUrl, domain } = useAppStore();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      let { status, message } = await mutate(
        "textUsNow",
        useContactUs(values, `${baseUrl}/api/dealerweb/textus/add/${domain}`)
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
    <div className={styles.form}>
      <h2>Personal Information</h2>
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
          <div className="col-12 mt-2">
            <TextArea
              name="message"
              style={{
                background: "transparent",
                border: "1px solid white",
                color: "white",
              }}
              placeholder="Message"
              callback={(val) => formik.setFieldValue("bodyStyle", val)}
            />
          </div>

          <div className="col-6 mt-2" style={{ height: "40px" }}>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TextUsNowForm;
