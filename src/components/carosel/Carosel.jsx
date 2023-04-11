import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from "./carosel.module.css";
import CaroselPic1 from "../../pics/caroselPic1.jpg";
import CaroselPic2 from "../../pics/caroselPic2.jpg";
import CaroselPic3 from "../../pics/caroselPic3.jpg";
const Carosel = () => {
  return (
    <div id="carosel1">
      <Carousel
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        data-interval={3000}
      >
        <div className={styles.img}>
          <img src={CaroselPic1} />
        </div>
        <div className={styles.img}>
          <img src={CaroselPic2} />
        </div>
        <div className={styles.img}>
          <img src={CaroselPic3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carosel;
