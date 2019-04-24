import * as React from 'react';


interface SearchProps {
  handleChange: any 
}

const SearchBar: React.FunctionComponent<SearchProps> = (props) => {

  return (
    <form><input type="text" name="search" onChange={(e) => props.handleChange(e.target.value)} /></form>
  )
}

export default SearchBar;
