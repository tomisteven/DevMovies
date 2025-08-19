// hooks/useMoviesFilter.js
import { useMemo, useState } from "react";

export const useMoviesFilter = (movies = []) => {
  const [filter, setFilter] = useState("date");

  const filteredMovies = useMemo(() => {
    if (!movies) return [];

    const sorted = [...movies];
    switch (filter) {
      case "Date":
        return sorted.sort((a, b) => new Date(b.Year) - new Date(a.Year));
      case "Popularity":
        return sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
      case "Qualification":
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "Name":
        return sorted.sort((a, b) => a.Title.localeCompare(b.Title));
      case "Relevance":
        return sorted.sort((a, b) => {
          const aRelevance = a.Relevance || 0;
          const bRelevance = b.Relevance || 0;
          return bRelevance - aRelevance;
        });
      case "Movie":
        return sorted.filter(
          (movie) => movie.Type && movie.Type.includes("movie")
        );
      case "Series":
        return sorted.filter(
          (movie) => movie.Type && movie.Type.includes("series")
        );
      case "Game":
        return sorted.filter(
          (movie) => movie.Type && movie.Type.includes("game")
        );

      default:
        return sorted;
    }
  }, [filter, movies]);

  return { filter, setFilter, filteredMovies };
};
