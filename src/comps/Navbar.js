import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';


const Navbar = ({setUser,user,setPass,pass, LogIn, loggedIn, setLoggedIn, setEditMode}) => {

 
  const [showLoginDiv, setShowLoginDiv] = useState(false)
  const handleLoginButton = () => {
    setShowLoginDiv(prevMode => !prevMode)
  }

  const handleClick = () => {
    LogIn()
  
      setShowLoginDiv(false)
    
  }
  const logoutButton = () => {
    setLoggedIn(false)
    setShowLoginDiv(true)
    setEditMode(false)
   
  }

  return (
    <nav className="navbar">
        <div className="navlinks">
            <Link to="/">Main</Link>
            <Link to="/om">Om</Link>
            <Link to="/skriv">Gjestebok</Link>
           <span>{loggedIn ? (<button onClick={logoutButton}>Logout</button>): <button onClick={handleLoginButton}>Login</button> }</span>
          {showLoginDiv && (<div className='loginFields'>
                            <input 
                             onChange={(e) => setUser(e.target.value)}
                             value={user}  
                            type="text" placeholder='user' />
                            <input 
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}  
                            placeholder='password' type="password" />
                            <button onClick={handleClick} className="smallButton">GO</button>
                          </div>)}

        </div>
    </nav>
  )
}

export default Navbar