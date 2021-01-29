import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
function CategoryMovieItem(props) {
    var {movie } = { ...props };
    const [content, setContent] = useState(null);

    const {numberType} = useSelector(state => state.FilmCategory)
    const isLoading = useSelector(state => state.IsRequestApi);
    useEffect(() => {
        const fetchData = async () => {
            var id = movie.id;
            let response;
            if(numberType==3){
                response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=12baa83af9302206b6af65913d262a81&language=vi`);
            }
            else{
                response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=12baa83af9302206b6af65913d262a81&language=vi`);

            }
            const data = await response.json();
            setContent(data);
        }
        fetchData();
    },[numberType]);
    var ten='';
    if(content){
        content.genres.forEach((genre) => {
            ten += `${genre.name} ,`;
        })
        if(content.episode_run_time){
        }
    }
    return (
        <div className="col-6">    
            {isLoading ? <div className='loading'><img className='loading__img' src='https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif'/></div> : numberType == 3 && content ? <div className=' mt-5 d-flex'>
                <Link to={`/tvshow/${movie.id}`}>
                    <div className='movie-img'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' className='movie-img-item' />
                        <span className='quality'>FullHD</span>
                        <span className='episode'>{content.number_of_episodes ? `${content.number_of_episodes} tập` : '? Tâp'}</span>
                    </div>
                </Link>
                <div className='movie-content'>
                    <h3 className='movie-content-title'>
                      {movie.name}
            </h3>
                    <p className='movie-content-title-engl'>
                       Thời Gian: {content.episode_run_time ? `${content.episode_run_time} Phút` :'Chưa xác định'}
               </p>
                    <p className='movie-content-category'>
                        Thể loại : {ten}
            </p>
                    <p className='movie-content-country'>
                        Ngôn ngữ : {content.spoken_languages.length>0 ? content.spoken_languages[0].english_name : 'Chưa xác định'}
            </p>
                    <p className='movie-content-imbd'>
                        iMDb {movie.vote_average}
            </p>
                    <p className='movie-content-date'>
                    {movie.first_air_date}
            </p>
                    <p className='movie-content-desc'>
                    {movie.overview}
            </p>
                </div>
            </div> : numberType!=3 && content ? 
                <div className=' mt-5 d-flex'>
                    <Link to={`/movie/${movie.id}`}>
                    <div className='movie-img'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' className='movie-img-item' />
                        <span className='quality'>FullHD</span>
                    </div>
                </Link>
                <div className='movie-content'>
                    <h3 className='movie-content-title'>
                      {movie.title}
                      </h3>
                    <p className='movie-content-title-engl'>
                        Thời Gian: {content.runtime ? `${content.runtime} Phút` : 'Chưa xác định' } 
                     </p>
                    <p className='movie-content-category'>
                        Thể loại : {ten}
                     </p>
                    <p className='movie-content-country'>
                        Ngôn ngữ : {content.spoken_languages.length>0 ? content.spoken_languages[0].english_name : 'Chưa xác định'}
            </p>
                    <p className='movie-content-imbd'>
                        iMDb {movie.vote_average}
            </p>
                    <p className='movie-content-date'>
                    {movie.release_date}
            </p>
                    <p className='movie-content-desc'>
                    {movie.overview ? movie.overview : 'Chưa cập nhật'}
            </p>
                </div>
                </div> : 'Không có dữ liệu'}
        </div>
    )
}

export default CategoryMovieItem
