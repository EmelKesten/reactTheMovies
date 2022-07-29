import React from "react";

function makeMovie(movie) {
  return(
          <div key={movie.id} className="article">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <h3>{movie.title}</h3>
          </div>
        );
  
}

export default makeMovie;