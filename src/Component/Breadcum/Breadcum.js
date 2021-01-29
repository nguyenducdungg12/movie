import React from 'react'
import './Breadcum.css';

function Breadcum(props) {
    const {name,finalBreadcum,listBreadcum,search} = props;
    function content(list){
        var content;
        if(list){
            content = list.map(item=><div style={{display:'flex'}}><div className="main__heading__child__breadcrumb__item">
            <p><a href="{{route('home')}}" className="home--tag-a">{item}</a></p>
        </div>
        <div className="main__heading__child__breadcrumb__item">
            <i className="fas fa-long-arrow-alt-right"></i>
        </div></div>)
        }
        return content;
    }
    return (
        <div className="main__heading main__heading--movie">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="main__heading__child">
                            <h1 className="main__heading__child--title">{search ? `Từ khóa : ${search}` : name}
                            </h1>
                            <div className="main__heading__child__breadcrumb">
                                <div className="main__heading__child__breadcrumb__item">
                                    <p><a href="{{route('home')}}" className="home--tag-a">Trang chủ</a></p>
                                </div>
                                <div className="main__heading__child__breadcrumb__item">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </div>
                               
                                    {content(listBreadcum)}
                                    <div className="main__heading__child__breadcrumb__item">
                                        <p>
                                            {finalBreadcum}
                                        </p>
                                    </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcum


