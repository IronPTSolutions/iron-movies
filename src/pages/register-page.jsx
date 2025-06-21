import { PageLayout } from "../components/layouts";
import { Register } from "../components/auth";

import jumboBg from "../assets/images/backgrounds/bg-movies.jpg";

function RegisterPage() {
  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: "All the Movies You Love, All in One Place",
        subtitle:
          "Dive into a world of movies — from timeless classics to the latest blockbusters...",
      }}
    >
      <Register />
    </PageLayout>
  )
}

export default RegisterPage;