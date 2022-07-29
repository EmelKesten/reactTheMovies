import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from './components/Input';
import makeMovie from './components/Movie';
import { SearchContext } from '../App';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useContext(SearchContext);
    
    useEffect(() => {
        const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
        );
        setMovies(data.results);
        }
        fetchData();
    }, [search]);
    
    return (
        <div className="container">
        <Input />
        <div className="row">
            {movies.map(movie => (
            <div key={movie.id} className="col-md-4">
                <makeMovie movie={movie} />
            </div>
            ))}
        </div>
        </div>
    );
}

export default Search;