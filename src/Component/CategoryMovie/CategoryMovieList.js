import React,{useEffect,useState} from 'react'
import * as action from '../../action/film'
import {useDispatch,useSelector} from 'react-redux'
import './CategoryMovie.css'
import CategoryMovieItem from './CategoryMovieItem'

function CategoryMovie() {
    const [numberMovie, setnumberMovie] = useState(1);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(action.getApiDataFilmCategory('https://api.themoviedb.org/3/movie/popular?api_key=12baa83af9302206b6af65913d262a81&language=vi&page=2',numberMovie));
    },[]);
    useEffect(()=>{
        switch (numberMovie) {
            case '1':
                dispatch(action.getApiDataFilmCategory('https://api.themoviedb.org/3/movie/popular?api_key=12baa83af9302206b6af65913d262a81&language=vi&page=2',numberMovie));
                break;
            case '2':
                dispatch(action.getApiDataFilmCategory('https://api.themoviedb.org/3/movie/top_rated?api_key=12baa83af9302206b6af65913d262a81&language=vi&page=1',numberMovie));
                break;
            case '3':
                dispatch(action.getApiDataFilmCategory('https://api.themoviedb.org/3/tv/popular?api_key=12baa83af9302206b6af65913d262a81&language=vi&page=2',numberMovie))
                break;
            case '4':
                dispatch(action.getApiDataFilmCategory('https://api.themoviedb.org/3/movie/now_playing?api_key=12baa83af9302206b6af65913d262a81&language=vi&page=1',numberMovie));
                break;
            default:
                break;
        }
    },[numberMovie]);
    const listMovie = useSelector(state => state.FilmCategory);
    if(listMovie){
        var CategoryMovieList = listMovie.data.results.map((item,stt)=><CategoryMovieItem key={stt} movie={item}/>)
    }
    var onGetMovie = (e)=>{
       setnumberMovie(e.target.getAttribute('data-value'));
    }
    return (
        <div className="movie-tab">
            <div className="movie-nav">
                <div className="container">
                    <h3 className="movie-title">
                        Nổi bật
                     </h3>
                <ul className="movie-navigation">
                        <li className={`movie-navigation-item ${numberMovie==1 ? 'movie-navigation-active' : ''}`} data-value='1' onClick={onGetMovie}>
                            Phim Mới Nhất
                </li>
                        <li className={`movie-navigation-item ${numberMovie==2 ? 'movie-navigation-active' : ''}`} data-value='2'  onClick={onGetMovie}>
                            Phim Kinh Điển
                </li>
                        <li className={`movie-navigation-item ${numberMovie==3? 'movie-navigation-active' : ''}`} data-value='3'  onClick={onGetMovie}>
                            Phim bộ
                </li>
                        <li className={`movie-navigation-item ${numberMovie==4 ? 'movie-navigation-active' : ''}`} data-value='4'  onClick={onGetMovie}>
                            Phim chiếu rạp
                </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="movie-news movie-list movie-list-active">
                    <div className="row list-tab-movie">
                       {  CategoryMovieList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryMovie
