import React from 'react'
import './NavFilter.css';

function NavFilter() {
    return (
        <div className="main__profile">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="movie-filter d-flex">
                            <div className="movie-filter__item">
                                <p className="movie-filter__item__title">Chuyên mục</p>
                                <div className="movie-filter__item__content">
                                    Tất cả
                    </div>
                            </div>
                            <div className="movie-filter__item">
                                <p className="movie-filter__item__title">Quốc Gia</p>
                                <div className="movie-filter__item__content">
                                    Tất cả
                    </div>
                            </div>
                            <div className="movie-filter__item">
                                <p className="movie-filter__item__title">IMBd</p>
                                <div className="movie-filter__item__content">
                                    0.0 - 8.6
                    </div>
                            </div>
                            <div className="movie-filter__item">
                                <p className="movie-filter__item__title">Năm</p>
                                <div className="movie-filter__item__content">
                                    1999 - 2020
                    </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }} className="col-lg-6 ">
                        <div className="nav-login custom-filter-btn">Lọc</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavFilter
