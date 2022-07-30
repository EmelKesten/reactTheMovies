import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MakeMovie from './components/Movie';

const UpComing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1"
      );
      if (result) {
        setMovies(result.data.results);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="upComing">
    <h1>Up Coming</h1>
  <div className="upComing-inner layout">
    {movies.map((movie) => {
        return MakeMovie(movie);
    })
    }
  </div>
</div>
  );
};

export default UpComing;