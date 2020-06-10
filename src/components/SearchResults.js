import React from 'react'

const SearchResults = ({ searchResults }) => {
    return(
        <div>
            <p>{searchResults.searchList.title}</p>
        </div>
    )
}

export default SearchResults