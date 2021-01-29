import React from 'react'
import BreadcumDetailFilm from '../BreadcumDetailFilm/BreadcumDetailFilm'
import { Link } from 'react-router-dom';
import './DetailMovie.css'
function DetailMovie(props) {
    const { info } = props;
    var genres = () => {
        var genres = '';
        
        info.genres.forEach(genre => {
            genres += genre.name;
        })
        return genres;
    }
    var cast = () => {
        var listCast = [];
        info.credits.cast.forEach((cast, stt) => {
            listCast.push(<Link key={stt}><p className="css-1">{cast.name} , </p></Link>)
        })
        return listCast;
    }
    var rate = ()=>{
        var vote_average = parseInt(info.vote_average/2);
        var rate =[];
        console.log(vote_average,123);
        for(var i=0;i<vote_average;i++){
            rate.push(<i className="fas fa-star rate-act"></i>);
        }
        for(var i=vote_average;i<5;i++){
            rate.push(<i class="far fa-star"></i>);
        }
        return rate;
    }
        if(info){
        var styleBackground = {
        backgroundImage:`url('https://image.tmdb.org/t/p/w500/${info.poster_path}' )`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
    }};
    console.log(info);
    return (
        <div className="details">
            <div className="background" style={styleBackground}>
                <div className="background-detail">
                    <div className="container">
                        <div className="row">
                            <BreadcumDetailFilm nameMovie={info ? info.name :''} />
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-7 film-details">
                                        <div className="row box-info">
                                            <div className="col-4 box-info__img">
                                                <img src={`https://image.tmdb.org/t/p/w500/${info ? info.poster_path :''}`} alt="" id="movie-poster" />
                                                <i className="far fa-play-circle play-film"></i>
                                            </div>
                                            <div className="col-8 box-info__content">
                                                <div className="film-content">
                                                    <ul className="film-meta">
                                                        <li>
                                                            <span>Tên gốc:  </span>
                                                            <p className="css-1">{info ? info.original_name : ''}</p>
                                                        </li>
                                                        <li>
                                                            <span>Thể loại:  </span>
                                                            <p className="css-1">{info ? genres() : ''}</p>
                                                        </li>
                                                        <li>
                                                            <span>Năm phát hành:  </span>
                                                            <p className="css-1">{info ? info.first_air_date :''}</p>
                                                        </li>
                                                        <li>
                                                            <span>Thời lượng:   </span>
                                                            <p className="css-1">{info ? info.runtime: ''} phút</p>
                                                        </li>
                                                        <li>
                                                            <span>Ngôn ngữ:  </span>
                                                            <p className="css-1">{info ? info.spoken_languages[0].english_name : ''}</p>
                                                        </li>
                                                        <li>
                                                            <span>Đạo diễn: </span>
                                                            <p className="css-1">{info ? info.credits.crew[0].name :''}</p>
                                                        </li>
                                                        <li style={{overflow:'hidden',height:'70px'}}>
                                                            <span>Diễn viên:  </span>
                                                            {info ?cast() :''}
                                                        </li>
                                                        <li>
                                                            <span>Đánh giá phim:  </span>
                                                            <span className="rate">
                                                               {rate()}
                                                            </span>
                                                            <span className="rated">
                                                                (
                                                           <i className="fas fa-star rate-act rate-act__color"></i>
                                                                <span className="rating-score">2.5</span>
                                                           /
                                                           <span className="total_rating">6</span>
                                                           lượt)
                                                       </span>
                                                        </li>
                                                    </ul>
                                                    <div className="watch">

                                                        <div className="watch-eps">
                                                            <button className=" select-1" id="watchmovie">
                                                                <i className="fas fa-video"></i> Xem phim
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 trailer d-flex align-items-end">
                                        <div className="support css-2">
                                            <div className="love">
                                                <button>
                                                    <i className="fas fa-thumbs-up "></i>
                                                   Thích
                                           </button>
                                                <button>
                                                    Chia sẻ
                                           </button>
                                                <span className="text-1">Tống Đức Hoàng</span>
                                                <span className="text-2">và 68k người khác thích nội dung này</span>
                                            </div>
                                            <div className="share">
                                                <span>Share: </span>
                                                <i className="fab fa-facebook-square facebook"></i>
                                                <i className="fab fa-instagram-square insta"></i>
                                                <i className="fab fa-twitter twitter"></i>
                                                <i className="fab fa-youtube youtube"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default DetailMovie
