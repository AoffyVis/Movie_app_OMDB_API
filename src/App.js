import './App.css';
import { useEffect, useState} from 'react';
import SearchIcon from  './search.svg'
import MovieCard from './MovieCard';

function App() {

  const [movies, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7e5aedfe';

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovie(data.Search);
  }

  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  return (
    <>
        <div className="app">
          <h1>Movie Land</h1>

          <div className="search">
            <input
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}  
            />
          </div>

          {
            movies?.length > 0 ? (
              <div className="container">
                { movies.map((movie, index) => (
                  <MovieCard movie={movie} key={index}/>
                )) }
              </div>
            ) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
          }

        </div>
    </>
  );
}

export default App;
