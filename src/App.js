import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HowToPlay from './components/HowToPlay';
import Game from './components/Game';
import PlayerEntry from './components/PlayerEntry';
import './master.css'; // Adjust the path based on where you placed master.css


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/start-game" element={<PlayerEntry />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;