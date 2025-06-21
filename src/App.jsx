import { Route, Routes } from "react-router";
import { Footer, Navbar } from "./components/ui";
import { HomePage, LoginPage, MovieDetailsPage, ProfilePage, RegisterPage, SearchPage } from "./pages";
import { PrivateRoute } from "./guards";

function App() {
  return (
    <>
      <main className="flex-shrink-0">
        <Navbar />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </main>

      <Footer className="mt-auto" />
    </>
  );
}

export default App;
