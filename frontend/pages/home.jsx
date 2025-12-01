import { useState } from "react";
import MovieCard from "./MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "John Wick",
      release_date: "2023",
      url: "https://picsum.photos/id/1011/300/400",
    },
    {
      id: 2,
      title: "John Hilton",
      release_date: "2020",
      url: "https://picsum.photos/id/1012/300/400",
    },
    {
      id: 3,
      title: "Michael Wick",
      release_date: "2013",
      url: "https://picsum.photos/id/1013/300/400",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default Home;
