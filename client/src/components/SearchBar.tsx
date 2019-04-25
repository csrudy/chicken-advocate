import * as React from 'react';
import Button from './Button';

interface SearchProps {
  handleChange: any,
  handleRadio: any,
}

const SearchBar: React.FunctionComponent<SearchProps> = (props) => {

  return (
    <div id="search">
      <form>
        <input type="text"
          name="search"
          placeholder="Find fried chicken"
          onChange={(e) => props.handleChange(e.target.value)} />

        <Button />
      </form>

    <form>
      
      <input type="radio" name="radio" value="zip"
       onChange={(e) => props.handleRadio(e.target.value)} defaultChecked/> by zip code <br/>
      <input type="radio" name="radio" value="shop" 
       onChange={(e) => props.handleRadio(e.target.value)} /> by chicken shop <br/> 

    </form>
    </div>
  )
}

export default SearchBar;
