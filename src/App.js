import React from 'react';
import './App.css';

// importing libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App