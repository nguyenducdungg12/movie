import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import PaginationItem from './PaginationItem';
import './Pagination.css';
const queryString = require('query-string');
function Pagination(props) {
    const {location,currentPage,totalPage} = props;
    const [numberLeft, setnumberLeft] = useState(null);
    const [numberRight, setnumberRight] = useState(null)
/*     const [pageNumber, setpageNumber] = useState(1);
 */    var pageNumber = 1;
    var paraQuery = queryString.parse(location.search);
    let numberPageCurrent = parseInt(paraQuery.page);
    var currentUrl = location.pathname+location.search;
    useEffect(()=>{
        setnumberLeft(()=>{
            var leftNumber = currentUrl.replace(numberPageCurrent,numberPageCurrent-1);
            return leftNumber;
        })
        setnumberRight(()=>{
            var rightNumber = currentUrl.replace(numberPageCurrent,numberPageCurrent+1);
            return rightNumber;
        })
        window.scrollTo(0, 0);
    },[numberPageCurrent]);
    function createPagination(totalPage){
        var temp=[];
       if(numberPageCurrent/10>=1){
           pageNumber = (parseInt(numberPageCurrent/10))*10;
       }
        for (var i =pageNumber;i<=totalPage;i++){
            if(i>pageNumber+9){
                return temp;
            }
        temp.push(<PaginationItem key={i} pageNumber={i} currentNumber = {numberPageCurrent} currentUrl={currentUrl}/>)
        
    }
        return temp;
    }
    var ListPagination = createPagination(totalPage);
    return (
        <div className="pagination">
        <Link to ={numberLeft} className="pagination__btn">
        <i className="fas fa-angle-left"></i>
        </Link>
        <div className="pagination-custom">
            {ListPagination ? ListPagination : ''}
        </div>
        
        <Link to ={numberRight} className="pagination__btn">
        <i className="fas fa-angle-right"></i>
         </Link>
    </div >
    )
}

export default Pagination
