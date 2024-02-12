import React from 'react'
import { NavLink,  } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar">

        <div className="navlinks">
            <NavLink to="/">Main</NavLink>
            <NavLink to="/om">Om</NavLink>
            <NavLink to="/skriv">Gjestebok</NavLink>
            <NavLink to="/chuck">Chuck fakta</NavLink>
            <NavLink to="/games">Spill</NavLink>
            <NavLink to="/login">Innloggingsside</NavLink>
           
         </div>
    </nav>
  )
}

export default Navbar