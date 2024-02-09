import React from 'react'


export const DisplayHellos = ({hellos, deleteHello, editMode}) => {
  
  return (
    <div className="displayhellos">
        {hellos.map((hello) => (
            <div className="singlehello" key={hello.name}>
                <h2>{hello.title}</h2> 
                <p>{hello.text}</p>
                <p>{hello.name}</p>
                <p>{hello.date}</p>
                {editMode && <button onClick={() => deleteHello(hello)}>Slett</button>}
            </div>
        ))}
        
    </div>
    
  )
}

export default DisplayHellos