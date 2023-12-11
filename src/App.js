import Topbar from './components/TopBar/TopBar.js'
import GamePage from './components/GamePage/GamePage.js'
import MainPage from './components/MainPage/MainPage.js'
import RankingPage from './components/RankingPage/RankingPage.js'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Topbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/rank" element={<RankingPage />} />
        </Routes>
    </Router>
  );
}

export default App;
