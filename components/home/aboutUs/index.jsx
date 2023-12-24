import styles from "@/styles/aboutUs.module.scss";
import Image from "next/image";
import Link from "@/components/shared/link"

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image src="/img/aboutUs.png" fill />
          <div className={styles.aboutUs}>
            <h2>About Us</h2>
            <p>
              United Auto Sales Ltd would be honored to have you as a friend and
              a customer. We are here to collect best cars available in the
              market and help you to choose the best one based on your needs and
              interests.
            </p>
           
            <Link href="/about-us">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
