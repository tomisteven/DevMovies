import React from "react";
import { Link } from "react-router-dom";

import styles from "./MovieCard.module.css";
import ImageWithFallback from "../../common/ImageWithFallback/ImageWithFallback";
import Button from "../../common/Button/Button";
import fallback from "../../../assets/fallback.png"; // Asegúrate de tener una imagen de fallback

const MovieCard = ({ movie }) => {
  const { Title, Year, Type, Poster, imdbID, imdbRating } = movie;
  console.log(`MovieCard: ${Title}, ID: ${imdbID}`); // Log para depuración
  console.log(imdbRating);

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <ImageWithFallback
          src={Poster}
          alt={`Poster de ${Title}`}
          fallbackSrc={fallback}
          className={styles.image}
        />
        {Type && (
          <span className={`${styles.typeBadge} ${styles[Type.toLowerCase()]}`}>
            {Type} {/* tipo pelicula serie..  */}
          </span>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title} title={Title}>
          {Title.length > 30 ? `${Title.substring(0, 30)}...` : Title}
        </h3>

        <div className={styles.meta}>
          <span className={styles.year}>{Year}</span>
        </div>

        <Link to={`/movie/${imdbID}`} className={styles.link}>
          <Button variant="outline" className={styles.button}>
            Ver detalles
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default MovieCard;
