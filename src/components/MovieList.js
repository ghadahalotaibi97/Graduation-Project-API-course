import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const MovieList = (props) => {
    return (
        <>
            <AwesomeSlider>
                {props.movies.map((movie, index) => (

                    <div>
                        <img src={movie.Poster} alt='movie' style={{ minWidth: '30em', minHeight: '20em' }} ></img>
                    </div>


                ))}
            </AwesomeSlider>
        </>
    );
};

export default MovieList;