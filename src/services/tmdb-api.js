import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
});

http.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
);

const postersBaseUrl = import.meta.env.VITE_TMDB_BASE_IMAGES_URL;
const gteVoteCountForRatings = import.meta.env
  .VITE_TMDB_GTE_VOTE_COUNT_FOR_RATINGS;

function parseMovie(movie) {
  return {
    id: movie.id,
    title: movie.title,
    poster: `${postersBaseUrl}${movie.poster_path}`,
    backdrop: `${postersBaseUrl}${movie.backdrop_path}`,
    overview: movie.overview,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    genres: movie.genre_ids || movie.genres,
  };
}

/**
 * Discovery TMDB movies
 * @param {Object} params                 - Discover movies query parameters
 * @param {Number} params.genre           - Genre of the target movies.
 * @param {String} params.sortBy          - DESC Allowed: rating
 * @param {String} params.fromReleaseDate - YYYY-MM-DD date GTE movies release date.
 * @param {Number} params.limit           - Limit the amount of movies (min:1 max:20).
 * @returns {Object[]}
 */
export function listMovies(params = {}) {
  const { genre, sortBy, fromReleaseDate, limit = 20 } = params;
  const queryParams = {};
  if (genre) queryParams.with_genres = genre;
  if (sortBy === "rating") {
    queryParams.sort_by = "vote_average.desc";
    queryParams["vote_count.gte"] = gteVoteCountForRatings;
  }
  if (fromReleaseDate)
    queryParams["primary_release_date.gte"] = fromReleaseDate;

  return http.get("/discover/movie", { params: queryParams }).then((data) => {
    return data.results.slice(0, limit).map((movie) => parseMovie(movie));
  });
}

/**
 * Get TMDB movie details by identifier
 * @param {*} id      - Movie identifier
 * @returns {Object}
 */
export function getMovie(id) {
  return Promise.all([
    http.get(`/movie/${id}`),
    http.get(`/movie/${id}/videos`),
    http.get(`/movie/${id}/recommendations`),
  ]).then(([movie, videos, recs]) => {
    return {
      ...parseMovie(movie),
      imdbId: movie.imdb_id,
      recs: recs.results.map(parseMovie), // same as .map(x => parseMovie(x))
      trailers: videos.results
        .filter(({ site }) => site === "YouTube")
        .map(({ key }) => `https://www.youtube.com/watch?v=${key}`),
    };
  });
}

export function searchMovie(query) {
  console.log(query);
  return http.get("/search/movie", { params: { query } }).then((data) => {
    return data.results.map((movie) => parseMovie(movie));
  });
}
