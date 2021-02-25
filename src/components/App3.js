import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MovieList from '../components/MovieList';

const App3 = () => {
    const [movies, setMovies] = useState([]);

    const getMovieRequest = async () => {
        const url = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b';

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest();
    }, []);

    return (

        <div>
            <MovieList movies={movies} />
        </div>

    );
};

export default App3;