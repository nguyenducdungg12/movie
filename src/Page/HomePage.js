import React from 'react'
import Header from '../Component/Include/Header'
import Footer from '../Component/Include/Footer'
import SlideList from '../Component/Slide/SlideList'
import CategoryMovie from '../Component/CategoryMovie/CategoryMovieList'
import FilmNew from '../Component/NewsMovie/NewListMovie'
function HomePage() {
    return (
        <div className="app">
            <SlideList/>
            <CategoryMovie/>
            <FilmNew/>
        </div>
    )
}

export default HomePage


