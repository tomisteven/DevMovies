import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//api key
//const API_KEY = "7769c6c7";
const API_KEY = import.meta.env.VITE_API_KEY;
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (
    { searchTerm, page = 1, year = "", type = "" },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}${
          year ? `&y=${year}` : ""
        }${type ? `&type=${type}` : ""}`
      );

      if (response.data.Response === "False") {
        throw new Error(response.data.Error || "No se encontraron resultados");
      }

      return {
        data: response.data.Search,
        totalResults: parseInt(response.data.totalResults),
        searchTerm,
        page: parseInt(page),
        year,
        type,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (imdbID, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`
      );
      if (response.data.Response === "False") {
        throw new Error(response.data.Error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//modelo
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    currentMovie: null,
    loading: false,
    error: null,
    searchTerm: "",
    totalResults: 0,
    page: 1,
    year: "",
    type: "",
  },
  reducers: {
    clearMovies: (state) => {
      state.movies = [];
      state.totalResults = 0;
      state.error = null;
    },
    setSearchParams: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
      state.year = action.payload.year;
      state.type = action.payload.type;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.data;
        state.totalResults = action.payload.totalResults;
        state.page = action.payload.page;
        state.searchTerm = action.payload.searchTerm;
        state.year = action.payload.year;
        state.type = action.payload.type;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.movies = [];
        state.totalResults = 0;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMovies, setSearchParams } = movieSlice.actions;

export default movieSlice.reducer;
