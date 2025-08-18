import React from 'react';
import styles from './Select.module.css';

const Select = ({ options, className = '', ...props }) => {
  return (
    <select className={`${styles.select} ${className}`} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;