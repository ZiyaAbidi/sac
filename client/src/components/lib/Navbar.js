import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-default">
      <div className="navbar-header">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbarHeader" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <Link to='/' className='navbar-brand'><img alt="" className="img-responsive img-header-logo" src={`assets/img/logo.png`} /></Link>
      </div>

      <div className="collapse navbar-collapse justify-content-center" id="myNavbarHeader">
        <ul className="nav navbar-nav">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/services'>Services</NavLink></li>
          <li><NavLink to='/clients'>Clients</NavLink></li>
          <li><NavLink to='/insights'>Insights</NavLink></li>
          <li><NavLink to='/careers'>Careers</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>

      <div className="flag_lang">
        <ul>
          <li className="login"><Link to='/login'><i className="fa fa-user"></i></Link></li>
          <li className="active"><Link to=''><img src="assets/img/uk-flag.png" alt="UK" /></Link></li>
          <li><Link to=''><img src="assets/img/gr-flag.png" alt="GR" /></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar