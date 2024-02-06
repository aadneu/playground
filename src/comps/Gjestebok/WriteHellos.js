import React, { useState } from 'react'

const WriteHellos = ({addHello}) => {

    const getdate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth()+1
        const day = today.getDate()
        return `${day}/${month} - ${year}`
    }
    
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState(getdate())
    

    const handleClick = () => {
        

        if (text !== '' && name !== '' && date !== ''){
            const hello = { text, name, date}
            addHello(hello) 
        } else {
            alert('Fyll i alle feltene.')
        }
        setText('')
        setName('')
        
    }
    

  return (
    <div className='writehellos'>
        <div className="input-container">
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
            
            <button className="inputbutton" onClick={handleClick}>Lagre</button>
        </div>
    </div>
  )
}

export default WriteHellos