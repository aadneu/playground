import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navlinks">
            <Link to="/">Main</Link>
            <Link to="/om">Om</Link>
            <Link to="/skriv">Gjestebok</Link>
        </div>
    </nav>
  )
}

export default Navbar