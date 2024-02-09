import React, { useState, useEffect } from 'react'
import Gjestebok from './Gjestebok/Gjestebok'
import AboutMe from './About me/AboutMe'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import Login from './Log in/Login'


const Home = () => {

    const [editMode,setEditMode] = useState(false)
   
    const [hellos, setHellos] = useState([
        {
            text:'Halla, så kul hjemmeside du har laget!!',
            name:'Ådne Underhaug',
            date:'5/2 - 2024',
        },     
    ])
    
 
    
  return (
    
        <div className='home'>
            <h1>VELKOMMEN TIL ÅDNES HJEMMESIDE FRA 90-TALLET</h1>
            <Navbar setEditMode={setEditMode}/>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/om" element={<AboutMe/>}/>
                    <Route path="/skriv" element={<Gjestebok
                        hellos={hellos}
                        setHellos={setHellos}
                        editMode={editMode}
                        />}/>
                    <Route path="/login" element={<Login
                        setEditMode={setEditMode}/>}/>
                 </Routes>
            </div>
          </div>
   
    
  )
}

export default Home