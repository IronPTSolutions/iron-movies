import { PageLayout } from "../components/layouts";
import { MoviesList } from "../components/movies";

import jumboBg from '../assets/images/backgrounds/bg-movies.jpg'

function HomePage() {
  return (
    <PageLayout jumbotron={{
      backgroundImage: jumboBg,
      title: "All the Movies You Love, All in One Place",
      subtitle: "Dive into a world of movies — from timeless classics to the latest blockbusters..."
    }}>
      <MoviesList />
    </PageLayout>
  )
}

export default HomePage;