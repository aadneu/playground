//css for games
import './comps/Games/Games.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { HashRouter as Router} from 'react-router-dom'
//to alternative hjemmesider
import Home from './comps/Home'











function App() {
  return (

  <div>
    <Router>
       <Home/> 
    
    </Router>
  </div>


    
  );
}

export default App;
