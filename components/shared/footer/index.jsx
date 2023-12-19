import { useAppStore } from "@/hooks/store";
import styles from "@/styles/footer.module.scss";
import { useMemo } from "react";
import SubmitForm from "./form";
import { GoTriangleRight } from "react-icons/go";
import Container from "../container";
import Timeworks from "@/components/shared/footer/bussniessHours"

const Footer = () => {
  let { dealerData } = useAppStore();

  return (
    <div className={styles.main}>
      <Container>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <div className={styles.contactUs}>
              <h2>Contact Us</h2>
              <div className={styles.address}>
                <span>
                  <GoTriangleRight />
                </span>
                <span>Address:</span>
                <span>
                  {dealerData?.business_street}
                  {", "}
                  {dealerData?.business_city?.city}
                  {", "}
                  {dealerData?.business_city?.Province?.province === "Alberta"
                    ? "Ab"
                    : dealerData?.business_city?.Province?.province}
                  {", "}
                  {dealerData?.business_postal}
                </span>
              </div>
              <div className={styles.address}>
                <span>
                  <GoTriangleRight />
                </span>
                <span>Phone Number:</span>
                <span>{dealerData?.business_phone}</span>
              </div>
              <div>
                <iframe
                  allow="geolocation"
                  src={dealerData?.map_url}
                  frameborder="0"
                  width="100%"
                  height="320"
                  className="border-0 w-100 p-0 m-0"
                  aria-hidden="false"
                  tabindex="0"
                  id="iframe"
                />
              </div>
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
