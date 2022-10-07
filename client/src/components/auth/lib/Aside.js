import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <aside className="aside">
            <h3>Inventory</h3>

            <ul className="sidebar">
                <li><Link to="/">Draft campaign <span>8</span></Link></li>
                <li><Link to="/">Live campaign <span>10</span></Link></li>
                <li><Link to="/">Whitelist results <span>3</span></Link></li>
            </ul>
        </aside>
    )
}

export default Aside