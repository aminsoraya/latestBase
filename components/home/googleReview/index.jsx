"use client";
import styles from "@/styles/googleReview.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import StarSvg from "./starSvg";
import UserSvg from "./userSvg";
import Container from "@/components/shared/container";

const googleLink =
  "https://www.google.com/search?q=United+Auto+Sales+ltd&oq=United+Auto+Sales+ltd&aqs=chrome..69i57j0i22i30l9.486j0j7&sourceid=chrome&ie=UTF-8#lrd=0x5485d81f0c1ff64f:0x74b73240c21090b8,1,,,";
const LatestProduct = () => {
  let reviews = [
    {
      src: "Jason Veilleux",
      content: "Friendly service. Good selection. Try the tea!",
    },
    {
      src: "Coquitlam TOWING",
      content:
        "These guys are great. Thank you for giving me a great deal on my first vehicle. A+++",
    },
    {
      src: "john lee",
      content:
        "I went to united auto sales and bought a 2017 Ford Escape. Their staff was very friendly, honest and helpful, i was very happy with my purchase. I would recommend purchasing a car from there.",
    },
  ];

  return (
    <div className={styles.main}>
      <Container>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className={`${styles.reviews} `}>
              <h1 className={`${styles.title} `}>Google Reviews</h1>
              <span className={`${styles.content} `}>
                We are committed to making you a long-lasting customer and
                friend
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className={`${styles.slides} `}>
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                className=""
              >
                {reviews.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={`${styles.content} `}>
                        <div className={`${styles.container} `}>
                          <div className={`${styles.row} `}>
                            <UserSvg />
                            <span>{item.src}</span>
                            <div className={`${styles.star} `}>
                              <StarSvg />
                              <StarSvg />
                              <StarSvg />
                              <StarSvg />
                              <StarSvg />
                            </div>
                          </div>
                          <div className={`${styles.text} `}>
                            {item.content}
                          </div>
                        </div>
                        <div className={`${styles.button} `}>
                          <a href={googleLink} target="_blank" >Read More</a>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <hr style={{ borderWidth: "3px", color: "black" }} />
      </Container>
    </div>
  );
};

export default LatestProduct;
