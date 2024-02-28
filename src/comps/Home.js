import React, { useState } from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main/Main'
import AboutMe from './About me/AboutMe'
import Gjestebok from './Gjestebok/Gjestebok'
import ChuckNorris from './ChuckNorris/ChuckNorris'
import Games from './Games/Games'
import Trepaarad from './Games/Trepaarad/Trepaarad'

import Login from './Log in/Login'
import Snake from './Games/Snake/Snake'
const Home = () => {

    const [editMode,setEditMode] = useState(false)
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [loggedIn,setLoggedIn] = useState(false)

    const stateProps = {
        editMode,
        setEditMode,
        user,
        setUser,
        pass,
        setPass,
        loggedIn,
        setLoggedIn,

    }
        
  return (
    
        <div>
            {/* <h1>VELKOMMEN TIL ÅDNES HJEMMESIDE FRA 90-TALLET</h1> */}
            <Navbar setEditMode={setEditMode}/>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/om" element={<AboutMe/>}/>
                    <Route path="/skriv" element={<Gjestebok
                        {...stateProps} />}/>
                    <Route path="/chuck" element={<ChuckNorris/>}/>
                    <Route path="/games" element={<Games/>}/>
                        <Route path="/games/trepaarad" element={<Trepaarad/>}/> 
                        <Route path="/games/Snake" element={<Snake/>}/> 
                    <Route path="/login" element={<Login
                        {...stateProps}/>}/>
                 </Routes>
            </div>
        </div>
   
    
  )
}

export default Home