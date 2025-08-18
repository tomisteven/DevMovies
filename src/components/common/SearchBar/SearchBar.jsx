import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";

const SearchBar = ({ onSearch, initialSearchTerm = "", isLoading = false }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setError("Por favor ingresa un término de búsqueda");
      return;
    }
    setError("");
    onSearch({ searchTerm, year, type });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm} noValidate>
      <div className={styles.searchInputContainer}>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar películas..."
          aria-label="Buscar películas"
          error={error}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>

      <div className={styles.filtersContainer}>
        <Input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Año"
          min="1900"
          max={new Date().getFullYear()}
          className={styles.yearInput}
        />

        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={[
            { value: "", label: "Todos" },
            { value: "movie", label: "Películas" },
            { value: "series", label: "Series" },
            { value: "episode", label: "Episodios" },
          ]}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className={styles.searchButton}
      >
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  );
};

export default SearchBar;
