import React,{useState,useEffect,useRef} from 'react'
import {Link, Redirect,useHistory } from 'react-router-dom';
import './include.css';
import logo from '../../assist/img/homelogo.png'

export default function Header() {
    var history = useHistory();
    const [openSearch, setopenSearch] = useState(false)
    const TextInput = useRef(null);
    const onToggleSearch = ()=>{
        var temp = openSearch;
        setopenSearch(!temp);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        var value = TextInput.current.value;
        console.log(value);
        history.push(`/movie/?page=1&search=${value}`);
    }
    return (
        <header>
        <nav>
            <Link to='/' className="nav-logo-wrap">
                <img src={logo} alt="" className="nav-logo"/>
            </Link>
            <ul className="navigation">
                <li className="navigation-item">
                    <Link to='/movie/?page=1' className="navigation-link">
                        PHIM MỚI        
                    </Link>
                </li>
                <li className="navigation-item">
                    <Link to='/tvshow/?page=1' className="navigation-link">
                        PHIM BỘ
                    </Link>
                    </li>
    
                <li className="navigation-item">
                    <Link to='/movie/?page=1' className="navigation-link">
                        PHIM KINH ĐIỂN
                    </Link>
                </li>
    
                <li className="navigation-item">
                    <Link to='/movie/?page=1' className="navigation-link">
                        PHIM CHIẾU RẠP
                    </Link>
                </li>
                <li className="navigation-item">
                <Link to='/' className="navigation-link">
                    THỂ LOẠI
                    </Link>
                </li>
                <li style={{position:'relative'}} className="navigation-item nation">
                    <span  style={{cursor:'pointer'}} className="navigation-link nation-link">
                        QUỐC GIA
                    </span>
                    <div className="dropdown-nation">
                        <ul className="dropdown-nation-list">
                            <li className="dropdown-nation-item">
                                <Link to='/' className="dropdown-nation-link">
                                    Trung Quốc
                                </Link>
                            </li>
                            <li className="dropdown-nation-item">
                                <Link to='/' className="dropdown-nation-link">
                                    Mỹ
                                </Link>
                            </li>
                            <li className="dropdown-nation-item">
                                <Link to='/' className="dropdown-nation-link">
                                   Hàn Quốc 
                                </Link>
                            </li>
                            <li className="dropdown-nation-item">
                                <Link to='/' className="dropdown-nation-link">
                                    Châu Âu
                                </Link>
                            </li>
                            <li className="dropdown-nation-item">
                                <Link to='/' className="dropdown-nation-link">
                                    Nga
                                </Link>
                            </li>
                            <li className="dropdown-nation-item">
                                <Link to='/' className="dropdown-nation-link">
                                   Đài Loan
                                </Link>
                            </li>
                            <li className="dropdown-nation-item">
                                <Link to='/' className="dropdown-nation-link">
                                  Âu Mỹ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
    
                <li className="navigation-item">
                    <Link to='/actor/?page=1' className="navigation-link">
                        DIỄN VIÊN
                    </Link>
                </li>
    
            </ul>
            <div className="nav-user">
                <div className="nav-search">
                    <i className="fas fa-search"  onClick={onToggleSearch}></i>
                    <div className="dropdown-search" style={openSearch ? {transform:'scaleY(1)'} : {transform:'scaleY(0)'}}>
                        <form className="form-search"  onSubmit={onSubmit}>
                            <input type="hidden" name="p" value="1"/>
                            <input type="text" ref={TextInput} className="form-search-input" name="k" placeholder='Tìm kiếm phim theo tên, diễn viên, đạo diễn, thể loại, ...'/>
                            <input type="submit" className="form-search-submit" value='TÌM KIẾM'/>
                        </form>
                    </div>   
                </div>
                <p className="nav-language">
                    VI
                </p>
                    <div className='NotLog-in'>
                        <Link to='/'>
                            <div className='nav-login'>
                                <span>
                                    ĐĂNG NHẬP
                                </span> 
                            </div>
                        </Link>
                    </div>
            </div>
        </nav>
    </header>
    )
}
