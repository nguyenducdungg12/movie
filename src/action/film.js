import * as type from '../constant/actionType';


export const getApiDataFilmSlide = (api)=>dispatch=>{
    
        fetch(api)
        .then(res=>res.json())
        .then(data=>{
            dispatch(getDataFilmSlide(data));
        })
}

export const getApiDataFilmCategory= (api,numberType)=>dispatch=>{
    dispatch(isRequestApi());
    fetch(api)
    .then(res=>res.json())
    .then(data=>{
        dispatch(getDataFilmCategory(data,numberType));
        dispatch(isFinishApi());

    })
}
export const getApiDataFilmNews = (api)=>dispatch=>{
    dispatch(isRequestApi());
   fetch(api)
    .then(res=>res.json())
    .then(data=>{
        dispatch(getDataFilmNews(data));
        dispatch(isFinishApi());

    })
}
export const getApiDataDetailFilm = (api)=>dispatch=>{
    dispatch(isRequestApi());
    fetch(api)
     .then(res=>res.json())
     .then(data=>{
         dispatch(getDataDetailFilm(data));
         dispatch(isFinishApi());
 
     })
}
export const getApiDataActor = (api)=>dispatch=>{
    dispatch(isRequestApi());
    fetch(api)
     .then(res=>res.json())
     .then(data=>{
         dispatch(getDataActor(data));
         dispatch(isFinishApi());
     })
}
export const getApiDataDetailActor = (api)=>dispatch=>{
    dispatch(isRequestApi());
    fetch(api)
     .then(res=>res.json())
     .then(data=>{
         dispatch(getDataDetailActor(data));
         dispatch(isFinishApi());
     })
}
export const getApiDataFilmTrending = (api)=>dispatch=>{
    dispatch(isRequestApi());
    fetch(api)
     .then(res=>res.json())
     .then(data=>{
         dispatch(getDataFilmTrending(data));
         dispatch(isFinishApi());
     })
}
export const getDataFilmTrending =(data)=>{
    return {
        type:type.getDataFilmTrending,
        data,
    }
}
export const getDataDetailActor = (data)=>{
    return {
        type:type.getDataDetailActor,
        data,
    }
}
export const getDataActor = (data)=>{
    return {
        type:type.getDataActor,
        data,
    }
}
export const getDataFilmSlide = (data)=>{
    return {
        type:type.getDataFilmHeader,
        data,
    }
}
export const getDataFilmCategory = (data,numberType)=>{
    return {
        type:type.getDataFilmCategory,
        data,
        numberType,
    }
}

export const isRequestApi = ()=>{
    return {
        type:type.isLoadingRequest,
    }
}
export const isFinishApi = ()=>{
    return {
        type:type.isFinishRequest,
    }
}
export const isOpenModal = (img)=>{
    return {
        type:type.isOpenModal,
        img,
    }
}
export const onCloseModal = ()=>{
    return {
        type:type.onCloseModal,
    }
}
export const getDataFilmNews = (data)=>{
    return {
        type:type.getDataFilmNews,
        data,
    }
}

export const getDataDetailFilm = (data)=>{
    return {
        type:type.getDataDetailFilm,
        data,
    }
}



