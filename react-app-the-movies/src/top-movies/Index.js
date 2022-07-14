import React, {useEffect, useState} from 'react';
import axios from 'axios';
import makeMovie from './components/Movie';

const TopMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1"
      );
      if (result) {
        setMovies(result.data.results);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="topMovies">
    <h1>Most Popular</h1>
  <div className="mostPopular-inner layout">
    {movies.map((movie) => {
        return makeMovie(movie);
    })
    }
  </div>
</div>
  );
};

export default TopMovies;