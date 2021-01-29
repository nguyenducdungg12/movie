import {combineReducers} from 'redux';
import FilmCategory from './FilmCategory';
import FilmHeader from './FilmHeader';
import IsRequestApi from './IsRequestApi'
import FilmNews from './FilmNews'
import DetailFilm from './DetailFilm'
import Modal from './Modal'
import Actor from './Actor'
import DetailActor from './DetailActor'
import MovieTrending from './MovieTrending'
const AppReducer = combineReducers({
    FilmCategory,
    FilmHeader,
    IsRequestApi,
    FilmNews,
    DetailFilm,
    Actor,
    Modal,
    DetailActor,
    MovieTrending,
});
export default AppReducer;  