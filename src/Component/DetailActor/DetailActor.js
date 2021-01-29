import React from 'react'
import {Link} from 'react-router-dom'
function DetailActor(props) {

    const {actor} = props;

    var relateFilm = (list)=>{
        console.log(list);
        var content=[];
        for(var i =0;i<5;i++){
            content.push(<li className="actor-detail-related-img-item"><Link to={`/movie/${list[i].id}`}>{list[i].poster_path ?<img src={`https://image.tmdb.org/t/p/w500/${list[i].poster_path}`} alt="" className="actor-detail-related-img"/> : <img src="https://titanliner.com/wp-content/uploads/2019/02/empty-img.jpg" alt="" className="actor-detail-related-img"/>}</Link></li> )
        }
        return content;
    }
    console.log(actor);
    return (
        <div className="actor-profile">
    <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="actor-profile-img-wrap">
                    {actor.profile_path ?<img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" className="actor-profile-img"/> :                         <img src="https://titanliner.com/wp-content/uploads/2019/02/empty-img.jpg" alt="" className="actor-profile-img"/>}
                    <div className="actor-profile-social">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram-square"></i>
                    </div>
                </div>
            </div>
            <div className="col-8">
                <div className="actor-detail">
                    <p className="actor-detail-name">
                        {actor.name}
                    </p>
                    <p className="actor-detail-date">
                        {actor.birthday} In {actor.place_of_birth}
                    </p>
                    <p className="actor-detail-sumary">
                        {actor.biography}
                    </p>
                    <div className="actor-detail-related">
                        <h3 className="actor-detail-related-title">
                            Known For
                        </h3>
                        <ul className="actor-detail-related-img-list">
                           {relateFilm(actor.movie_credits.cast)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default DetailActor
