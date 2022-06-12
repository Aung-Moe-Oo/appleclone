import React from "react";
import styles from "../styles/Notification.module.scss";

const Notification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <h3 className={styles.text}>
          Friday Night Baseball, now streaming on Apple TV+.
          <a href="#" className={styles.link}>
            Learn more &gt;
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Notification;
