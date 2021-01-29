import React,{useState,useEffect} from 'react'
import './NewListMovie.css';
import {useSelector,useDispatch} from 'react-redux';
import * as action from '../../action/film';
import NewListItem from './NewItemMovie';
import {Link} from 'react-router-dom'

function NewListMovie() {

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action.getApiDataFilmNews('https://api.themoviedb.org/3/movie/upcoming?api_key=12baa83af9302206b6af65913d262a81&language=vi&page=1'));
    }, [])
    var data= useSelector(state => state.FilmNews);

    if(data){
        data = data.filter((item,stt)=>stt<18);

        var content = data.map((movie,stt)=><NewListItem key={stt} movie={movie}/>);
    }
    return (
        <div className="movie-new-update">
    <div className="container">
        <h3 className="movie-title">
            Mới cập nhật
        </h3>
        <div className="row mt-5">
               {content}
        </div>
        <div className="movie-new-update-btn">
            <Link to='/movie?page=1' className="nav-login">Xem thêm</Link>
        </div>
    </div>
</div>
    )
}

export default NewListMovie
