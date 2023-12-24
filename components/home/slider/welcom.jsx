"use client";
// import Button from "@/components/shared/button";
import Container from "@/components/shared/container";
import { WiDirectionLeft } from "react-icons/wi";
import styles from "@/styles/welcom.module.scss";
import Button from "@/components/shared/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Welcome = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.container}>
          <h2>WELCOME TO OUR WEBSITE</h2>
          <p>
            United Auto Sales Ltd would be honored to have you as a friend and a
            customer. We are here to collect best cars available in the market
            and help you to choose the best one based on your needs and
            interests. You are also more than welcome to contact us for trading
            or selling your vehicle. We try our best to offer you a fair and
            rational deal. We inspect and safety check our vehicles carefully
            and offer you the inspection report as well as other available
            documents about the vehicle history professionally. Please, visit
            our website and search through different cars and provided
            information and contact us to experience our customer service and
            care. Thank You!
          </p>
          <div className={styles.button}>
            <Link href="/used-inventory">
              <span>View Inventory</span>
              <WiDirectionLeft className={styles.direction}/>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
