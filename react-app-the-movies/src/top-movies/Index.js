import React, {useEffect, useState} from 'react';
import axios from 'axios';
import makeMovie from './components/Movie';

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=${currentPage}`
      );
      if (result) {
        setMovies(result.data.results);
        setTotalPages(result.data.total_pages);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <div id="mostPopular">
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