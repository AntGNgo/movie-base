import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Nav = ({ runSearch }) => {
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        runSearch(search)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Nav