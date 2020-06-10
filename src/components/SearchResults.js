import React, { Component } from 'react'

class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchList: null
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.search !== this.props.search) {
            this.setState({
                searchList: this.props.search.searchList
            })
        }
    }

    render(){
        console.log("here", this.state.searchList)
        return(
            <div>
                <h1></h1>
            </div>
        )
    }
}


export default SearchResults