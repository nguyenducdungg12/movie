import * as types from '../constant/actionType'
const initialState = null;


const DetailFilm = (state = initialState,action)=>{
    switch (action.type) {
        case types.getDataDetailFilm:
            const dataMovie = action.data;
            return {...dataMovie};
            break;
    
        default:
            return state;
    }
}
export default DetailFilm;