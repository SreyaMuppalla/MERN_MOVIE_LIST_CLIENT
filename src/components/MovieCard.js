import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import $ from 'jquery';

const MovieCard = (props) => {

    const  movie  = props.movie;


    //use moviedb API
    // const urlString = "https://api.themoviedb.org/3/search/movie?query=" + movie.title + "&api_key=c6485198e3d1ec28c0b6b2c7ab673280"
    // const img_path = "https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3";

    // $.ajax({
    //     url: urlString,
    //     success: (searchResults) => {
    //         console.log("Fetched data successfully")
    //         img_path = "https://image.tmdb.org/t/p/original/" + searchResults.results[0].poster_path;
    //     },
    //     error: (xhr, status, err) =>{
    //         console.error("Failed to fetch data")
    //     }

    // })

    return(
        <div className="card-container">
            <img src = "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" width = "250" height = "400"/>
            <div className="desc">
                <h2>
                    <Link to={`/show-movie/${movie._id}`}>
                        { movie.title }
                    </Link>
                </h2>
                <h3>{movie.director}</h3>
                <p>{movie.description}</p>
            </div>
        </div>
    )
};

export default MovieCard;