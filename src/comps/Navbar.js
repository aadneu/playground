import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import Login from './Log in/Login';


const Navbar = () => {


  return (
    <nav className="navbar">
        <div className="navlinks">
            <Link to="/">Main</Link>
            <Link to="/om">Om</Link>
            <Link to="/skriv">Gjestebok</Link>
            <Link to="/chuck">Chuck fakta</Link>
            <Link to="/games">Spill</Link>
            <Link to="/login">Innloggingsside</Link>
         </div>
         
    </nav>
  )
}

export default Navbar