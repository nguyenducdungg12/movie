import React from 'react'
import {Link} from 'react-router-dom';

function PaginationItem(props) {
    const {pageNumber,currentUrl,currentNumber} = props;
    const newUrl = currentUrl.replace(currentNumber,pageNumber);

    return (
        <Link to={newUrl} className={`pagination__btn ${pageNumber==currentNumber ? 'pagination__btn--active' : ''}`}>{pageNumber}</Link>
    )
}

export default PaginationItem
