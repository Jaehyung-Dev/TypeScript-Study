import React from 'react';
import './App.css';
import MainPage from './routes/MainPage.tsx';
import GamePage from './routes/GamePage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/game' element={<GamePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
