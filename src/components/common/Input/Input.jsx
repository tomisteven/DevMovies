import React from 'react';
import styles from './Input.module.css';

const Input = ({ error, className = '', ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${error ? styles.error : ''} ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;