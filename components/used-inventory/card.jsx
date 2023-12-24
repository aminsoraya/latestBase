import { useAppStore } from "@/hooks/store";
import styles from "@/styles/usedInventory.module.scss";
import Button from "@/components/shared/button";
import Link from "next/link";
import Image from "next/image";
import staticImg from "@/public/img/default-inventory-image-car-med.png";

const Card = ({ car }) => {
  const { baseSpecialImageUrl } = useAppStore();

  return (
    <div className="col-lg-4 mt-4">
      <div className={styles.card}>
        <div className={styles.img}>
          {car?.cover_image ? (
            <Image
              fill
              sizes="(min-width:740px) 674px, calc(95.48vw-18px)"
              src={`${baseSpecialImageUrl}${car?.cover_image}`}
              loading="lazy"
            />
          ) : (
            <Image
              layout="fill"
              src={staticImg}
              placeholder="blur"
              loading="lazy"
            />
          )}
        </div>
        <div className="px-2 pb-4 pt-2">
          <div className="row pt-2 ">
            <div className={`col-12 ${styles.compare}`}>
              <div>
                <input type="checkbox" />
                <span>Select For Compare</span>
              </div>
              <Button isTransparent={true}>Select For Compare</Button>
            </div>
          </div>
          <div className="row pt-2">
            <div className={`col-12 ${styles.title}`}>
              <Link
                href={`/cars/used/${car?.model_year}-${car?.make}-${car?.model}-${car?.id}`}
              >
                {car?.Vehicle?.model_year} {car?.Vehicle?.make}
                {car?.Vehicle?.model}
              </Link>
            </div>
          </div>
          <div className="row">
            <div className={`col-12 ${styles.row} ${styles.h12} mt-4`}>
              <span className={styles.price}> Price: $19,900 </span>
              <span>Odometer:97,000 Km</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr />
            </div>
          </div>
          <div className="row ">
            <div className={`col-12 ${styles.row} ${styles.font14}`}>
              <span>Exterior Color</span>
              <span>blue</span>
            </div>
          </div>
          <div className="row ">
            <div className={`col-12 ${styles.row} ${styles.font14}`}>
              <span>Stock #</span>
              <span>15MI97B</span>
            </div>
          </div>
          <div className="row ">
            <div className={`col-12 ${styles.row} ${styles.font14}`}>
              <span>Doors</span>
              <span>4</span>
            </div>
          </div>
          <div className="row ">
            <div className={`col-12 ${styles.row} ${styles.font14}`}>
              <span>Body Style</span>
              <span>Hatchback</span>
            </div>
          </div>
          <div className="row ">
            <div className={`col-12 ${styles.row} ${styles.font14}`}>
              <span>Transmission</span>
              <span>Automatic</span>
            </div>
          </div>
          <div className="row ">
            <div className={`col-12 ${styles.row} ${styles.font14}`}>
              <span>Drivetrain</span>
              <span>FWD</span>
            </div>
          </div>
          <div className="row ">
            <div className={`col-12 ${styles.row} ${styles.font14}`}>
              <span>Engine</span>
              <span>4 Cylinder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
