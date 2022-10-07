import React from 'react'
import { Link } from 'react-router-dom'

const Aside = (props) => {
    return (
        <aside className="aside">
            <h3>Inventory</h3>

            <ul className="sidebar">
                <li className={`${props.class}`}><Link to="/">All Service <span>8</span></Link></li>
                <li><Link to="/">Live campaign <span>10</span></Link></li>
                <li><Link to="/">Whitelist results <span>3</span></Link></li>
            </ul>
        </aside>
    )
}

export default Aside