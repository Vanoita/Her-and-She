import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Oppurtunities from './components/Oppurtunities';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/oppurtunity">
          <Oppurtunities />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
