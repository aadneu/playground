import { useState } from 'react'
import React from 'react'
import DisplayHellos from './DisplayHellos'
import WriteHellos from './WriteHellos'



const Gjestebok = ({editMode, setHellos, hellos}) => {

  

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
    <div className="gjestebok">
            <DisplayHellos hellos={hellos} deleteHello={deleteHello} editMode={editMode}/>
            <WriteHellos addHello={addHello}/>
    </div>
  )
}

export default Gjestebok