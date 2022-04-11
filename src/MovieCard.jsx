import React from "react";

function MovieCard ({movie, index}) {
    return (
        <div className="movie" key={index}>
            <div>
              <p>{movie.Year}</p>
            </div>
            <div>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholde.com/400'} alt={movie.title} />
            </div>
            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;