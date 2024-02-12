import React from 'react'
import {Link} from 'react-router-dom'

const GamesNavbar = () => {
  return (
    <nav className='gamesnavbar'>
        <div className='navlinks'>
           
            <Link to="/games/trepaarad">3 på rad</Link>
           
        </div>
    </nav>
  )
}

export default GamesNavbar