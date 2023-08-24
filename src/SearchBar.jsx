import React from "react";
import SearchIcon from "./search.svg";

const SearchBar = ({ searchTerm, setSearchTerm, performSearch, handleKeyDown }) => {
  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <img src={SearchIcon} alt="search" onClick={performSearch} />
    </div>
  );
};

export default SearchBar;
