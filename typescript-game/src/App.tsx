import React from 'react';
import './App.css';
import MainPage from './routes/MainPage.tsx';
import GamePage from './routes/GamePage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoPage from './routes/InfoPage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/game' element={<GamePage/>}/>
        <Route path='/Info' element={<InfoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
