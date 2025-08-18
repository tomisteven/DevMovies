import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ fullPage = false }) => {
  return (
    <div className={`${styles.container} ${fullPage ? styles.fullPage : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;