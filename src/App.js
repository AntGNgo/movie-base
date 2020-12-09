import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [searchResults, setSearchResults] = useState([])
    
    const runSearch = (keyword) => {
        const baseURL = 'http://image.tmdb.org/t/p/original'
        let query = keyword.split(' ').join('+')
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
                {movie.poster.includes('null') ? <h1>Here</h1> : <img src={movie.poster} alt=""/>}
                <h1>{movie.title}</h1>
                <p>{movie.year}</p>
            </div>

        )
    })
    

    return (
        <div>
            <h1>movieBase</h1>
            <button onClick={() => runSearch('ponyo')}>Click me to test</button>
            {movies}
        </div>
    )
}

export default App