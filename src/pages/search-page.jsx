import { PageLayout } from "../components/layouts";
import { MoviesList, Search } from "../components/movies";
import * as TMDBApi from "../services/tmdb-api";

import jumboBg from "../assets/images/backgrounds/bg-movies.jpg";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("query") || '';

  useEffect(() => {
    async function findMovies() {
      const movies = await TMDBApi.searchMovie(search);
      setMovies(movies);
    }
    
    findMovies();
  }, [search]);

  const handleSearch = (search) => {
    searchParams.set("query", search);
    setSearchParams(searchParams);
  }

  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: "All the Movies You Love, All in One Place",
        subtitle:
          "Dive into a world of movies — from timeless classics to the latest blockbusters...",
      }}
    >
      <Search search={search} onSearch={handleSearch}/>
      <MoviesList movies={movies} />
    </PageLayout>
  );
}

export default SearchPage;