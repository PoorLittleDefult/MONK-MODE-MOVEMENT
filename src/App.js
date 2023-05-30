import React from 'react';
import './App.css';
import Home from "./Home"
import Contact from "./Contact"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/Contact" element={ <Contact />} />
        </Routes>
    </div>
  );
}

export default App;
