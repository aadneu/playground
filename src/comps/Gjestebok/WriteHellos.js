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
    

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {text, name, date}
        fetch('http://localhost:5000/hellos', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(()=> {
            console.log('data sent')
            console.log(data)
            setText('')
            setName('')

        }).catch(err => {
            console.error('error sending data', err)
        })
        
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