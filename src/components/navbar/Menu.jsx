import React from 'react'
import styles from "./_navbar.module.css";
const Menu = () => {
  return (
    <section id="menuBlock" className={styles.menuBlock}>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>AboutUs</li>
        <li>ContactUs</li>
      </ul>
    </section>
  );
}

export default Menu