import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../action/film'
import './Actor.css'
import Breadcum from '../Component/Breadcum/Breadcum'
import Actor from '../Component/Actor/Actor'
import Pagination from '../Component/Pagination/Pagination'
const queryString = require('query-string');

function Actors(props) {
    var dataActor = useSelector(state => state.Actor);
    var dispatch = useDispatch();
    var { page, search } = queryString.parse(props.location.search);
    useEffect(() => {
        dispatch(action.getApiDataActor(`https://api.themoviedb.org/3/person/popular?api_key=12baa83af9302206b6af65913d262a81&page=${page}`,1));
    },[page,search]);
    if (dataActor) {
        var listActor = dataActor.results.map((actor, stt) => <Actor key={stt} actor={actor} />);
    }
    console.log(dataActor);
    return (
        <div className="main">
            <Breadcum name={'Danh sách diễn viên'} finalBreadcum ={'diễn viên'} listBreadcum={[]}/>
         <div className="main__actor">
            <div className="container">
                <div className="row ">
                   {listActor}
                   <div className="col-12" style={{textAlign:'center'}}>
                    {dataActor ? <Pagination location={props.location} currentPage={dataActor.page} totalPage={dataActor.total_pages}/> : ''}
 
                    </div> 
                </div>
          </div>
        </div> 
    </div>
    )
}

export default Actors
