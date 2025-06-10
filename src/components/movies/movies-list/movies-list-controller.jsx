import { useEffect, useState } from "react";
import * as TMDBApi from "../../../services/tmdb-api";
import MoviesList from "./movies-list";

function MoviesListController({
  title,
  genre,
  limit,
  sortBy,
  fromReleaseDate,
  search,
  className = "",
}) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    TMDBApi.listMovies({ genre, limit, sortBy, fromReleaseDate })
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error));
  }, [genre, limit, sortBy, fromReleaseDate]);

  return (
    <MoviesList
      title={title}
      movies={movies?.filter((m) => m.title.includes(search))}
      className={className}
    />
  );
}

export default MoviesListController;
