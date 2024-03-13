import React, { useEffect } from 'react'
import $ from "jquery";
import jQuery from 'jquery';
import { useState } from 'react';


const Guestbook = () => {

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState();
  
  useEffect(()=>{
    fetch("http://localhost/playgroundserver/guestbook.php")
    .then(response => response.json())
    .then(data => setMessages(data))
    .catch(error => console.error('error fetching msgs', error))
  }, [])

  const clearForm = () =>{
    setName('');
    setText('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      text: text,
    };

    fetch("http://localhost/playgroundserver/guestbook.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.success){
        console.log('msg success')
      } else {
        console.error('error adding msg', data.error)
      }
    })
    .catch((err) => console.error("error:", err))
    .finally(() => clearForm())
   
  };

  const hardCodeMessage = () => {
    const mld = [{id: 2, text: 'Demonstrasjon av gjestebok uten database', name: 'Sjefen'},{id: 1, text: 'Lorem ipsum etc.', name: 'admin'}]
    return (
      mld.map((message) => (
        <div key={message.id} className="card my-3">
            
            <div className="card-header">
              #{message.id}
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{message.text}</p>
                <footer className="blockquote-footer"><cite title="Source Title">{message.name}</cite></footer>
              </blockquote>
            </div>
          </div>
      ))
      
    )
  }

  return (
    <div className='container text-center'>
      
      <div className="row justify-content-center text-center"> 

        <div className="col-md-5 py-3 mx-1 order-2 order-md-1"> 
          {messages ? messages.map((msg) => (
          <div key={msg.id} className="card my-3">
            
            <div className="card-header">
              #{msg.id}
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{msg.text}</p>
                <footer className="blockquote-footer"><cite title="Source Title">{msg.name}</cite></footer>
              </blockquote>
            </div>
          </div>)) : hardCodeMessage() }
        </div>

        <div className="col-md-5 my-4 py-2 mx-1 order-1 order-md-2"> 
          <div className="card py-1">
          <div className="card-body">
            <h5 className="card-title">Skriv en hilsen...</h5>
            
            <form
            className="card-text"
            onSubmit={(event) => handleSubmit(event)}
            >
              <div className="form-group">
                  <label htmlFor="text">Si noe (fint)</label>
                  <textarea value={text} onChange={(e) => setText(e.target.value)} className="form-control" required id="text" rows="3" placeholder="ex. Hello there "></textarea>
              </div>
              <div className="form-group">
                  <label htmlFor="name">Ditt navn</label>
                  <input value={name}  onChange={(e) => setName(e.target.value)} className="form-control" required id="name"  placeholder="ex. General Kenobi"/>
              </div>
              <button type="submit" className="btn btn-success my-3">Send inn</button>
            </form>

          </div>
        </div>

        </div>

      </div>
    </div>
  )
}

export default Guestbook