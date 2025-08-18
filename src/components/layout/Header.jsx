import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../common/ThemeTogle/ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          MovieFinder
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;