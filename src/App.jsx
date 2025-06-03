import { Route, Routes } from "react-router";
import { Footer, Navbar } from "./components/ui";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <main className="flex-shrink-0">
        <Navbar />

        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </main>

      <Footer className="mt-auto" />
    </>
  )
}

export default App
