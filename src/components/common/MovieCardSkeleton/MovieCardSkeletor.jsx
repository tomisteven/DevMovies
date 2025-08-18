import React from 'react';
import styles from './MovieCardSkeleton.module.css';

const MovieCardSkeleton = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonRating}></div>
        <div className={styles.skeletonMeta}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;