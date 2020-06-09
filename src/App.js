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
      moviePlot: null
    }
  }


  getMovieData = (search) => {
    let that = this
    let query = search.search.split(' ').join('+')
    fetch('http://www.omdbapi.com/?apikey=797a1e18&t=' + query)
      .then(res => res.json())
      .then(data => {
        that.setState({
          movieTitle: data.Title,
          movieYear: data.Year,
          moviePlot: data.Plot
        })
      })
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