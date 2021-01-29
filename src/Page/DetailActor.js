import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import Breadcum from '../Component/Breadcum/Breadcum'
import * as action from '../action/film';
import {useParams} from 'react-router-dom';
import './DetailActor.css'
import DetailActors from '../Component/DetailActor/DetailActor'
import ActorCredit from '../Component/ActorCredits/ActorCredits'
function DetailActor() {
    let { id } = useParams();
    
    var dispatch = useDispatch();
   useEffect(() => {
     dispatch(action.getApiDataDetailActor(`https://api.themoviedb.org/3/person/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&append_to_response=movie_credits`));
   },[])
   const dataActor = useSelector(state => state.DetailActor)
   console.log(dataActor);
    return (
        <div>
            <Breadcum name={'Hồ sơ diễn viên'} finalBreadcum ={'diễn viên'} listBreadcum={['diễn viên']}/>
             {dataActor ? <DetailActors actor = {dataActor}/> : ''}
             {dataActor ? <ActorCredit credits={dataActor.movie_credits.cast}/> :'' }
        </div>
    )
}

export default DetailActor


