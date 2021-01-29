import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import * as action from '../../action/film'
import SimilarMovie from './SimilarMovie'
import './WatchMovie.css';
function WatchMovie(props) {
    const dispatch = useDispatch();
    const {info} = props;
    const [currentNumberFilm, setcurrentNumberFilm] = useState(0);
    const [filter, setfilter] = useState('day');
    const [srcVideo, setsrcVideo] = useState(null);
    const dataMovie = useSelector(state => state.MovieTrending);
    const numberFilm = (list)=>{
        var content;
        if(list){
        content =  list.results.map((item,stt)=><li key={stt} className={`watch-movie-play-menu-item ${stt==currentNumberFilm ?'watch-movie-play-menu-item--active' : '' }`} onClick={onChangeEpisode}>{stt+1}</li>)
        }
            return content;
        }
        if(dataMovie){
            var infoMovie = dataMovie.results.filter((item,stt)=>stt<5)
        }
    useEffect(()=>{
        if(info){
            if(info.videos){
                setsrcVideo(info.videos.results[currentNumberFilm].key);
            }
    }
    },[currentNumberFilm])
    useEffect(()=>{
        dispatch(action.getApiDataFilmTrending(`https://api.themoviedb.org/3/trending/movie/${filter}?api_key=12baa83af9302206b6af65913d262a81`));
    },[filter])
    const onChangeTrending =(e)=>{
        var filter = e.target.getAttribute('data');
        setfilter(filter);
    }
    const onChangeEpisode = (e)=>{
        var episode = parseInt(e.target.innerHTML)-1;
        setcurrentNumberFilm(episode);
    }
    return (
        <div className='background-detail'>
                <div className='container'>
                    <div className='row'>
                         <div className='col-9'>
                            <div className='watch-movie-play'>
                                <iframe style={{width:'100%',height:'600px'}} className='main-video-watch main-video-watch--active' src={`https://www.youtube.com/embed/${srcVideo}`} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                             </div>
                            <div className='watch-movie-play-menu'>
                                <h3 className='watch-movie-play-menu-title'>
                                    Chọn tập phim
                                </h3>
                                <ul className='watch-movie-play-menu-list'>
                                    {numberFilm(info.videos)}
                                </ul>
                                <div className='watch-movie-play-menu-category'>
                                    <span>
                                        Trailer
                                    </span>
                                    <span>
                                        Engsub
                                    </span>
                                </div>
                            </div>
                            </div>
                        <div className='col-3'>
                                <div className='watch-movie-menu'>
                                    <h3 className='movie-movie-title'>
                                        Nổi Bật
                                    </h3>
                                    <ul className='watch-movie-filter'>
                                        <li data='day' className={`watch-movie-filter-item ${filter=='day' ? 'watch-movie-filter-item-active' : ''}`} onClick={onChangeTrending}>
                                            Ngày
                                        </li>
                                        <li data ='week' className={`watch-movie-filter-item ${filter=='week' ? 'watch-movie-filter-item-active' : ''}`} onClick={onChangeTrending}>
                                            Tuần 
                                        </li>
                                    </ul>
                                </div>
                                <ul className='watch-movie-list'>
                                    <SimilarMovie filter={filter} info = {infoMovie}/>
                                </ul>
                        </div>
                        </div>
                    </div>
                </div>
    )
}

export default WatchMovie
