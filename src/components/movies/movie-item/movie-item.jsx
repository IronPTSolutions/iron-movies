import { Link } from "react-router";
import { useAuth } from "../../../contexts/auth-context";
import * as AuthAPI from "../../../services/auth-api";

function MovieItem({ movie }) {
  const { user, login } = useAuth();
  const { title, poster, rating, id } = movie;

  const handleFavToggle = async () => {
    const updatedUser = await AuthAPI.toggleFav(movie);
    login(updatedUser);
  }

  const isFav = user?.favMovies
    .some((favMovie) => favMovie.id === movie.id);

  return (
    <div className="card text-bg-dark shadow-sm">
      <img src={poster} className="card-img" alt={title} />
      <div className="card-img-overlay d-flex gap-2 flex-column justify-content-between p-2">
        <div className="d-flex justify-content-end">
          {user && (<i className={`fa fa-heart ${isFav ? 'active' : ''}`} role="button" style={{ zIndex: 9999 }} onClick={() => handleFavToggle()}></i>)}
        </div>
        <div className="d-flex gap-2 justify-content-between">
          <h6 className="card-title m-0 fw-light">
            <Link to={`/movies/${id}`} className="stretched-link text-decoration-none text-white">{title}</Link>
          </h6>
          <span className="m-0">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieItem;