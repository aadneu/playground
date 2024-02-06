import React, { useState } from 'react'
import  DisplayHellos from './DisplayHellos'
import WriteHellos from './WriteHellos'

const Home = () => {


    const [hellos, setHellos] = useState([
        {
           
            text:'Halla, så kul hjemmeside du har laget!!',
            name:'Ådne Underhaug',
            date:'2024-02-05',
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
        }
        
    }

  return (
    <div className='home'>
        <h1>VELKOMMEN TIL ÅDNES HJEMMESIDE FRA 90-TALLET</h1>
        <div className="content">
            <DisplayHellos hellos={hellos} deleteHello={deleteHello}/>
            <WriteHellos addHello={addHello}/>
        </div>
    </div>
  )
}

export default Home