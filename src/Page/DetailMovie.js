import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import * as action from '../action/film';
import DetailMovies from '../Component/DetailMovie/DetailMovie'
import ActorMovieDetailList from '../Component/ActorMovieDetail/ActorMovieDetailList'
import ImageMovieDetailList from '../Component/ImageMovieDetail/ImageMovieDetailList'
import Modal from '../Component/Modal/Modal'
function DetailMovie(props) {
    let { id } = useParams();
    
    var dispatch = useDispatch();
   useEffect(() => {
     dispatch(action.getApiDataDetailFilm(`https://api.themoviedb.org/3/movie/${id}?api_key=12baa83af9302206b6af65913d262a81&language=vi&append_to_response=credits,similar,images&include_image_language=en`));
   },[])
    var dataMovie = useSelector(state => state.DetailFilm);
    var actor =null;
    var imageMovie = null;
    if(dataMovie){
        actor = dataMovie.credits.cast.filter((item,stt)=>{
            return stt<15;
        })
    }
    if(dataMovie){
        imageMovie=dataMovie.images.backdrops;
    }
    return (
        <div>
            <DetailMovies info = {dataMovie}/>
            {actor ? <ActorMovieDetailList actor={actor} title={dataMovie.title}/> : ''}
            {imageMovie ? <ImageMovieDetailList imageMovie = {dataMovie.images.backdrops} title={dataMovie.title}/> : ''}
            <Modal/>
        </div>
    )
}

export default DetailMovie
