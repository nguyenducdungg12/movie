import React from 'react'
import {useDispatch} from 'react-redux';
import *as action from '../../action/film'

function ImageMovieDetailItem(props) {
    const dispatch = useDispatch();
    const {img} = props; 
    let onZoom = ()=>{
        dispatch(action.isOpenModal(img.file_path));
    }
    return (
        <div className="col-4 film--img-bd" onClick={onZoom}>
                      {img ?  <img src={`https://image.tmdb.org/t/p/w500/${img.file_path}`} alt="" className="card-movie-img2"/> : <img src=" https://titanliner.com/wp-content/uploads/2019/02/empty-img.jpg  " alt="" className="card-movie-img2"/>  }                
        </div>
    )
}

export default ImageMovieDetailItem
