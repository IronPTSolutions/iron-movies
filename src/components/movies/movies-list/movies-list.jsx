import { useEffect, useState } from "react";
import MovieItem from "../movie-item/movie-item";
import * as TMDBApi from "../../../services/tmdb-api";
import { ScaleLoader } from "react-spinners";


function MoviesList({ title, genre, limit, sortBy, fromReleaseDate, className = '' }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    console.log('Component did mount');
    TMDBApi.listMovies({ genre, limit, sortBy, fromReleaseDate })
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error));
  }, [genre, limit, sortBy, fromReleaseDate]);
  
  return (
    <div className={className}>
      {title && (<h5 className="mb-1">{title}</h5>)}
      {!movies ? (<ScaleLoader height={20}/>) : (
        <div className="row row-cols-3 row-cols-sm-4 row-cols-lg-6 g-2">
          {movies.map((movie) => (
            <div key={`${movie.id}`} className="col">
              <MovieItem movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MoviesList;