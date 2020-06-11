import React, { Component } from 'react';
import './styles/App.css';
import Nav from './components/Nav'
import MovieCard from './components/MovieCard'
import RenderResults from './components/RenderResults'

class App extends Component {
  constructor() {
    super()
    this.state = {
      showList : true,
      searchList : [],
      selectedMovie: null,
      posterData : ""
    }
  }

//Poster Data
  getMovieData = (keyword) => {
    let that = this
    let configData = null
    let baseImageURL = null
    
    that.setState({
      showList: true
    })

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
          console.log(data)
          that.setState({
            searchList: [...data.results],
            posterData: baseImageURL + "w342"
          })
       }) 
      }  
    }

  //Click to show MovieCard
    handleClick = (movie) => {
      console.log("I was clicked!?")
      
      this.setState(prevState => ({
          showList: !prevState.showList,
          selectedMovie: {...movie},
          posterData : prevState.posterData + movie.poster_path
      }))
      
  }

  render() {
    console.log(this.state.posterData)
//Logic decides which to show
    const renderPage = () => {
      if(this.state.showList){
        let viewList = this.state.searchList.map(item => {
          return(
            <div key={item.id} onClick={() => this.handleClick(item)}>
              <RenderResults result={item} />
            </div>
          ) 
        })
        return viewList
      }else {
        return(
          <MovieCard posterData={this.state.posterData} movie={this.state.selectedMovie}/>
        )
      }
    }
    
    return(
        <div>
          <Nav getMovieData={this.getMovieData}/>
          {renderPage()}
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