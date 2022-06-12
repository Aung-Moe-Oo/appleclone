import React from "react";
import styles from "/styles/Video.module.scss";
import logo from "../public/app.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const Video = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 250) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: color ? "rgba(0,0,0)" : "transparent",
        transition: "1s linear",
      }}
    >
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/large.mp4" type="video/mp4" />
      </video>
      <div
        className={styles.hero}
        style={{
          opacity: color ? "0" : "1",
          transition: "0.5s linear",
        }}
      >
        <h1 className={styles.title}>All Apple Originals.</h1>
        <h1 className={styles.title}>Only On Apple TV+.</h1>
        <button className={styles.btn}>Stream now</button>
        <p className={styles.noti}>
          <span>Watch on the</span>
          <span className={styles.logo}>
            <Image
              src={logo}
              objectFit="fill"
              alt="AppleTVLogo"
              className={styles.img}
            />
          </span>
          <span>app</span>
        </p>
      </div>
      <div className={styles.contents}>
        <h1
          className={styles.text}
          style={{
            transform: color ? "translateY(0)" : "translateY(100px)",
            transition: "0.3s linear",
          }}
        >
          New Apple Originals every month.
        </h1>
        <h1
          className={styles.text2}
          style={{
            transform: color ? "translateY(0)" : "translateY(100px)",
            transition: "0.5s linear",
          }}
        >
          Stream on the Apple TV app on Apple devices, smart TVs ,consoles, or
          sticks.
        </h1>
        <h1
          className={styles.text3}
          style={{
            transform: color ? "translateY(0)" : "translateY(100px)",
            transition: "0.8s linear",
          }}
        >
          Share Apple TV+ with your family.
        </h1>
      </div>
      <div className={styles.plans}>
        <div className={styles.plan1}>
          <h3 className={styles.planTitle}>Buy an Apple device</h3>
          <h1 className={styles.planPrice}>3 months free.</h1>
          <p className={styles.planText}>
            Apple TV+ is included for 3 months when you purchase an Apple device
            and redeem the offer within 90 days.
            <a href="#" className={styles.link1}>
              1
            </a>
          </p>
          <button className={styles.btnPlan}>Check eligibility</button>
        </div>
        <div className={styles.plan2}>
          <h3 className={styles.planTitle}>Free 7-day trial</h3>
          <h1 className={styles.planPrice}>$4.99/mo.</h1>
          <p className={styles.planText}>
            A monthly subscription is just $4.99 per month after a free 7-day
            trial. Share Apple TV+ with your family.
            <a href="#" className={styles.link2}>
              2
            </a>
          </p>
          <button className={styles.btnPlan}>Try it free</button>
        </div>
        <div className={styles.plan3}>
          <h3 className={styles.planTitle}>Free 1-month trial</h3>
          <h1 className={styles.planPrice}>Apple One</h1>
          <p className={styles.planText}>
            Bundle Apple TV+ with up to five other great services for one low
            monthly price. And enjoy more for less.
            <a href="#" className={styles.link}>
              Learn more &gt;
            </a>
          </p>
          <button className={styles.btnPlan}>Try Apple One free*</button>
        </div>
      </div>
    </div>
  );
};

export default Video;
