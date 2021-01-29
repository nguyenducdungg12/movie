import * as types from '../constant/actionType';


const initialState = null;


const FilmHeader = (state=initialState,action)=>{
    switch(action.type){
        case types.getDataFilmHeader:
            {
                var data = action.data;
                return {...data};
            }
         default:
             return state;   
    }
}
export default FilmHeader;