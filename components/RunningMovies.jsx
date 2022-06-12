import React from "react";
import styles from "../styles/RunningMovies.module.scss";
import Image from "next/image";
import movie1 from "../public/movie1.jpg";
import movie2 from "../public/movie2.jpg";
import movie3 from "../public/movie3.jpg";
import movie4 from "../public/movie4.jpg";
import movie5 from "../public/movie5.jpg";
import movie6 from "../public/movie6.jpg";
import movie7 from "../public/movie7.jpg";
import movie8 from "../public/movie8.jpg";
import { FaPlayCircle } from "react-icons/fa";

const RunningMovies = () => {
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
  const images2 = [
    movie5,
    movie6,
    movie7,
    movie8,
    movie1,
    movie2,
    movie3,
    movie4,
  ];
  return (
    <div className={styles.container}>
      <ul className={styles.movielist}>
        {images.map((i) => (
          <li className={styles.movie} key={i}>
            <button className={styles.btn}>
              <span>Stream now</span>
              <FaPlayCircle />
            </button>
            <Image
              src={i}
              alt="img"
              layout="responsive"
              objectFit="cover"
              priority="first"
              className={styles.img}
            />
          </li>
        ))}
      </ul>
      <ul className={styles.movielist}>
        {images2.map((i) => (
          <li className={styles.movie2} key={i}>
            <button className={styles.btn}>
              <span>Stream now</span>
              <FaPlayCircle />
            </button>
            <Image
              src={i}
              alt="img"
              layout="responsive"
              objectFit="cover"
              priority="first"
              className={styles.img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunningMovies;
