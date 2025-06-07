import { PageLayout } from "../components/layouts";
import { MoviesList } from "../components/movies";
import dayjs from "../utils/dayjs";

import jumboBg from "../assets/images/backgrounds/bg-movies.jpg"

function HomePage() {
  const moviesFromReleaseDate = dayjs().subtract(6, "month");
  const moviesSections = [
    { title: "Best of Action", genre: 28 },
    { title: "Best of Drama", genre: 18 },
    { title: "Best of Comedy", genre: 35 },
  ]

  return (
    <PageLayout jumbotron={{
      backgroundImage: jumboBg,
      title: "All the Movies You Love, All in One Place",
      subtitle: "Dive into a world of movies — from timeless classics to the latest blockbusters..."
    }}>

      {moviesSections.map(({ title, genre }, i, sections) => (
        <MoviesList 
          key={genre} 
          className={(i < sections.length - 1) ? 'mb-3' : ''}
          title={title} 
          genre={genre} 
          sortBy="rating" 
          limit={6} 
          fromReleaseDate={moviesFromReleaseDate} />
      ))}

    </PageLayout>
  )
}

export default HomePage;