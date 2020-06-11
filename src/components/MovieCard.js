import React from 'react'
import '../styles/moviecard.css'
import RenderResults from './RenderResults'



const MovieCard = ({ posterData, movie, backButton }) => {
    return (
            <div className="movie-card">
                <div className='movie-details'>
                    <button onClick={backButton}>Back</button>
                    <h1>{movie.title}</h1>
                    <h2>{movie.release_date.slice(0, 4)}</h2>
                    <h3>{movie.overview}</h3>
                </div>
                <img src={posterData} alt={movie.title} />
            </div>
    )
}

export default MovieCard