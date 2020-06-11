import React, { Component } from 'react'
import '../styles/Nav.css'
import logo from '../assets/logo.png'


class Nav extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.search !== ''){
        this.props.getMovieData(this.state)
        this.setState({
            search: ''
        })}
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    render() {
        return (
            <div className="nav">
                <img src={logo} alt="" width="248px" height='75px'/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Search...' onChange={this.handleChange} value={this.state.search}/>
                    <button>Search!</button>
                </form>
            </div>
        )
    }
}

export default Nav