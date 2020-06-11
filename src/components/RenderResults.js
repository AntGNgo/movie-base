import React, { Component } from 'react'
import '../styles/renderResults.css'


class RenderResults extends Component {
    constructor(){
        super()
        this.state = {
            showList : true,
        }
    }

    render() {
        let {result} = this.props
        return(
            <div className="movie-list">
                <div className="movie-list-container">
                    <div className="container">
                        <h1>{result.title}</h1>
                        <h2>{result.release_date.slice(0,4)}</h2>
                    </div>
                    <p>{result.overview}</p>
                </div>
            </div>
        )
    }
}


export default RenderResults