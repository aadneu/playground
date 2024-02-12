import React, { useState } from 'react'

const WriteHellos = () => {

    const getdate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth()+1
        const day = today.getDate()
        return `${day}/${month} - ${year}`
    }
    
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const date = getdate()
    
    //     if (text !== '' && name !== '' && date !== ''){
    //         const hello = { text, name, date}
    //         addHello(hello) 
    //     }
    //     setText('')
    //     setName('')
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const hello = {text, name, date}
        console.log(hello)
    }

  return (
    <div className='writehellos'>
        <form onSubmit={handleSubmit} className="input-container">
            <h2>Skriv en hilsen...</h2>
            
            <p>Hilsen</p>
            <textarea className="inputhello"
                required
                onChange={(e) => setText(e.target.value)}
                value={text} /><br />
            <p>Navn</p>
            <input className="inputname"
                required
                onChange={(e) => setName(e.target.value)}
                value={name} type="text" /><br />
            
            <button className="inputbutton" >Lagre</button>
        </form>
    </div>
  )
}

export default WriteHellos