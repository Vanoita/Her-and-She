import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Oppurtunities from './components/Oppurtunities';


function App() {
  return (

    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/oppurtunity" element={<Oppurtunities />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
