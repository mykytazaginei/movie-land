import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//8878f2a0

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8878f2a0";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("Pulp fiction");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value="Pulp Fuction" onChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
