import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="pa2">
    	<input className="pa3 ba b--green bg-lightest-blue"
    		type="search" 
    		placeholder="Search the list of robots" onChange={searchChange}/>
    </div>
  )
}

export default SearchBox;