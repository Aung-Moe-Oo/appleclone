import React from "react";
import styles from "../styles/Navbar.module.scss";
import { FaApple, FaSearch } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.hamburger}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <span className={styles.icon}>
          <a href="https://tv.apple.com">
            <FaApple />
          </a>
        </span>
        <h5 className={styles.text}>Store</h5>
        <h5 className={styles.text}>Mac</h5>
        <h5 className={styles.text}>iPad</h5>
        <h5 className={styles.text}>iPhone</h5>
        <h5 className={styles.text}>Watch</h5>
        <h5 className={styles.text}>AirPods</h5>
        <h5 className={styles.text}>TV & Home</h5>
        <h5 className={styles.text}>Only on Apple</h5>
        <h5 className={styles.text}>Accessories</h5>
        <h5 className={styles.text}>Support</h5>
        <span className={styles.icon} id={styles.searchIcon}>
          <FaSearch />
        </span>
        <span className={styles.icon}>
          <BsBag />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
