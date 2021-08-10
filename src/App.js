import React from 'react';
import './App.css';

// importing libraries
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/index';

const App = () => {
  return (
    <Router className="App">
      <Home />
    </Router>
  )
}

export default App