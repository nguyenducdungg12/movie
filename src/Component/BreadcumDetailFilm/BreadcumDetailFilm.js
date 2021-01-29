import React from 'react'
import {Link} from 'react-router-dom'
import './BreadcumDetailFilm.css'
function BreadcumDetailFilm(props) {
    const {nameMovie} = props;

    return (
        <div class="col-12">
        <p class = "location">
            <Link to='/'>Trang chủ</Link>
            <i class="fas fa-arrow-right"></i>
            <Link to='/movie?page=1'>Phim</Link>
            <i class="fas fa-arrow-right"></i>
            <span>{nameMovie}</span>
        </p>
        <p class="name-film">{nameMovie}</p>
    </div>
    )
}

export default BreadcumDetailFilm
