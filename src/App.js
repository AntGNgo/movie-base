import React, { Component } from 'react';
import './styles/App.css';
import Nav from './components/Nav'
import MovieCard from './components/MovieCard'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movieTitle : null,
      movieYear : null,
      moviePlot: null,
      moviePoster: null
    }
  }

//Poster Data
  getMovieData = (keyword) => {
    let that = this
    let configData = null
    let baseImageURL = null
    

    const posterConfig = "https://api.themoviedb.org/3/configuration?api_key=0017e637b5175be645272456f9607e35"
    fetch(posterConfig)
      .then(resp => resp.json())
      .then(data => {
        baseImageURL = data.images.secure_base_url
        configData = data.images
        console.log('config', data)
        console.log(baseImageURL)
        runSearch(keyword)
      })
  
  
    const runSearch = (keyword) => {
      let query = keyword.search.split(' ').join('+')
      fetch('https://api.themoviedb.org/3/search/movie?api_key=0017e637b5175be645272456f9607e35&language=en-US&query=' + query)
        .then(resp => resp.json())
        .then(data => {
          that.setState({
            movieTitle: data.results[0].title,
            movieYear: data.results[0].release_date,
            moviePlot:  data.results[0].overview,
            moviePoster: baseImageURL +  'w342' + data.results[0].poster_path        
          })
        })
    }  
  
    }



  render() {
    return(
      <div>
        <Nav getMovieData={this.getMovieData}/>
        <MovieCard movie={this.state} />
      </div>
    )
  }
}

export default App;


//Nav Bar
//Search
//Main View
//Movie popup

//www.google.com/how to wash+your+car