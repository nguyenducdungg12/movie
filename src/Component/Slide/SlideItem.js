import React from 'react'

function SlideItem(props) {
        var {item} = props;
    return (
        <div className="slide-item">
            <a href={`/movie/${item.id}`} className="card-movie">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt='' className="card-movie-img" />
                <div className="card-movie-icon">
                    <i className="fas fa-play"></i>

                </div>
            </a>
            <p className="slide-movie-title">
                {item.original_title}
            </p>
            <p className="slide-movie-title-engl">
                {item.title}

            </p>
    </div>
    )
}

export default SlideItem
