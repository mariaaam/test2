import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return <>
  
 <nav className="navbar navbar-expand-lg text-white py-2">
  <div className="container">
    <h2 className="navbar-brand" >START FRAMEWORK</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"about"} className="nav-link text-white me-2 " aria-current="page" >ABOUT</Link>
        </li>

        <li className="nav-item">
          <Link to={"portofolio"} className="nav-link text-white me-2" aria-current="page" >PORTFOLIO</Link>
        </li>

        <li className="nav-item">
          <Link to={"contact"} className="nav-link text-white me-2" aria-current="page" >CONTACT</Link>
        </li>
       
      </ul> 
    </div>
  </div>
</nav>

  
  </>
    
}