import React, {useState} from 'react'
import DisplayHellos from './DisplayHellos'
import WriteHellos from './WriteHellos'



const Gjestebok = ({hellos, deleteHello, addHello}) => {

 
   
    

 

  return (
    <div className="gjestebok">
            <DisplayHellos hellos={hellos} deleteHello={deleteHello}/>
            <WriteHellos addHello={addHello}/>
    </div>
  )
}

export default Gjestebok