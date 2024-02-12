import React, { useState } from 'react'
import Gjestebok from './Gjestebok/Gjestebok'
import AboutMe from './About me/AboutMe'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import Login from './Log in/Login'
import ChuckNorris from './ChuckNorris/ChuckNorris'
import Games from './Games/Games'


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
                       {...stateProps}
                        />}/>
                    <Route path="/chuck" element={<ChuckNorris/>}/>
                        
                            <Route path="/games" element={<Games/>}/>
                       
                    <Route path="/login" element={<Login
                        {...stateProps}/>}/>
                 </Routes>
            </div>
          </div>
   
    
  )
}

export default Home