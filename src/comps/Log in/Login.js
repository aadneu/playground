import React from 'react'


const Login = ({ setEditMode, user, setUser, pass, setPass, loggedIn, setLoggedIn }) => {

  
 
  const LogInUser = () => {
      if(user === 'x' && pass === 'x'){
          setLoggedIn(true)
          setEditMode(true)
      } else {
          alert('feil brukernavn/passord')
      }
      setUser('')
      setPass('')    
      return   
  }

  const loginButton = () => {
    LogInUser()   
  }

  const logoutButton = () => {
    setLoggedIn(false)
    setEditMode(false)
  }

  return (
    <div>
        {!loggedIn && (<div className='loginFields'>
            <input 
              onChange={(e) => setUser(e.target.value)}
              value={user}  
              type="text" placeholder='user' />
            <input 
              onChange={(e) => setPass(e.target.value)}
              value={pass}  
              placeholder='password' type="password" />                
        </div>)
        }
        { !loggedIn ?
        (<button onClick={loginButton} className="smallButton">Logg inn</button>) :
        (<button onClick={logoutButton}>Logg ut</button> ) 
        }

    </div>
  )
}

export default Login