import { Link } from "react-router";

function MovieItem({ movie }) {
  const { title, poster, rating, id } = movie;
  return (
    <div className="card text-bg-dark shadow-sm">
      <img src={poster} className="card-img" alt={title} />
      <div className="card-img-overlay d-flex gap-2 align-items-end justify-content-between p-2">
        <h6 className="card-title m-0 fw-light">
          <Link to={`/movies/${id}`} className="stretched-link text-decoration-none text-white">{title}</Link>
        </h6>
        <span className="m-0">{rating.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default MovieItem;