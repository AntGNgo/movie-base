import React, { Component } from 'react'
import '../styles/Nav.css'


class Nav extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getMovieData(this.state)
        this.setState({
            search: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    render() {
        return (
            <div className="nav">
                <h1>movieBase</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Search...' onChange={this.handleChange} value={this.state.search}/>
                    <button>Search!</button>
                </form>
            </div>
        )
    }
}

export default Nav