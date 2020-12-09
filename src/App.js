import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './components/Nav'
import MovieCard from './components/MovieCard'

const App = () => {
    const [searchResults, setSearchResults] = useState([])
    
    const runSearch = (search) => {
        const baseURL = 'http://image.tmdb.org/t/p/original'
        let query = search.split(' ').join('+')
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=0017e637b5175be645272456f9607e35&language=en-US&query=' + query)
          .then(response => {

              setSearchResults(response.data.results.map((movie) => {
                  return {
                      title: movie.title,
                      year: movie.release_date,
                      poster: baseURL + movie.backdrop_path
                  }
              }))
          })
        } 
    
    const movies = searchResults.map((movie) => {
        return (
            <div>
                <MovieCard movie={movie} />
            </div>

        )
    })
    

    return (
        <div>
            <Nav runSearch={runSearch} />
            {movies}
        </div>
    )
}

export default App