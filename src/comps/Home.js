import React, { useState } from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main/Main'
import ChuckNorris from './ChuckNorris/ChuckNorris'
import Games from './Games/Games'
import Trepaarad from './Games/Trepaarad/Trepaarad'

import Snake from './Games/Snake/Snake'
import Guestbook from './Guestbook/Guestbook'


const Home = () => {


        
  return (
    
        <div>
           
            <Navbar />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/chuck" element={<ChuckNorris/>}/>
                    
               
                   
                    <Route path="/games" element={<Games/>}/>
                        <Route path="/games/trepaarad" element={<Trepaarad/>}/> 
                        <Route path="/games/Snake" element={<Snake/>}/> 
                    
                 </Routes>
            </div>
            {/* <footer>footer</footer> */}
        </div>
   
    
  )
}

export default Home