import Container from "@/components/shared/container";
import styles from "@/styles/inventoryDetails.module.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Button from "@/components/shared/button";

const Details = ({ params }) => {
  console.log("params ", params);
  return (
    <div className={styles.main}>
      <Container>
        <div className="w-full  d-flex justify-content-between align-items-center">
          <div style={{ width: "200px", height: "40px" }}>
            <Button>
              <FaLongArrowAltLeft />
              Back To Inventory
            </Button>
          </div>
          <div
            className="d-flex justify-content-between "
            style={{ width: "410px" }}
          >
            <div style={{ width: "200px", height: "40px" }} className="pl-2">
              <Button> Previous Vehicle</Button>
            </div>
            <div style={{ width: "200px", height: "40px" }}>
              <Button>Next Vehicle</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p></p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
