// hooks/useMoviesFilter.js
import { useMemo, useState } from "react";

export const useMoviesFilterCategory = (movies = []) => {
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
      default:
        return sorted;
    }
  }, [filter, movies]);

  return { filter, setFilter, filteredMovies };
};
