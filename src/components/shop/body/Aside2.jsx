import React from "react";
import styles from "./_body.module.css";

import clothW1 from "../../../pics/clothW1-removebg-preview.png";
import clothW2 from "../../../pics/clothW2-removebg-preview.png";
import clothW3 from "../../../pics/clothw3-removebg-preview.png";
import clothW4 from "../../../pics/clothw4-removebg-preview.png";
import clothM1 from "../../../pics/clothM1-removebg-preview.png";
import clothM2 from "../../../pics/clothM2-removebg-preview.png";
import clothM3 from "../../../pics/clothM3-removebg-preview.png";
import clothM4 from "../../../pics/clothM4-removebg-preview.png";
import clothC1 from "../../../pics/clothC1-removebg-preview.png";
import clothC2 from "../../../pics/clothC2-removebg-preview.png";
import clothC3 from "../../../pics/clothC3-removebg-preview.png";
import clothC4 from "../../../pics/clothC4removebg.png";


const Aside2 = () => {
  return (
    <section id="bodyAside2" className={styles.aside2Block}>
      {/* !Product card */}
      <section id="bodyAside3card">
        <aside className={styles.aside3} id="bodyAside2aside3">
          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img src={clothW1} alt="women" />
            </div>
            <div className={styles.div2}>
              <span>Party Dresses Top</span>
            </div>
            <div className={styles.div3}>
              <span>₹699</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img
                style={{ height: "80%", width: "80%" }}
                src={clothW2}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Party Dresses Gown</span>
            </div>
            <div className={styles.div3}>
              <span>₹999</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img
                style={{ height: "100%", width: "100%", marginLeft: "40px" }}
                src={clothW3}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Stylish Frock</span>
            </div>
            <div className={styles.div3}>
              <span>₹899</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img src={clothW4} style={{ height: "90%" }} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Lahnga Partywaer</span>
            </div>
            <div className={styles.div3}>
              <span>₹1499</span>
            </div>
          </div>
        </aside>

        {/* ! */}
        <aside className={styles.aside3}>
          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img
                style={{ width: "90%", height: "90%" }}
                src={clothM1}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Half Shirt</span>
            </div>
            <div className={styles.div3}>
              <span>₹499</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img src={clothM2} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Denim Jacket</span>
            </div>
            <div className={styles.div3}>
              <span>₹1499</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img
                style={{ height: "80%", marginLeft: "20px" }}
                src={clothM3}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Woolean Jacket</span>
            </div>
            <div className={styles.div3}>
              <span>₹1299</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img
                style={{ width: "120%", marginRight: "40px" }}
                src={clothM4}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Woodland Jacket</span>
            </div>
            <div className={styles.div3}>
              <span>₹1699</span>
            </div>
          </div>
        </aside>

        {/* ! */}
        <aside className={styles.aside3}>
          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img src={clothC1} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Kid Frock</span>
            </div>
            <div className={styles.div3}>
              <span>₹599</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img src={clothC2} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Full T-shairt</span>
            </div>
            <div className={styles.div3}>
              <span>₹399</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img style={{ width: "80%" }} src={clothC3} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Denim Kid wear</span>
            </div>
            <div className={styles.div3}>
              <span>₹799</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <img
                style={{ width: "80%", height: "90%" }}
                src={clothC4}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Stylish Frock</span>
            </div>
            <div className={styles.div3}>
              <span>₹999</span>
            </div>
          </div>
        </aside>
      </section>
      <div
        id={styles.aside2Li}
        style={{
          textAlign: "center",
          padding: "10px 20px",
        }}
      >
        <button>Load More</button>
      </div>
    </section>
  );
};

export default Aside2;
