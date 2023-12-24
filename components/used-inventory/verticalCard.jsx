import { useAppStore } from "@/hooks/store";
import styles from "@/styles/verticalCards.module.scss";
import Button from "@/components/shared/button";
import Link from "next/link";
import Image from "next/image";
import staticImg from "@/public/img/default-inventory-image-car-med.png";
import { IoIosSpeedometer } from "react-icons/io";

const Card = ({ car }) => {
  const { baseSpecialImageUrl } = useAppStore();

  return (
    <div className={`${styles.card} row mt-4`}>
      <div className="col-lg-3 pt-3">
        <div className={`${styles.card}`}>
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
            <div className={`col-12 ${styles.compare}`}>
              <div>
                <input type="checkbox" />
                <span>Select For Compare</span>
              </div>
              <Button style={{width:"100px"}} isTransparent={true}>Compare</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="row pt-2">
          <div className={`col-12 ${styles.title}`}>
            <div>
              <Link
                href={`/cars/used/${car?.model_year}-${car?.make}-${car?.model}-${car?.id}`}
              >
                <h3>
                  {car?.Vehicle?.model_year} {car?.Vehicle?.make}
                  {car?.Vehicle?.model}
                  {car?.Vehicle?.drive_type}
                </h3>
              </Link>
            </div>
            <h2 className={styles.price}>
              ${car.sell_price.toLocaleString()}{" "}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <span>
              <IoIosSpeedometer />
              {car.odometer.toLocaleString()}{" "}
              {car.odometer_type === 1 ? "Mi" : "Km"}
            </span>
          </div>
          <div className={`col-4`}>
            <div className={`row ${styles.items} mt-2`}>
              <div className="col-6">
                <span>Exterior Color</span>
              </div>
              <div className="col-6">
                <span>{car?.Vehicle?.exterior_color?.name}</span>
              </div>
            </div>
            <div className={`row ${styles.items}`}>
              <div className={`col-6`}>
                <span>Stock #</span>
              </div>
              <div className={`col-6`}>
                <span>{car?.stock_NO}</span>
              </div>
            </div>
            <div className={`row ${styles.items}`}>
              <div className={`col-6`}>
                <span>Fuel Type</span>
              </div>
              <div className={`col-6`}>
                <span>{car?.Vehicle?.fuel_type}</span>
              </div>
            </div>
            <div className={`row ${styles.items}`}>
              <div className={`col-6`}>
                <span>Doors</span>
              </div>
              <div className={`col-6`}>
                <span>{car?.Vehicle?.doors}</span>
              </div>
            </div>
          </div>
          <div className={`col-4`}>
            <div className={`row ${styles.items} mt-2`}>
              <div className="col-6">
                <span>Body Style : </span>
              </div>
              <div className="col-6">
                <span>{car?.Vehicle?.BodyStyle?.name}</span>
              </div>
            </div>
            <div className={`row ${styles.items}`}>
              <div className={`col-6`}>
                <span>Transmission : </span>
              </div>
              <div className={`col-6`}>
                <span>{car?.Vehicle?.Transmission?.name}</span>
              </div>
            </div>
            <div className={`row ${styles.items}`}>
              <div className={`col-6`}>
                <span>Drivetrain : </span>
              </div>
              <div className={`col-6`}>
                <span>{car?.Vehicle?.drive_type}</span>
              </div>
            </div>
            <div className={`row ${styles.items}`}>
              <div className={`col-6`}>
                <span>Engine : </span>
              </div>
              <div className={`col-6`}>
                <span>{car?.Vehicle?.engine_cylinders}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
