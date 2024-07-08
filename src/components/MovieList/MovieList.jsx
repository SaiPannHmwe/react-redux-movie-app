import React from "react";
import { useSelector } from "react-redux";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard.jsx";

function MovieList() {
  const { movies } = useSelector((state) => state.movies);

  return (
    <div className="movie-container">
      {movies &&
        movies.map((movie) => {
          return <MovieCard key={movie.imdbID} movie={movie} />;
        })}
    </div>
  );
}

export default MovieList;
