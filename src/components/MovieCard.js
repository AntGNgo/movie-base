import React from 'react'
import '../styles/moviecard.css'



const MovieCard = ({ posterData, movie, renderPage }) => {
    return (
        <div className="movie-card">
            <button onClick={() => renderPage}>Back</button>  
            <div className='movie-details'>
                <h1>{movie.title}</h1>
                <h2>{movie.release_date.slice(0, 4)}</h2>
                <h3>{movie.overview}</h3>
            </div>
            <img src={posterData} alt={movie.title} />
        </div>
    )
}

export default MovieCard