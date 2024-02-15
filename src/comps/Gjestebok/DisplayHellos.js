import React from 'react'

const DisplayHellos = ({hellosApi,  editMode}) => {
  
  const sortedHellos = [...hellosApi.hellos].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });


  return (

    <div className='displayhellos'>{
      sortedHellos.map((hello) => (
            <div className="singlehello" key={hello._id}>
                <p>"{hello.text}"</p>
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