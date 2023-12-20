import styles from "@/styles/footer.module.scss";
import Map from "./map";
import SubmitForm from "./form";
import Container from "../container";
import Timeworks from "@/components/shared/footer/bussniessHours";
import Address from "./address";

const Footer = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <div className={styles.contactUs}>
              <h2>Contact Us</h2>
              <Address />
              <Map />
            </div>
          </div>
          <div
            className="col-xs-12 col-lg-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Timeworks showLogo={true} />
          </div>
          <div className="col-xs-12 col-lg-4 p-0 m-0">
            <SubmitForm />
          </div>
        </div>
        <div>
          <div className="col-lg-12">
            <hr style={{ borderWidth: "3px", color: "black" }} />
          </div>
          <div
            className="col-lg-6 col-xs-12"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>© 2022 United Auto Sales Ltd</span>
            <span> Powered By Hillzdealer</span>
            <span>Privacy & Policy</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
