import React from 'react';
import styles from './ErrorMessage.module.css';
import Button from '../Button/Button';

const ErrorMessage = ({ message, fullPage = false, onRetry }) => {
  return (
    <div className={`${styles.container} ${fullPage ? styles.fullPage : ''}`}>
      <div className={styles.errorBox}>
        <div className={styles.errorIcon}>!</div>
        <p className={styles.errorMessage}>{message}</p>
        {onRetry && (
          <Button onClick={onRetry} className={styles.retryButton}>
            Reintentar
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;