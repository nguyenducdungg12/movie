import React from 'react'
import {Link} from 'react-router-dom';
function ActorMovieDetailItem(props) {

    const {img,name,original_name,id} = props;
    return (
        <div className="item">
            <Link to={`/actor/${id}`} className="card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" className="card-movie-img" />
            </Link>
            <p className="actor-name slide-movie-title">
                {original_name}
            </p>
            <p className="actor-name slide-movie-title-engl">
                {name}
            </p>
        </div>
    )
}

export default ActorMovieDetailItem
