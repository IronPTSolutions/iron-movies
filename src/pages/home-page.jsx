import { PageLayout } from "../components/layouts";

import jumboBg from '../assets/images/backgrounds/bg-movies.jpg'

function HomePage() {
  return (
    <PageLayout jumbotron={{
      backgroundImage: jumboBg,
      title: "All the Movies You Love, All in One Place",
      subtitle: "Dive into a world of movies — from timeless classics to the latest blockbusters..."
    }}>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit fuga non qui ut fugiat doloremque alias aperiam corporis, minus quasi praesentium eligendi culpa distinctio, pariatur nisi esse nostrum. Suscipit, libero.</p>
    </PageLayout>
  )
}

export default HomePage;