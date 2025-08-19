import React from "react";
import styles from "./MovieHeader.module.css";

const MovieHeader = ({ movie }) => {
  const { Title, Year, Rated, Runtime, Genre, Director, Actors } =
    movie;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {Title} <span className={styles.year}>({Year})</span>
      </h1>

      <div className={styles.meta}>
        {Rated && <span>{Rated}</span>}
        {Runtime && <span> {Runtime}</span>}
        {Genre && <span> {Genre}</span>}
      </div>

      {(Director || Actors) && (
        <div className={styles.crew}>
          {Director && (
            <div>
              <strong>Directo:</strong> {Director}
            </div>
          )}
          {Actors && (
            <div>
              <strong>Actors:</strong> {Actors}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default MovieHeader;
