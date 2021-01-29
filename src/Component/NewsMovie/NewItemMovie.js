import React,{useState,useEffect} from 'react'
import './NewListMovie.css';
import {useSelector,useDispatch} from 'react-redux';
import * as action from '../../action/film';

function NewItemMovie(props) {

   const {movie} = props;
   
    return (
        <div className="col-2">
        <div className="movie-new-update-item">
            <a href={`/movie/${movie.id}`} className="card-movie">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="card-movie-img"/>
                <div className="card-movie-icon">
                    <i className="fas fa-play"></i>
                </div>
            </a>
            <div className="movie-new-update-item-des">
                <p className="movie-new-update-item-des-title">
                    {movie.title}
                </p>
                <p className="movie-new-update-item-des-title-engl">
                    {movie.original_title}
                </p>
            </div>
        </div>
    </div>
    )
}

export default NewItemMovie
