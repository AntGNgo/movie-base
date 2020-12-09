import React from 'react'
import '../styles/moviecard.css'
// import RenderResults from './RenderResults'



const MovieCard = ({ movie }) => {
    return (
            <div>
                {movie.poster.includes('null') ? <h1>Here</h1> : <img src={movie.poster} alt=""/>}
                <h1>{movie.title}</h1>
                <p>{movie.year}</p>
            </div>
    )
}

export default MovieCard