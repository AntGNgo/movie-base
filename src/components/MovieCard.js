import React from 'react'
import '../styles/moviecard.css'


const MovieCard = ({ movie }) => {


    return(
        <div className='movie-card'>
            <div className='movie-details'>
                <h1>{movie.movieTitle}</h1>
                <h2>{movie.movieYear}</h2>
                <h3>{movie.moviePlot}</h3>
            </div>
            <img src={movie.moviePoster} alt=""/>

        </div>
    )
}

export default MovieCard