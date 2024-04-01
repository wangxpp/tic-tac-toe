import React from 'react';
import { Link } from 'react-router-dom';
import '../master.css'; // Adjust the path based on where you placed master.css

function HowToPlay() {
  return (
    <div className="how-to-play">
      <h1>How to Play Tic Tac Toe</h1>
      <p>Tic Tac Toe is a two-player game where each player takes turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.</p>
      <Link to="/" className="button-style">Back to Home</Link>
    </div>
  );
}

export default HowToPlay;
