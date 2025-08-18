//imagenes rotas o que no estan disponibles
import React, { useState } from 'react';
import styles from './ImageWithFallback.module.css';

const ImageWithFallback = ({ src, fallbackSrc, className = '', ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setImgSrc(fallbackSrc);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {loading && <div className={styles.loading}></div>}
      <img
        src={imgSrc}
        onError={handleError}
        onLoad={handleLoad}
        className={`${styles.image} ${loading ? styles.hidden : ''}`}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;