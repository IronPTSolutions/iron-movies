import MovieItem from "../movie-item/movie-item";

import imdbIcon from "../../../assets/images/icons/icon-imdb.png";
import ReactPlayer from "react-player";


function MovieDetail({ movie }) {
  const { title, overview, genres, rating, releaseDate, imdbId, trailers } = movie;
  return (
    <>
      <div className="row g-4">
        <div className="col-12 col-sm-4 col-md-4 col-lg-2">
          <MovieItem movie={movie} />
        </div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-10">
          <h2 className="mb-1">{title}</h2>
          <div className="mb-2 d-flex gap-2 align-items-baseline">
            <span className="badge rounded-pill text-bg-light">{releaseDate}</span>
            <a href={`https://www.imdb.com/title/${imdbId}`} target="_blank" rel="noopener noreferrer">
              <img src={imdbIcon} alt="imdb" height={20} />
            </a>
          </div>
          <p className="mb-1">{overview}</p>
          <div className="mb-2"><i className="fa fa-star text-warning"></i> {rating.toFixed(1)}</div>
          <div className="d-flex gap-2">
            {genres.map(({ id, name }) => (
              <span key={id} className="badge rounded-pill text-bg-light">{name}</span>
            ))}
          </div>
        </div>
      </div>
      {trailers.length > 0 && (
        <>
          <h3 className="my-2">Trailers</h3>
          <div className="d-flex gap-2 flex-wrap">
            {trailers.map((trailer, i) => (
              <ReactPlayer key={i} url={trailer} playing={false} />
            ))}
          </div>
        </>
      )}
    </>
    
  );
}

export default MovieDetail;