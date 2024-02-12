import React from 'react'

const DisplayHellos = ({hellosApi,  editMode}) => {
  
  return (

    <div className='displayhellos'>{
      hellosApi.hellos.map((hello) => (
            <div className="singlehello" key={hello.name}>
                <p>{hello.text}</p>
                <p>{hello.name}</p>
                <p>{hello.date}</p>
                {editMode && <button>Slett</button>}
                {/* {editMode && <button onClick={() => deleteHello(hello)}>Slett</button>} */}
            </div>
          ))}
    </div>
  )
}

export default DisplayHellos