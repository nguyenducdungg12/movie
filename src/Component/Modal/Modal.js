import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import *as action from '../../action/film'
import './Modal.css'
function Modal() {
    const dispatch = useDispatch();
     const {isOpenModal,img} = useSelector(state => state.Modal)
        var onCloseModal = ()=>{
            dispatch(action.onCloseModal());
        }
    window.addEventListener('click',(e)=>{
        var modal = document.querySelector('.modal');
        if(e.target == modal){
            dispatch(action.onCloseModal());

        }
    })
 return (
        <div className="modal" style={isOpenModal ? {display:'block'} : {display:'none'}}>
            <div className="modal-img">
                <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="" className="modal-img__main"/>
                <i className="fas fa-times" id="quit" onClick={onCloseModal}></i>                                                 
            </div> 
    </div>
    )
}

export default Modal;
