import React, {useState} from "react";


async function GetPopularMovies() {
    const [response] = useState(await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&language=en-US&page=1"));
    const [data] = useState(await response.json());
    if (data){
        return <div>
            <h1>Popular Movies</h1>
            <div>
                {data.results.map(movie => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                    </div>
                        ))}
            </div>
        </div>
    }
}

export default GetPopularMovies;