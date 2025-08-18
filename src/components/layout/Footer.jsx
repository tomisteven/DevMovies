import React from 'react';
import { FaGithub, FaLinkedin, FaFilm } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <FaFilm className={styles.logoIcon} />
          <span className={styles.logoText}>MovieFinder</span>
        </div>

        <div className={styles.links}>
          <a
            href="https://github.com/tomisteven/movie-search-app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.link}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tomas-steven"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.link}
          >
            <FaLinkedin />
          </a>
        </div>

        <div className={styles.legal}>
          <p>Datos proporcionados por OMDB API</p>
          <p>&copy; {currentYear} Prueba Tecnica Tomas Steven.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;