"use client";
import Container from "@/components/shared/container";
import styles from "@/styles/inventoryDetails.module.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Button from "@/components/shared/button";
import { useAppStore } from "@/hooks/store";
import useSWR from "swr";
import { useVehicles } from "@/hooks/actions/api/vehicles";
import Gallery from "@/components/used-inventory-detail/gallery";
import Table from "@/components/used-inventory-detail/table";
import { SkeletonLoading } from "@/components/shared/loading";
import Link from "@/components/shared/link";
import RequestInformation from "@/components/used-inventory-detail/requestInformation";

const Details = ({ params }) => {
  const { baseUrl, domain } = useAppStore();

  const { data, isLoading } = useSWR(
    `${baseUrl}/api/vehicle/dealership/media/mid/all/${domain}/${params.vehicleBase}`,
    useVehicles
  );
  const { data: single, isLoading: isLoadingSingle } = useSWR(
    `${baseUrl}/api/dealership/mid/vehicle/single/${domain}/${params.vehicleBase}`,
    useVehicles
  );

  return (
    <div className={styles.main}>
      <RequestInformation />
      <Container>
        {single && data && (
          <>
            <div className="w-full  d-flex justify-content-between align-items-center row">
              <div className={`col-lg-3 ${styles.head}`}>
                <Link href="/used-inventory">
                  <FaLongArrowAltLeft />
                  Back To Inventory
                </Link>
              </div>
              <div className="d-flex justify-content-end col-lg-9 mt-2 col-md-12">
                <div
                  className={`${styles.head} pl-2 col-lg-3 pr-2 col-md-6 d-flex justify-content-center col-xs-12`}
                >
                  <div style={{ width: "90%" }}>
                    <Link
                      href={`/used-inventory-details/${
                        single?.previousVehicle?.Vehicle?.model_year
                      }-${single?.previousVehicle?.Vehicle?.make
                        .replaceAll(/-/g, "")
                        .toLowerCase()}-${single?.previousVehicle?.Vehicle?.model
                        .replaceAll(/-/g, "")
                        .toLowerCase()}-${single?.previousVehicle?.id}`}
                    >
                      Previous Vehicle
                    </Link>
                  </div>
                </div>
                <div
                  className={`${styles.head} pl-2 col-lg-3 pr-2 col-md-6 d-flex justify-content-center col-xs-12`}
                >
                  <div style={{ width: "90%" }}>
                    <Link
                      href={`/used-inventory-details/${
                        single?.nextVehicle?.Vehicle?.model_year
                      }-${single?.nextVehicle?.Vehicle?.make
                        .replaceAll(/-/g, "")
                        .toLowerCase()}-${single?.nextVehicle?.Vehicle?.model
                        .replaceAll(/-/g, "")
                        .toLowerCase()}-${single?.nextVehicle?.id}`}
                    >
                      Next Vehicle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <h3 className="col-12">
                {single?.Vehicle?.model_year} {single?.Vehicle?.make}{" "}
                {single?.Vehicle?.model} {single?.Vehicle?.trim}
              </h3>
            </div>
            <div className="row mt-3 mb-5">
              <div className="col-lg-8">
                <Gallery {...data} />
              </div>
              <div className="col-lg-4">
                <Table {...single} />
                <strong className="row w-full mt-3">
                  <p
                    className={`w-full text-center`}
                    style={{ marginBottom: 0 }}
                  >
                    $ {single?.special_price?.toLocaleString()}
                  </p>
                  <small className="w-full text-center">+ taxes and fees</small>
                </strong>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-9">
                <h5>Description</h5>
                <span style={{fontSize:"13px"}}
                  dangerouslySetInnerHTML={{ __html: single?.comment }}
                ></span>
              </div>
              <div className="col-3">
                <div className={`col-12 ${styles.row} `}>
                  <Button data-toggle="modal" data-target="#exampleModal">
                    <strong>Request Information</strong>
                  </Button>
                </div>
                <div className={`col-12 ${styles.row} mt-2`}>
                  <Link
                    isTransparent={true}
                    href={`/finance-application?selected_vehicle=${single?.id}`}
                  >
                    <strong>Book A Test Drive</strong>
                  </Link>
                </div>
                <div className={`col-12 ${styles.row} mt-2`}>
                  <Button isTransparent={true}>
                    <strong>Apply For Financing</strong>
                  </Button>
                </div>
                <div className={`col-12 ${styles.row} mt-2`}>
                  <Button isTransparent={true}>
                    <strong>Print Window Sticker</strong>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
        {(isLoading || isLoadingSingle) && (
          <>
            <div className="row w-full">
              <div className={`col-12 `}>
                <SkeletonLoading />
              </div>
            </div>
            <div className="row w-full mt-2">
              <div className="col-lg-6">
                <SkeletonLoading height={700} />
              </div>
              <div className="col-lg-6">
                <SkeletonLoading height={700} />
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Details;
