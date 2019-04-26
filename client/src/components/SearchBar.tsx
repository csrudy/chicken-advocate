import * as React from 'react';

// this component is the search bar

interface SearchProps {
  handleChange: any,
  handleRadio: any,
}

const SearchBar: React.FunctionComponent<SearchProps> = (props) => {

  return (
    <div className="search">
      <form className="searchBar">
        <input type="text"
          name="search"
          placeholder="find fried chicken"
          onChange={(e) => props.handleChange(e.target.value)} />
        <button>Search</button>
      </form>
      {/* <form className="searchParams">
        <input type="radio" name="radio" value="zip"
          onChange={(e) => props.handleRadio(e.target.value)} defaultChecked /> by zip code <br />
        <input type="radio" name="radio" value="shop"
          onChange={(e) => props.handleRadio(e.target.value)} /> by chicken shop <br />
      </form> */}
    </div>
  )
}

export default SearchBar;
