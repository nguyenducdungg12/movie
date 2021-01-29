import React from 'react'
import {Link} from 'react-router-dom'
function SimilarMovie(props) {
    const {info} = props;
    var content = (info)=>{
        var temp;
        if(info){
            temp= info.map((item,stt)=><li key={stt} className='watch-movie-item'>
            <Link to={`/movie/${item.id}`} className='watch-movie-item-link'>
                <div className='watch-movie-item-img-wrap'>
                       {item.poster_path? <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='img-watch-film'/> :  <img src='https://titanliner.com/wp-content/uploads/2019/02/empty-img.jpg' className='img-watch-film'/>}
                 </div>
                <div className='watch-movie-item-desc'>
                    <h3 className='watch-movie-item-desc-title'>
                           {item.title}
                    </h3>
                    <h3 className='watch-movie-item-desc-view'>
                       {item.popularity} lượt xem
                    </h3>
                    <h3 className='movie-content-imbd'>
                        Điểm IMDb
                        <span>
                          {item.vote_average}
                        </span>
                    </h3>
                </div>
            </Link> 
            </li>)
        }
        return temp;
    }
    return (
        <div>
            {content(info)}
        </div>
    )
}

export default SimilarMovie
