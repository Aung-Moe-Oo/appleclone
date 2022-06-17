import Image from "next/image";
import movie1 from "../public/movie1.jpg";
import movie2 from "../public/movie2.jpg";
import movie3 from "../public/movie3.jpg";
import movie4 from "../public/movie4.jpg";
import movie5 from "../public/movie5.jpg";
import movie6 from "../public/movie6.jpg";
import movie7 from "../public/movie7.jpg";
import movie8 from "../public/movie8.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/Movies.module.scss";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const Featured = () => {
  const [screen, setScreen] = useState(false);
  const changeScreen = () => {
    if (window.scrollY >= 1500) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScreen);
  }, []);

  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 7);
    }
    if (direction === "r") {
      setIndex(index !== 7 ? index + 1 : 0);
    }
  };
  const images = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
    movie7,
    movie8,
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div
          className={styles.arrowContainer}
          style={{ left: "10px", display: screen ? "block" : "none" }}
          onClick={() => handleArrow("l")}
        >
          <FaChevronLeft size={50} />
        </div>
        <div
          className={styles.wrapper}
          style={{
            transform: `translateX(${-100 * index}vw)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={styles.imgContainer}
              style={{
                width: screen ? "76vw" : "100vw",
              }}
            >
              <button
                className={styles.btn}
                style={{ display: screen ? "block" : "none" }}
              >
                <span> Stream Now</span>
                <FaPlayCircle />
              </button>
              <Image
                src={img}
                alt="img"
                layout="fill"
                priority="first"
                className={styles.img}
                style={{ borderRadius: screen ? "20px" : "0" }}
              />
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainer}
          style={{ right: "-40px", display: screen ? "block" : "none" }}
          onClick={() => handleArrow("r")}
        >
          <FaChevronRight size={50} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
