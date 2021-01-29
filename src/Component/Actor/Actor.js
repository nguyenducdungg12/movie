import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function Actor(props) {
    const isLoading = useSelector(state => state.IsRequestApi);
    const {actor} = props;
    return (
        <div className="col-lg-3 main__actor__item mb-4">
            {isLoading ? <div className='loading'><img className='loading__img' src='https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif'/></div> : <Link to={`/actor/${actor.id}`}>{actor.profile_path ?  <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" className="main__actor__img"/> : <img src="https://titanliner.com/wp-content/uploads/2019/02/empty-img.jpg" alt="" className="main__actor__img"/>}
</Link>}
        <div className="main__actor__name">{actor.name}</div>
    </div>
    )
}

export default Actor
