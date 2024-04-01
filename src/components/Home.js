import React from 'react';
import { Link } from 'react-router-dom';
import '../master.css'; // Adjust the path based on where you placed master.css

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Tic Tac Toe!</h1>
      <div className="navigation-links">
        <Link to="/start-game" className="button-style">Start Game</Link>
        <Link to="/how-to-play" className="button-style">How to Play</Link>
      </div>
    </div>
  );
}

export default Home;
