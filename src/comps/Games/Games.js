import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GamesNavbar from './GamesNavbar'
import Trepaarad from './Trepaarad/Trepaarad'


const Games = () => {
  return (
    
    <div>
        <h2>Spill</h2>
        <GamesNavbar/>
        <div className='gamescontent'>
            <Routes>
                <Route path="/games/trepaarad" element={<Trepaarad/>}/> 
           </Routes>
        </div>
        
    </div>
  )
}

export default Games