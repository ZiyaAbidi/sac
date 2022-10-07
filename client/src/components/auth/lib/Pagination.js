import React from 'react'

const Pagination = () => {
    return (
        <div className="pagination">
            <ul>
                <li className="arrow-left"><a href="#"><i className="fa fa-angle-left"></i></a></li>
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li> ... </li>
                <li><a href="#">10</a></li>
                <li className="arrow-right"><a href="#"><i className="fa fa-angle-right"></i></a></li>
            </ul>
        </div>
    )
}

export default Pagination