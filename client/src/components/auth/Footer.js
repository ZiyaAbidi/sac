import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-menu">
              <ul>
                <li><Link to='terms'>Terms</Link></li>
                <li><Link to='privacy-policy'>Privacy Policy</Link></li>
                <li>SAC-Group is powered by <Link to='dashboard'>Infoicon</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer