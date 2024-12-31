import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import "../Styles/SearchBar.css"

function SearchBar() {
  const { showSearch, setShowSearch, search, setSearch } = useContext(ShopContext);

  return showSearch ? (
    <div className="search-bar-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}  
          onChange={(e) => setSearch(e.target.value)} 
        />
        <img src={assets.search_icon} alt="Search icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)}  
        src={assets.cross_icon}
        alt="Close icon"
        className="close-icon"
      />
    </div>
  ) : null;
}

export default SearchBar;
