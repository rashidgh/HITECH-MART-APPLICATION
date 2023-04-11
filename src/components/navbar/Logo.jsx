import React from 'react'
import Logoo from "../../pics/hitechMartLogo-removebg-preview.png"
import styles from "./_navbar.module.css"
const Logo = () => {
  return (
    <section className={styles.logoBlock}>
      <article>
        <div>
          <img
            src={Logoo}
            alt="logo"
          />
          
        </div>
      </article>
    </section>
  );
}

export default Logo