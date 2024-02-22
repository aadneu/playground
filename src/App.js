import './App.css';
import './comps/Games/Game2/game2.css'
import './comps/Games/Snake/Snake.css'

import Home from './comps/Home'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <Router>
        <Home/> 
      </Router>
    </div>


    
  );
}

export default App;
