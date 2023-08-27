import React, { Component } from 'react'
import './style.css'


export class Navbar extends Component {
  render(){
    return(
      <div className='top'>
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">COFFEE TIME</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
                <a className="nav-link" aria-current="page" href="/">Home</a>  
                <li className="nav-item"><a className="nav-link" href="/business">Gallery</a></li>
                <li className="nav-item"><a className="nav-link" href="/price-for-sercice">Price for service</a></li>
                <li className="nav-item"><a className="nav-link" href="/Sign-up">sign-up</a></li>
                <li className="nav-item"><a className="nav-link" href="/Login">Login</a></li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}
export default Navbar