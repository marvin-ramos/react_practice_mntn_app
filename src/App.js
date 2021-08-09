import React from 'react';
import './App.css';

//importing our components
import Navbar from './components/Navbar';

// importing libraries
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router className="App">
      <Navbar />
    </Router>
  )
}

export default App