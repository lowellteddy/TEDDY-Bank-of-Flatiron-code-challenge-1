import React from "react";
import "./Searchbar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <form className="search-box">
        <div className="search-input">
          <input type="text" placeholder="Search your Recent Transactions and press enter key" className="input" />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;