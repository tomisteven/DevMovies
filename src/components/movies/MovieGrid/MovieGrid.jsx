import React, { useState, useMemo } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../../common/MovieCardSkeleton/MovieCardSkeletor";
import styles from "./MovieGrid.module.css";
import search from "../../../assets/search.png";

const MoviesGrid = ({ movies, loading }) => {
  const [filter, setFilter] = useState("fecha");

  const filteredMovies = useMemo(() => {
    if (!movies) return [];

    const sorted = [...movies];
    switch (filter) {
      case "fecha":
        return sorted.sort((a, b) => new Date(b.Year) - new Date(a.Year));
      case "popularidad":
        return sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
      case "calificacion":
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "nombre":
        return sorted.sort((a, b) => a.Title.localeCompare(b.Title));
      case "relevancia":
      default:
        return sorted;
    }
  }, [filter, movies]);

  if (loading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className={styles.empty}>
        <img
          src={search}
          alt="No se encontraron resultados"
          className={styles.emptyIllustration}
        />
        <h3 className={styles.emptyTitle}>No movies found</h3>
        <p className={styles.emptyText}>
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <section className={styles.gridContainer}>
      <h5>Filter: </h5>
      <div className={styles.filters}>
        <button
          className={`${styles.btnFilterMovies} ${
            filter === "fecha" ? styles.activeFilter : ""
          }`}
          onClick={() => setFilter("fecha")}
        >
          Fecha
        </button>
        <button
          className={`${styles.btnFilterMovies} ${
            filter === "popularidad" ? styles.activeFilter : ""
          }`}
          onClick={() => setFilter("popularidad")}
        >
          Popularidad
        </button>
        <button
          className={`${styles.btnFilterMovies} ${
            filter === "calificacion" ? styles.activeFilter : ""
          }`}
          onClick={() => setFilter("calificacion")}
        >
          Calificación
        </button>
        <button
          className={`${styles.btnFilterMovies} ${
            filter === "relevancia" ? styles.activeFilter : ""
          }`}
          onClick={() => setFilter("relevancia")}
        >
          Relevancia
        </button>
        <button
          className={`${styles.btnFilterMovies} ${
            filter === "nombre" ? styles.activeFilter : ""
          }`}
          onClick={() => setFilter("nombre")}
        >
          Nombre
        </button>
      </div>

      <div className={styles.grid}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesGrid;
