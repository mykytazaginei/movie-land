import "./App.css";
import SearchBar from "./SearchBar";
import MovieContainer from "./MovieContainer";
import { useState} from "react";

//8878f2a0

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8878f2a0";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const performSearch = () => {
    searchMovies(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        performSearch={performSearch}
        handleKeyDown={handleKeyDown}
      />
      <MovieContainer movies={movies} />
    </div>
  );
}

export default App;
