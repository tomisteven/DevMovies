import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../../context/slice";
import MovieHeader from "./components/MovieHeader/MovieHeader";
import MovieInfoSection from "./components/MovieInfoSection/MovieInfoSection";
import MovieRating from "./components/MovieRating/MovieRating";
import Button from "../../components/common/Button/Button";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/common/ErrorMessage/ErrorMessage";
import styles from "./MovieDetailPage.module.css";
import fallback from "../../assets/fallback.png"; // Ruta al fallback de imagen
import ImageWithFallback from "../../components/common/ImageWithFallback/ImageWithFallback";

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentMovie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id, dispatch]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <LoadingSpinner fullPage />;
  }

  if (error) {
    return <ErrorMessage message={error} fullPage />;
  }

  if (!currentMovie) {
    return (
      <div className={styles.notFound}>
        <h2>Película no encontrada</h2>
        <Button onClick={handleGoBack}>Volver</Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleGoBack} className={styles.backButton}>
        &larr; Volver
      </Button>

      <MovieHeader movie={currentMovie} />

      <div className={styles.content}>
        <div className={styles.posterContainer}>
          <ImageWithFallback
            src={currentMovie.Poster}
            alt={`Poster de ${currentMovie.Title}`}
            className={styles.poster}
            fallbackSrc={fallback} // imagen para fallback
          />
        </div>

        <div className={styles.details}>
          <MovieRating ratings={currentMovie.Ratings} />
          <MovieInfoSection movie={currentMovie} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
