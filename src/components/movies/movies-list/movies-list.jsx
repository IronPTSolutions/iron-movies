import { useEffect, useState } from "react";
import MovieItem from "../movie-item/movie-item";
import * as TMDBApi from "../../../services/tmdb-api";


function MoviesList() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    console.log('Component did mount');
    TMDBApi.listMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error));
  }, []);
  
  if (!movies) {
    return (<>Loading...</>)
  } else {
    return (
      <div className="row row-cols-3 row-cols-sm-4 row-cols-lg-6 g-2">
        {movies.map((movie) => (
          <div key={`${movie.id}`} className="col">
            <MovieItem movie={movie} />
          </div>
        ))}
      </div>
    )
  }
}

export default MoviesList;