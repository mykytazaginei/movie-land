import React from "react";
import MovieCart from "./MovieCart";

const MovieContainer = ({ movies }) => {
  return (
    <div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCart key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default MovieContainer;
