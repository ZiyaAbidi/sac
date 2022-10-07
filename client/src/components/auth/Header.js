import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">

      <div className="top-head">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-3">

              <div className="logo">
                <Link to='/dashboard'><img src="assets/admin/img/logo.png" alt="logo" className="img-fluid" /></Link>
              </div>

            </div>

            <div className="col-sm-9">

              <div className="user-info">
                <ul>
                  <li>
                    <Link to='/dashboard' className="user-name">Abbas Abidi</Link>
                  </li>
                  <li><Link to='/dashboard' className="user"><i className="fa fa-user"></i></Link></li>
                  <li><Link to='/dashboard'><i className="fa fa-bell"></i>
                    <span className="notification">2</span></Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="menu">
        <nav className="navbar navbar-expand-md menu">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li><Link to='/products'>Services</Link></li>
                <li><Link to='/dashboard'>Clients</Link></li>
                <li><Link to='/dashboard'>Insights</Link></li>
                <li><Link to='/dashboard'>Careers</Link></li>
              </ul>
            </div>


            <ul className="navbar-right">
              <li>Need some help ? <Link to=''> Click here</Link></li>
            </ul>
          </div>
        </nav>
      </div>

    </header>
  )
}

export default Header