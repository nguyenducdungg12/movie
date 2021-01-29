
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CategoryMovieItem from '../Component/CategoryMovie/CategoryMovieItem'
import * as action from '../action/film'
import Breadcum from '../Component/Breadcum/Breadcum'
import NavFilter from '../Component/NavFilter/NavFilter'
import Pagination from '../Component/Pagination/Pagination'
import './Movie.css';

const queryString = require('query-string');

function Movie(props) {
    var dataMovie = useSelector(state => state.FilmCategory);
    var dispatch = useDispatch();
    var { page, search } = queryString.parse(props.location.search);
    useEffect(() => {
        dispatch(action.getApiDataFilmCategory(`https://api.themoviedb.org/3/tv/popular?api_key=12baa83af9302206b6af65913d262a81&language=vi&page=${page}`,3));
    },[page,search]);
    if (dataMovie) {
       var movieList = dataMovie.data.results;
        movieList = movieList.filter((item, stt) => stt < 18);
        var content = movieList.map((movie, stt) => <CategoryMovieItem key={stt} movie={movie} />);
    }

    return (
        <div className="main">
           <Breadcum  search = {search}/>
           <NavFilter/>
           <div className="main__movie">
               <div className="container">
                   <div className="row">
                       {content}
                       <div className="col-12" style={{textAlign:'center'}}>
                           {dataMovie ? <Pagination location={props.location} currentPage={dataMovie.data.page} totalPage={dataMovie.data.total_pages}/> : ''}
                       </div>
                   </div>
               </div>
             </div>

        </div>
    )
}

export default Movie
