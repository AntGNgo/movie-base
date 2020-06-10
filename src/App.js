import React, { Component } from 'react';
import './styles/App.css';
import Nav from './components/Nav'
import MovieCard from './components/MovieCard'
import SearchResults from './components/SearchResults'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchList : [],
      movieTitles : [],
      movieYears : [],
      moviePlots: [],
      moviePosters: []
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
        runSearch(keyword)
      })
  
  
    const runSearch = (keyword) => {
      let query = keyword.search.split(' ').join('+')
      fetch('https://api.themoviedb.org/3/search/movie?api_key=0017e637b5175be645272456f9607e35&language=en-US&query=' + query)
        .then(resp => resp.json())
        .then(data => {
          console.log(data.results)
          let searchArray = that.state.searchList.concat(...data.results)
          that.setState({
            searchList: [...searchArray]
          })
       }) 
      }  
    }


  render() {
    return(
      <div>
        <Nav getMovieData={this.getMovieData}/>
        <SearchResults search={this.state.searchList} />
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