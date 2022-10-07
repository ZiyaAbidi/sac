import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

const Header = () => {
  const [sticky, setSticky] = useState('');

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const sticky = window.scrollY >= 150 ? "sticky" : "";
    setSticky(sticky);
  };

  return (
    <header className={`header ${sticky}`}>
      <div className="top-head">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="navbarCustom">

                <Navbar />

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header