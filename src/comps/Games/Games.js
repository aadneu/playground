import React from 'react'
import {  Link } from 'react-router-dom'



const Games = () => {
  return (
      <div>
         <div className="navlinks">
          <Link to="/games/trepaarad">3 på rad</Link>
          {/* <Link to="/games/Game2">Game 2</Link> */}
          <Link to="/games/Snake">Snake</Link>
         </div>
         <div className='gamescontent'>
       
        </div>

      </div>
        
   
  )
}

export default Games