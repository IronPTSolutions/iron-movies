import { Route, Routes } from "react-router";
import { Footer, Navbar } from "./components/ui";
import { HomePage, MovieDetailsPage } from "./pages";

function App() {
  return (
    <>
      <main className="flex-shrink-0">
        <Navbar />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </main>

      <Footer className="mt-auto" />
    </>
  )
}

export default App
