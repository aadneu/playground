import React from 'react'
import { NavLink,  } from 'react-router-dom';



const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-md bg-body-tertiary mb-4" >
      <div className="container ">
        <a href=""></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <NavLink className="nav-link active" aria-current="page" to="/">Hjem</NavLink> 
            
      
            <NavLink className="nav-link" to="/guestbook">Gjestebok</NavLink>
            <NavLink className="nav-link" to="/chuck">Chuck</NavLink>
          
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Spill
              </div>
              <ul className="dropdown-menu">
                <NavLink className="dropdown-item" to="/games/trepaarad">3 på rad</NavLink>
                <NavLink  className="dropdown-item" to="/games/Snake">Worm</NavLink>
   
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
   
  )
}

export default Navbar