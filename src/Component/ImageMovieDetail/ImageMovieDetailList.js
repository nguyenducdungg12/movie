import React from 'react'
import ImageMovieDetailItem from './ImageMovieDetailItem'
function ImageMovieDetailList(props) {

    const {imageMovie,title} = props;
       
    var content = imageMovie.map((img,stt)=><ImageMovieDetailItem key={stt} img={img}/>)
    return (
        <div className="film-content-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="film-title">Hình ảnh phim {title}</p>
                </div>
                {content}
            </div>
        </div>
    </div>
    )
}

export default ImageMovieDetailList
