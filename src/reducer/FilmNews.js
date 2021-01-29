import * as types from '../constant/actionType'

const initialState = null;

const FilmNew = (state = initialState,action)=>{
    switch (action.type) {
        case types.getDataFilmNews:
            var dataMovie = action.data.results;
            return [...dataMovie];
            break;
        default:
            return state;
    }
}
export default FilmNew;