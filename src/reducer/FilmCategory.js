import * as types from '../constant/actionType';


const initialState = null;


const FilmCategory = (state=initialState,action)=>{
    switch(action.type){
        case types.getDataFilmCategory:
            {
                var data = {...action.data};
                var numberType = action.numberType;
                return {data,numberType}
            }
       
         default:
             return state;   
    }
}
export default FilmCategory;