import React from "react";
import styles from "../styles/StickyBar.module.scss";

const StickyBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <h3 className={styles.text}>
          Apple TV <span className={styles.plus}>+</span>
        </h3>
        <button className={styles.btn}>Stream now</button>
      </div>
    </div>
  );
};

export default StickyBar;
