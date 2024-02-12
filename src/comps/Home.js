import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main/Main'
import AboutMe from './About me/AboutMe'
import Gjestebok from './Gjestebok/Gjestebok'
import ChuckNorris from './ChuckNorris/ChuckNorris'
import Games from './Games/Games'
import Trepaarad from './Games/Trepaarad/Trepaarad'
import Game2 from './Games/Game2/Game2'
import Login from './Log in/Login'


const Home = () => {

    const [editMode,setEditMode] = useState(false)
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [loggedIn,setLoggedIn] = useState(false)
    const [hellos, setHellos] = useState([
        {
            text:'Halla, så kul hjemmeside du har laget!!',
            name:'T-man',
            date:'5/2 - 2024',
        },     
    ])

    const stateProps = {
        editMode,
        setEditMode,
        user,
        setUser,
        pass,
        setPass,
        loggedIn,
        setLoggedIn,
        hellos,
        setHellos,
    }
        
  return (
    
        <div className='home'>
            <h1>VELKOMMEN TIL ÅDNES HJEMMESIDE FRA 90-TALLET</h1>
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
                        <Route path="/games/Game2" element={<Game2/>}/> 
                    <Route path="/login" element={<Login
                        {...stateProps}/>}/>
                    
                 </Routes>
            </div>
          </div>
   
    
  )
}

export default Home