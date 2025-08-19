import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../../common/MovieCardSkeleton/MovieCardSkeletor";
import styles from "./MovieGrid.module.css";
import search from "../../../assets/search.png";
import { useMoviesFilter } from "../../../hooks/useMoviesFilter";

const MoviesGrid = ({ movies, loading }) => {
  const options = [
    "Date",
    "Popularity",
    "Qualification",
    "Name",
    "Relevance",
    "Movie",
    "Series",
    "Game",
  ];

  const { filter, setFilter, filteredMovies } = useMoviesFilter(movies);

  if (loading) {
    return (
      <div className={styles.grid}>
        {/* skeletons mientras se cargan las películas, MINIMO 8 */}
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
        {options.map((filtro) => (
          <button
            key={filtro}
            className={`${styles.btnFilterMovies} ${
              filter === filtro ? styles.activeFilter : ""
            }`}
            onClick={() => setFilter(filtro)}
          >
            {filtro.charAt(0).toUpperCase() + filtro.slice(1)}{" "}
            {/* para renderizar los nombres */}
          </button>
        ))}
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
