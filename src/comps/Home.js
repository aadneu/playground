import React, { useState, useEffect } from 'react'
import Gjestebok from './Gjestebok/Gjestebok'
import AboutMe from './About me/AboutMe'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Main/Main'


const Home = () => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [editMode,setEditMode] = useState(false)
 
    const [loggedIn,setLoggedIn] = useState(false)
    const LogIn = () => {
        if(user === 'x' && pass === 'x'){
            setLoggedIn(prevMode=> !prevMode)
            setEditMode(true)
        } else {
            alert('feil brukernavn/passord')
        }
        setUser('')
        setPass('')    
        return   
    }
   
    const [hellos, setHellos] = useState([
        {
            text:'Halla, så kul hjemmeside du har laget!!',
            name:'Ådne Underhaug',
            date:'5/2 - 2024',
        },     
    ])
    
    const deleteHello = (deleteThisHello) => {
        const newHellos = hellos.filter(hello => hello !== deleteThisHello)
        setHellos(newHellos)
    }
    
    const addHello = (addThisHello) => {
        const nameAlreadyExists = hellos.some(hello => hello.name === addThisHello.name)
        if(!nameAlreadyExists){
            setHellos((oldHellos) => [...oldHellos, addThisHello])
        } else {alert('Denne personen har allerede skrevet i gjesteboka...')}
    }
    
  return (
    
        <div className='home'>
            <h1>VELKOMMEN TIL ÅDNES HJEMMESIDE FRA 90-TALLET</h1>
            <Navbar 
            setEditMode={setEditMode}
            user={user}
            pass={pass}
            LogIn={LogIn}
            setPass={setPass}
            setUser={setUser}
            loggedIn= {loggedIn}
            setLoggedIn={setLoggedIn}
            />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/om" element={<AboutMe/>}/>
                    <Route path="/skriv" element={<Gjestebok
                    hellos={hellos}
                    addHello={addHello}
                    deleteHello={deleteHello}
                    editMode={editMode}
                    />}/>
                 </Routes>
            </div>
          </div>
   
    
  )
}

export default Home