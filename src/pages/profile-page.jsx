import { PageLayout } from "../components/layouts";
import { useAuth } from "../contexts/auth-context";
import { MoviesList } from "../components/movies";

import jumboBg from "../assets/images/backgrounds/bg-movies.jpg";

function ProfilePage() {
  const { user } = useAuth();
  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: "All the Movies You Love, All in One Place",
        subtitle:
          "Dive into a world of movies — from timeless classics to the latest blockbusters...",
      }}
    >
      <h3>Hello {user.name}</h3>

      {user.favMovies.length > 0 && (
        <MoviesList title="Favorites" movies={user.favMovies} className="mt-2" />
      )}

    </PageLayout>
  );
}

export default ProfilePage;