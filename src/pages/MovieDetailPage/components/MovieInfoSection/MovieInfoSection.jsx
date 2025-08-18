import React from 'react';
import styles from './MovieInfoSection.module.css';

const MovieInfoSection = ({ movie }) => {
  const { Plot, Language, Country, Released, BoxOffice, Production, Writer } = movie;

  const infoItems = [
    { label: 'Trama', value: Plot },
    { label: 'Idioma', value: Language },
    { label: 'País', value: Country },
    { label: 'Fecha de lanzamiento', value: Released },
    { label: 'Recaudación', value: BoxOffice },
    { label: 'Producción', value: Production },
    { label: 'Guionista', value: Writer }
  ].filter(item => item.value && item.value !== 'N/A');

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Información</h2>
      <div className={styles.infoGrid}>
        {infoItems.map((item, index) => (
          <div key={index} className={styles.infoItem}>
            <strong className={styles.infoLabel}>{item.label}:</strong>
            <span className={styles.infoValue}>{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieInfoSection;