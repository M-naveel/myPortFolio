import React from 'react';


function Navbar() {
  return (
    <>


   <nav className="container-fluid navbar navbar-expand-lg   customnav  ">
    <div className="container">
  <a className="navbar-brand   text-white" href='#Heading'>
    <h3>Portfolio </h3></a>
  <button className="navbar-toggler   "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"  ></span>
  </button>
  <div className="collapse  navbar-collapse "  id="navbarNavDropdown">
    <ul className="navbar-nav " >
      <li className="nav-item active">
        <a className="nav-link " href="#Hero">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#AboutMe">About</a>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="#Skills">Education</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#Projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact">Contact</a>
      </li>
      
    </ul>
  </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
