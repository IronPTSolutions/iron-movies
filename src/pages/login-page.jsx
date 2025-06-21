import { Login } from "../components/auth";
import { PageLayout } from "../components/layouts";
import { Link } from "react-router";

import jumboBg from "../assets/images/backgrounds/bg-movies.jpg";

export default function LoginPage() {

  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: "All the Movies You Love, All in One Place",
        subtitle:
          "Dive into a world of movies — from timeless classics to the latest blockbusters...",
      }}
    >
      <h3>Login</h3>
      <Login />
      <hr></hr>
      <div className="d-grid">
        <Link to="/register" className="btn btn-outline-secondary">Register</Link>
      </div>
    </PageLayout>
  );
}
