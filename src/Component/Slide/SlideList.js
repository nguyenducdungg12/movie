import React, { useState, useEffect } from 'react';
import * as action from '../../action/film';
import { useSelector, useDispatch } from 'react-redux';
import SlideItem from './SlideItem';
import './SlideList.css';

function SlideList() {
    const [slideNumber, setSlideNumber] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.getApiDataFilmSlide('https://api.themoviedb.org/3/movie/popular?api_key=12baa83af9302206b6af65913d262a81&language=vi'));
    },[]);

    const listMovie = useSelector(state => state.FilmHeader);
   if(listMovie){
        var ListSlide = listMovie.results.map((item,stt) =><SlideItem key={stt} item={item}/>);
    } 

    var onLeft = ()=>{
        if(slideNumber===0){
            return;
        }
        var currentSlide = slideNumber;
        currentSlide--;
        setSlideNumber(currentSlide);
    }
    var onRight =()=>{
        if(slideNumber===15){
            return;
        }
        var currentSlide = slideNumber;
        currentSlide++;
        setSlideNumber(currentSlide);        

    }
    return (
        <div className="header-slide">
            <div className="header-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12"></div>
                    <h2 className="header-slide-title">
                        PHIM ĐỀ CỬ
                    </h2>
                </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="slide-view">
                        <div className="slide-wrap" style={{transform:`translateX(-${slideNumber*20}%)`}}>
                        {ListSlide}
                        </div>
                        <span className={`header-slide-btn header-slide-left ${slideNumber===0 ? 'btn--disable' : ''}`} onClick={onLeft}><i className="fas fa-arrow-left"></i></span>
                        <span className={`header-slide-btn header-slide-right ${slideNumber===15 ? 'btn--disable' : ''}`}  onClick={onRight}><i className="fas fa-arrow-right"></i></span>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </div>
    )


}

export default SlideList
