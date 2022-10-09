import React from 'react'
import {NavLink } from 'react-router-dom'

const Aside = (props) => {
    return (
        <aside className="aside">
            <h3>Products</h3>

            <ul className="sidebar">
                <li><NavLink to="../services">Services <span>13</span></NavLink></li>
                <li><NavLink to="../clients">Clients <span>10</span></NavLink></li>
                <li><NavLink to="../insights">Insights <span>2</span></NavLink></li>
            </ul>
        </aside>
    )
}

export default Aside