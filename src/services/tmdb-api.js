import axios from "axios";

const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
  }
});

http.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)

const postersBaseUrl = 'https://image.tmdb.org/t/p/original';

export function listMovies() {
  return http.get('/discover/movie')
    .then((data) => {
      return data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          poster: `${postersBaseUrl}${movie.poster_path}`,
          overview: movie.overview,
          rating: movie.vote_average,
          releaseDate: movie.release_date,
          genres: movie.genre_ids
        }
      });
    })
}