import React from 'react'
import './moviecard.css'

const MovieCard = ({ movie }) => {
    return (
            <div className='card'>
                {movie.poster.includes('null') ? <h1>Here</h1> : <img src={movie.poster} alt=""/>}
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
            </div>
    )
}

export default MovieCard