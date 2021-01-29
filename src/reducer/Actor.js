import * as types from '../constant/actionType'
const initialState = null;


const DetailFilm = (state = initialState,action)=>{
    switch (action.type) {
        case types.getDataActor:
            const dataActor = action.data;
            return {...dataActor};
            break;
    
        default:
            return state;
    }
}
export default DetailFilm;