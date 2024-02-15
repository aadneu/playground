import React from 'react'



const DisplayHellos = ({hellosApi,  editMode}) => {
  
  const sortedHellos = [...hellosApi.hellos]
  const reversedHellos = sortedHellos.reverse(); 

  const deleteHello = (id) => {
    
    fetch('http://localhost:5000/hellos/' + id, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
      }).then(() => {
       console.log('deleted')
       
    })
}


  return (

    <div className='displayhellos'>{
      reversedHellos.map((hello) => (
            <div className="singlehello" key={hello._id}>
                <p>"{hello.text}"</p>
                <p>{hello.name}</p>
                <p>{hello.date}</p>
               
                {editMode && <button onClick={() => deleteHello(hello._id)}>Slett</button>}
            </div>
          ))}
    </div>
  )
}

export default DisplayHellos