import React from 'react'

function ActorCredits(props) {
    const {credits} = props;
    var content = (list)=>{
        console.log(list);
        var temp;
        if (list){
            temp = list.map((item)=><li className="actor-credits-item">
            <span className="actor-credits-item-year">

                {item.release_date ? item.release_date=='' ? 'Chưa xác định' : item.release_date : 'Chưa xác định'}
            </span>
            <span className="actor-credits-item-content">
                {item.title}
            </span>
            <span className="actor-credits-item-character">
                as {item.character}
            </span>
        </li>)
        
        }
        return temp;
    }
    return (
        <div className="actor-credits">
        <div className="container">
            <h3 className="actor-credits-title">
                Credits
            </h3>
            <ul className="actor-credits-list">
              {content(credits)}
            </ul>
        </div>
    </div>
    )
}

export default ActorCredits
