import Topbar from './components/Topbar/Topbar.js'
import Gamepage from './components/Gamepage/Gamepage.js'
import Mainpage from './components/Mainpage/Mainpage.js'
import Rankingpage from './components/Rankingpage/Rankingpage.js'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Topbar/>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/game" element={<Gamepage />} />
          <Route path="/rank" element={<Rankingpage />} />
        </Routes>
    </Router>
  );
}

export default App;
