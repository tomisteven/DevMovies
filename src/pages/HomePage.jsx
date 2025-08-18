import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../context/slice";
import SearchBar from "../components/common/SearchBar/SearchBar";
import MoviesGrid from "../components/movies/MovieGrid/MovieGrid";
import Pagination from "../components/common/Paginacion/Paginacion";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { movies, loading, error, searchTerm, totalResults, page } =
    useSelector((state) => state.movies);

  const totalPages = Math.ceil(totalResults / 10);

  const handleSearch = ({ searchTerm, year, type }) => {
    dispatch(fetchMovies({ searchTerm, page: 1, year, type }));
  };

  const handlePageChange = (newPage) => {
    if (newPage !== page) {
      dispatch(fetchMovies({ searchTerm, page: newPage }));
    }
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Search Films</h1>
      <SearchBar
        onSearch={handleSearch}
        initialSearchTerm={searchTerm}
        isLoading={loading}
      />

      {error && <div className={styles.error}>{error}</div>}

      <MoviesGrid movies={movies} loading={loading} />

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default HomePage;
