import React from 'react'
import '../styles/moviecard.css'


const MovieCard = ({ movie }) => {
    return(
        <div className='movie-card'>
            <h1>{movie.movieTitle}</h1>
            <h2>{movie.movieYear}</h2>
            <img src={movie.moviePoster} alt=""/>
            <h3>{movie.moviePlot}</h3>

        </div>
    )
}

export default MovieCard