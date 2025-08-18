import React from 'react';
import styles from './MovieRating.module.css';

const MovieRating = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Calificaciones</h2>
      <div className={styles.ratings}>
        {ratings.map((rating, index) => (
          <div key={index} className={styles.ratingItem}>
            <div className={styles.ratingSource}>{rating.Source}</div>
            <div className={styles.ratingValue}>{rating.Value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieRating;