import React from 'react';

import './searchbar.scss';
import { Icon } from 'semantic-ui-react';


const SearchBar = () => {

  // Test pour future recherche onChange
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    if (inputValue.length > 0) {
      console.log("true");
    } else {
      console.log("false");
    }
  };

  return (
    <div id="searchbar">
      <form action="">
        <input type="text" name="" id="search-input" placeholder="Recherchez votre ville" onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;
