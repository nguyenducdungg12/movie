import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import HomePage from './Page/HomePage';
import Movie from './Page/Movie';
import TvShow from './Page/TvShow';
import DetailMovie from './Page/DetailMovie';
import DetailTvShow from './Page/DetailTvShow';
import Actor from './Page/Actor';
import DetailActor from './Page/DetailActor';
import Error404 from './Page/Error404';
import Header from '../src/Component/Include/Header'
import Footer from '../src/Component/Include/Footer'
import WatchMovie from './Page/WatchMovie'
function App() {
  return (
    <div className="main">
                  <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/Movie' component={Movie}/>
      <Route exact path='/TvShow' component={TvShow}/>
      <Route path='/Movie/:id' component={DetailMovie}/>
      <Route path='/tvshow/:id' component={DetailTvShow}/>
      <Route exact path='/actor' component={Actor}/>
      <Route path='/actor/:id' component={DetailActor}/>
      <Route path='/Error404' component={Error404}/>
      <Route path='/watchMovie/:id' component={WatchMovie} />

      <Redirect to="/Error404"/>
    </Switch>
    <Footer/>
    </div>

  );
}

export default App;
