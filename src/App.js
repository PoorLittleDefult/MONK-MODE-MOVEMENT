import React from 'react';
import './App.css';
import Home from "./Home"
import Vision from "./Vision"
import Buy from "./Buy"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/vision" element={<Vision />} />
         <Route path="/buy" element={ <Buy />} />
        </Routes>
    </div>
  );
}

export default App;
