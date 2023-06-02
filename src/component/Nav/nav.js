import React from 'react'
import './nav.css';
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom"
function Nav() {
  return (
    <>
      <div>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt='error' id="logo"></img>
            <span>WatchMyShow</span>
          </div>
          <div className="nav-menu">
            <Link to="/" >Home</Link>
            <Link to="/ShowData" >Data</Link>
            <Link to="/" >About</Link>
            <Link to="/" >Contact</Link>
            <Link to="/" >Sign Up</Link>
            <Link to="/" >Log In</Link>
          </div>
          <input type="search" placeholder='Search' id='search-bar' ></input>
        </div>
      </div>
    </>
  )
}

export default Nav