import React from 'react'
import { NavLink,  } from 'react-router-dom';



const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container mx-auto">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <NavLink className="nav-link active" aria-current="page" to="/">main</NavLink> 
            <NavLink className="nav-link" to="/om">Om</NavLink> 
            <NavLink className="nav-link" to="/skriv">Gjestebok</NavLink>
            <NavLink className="nav-link" to="/chuck">Chuck fakta</NavLink>
            <NavLink className="nav-link" to="/games">Spill</NavLink>
            <NavLink className="nav-link" to="/login">Innloggingsside</NavLink>
          </div>
        </div>
      </div>
        <div className="col">
            
           
           
      </div>
    </nav>
   
  )
}

export default Navbar