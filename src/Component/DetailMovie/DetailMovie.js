import React from 'react'
import {useSelector} from 'react-redux';
import BreadcumDetailFilm from '../BreadcumDetailFilm/BreadcumDetailFilm'
import { Link } from 'react-router-dom';
import './DetailMovie.css'
import Skeleton from '@material-ui/lab/Skeleton';

function DetailMovie(props) {
    const isLoading = useSelector(state => state.IsRequestApi);

    const { info } = props;
    var genres = () => {
        var genres = '';
        
        info.genres.forEach(genre => {
            genres += genre.name +' ,';
        })
        return genres;
    }
    var cast = () => {
        var listCast = [];
        info.credits.cast.forEach((cast, stt) => {
            listCast.push(<Link to={`/actor/${cast.id}`} key={stt}><p className="css-1">{cast.name} ,</p></Link>)
        })
        return listCast;
    }
    var rate = ()=>{
        var rate =[];
        if(info){
            var vote_average = parseInt(info.vote_average/2);
            var rate =[];
            console.log(vote_average,123);
            for(var i=0;i<vote_average;i++){
                rate.push(<i className="fas fa-star rate-act rate-act__color"></i>);
            }
            for(var i=vote_average;i<5;i++){
                rate.push(<i class="fas fa-star"></i>);
            }
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
    
    return (
        <div className="details">
            <div className="background" style={styleBackground}>
                <div className="background-detail">
                    <div className="container">
                        <div className="row">
                            <BreadcumDetailFilm nameMovie={info ? info.title :''} />
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
                                                            <p className="css-1">{isLoading ? <div><Skeleton /><Skeleton animation={false} /><Skeleton animation="wave" /></div> : info ? info.original_title : ''}      
                                                                   </p>
                                                        </li>
                                                        <li>
                                                            <span>Thể loại:  </span>
                                                            <p className="css-1">{isLoading? <div><Skeleton /><Skeleton animation={false} /><Skeleton animation="wave" /></div> : info ? genres() : ''}</p>
                                                        </li>
                                                        <li>
                                                            <span>Năm phát hành:  </span>
                                                            <p className="css-1">{isLoading? <div><Skeleton /><Skeleton animation={false} /><Skeleton animation="wave" /></div> : info ? info.release_date :''}</p>
                                                        </li>
                                                        <li>
                                                            <span>Thời lượng:   </span>
                                                            <p className="css-1">{isLoading? <div><Skeleton /><Skeleton animation={false} /><Skeleton animation="wave" /></div> : info ? info.runtime: ''} phút</p>
                                                        </li>
                                                        <li>
                                                            <span>Ngôn ngữ:  </span>
                                                            <p className="css-1">{isLoading? <div><Skeleton /><Skeleton animation={false} /><Skeleton animation="wave" /></div> : info ? info.spoken_languages[0].english_name : ''}</p>
                                                        </li>
                                                        <li>
                                                            <span>Đạo diễn: </span>
                                                            <p className="css-1">{isLoading? <div><Skeleton /><Skeleton animation={false} /><Skeleton animation="wave" /></div> : info ? info.credits.crew[0].name :''}</p>
                                                        </li>
                                                        <li style={{overflow:'hidden',height:'70px'}}>
                                                            <span>Diễn viên:  </span>
                                                            <div>
                                                            {isLoading? <div><Skeleton /><Skeleton animation={false} /><Skeleton animation="wave" /></div> : info ?cast() :''}
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <span>Đánh giá phim:  </span>
                                                            <span className="rate">
                                                              {rate()}
                                                            </span>
                                                            <span className="rated">
                                                                (
                                                                <span style={{margin:'0'}} className="rating-score">{info ? parseInt(info.vote_average/2) : ''}</span>
                                                           <i className="fas fa-star rate-act rate-act__color"></i>
                                                           /
                                                           <span style={{margin:'0'}} className="total_rating">{info ? info.vote_count+' ' : ''}</span>
                                                           lượt)
                                                       </span>
                                                        </li>
                                                    </ul>
                                                    <div className="watch">

                                                        <div className="watch-eps">
                                                            <Link to={`/watchMovie/${info ? info.id :''}`} className=" select-1" id="watchmovie">
                                                                <i className="fas fa-video"></i> Xem phim
                                                            </Link>
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
