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
            <Link to="/login">Logg inn</Link>
         </div>
         
    </nav>
  )
}

export default Navbar