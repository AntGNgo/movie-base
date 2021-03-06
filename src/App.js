import React, { Component } from 'react';
import './styles/App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import MovieCard from './components/MovieCard'
import RenderResults from './components/RenderResults'


class App extends Component {
  constructor() {
    super()
    this.state = {
      amHome: true,
      showList : true,
      searchList : [],
      selectedMovie: null,
      basePoster : "",
      posterData : "",
      backPressed: false
    }
  }

//Poster Data
  getMovieData = (keyword) => {
    let that = this
    // let configData = null
    let baseImageURL = null
    
    that.setState({
      showList: true,
      amHome : false
    })

    const posterConfig = "https://api.themoviedb.org/3/configuration?api_key=0017e637b5175be645272456f9607e35"
    fetch(posterConfig)
      .then(resp => resp.json())
      .then(data => {
        baseImageURL = data.images.secure_base_url
        // configData = data.images
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
            basePoster: baseImageURL + "w342"
          })
       }) 
      }  
    }

  //Click to show MovieCard
    handleClick = (movie) => {
      console.log("I was clicked!?")
      let posterData = this.state.basePoster + movie.poster_path
      this.setState(prevState => ({
          showList: !prevState.showList,
          selectedMovie: {...movie},
          posterData
      }))
      
  }


//Back buttton
  backButton = () => {
    this.setState(prevState => ({
      posterData: this.state.basePoster,
      showList : !prevState.showList,
      backPressed: !prevState.backPressed
    }))
  }


  render() {
//Logic decides which to show
    const renderPage = () => {
      console.log(this.state.posterData)
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
          <MovieCard backButton={this.backButton} posterData={this.state.posterData} movie={this.state.selectedMovie}/>
        )
      }
    }

//Check to see if on homepage
    const renderHome = () => {
        if(this.state.amHome) {
          return(
            <Home />
          )
        }
    }

//Page render return
    return(
          <div>
            <Nav getMovieData={this.getMovieData}/>
            {renderHome()}
            {renderPage()}
          </div>

        

    )
  }
}

export default App;