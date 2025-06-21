import { Link, NavLink } from "react-router";
import { useAuth } from "../../../contexts/auth-context";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Iron Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <div className="navbar-nav me-auto">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            <NavLink className="nav-link" aria-current="page" to="/search">Search</NavLink>
          </div>
          <div className="navbar-nav">
            {!user && (
              <>
                <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
              </>
            )}
            {user && (
              <>
                <NavLink className="nav-link" aria-current="page" to="/profile">{user.username}</NavLink>
                <button className="nav-link btn btn-link" onClick={() => logout()}>
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
