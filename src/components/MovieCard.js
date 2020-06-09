import React from 'react'

const MovieCard = ({ movie }) => {
    return(
        <div>
            <h1>{movie.movieTitle}</h1>
            <h2>{movie.movieYear}</h2>
            <h3>{movie.moviePlot}</h3>
        </div>
    )
}

export default MovieCard