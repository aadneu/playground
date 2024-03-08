import React from 'react'

import { useState } from 'react';

const Guestbook = () => {

  const [result, setResult] = useState('') ;
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: serialize(),
      success(data) {
        setResult(data)
      },

    });
  }
  
   

  return (
    <div className='container text-center'>
      <h2>Skriv en hilsen...</h2>
      <div className="row justify-content-center text-center"> 

        <div className="col-5 py-3 mx-1 "> 
          <h3>hilsener kommer her</h3>
          <h3>{result}</h3>
          <p>text: {text}</p>
          <p>navn: {name}</p>
        </div>

        <div className="col-5 mx-1 "> 
          <form
            action="http://localhost:8000/server.php"
            method="post"
            onSubmit={(event) => handleSubmit(event)}
          >
              <div className="form-group">
                  <label for="text">Si noe (fint)</label>
                  <textarea value={text} onChange={(e) => setText(e.target.value)} class="form-control" required id="text" rows="3" placeholder="ex. Hello there "></textarea>
              </div>
              <div className="form-group">
                  <label for="name">Ditt navn</label>
                  <input value={name}  onChange={(e) => setName(e.target.value)} class="form-control" required id="name"  placeholder="ex. General Kenobi"/>
              </div>
              <button type="submit" className="btn btn-success my-3">Send inn</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Guestbook