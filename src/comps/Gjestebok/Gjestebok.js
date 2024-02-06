import React from 'react'
import DisplayHellos from './DisplayHellos'
import WriteHellos from './WriteHellos'



const Gjestebok = ({hellos, deleteHello, addHello, editMode}) => {


  return (
    <div className="gjestebok">
            <DisplayHellos hellos={hellos} deleteHello={deleteHello} editMode={editMode}/>
            <WriteHellos addHello={addHello}/>
    </div>
  )
}

export default Gjestebok