import { useParams } from "react-router";
import { PageLayout } from "../components/layouts";
import { useEffect, useState } from "react";
import * as TMDBApi from "../services/tmdb-api";
import { MovieDetail } from "../components/movies";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    TMDBApi.getMovie(movieId)
      .then((movie) => setMovie(movie))
      .catch((error) => console.error(error));
  }, [movieId])

  return (
    <PageLayout jumbotron={{
      backgroundImage: movie?.backdrop,
      title: movie?.title,
    }}>
      {movie  && (<MovieDetail movie={movie} />)}
    </PageLayout>
  )
}

export default MovieDetailsPage;