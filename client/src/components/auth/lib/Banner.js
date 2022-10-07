import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
    return (
        <div className={`custom-padding banner_sec bg_img ${props.class}`}>
            <div className="pgn_stap">
                <div className="breadcream">
                    <ul>
                        <li><Link to='/dashboard'> <img src="./img/home.png" alt="Dashboard" /> Dashboard</Link></li>
                        <li>/</li>
                        <li>{props.title}</li>
                    </ul>
                </div>
            </div>

            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

export default Banner