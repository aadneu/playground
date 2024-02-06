import './App.css';
import Home from './comps/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
