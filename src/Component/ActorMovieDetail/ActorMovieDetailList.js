import React from 'react'
import Slider from "react-slick";
import ActorMovieDetailItem from './ActorMovieDetailItem'
import './ActorMovieDetail.css'
function ActorMovieDetailList(props) {

    const {actor,title} = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
     if(actor.length>0){
         var SlideItem = ()=>{
             var temp = actor.map((item,stt)=><ActorMovieDetailItem key={stt} img={item.profile_path} name={item.character} original_name={item.original_name} id={item.id}/>)
            return temp;
         }
     } 
    return (
        <div className="film-content-2">    
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="film-title">Diễn viên phim {title}</p>
                </div>
                <div className="col-12">
                    <Slider {...settings}>
                        {actor ? SlideItem() : ''}
                    </Slider>
                </div>
                
            </div>
        </div>
    </div>
    
    )
}

export default ActorMovieDetailList
