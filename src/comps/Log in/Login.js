import React from 'react'
import { useState } from 'react'

const Login = ({setEditMode}) => {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
 
  const [loggedIn,setLoggedIn] = useState(false)
 
  const LogIn = () => {
      if(user === 'x' && pass === 'x'){
          setLoggedIn(prevMode=> !prevMode)
          setEditMode(true)
      } else {
          alert('feil brukernavn/passord')
      }
      setUser('')
      setPass('')    
      return   
  }

  const loginButton = () => {
    LogIn()   
  }

  const logoutButton = () => {
    setLoggedIn(false)
    setEditMode(false)
  }

  return (
    <div>
        <button onClick={logoutButton}>Logout</button>  
       
        <div className='loginFields'>
            <input 
              onChange={(e) => setUser(e.target.value)}
              value={user}  
              type="text" placeholder='user' />
            <input 
              onChange={(e) => setPass(e.target.value)}
              value={pass}  
              placeholder='password' type="password" />                
        </div>
        <button onClick={loginButton} className="smallButton">Login</button>

    </div>
  )
}

export default Login