
import React, { useState } from "react";
import styles from "./ImageWithFallback.module.css";

const ImageWithFallback = ({ src, fallbackSrc, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setImgSrc(fallbackSrc);
    setLoading(false);
  };

  return (
    <div className={styles.imageWrapper}>
      {loading && <div className={styles.loader}></div>}

      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${loading ? styles.hidden : ""}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ImageWithFallback;
